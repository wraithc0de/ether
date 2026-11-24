import { LitElement, html, css } from 'lit';

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

    static styles = [
        css`
            :host {
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: center;
                height: auto;
            }
            :host([orientation="vertical"]) {
                height: 100%;
                width: fit-content;
            }
            .wrapper {
                width: var(--_size);
                display: flex;
                align-items: center;
                justify-content: center;
                
                &.vertical {
                    height: var(--_size);
                    flex-direction: column;
                    .label {
                        padding: 0.75rem 0;
                    }
                }
                hr {
                    border: none;
                    width: var(--_size, 80%);
                    height: 1px;
                    background: var(--eu-separation);
                    margin: 1rem 0;
                    &.vertical {
                        width: 1px;
                        height: var(--_size, 80%);
                        margin: 0 1rem;
                        &.dashed {
                            border-top: none;
                            border-left: 1px dashed var(--eu-separation);
                        }
                    }
                    &.dashed {
                        background: none;
                        border-top: 1px dashed var(--eu-separation);
                    }
                }
                .label {
                    color: var(--eu-text-muted);
                    padding: 0 0.75rem;
                    white-space: nowrap;
                    font-size: 0.em;
                }
            }
        `
    ];

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