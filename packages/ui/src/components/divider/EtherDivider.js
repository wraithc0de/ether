import { LitElement, html, css } from 'lit';

export class EtherDivider extends LitElement {
    static properties = {
        orientation: { type: String },
        size: { type: String },
        dashed: { type: Boolean }
    }

    static styles = [
        css`
            :host {
                display: flex;
                width: 100%;
                height: auto;
                align-items: center;
                justify-content: center;
            }
            :host([orientation="vertical"]) {
                display: flex;
                height: 100%;
                width: fit-content;
            }
            hr {
                border: none;
                width: var(--_size, 80%);
                height: 1px;
                background: var(--eu-separation);
                margin: 1rem 0;
            }
            hr.vertical {
                width: 1px;
                height: var(--_size, 80%);
                margin: 0 1rem;
            }
            hr.dashed {
                background: none;
                border-top: 1px dashed var(--eu-separation);
            }
            hr.vertical.dashed {
                border-top: none;
                border-left: 1px dashed var(--eu-separation);
            }
        `
    ];

    constructor() {
        super();
        this.orientation = 'horizontal';
        this.size = '80%';
        this.dashed = false;
    }

    render() {
        const s = /^\d+$/.test(this.size) ? `${this.size}%` : this.size;
        const classes = [
            this.dashed ? 'dashed' : '',
            this.orientation === 'vertical' ? 'vertical' : ''
        ].filter(Boolean).join(' ');

        return html`<hr class="${classes}" style="--_size: ${s}">`;
    }
}