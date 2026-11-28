import { LitElement, html, css } from 'lit';
import { base } from '../../styles/base.js';
import { styles } from './styles.js';

/**
 * A linear set of two or more mutually exclusive options with an active indicator.
 * 
 * @tagname eu-segmented-control
 * 
 * @cssprop [--eu-segctrl-bg=transparent] - Background color of the segmented control container.
 * @cssprop [--eu-segctrl-color=var(--eu-text)] - Text color of unselected options and background color of the active indicator.
 * @cssprop [--eu-segctrl-color-active=var(--eu-bg)] - Text color of the currently selected option.
 * @cssprop [--eu-segctrl-border=1px solid var(--eu-separation)] - Shorthand border for the container.
 * @cssprop [--eu-segctrl-border-thickness=1px] - Border width of the container.
 * @cssprop [--eu-segctrl-border-style=solid] - Border style of the container.
 * @cssprop [--eu-segctrl-border-color=var(--eu-separation)] - Border color of the container.
 * @cssprop [--eu-segctrl-radius=var(--eu-radius-md)] - Border radius for the container, options, and active indicator.
 * @cssprop [--eu-segctrl-padding-ext=var(--eu-space-2)] - Outer padding between the container border and the options.
 * @cssprop [--eu-segctrl-padding-int=var(--eu-space-2) var(--eu-space-3)] - Inner padding applied to each slotted button.
 * @cssprop [--eu-segctrl-gap=var(--eu-space-1)] - Spacing between individual options.
 * @slot - Buttons/options.
 * @fires {CustomEvent<{ value: string, index: number, button: HTMLButtonElement }>} eu-change - Fired when the selected option changes.
 */
export class EtherSegmentedControl extends LitElement {
    static properties = {
        /**
         * Appearance of the indicator.
         */
        type: { type: String, reflect: true },
        /**
         * The index of the default option.
         */
        default: { type: String },
        value: { type: String, reflect: true },
        /** @ignore */
        _selectedIndex: { state: true }
    };

    static styles = [base, styles];

    constructor() {
        super();
        this.type = 'default';
        this.default = '0';
        this.value = undefined;
        this._selectedIndex = 0;
        this._initialized = false;

        this._resizeObserver = new ResizeObserver(() => {
            this._updateIndicator();
        });
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this._resizeObserver.disconnect();
    }

    get _buttons() {
        const slot = this.renderRoot?.querySelector('slot');
        return slot ? slot.assignedElements({ flatten: true }).filter(el => el.tagName === 'BUTTON') : [];
    }

    get _indicator() {
        return this.renderRoot?.querySelector('.indicator');
    }
    // helper to get value, falls back to index
    _getButtonValue(btn, i) {
        return btn.getAttribute('value') ?? String(i);
    }

    _resolveIndex(target) {
        if (target === undefined || target === null || !this._buttons.length) return -1;
        // try matching by explicit value attribute first
        const byValue = this._buttons.findIndex(btn => btn.getAttribute('value') === String(target));
        if (byValue !== -1) return byValue;
        // fallback if target is valid index
        const num = Number(target);
        if (!Number.isNaN(num) && Number.isInteger(num) && this._buttons[num]) return num;
        // if nah dip
        return -1;
    }

    willUpdate(changedProperties) {
        // if value changed externally (e.g. ctrl.value = 'light' or initial html attr)
        if (changedProperties.has('value') && this.value !== undefined) {
            const i = this._resolveIndex(this.value);
            if (i !== -1 && i !== this._selectedIndex) {
                this._selectedIndex = i;
                this._syncState();
            }
        } // fallback to default index if no value was provided
        else if (changedProperties.has('default') && this.value === undefined) {
            const i = this._resolveIndex(this.default);
            if (i !== -1) this._selectedIndex = i;
        }
    }

    _handleSlotChange() {
        this._resizeObserver.disconnect();
        this._buttons.forEach((btn, i) => {
            btn.setAttribute('role', 'radio');
            btn.onclick = () => this._selectIndex(i);
            this._resizeObserver.observe(btn);
        });
        // resolve initial index from value first, otherwise default
        const initialTarget = this.value !== undefined ? this.value : this.default;
        const resolved = this._resolveIndex(initialTarget);
        if (resolved !== -1) this._selectedIndex = resolved;
        // make sure this.value stays accurate on initial load
        if (this._buttons[this._selectedIndex] && this.value === undefined) {
            this.value = this._getButtonValue(this._buttons[this._selectedIndex], this._selectedIndex);
        }

        this._syncState();
    }

    _selectIndex(i) {
        if (i == this._selectedIndex || !this._buttons[i]) return;

        this._selectedIndex = i;
        this.value = this._getButtonValue(this._buttons[i], i);
        this._syncState();
        this.dispatchEvent(
            new CustomEvent('eu-change', {
                detail: {
                    value: this.value,
                    index: i,
                    button: this._buttons[i]
                },
                bubbles: true,
                composed: true
            })
        );
    }

    _syncState() {
        const buttons = this._buttons;
        if (!buttons.length) return;

        buttons.forEach((btn, i) => {
            const isSelected = i === this._selectedIndex;
            btn.setAttribute('aria-checked', String(isSelected));
            btn.tabIndex = isSelected ? 0 : -1;
        });
        requestAnimationFrame(() => this._updateIndicator());
    }

    _updateIndicator() {
        const activeBtn = this._buttons[this._selectedIndex];
        if (activeBtn && this._indicator) {
            if (!this._initialized) this._indicator.style.transition = 'none';
            this._indicator.style.width = `${activeBtn.offsetWidth}px`;
            this._indicator.style.transform = `translateX(${activeBtn.offsetLeft}px)`;
            if (!this._initialized) {
                this._indicator.offsetHeight;
                this._indicator.style.transition = '';
                this._initialized = true;
            }
        }
    }

    render() {
        return html`
            <div class="track" role="radiogroup">
                <div class="indicator"></div>
                <slot @slotchange=${this._handleSlotChange}></slot>
            </div>
        `;
    }
}