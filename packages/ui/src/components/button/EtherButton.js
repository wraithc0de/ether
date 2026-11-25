import { LitElement, html, css } from 'lit';
import { base } from '../../styles/base.js';
import { styles } from './styles.js';

/**
 * A visual separator line used to divide content horizontally or vertically.
 * 
 * @tagname eu-button
 */

export class EtherButton extends LitElement {
    static properties = {
        /**
         * The type of button.
         * @type {'primary' | 'secondary' | 'ghost' | 'flush'}
         */
        type: { type: String },
        /**
         * Where the button content is anchored.
         * @type {'left' | 'center' | 'right'}
         */
        align: { type: String }
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