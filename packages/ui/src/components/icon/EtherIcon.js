import { LitElement, html, css } from 'lit';
import { base } from '../../styles/base.js';
import { styles } from './styles.js';

/**
 * An element used to display an icon from Ether Icons.
 * 
 * @tagname eu-icon
 * @slot - Name of the icon.
 */
export class EtherIcon extends LitElement {
    static properties = {
        _name: { state: true }
    };

    static styles = [base, styles];

    constructor() {
        super();
        this._name = '';
    }

    // disable shadow dom so user just has to link icons in head
    createRenderRoot() {
        return this;
    }

    // get inner text before lit overwrites children
    connectedCallback() {
        super.connectedCallback();
        if (!this._name) {
            this._name = this.textContent.trim();
            this.textContent = '';
        }
    }

    render() {
        return html`
            <i class=${this._name ? `ei ei-${this._name}` : ''} aria-hidden="true"></i>
        `;
    }
}