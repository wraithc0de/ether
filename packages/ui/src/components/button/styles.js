import { css } from 'lit';

export const styles = css`
    :host {
        display: flex;
        width: fit-content;
        align-items: center;
        justify-content: center;
        gap: var(--_gap);
        cursor: pointer;
        border-radius: var(--_radius);
        padding: var(--_padding);
        background: var(--_bg-base);
        transition: background-color var(--_transition) ease;

        --_bg-hover: color-mix(in oklch, var(--eu-text) 10%, var(--_bg-base));
        --_bg-base: var(--eu-primary);
        --_gap: var(--eu-space-2);
        --_border: var(--_bg-base);
        --_border-thickness: 1px;
        --_radius: var(--eu-radius-sm);
        --_padding: var(--eu-space-3) var(--eu-space-4);
        --_transition: var(--eu-transition);
    }

    :host(:hover) {
        background-color: var(--_bg-hover);
    }

    /* ALIGN attr */
    :host([align="left"]) {justify-content: flex-start;}
    :host([align="right"]) {justify-content: flex-end;}

    /* TYPE attr */
    :host([type="secondary"]) {
        background-color: transparent;
        border: var(--_border-thickness) solid var(--_border);

        &:host(:hover) {
            background-color: var(--_bg-base);
        }
    }

    :host([type="ghost"]) {
        --_border: var(--eu-separation);
        background-color: transparent;
        border: var(--_border-thickness) dashed var(--_border);
    }

    :host([type="subtle"]) {
        background-color: transparent;

        &:host(:hover) {
            
        }
    }

    :host([type="flush"]) {
        background-color: transparent;
        margin: 0;

        &:host(:hover) {

        }
    }
`;