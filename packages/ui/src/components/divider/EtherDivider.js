import { LitElement, html, css } from 'lit';

export class EtherDivider extends LitElement {
    static styles = [
        css`
            :host {display: block; width: 100%;}
            hr {
                border: none;
                width: 80%;
                height: 1px;
                background: var(--eu-separation);
                margin: 1rem auto;
            }
        `
    ];

    render() {
        return html`<hr>`;
    }
}

customElements.define('ether-divider', EtherDivider);