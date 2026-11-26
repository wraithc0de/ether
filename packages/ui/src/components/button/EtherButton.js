import { LitElement, html, css } from 'lit';
import { base } from '../../styles/base.js';
import { styles } from './styles.js';

/**
 * A customizable button element.
 * 
 * @tagname eu-button
 * 
 * @cssprop [--eu-btn-bg=var(--eu-primary)] - Background color of the button.
 * @cssprop [--eu-btn-color=var(--eu-text)] - Text and icon color.
 * @cssprop [--eu-btn-gap=var(--eu-space-2)] - Space between slotted items (e.g., an icon and text).
 * @cssprop [--eu-btn-border=1px solid var(--eu-btn-border-color)] - Shorthand border styling for the button.
 * @cssprop [--eu-btn-border-color=var(--eu-btn-bg)] - Border color of the button.
 * @cssprop [--eu-btn-border-thickness=1px] - Border width of the button.
 * @cssprop [--eu-btn-border-style=solid] - Border line style (e.g., solid, dashed, none).
 * @cssprop [--eu-btn-radius=var(--eu-radius-sm)] - Corner border radius of the button.
 * @cssprop [--eu-btn-padding=var(--eu-space-3) var(--eu-space-4)] - Internal padding around the button content.
 * @cssprop [--eu-btn-margin=var(--eu-space-2)] - Outer margin around the button host.
 * @cssprop [--eu-btn-width=fit-content] - Width of the button.
 * @cssprop [--eu-btn-transition-length=var(--eu-transition)] - Duration of the hover background transition.
 */

export class EtherButton extends LitElement {
    static properties = {
        /**
         * The type of button.
         * @type {'primary' | 'secondary' | 'ghost' | 'subtle' | 'flush'}
         */
        type: { type: String, reflect: true },
        /**
         * Where the button content is anchored.
         * @type {'start' | 'center' | 'end' | 'between'}
         */
        align: { type: String, reflect: true }
    }

    static styles = [base, styles];

    constructor() {
        super();
        this.type = 'primary';
        this.align = 'center';
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
}