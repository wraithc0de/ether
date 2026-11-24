import { LitElement, html, css } from 'lit';

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

    constructor() {
        super();
        this._name = '';
    }

    // Disable Shadow DOM so <head> CSS works automatically
    createRenderRoot() {
        return this;
    }

    // Capture the inner text before Lit overwrites the element's children
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