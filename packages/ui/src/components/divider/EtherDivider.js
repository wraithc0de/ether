import { LitElement, html, css } from 'lit';
import { base } from '../../styles/base.js';
import { styles } from './styles.js';

/**
 * A visual separator line used to divide content horizontally or vertically.
 * 
 * @tagname eu-divider
 * @slot - Optional text displayed in the center of the divider.
 * 
 * @cssprop [--eu-dv-line-color=var(--eu-separation)] - Color of the divider line.
 * @cssprop [--eu-dv-line-thickness=1px] - Thickness of the divider line.
 * @cssprop [--eu-dv-text-color=var(--eu-text-muted)] - Color of the optional label text.
 * @cssprop [--eu-dv-text-size=var(--eu-text-md)] - Font size of the optional label text.
 * @cssprop [--eu-dv-length=80%] - Width (horizontal) or height (vertical) of the divider wrapper.
 * @cssprop [--eu-dv-margin=var(--eu-space-5)] - Outer spacing perpendicular to the divider line.
 */

export class EtherDivider extends LitElement {
    static properties = {
        /**
         * Direction of the divider line.
         * @type {'horizontal' | 'vertical'}
         */
        orientation: { type: String },
        /**
         * Renders the divider as a dashed line instead of solid.
         * @type {boolean}
         */
        dashed: { type: Boolean },
        /** @internal */
        _hasLabel: { state: true}
    }

    static styles = [base, styles];

    constructor() {
        super();
        this.orientation = 'horizontal';
        this.size = '80%';
        this.dashed = false;
        this._hasLabel = false;
    }

    _onSlotChange(e) {
        const nodes = e.target.assignedNodes({ flatten: true });
        this._hasLabel = nodes.some((n) => n.textContent.trim().length > 0 || n.nodeType === Node.ELEMENT_NODE);
    }

    render() {
        const classes = [
            this.dashed ? 'dashed' : '',
            this.orientation === 'vertical' ? 'vertical' : ''
        ].filter(Boolean).join(' ');

        return html`
            <div class="wrapper ${this.orientation}">
                <hr part="base" class="${classes}">
                <span class="label" ?hidden=${!this._hasLabel}>
                    <slot @slotchange=${this._onSlotChange}></slot>
                </span>
                <hr part="base" class="${classes}" ?hidden=${!this._hasLabel}>
            </div>
        `;
    }
}