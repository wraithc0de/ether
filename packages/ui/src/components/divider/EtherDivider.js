import { LitElement, html, css } from 'lit';
import { base } from '../../styles/base.js';
import { styles } from './styles.js';

/**
 * A visual separator line used to divide content horizontally or vertically.
 * 
 * @tagname eu-divider
 * @slot - Optional text displayed in the center of the divider.
 * @cssprop [--eu-separation] - Color of the divider line.
 * @cssprop [--eu-text-muted] - Color of the optional text.
 * @csspart base - The internal `<hr>` element.
 */

export class EtherDivider extends LitElement {
    static properties = {
        /**
         * Direction of the divider line.
         * @type {'horizontal' | 'vertical'}
         */
        orientation: { type: String },
        /**
         * Length of the divider (e.g., `"80%"`, `"200px"`, or `"50"`). A number with no unit is interpreted as a percentage.
         * @type {string}
         */
        size: { type: String },
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
        const s = /^\d+$/.test(this.size) ? `${this.size}%` : this.size;
        const classes = [
            this.dashed ? 'dashed' : '',
            this.orientation === 'vertical' ? 'vertical' : ''
        ].filter(Boolean).join(' ');

        return html`
            <div class="wrapper ${this.orientation}" style="--_size: ${s}">
                <hr part="base" class="${classes}">
                <span class="label" ?hidden=${!this._hasLabel}>
                    <slot @slotchange=${this._onSlotChange}></slot>
                </span>
                <hr part="base" class="${classes}" ?hidden=${!this._hasLabel}>
            </div>
        `;
    }
}