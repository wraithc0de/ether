import { css } from 'lit';

export const styles = css`
    :host {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--_gap);
        cursor: pointer;
        border-radius: var(--_radius);
        
        background: var(--_bg-base);

        --_bg-hover: color-mix(in srgb, var(--eu-text) 10%, var(--_bg-base));
        --_bg-base: var(--eu-primary);
        --_gap: var(--eu-space-2);
        --_border: var(--_bg-base);
        --_border-thickness: 1px;
        --_radius: var(--eu-radius-sm);
    }

    :host(:hover) {
        background: var(--_bg-hover);
    }

    /* ALIGN attr */
    :host([align="left"]) {justify-content: flex-start;}
    :host([align="right"]) {justify-content: flex-end;}

    /* TYPE attr */
    :host([type="secondary"]) {
        background: transparent;
        border: var(--_border-thickness) solid var(--_border);

        &:host(:hover) {
            background: var(--_bg-base);
        }
    }

    :host([type="ghost"]) {
        --_border: var(--eu-separation);
        background: transparent;
        border: var(--_border-thickness) dashed var(--_border);
    }

    :host([type="subtle"]) {
        background: transparent;

        &:host(:hover) {
            
        }
    }

    :host([type="flush"]) {
        background: transparent;
        margin: 0;

        &:host(:hover) {

        }
    }
`;