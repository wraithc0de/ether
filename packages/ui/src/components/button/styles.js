import { css } from 'lit';

export const styles = css`
    :host {
        display: flex;
        width: var(--_width);
        align-items: center;
        justify-content: center;
        gap: var(--_gap);
        cursor: pointer;
        border: var(--_border);
        border-radius: var(--_radius);
        padding: var(--_padding);
        background-color: var(--_bg-base);
        color: var(--_color);
        transition: background-color var(--_transition-length) ease;
        margin: var(--_margin);

        --_bg-base: var(--eu-btn-bg, var(--eu-primary));
        --_bg-hover: color-mix(in oklch, var(--_bg-base) 85%, var(--_color));
        --_color: var(--eu-btn-color, var(--eu-text));
        --_gap: var(--eu-btn-gap, var(--eu-space-2));
        --_border: var(--eu-btn-border, var(--_border-thickness) var(--_border-style) var(--_border-color));
        --_border-color: var(--eu-btn-border-color, var(--_bg-base));
        --_border-thickness: var(--eu-btn-border-thickness, 1px);
        --_border-style: var(--eu-btn-border-style, solid);
        --_radius: var(--eu-btn-radius, var(--eu-radius-sm));
        --_padding: var(--eu-btn-padding, var(--eu-space-3) var(--eu-space-4));
        --_margin: var(--eu-btn-margin, var(--eu-space-2));
        --_width: var(--eu-btn-width, fit-content);
        --_transition-length: var(--eu-btn-transition-length, var(--eu-transition));
    }

    :host(:hover) {
        background-color: var(--_bg-hover);
    }

    /* ALIGN attr */
    :host([align="left"]) {justify-content: flex-start;}
    :host([align="right"]) {justify-content: flex-end;}

    /* TYPE attr */
    :host(:not([type])), :host([type="primary"]) {
        --_bg-base: var(--eu-primary);
        --_color: var(--eu-bg);
    }
    
    :host([type="secondary"]) {
        --_bg-base: var(--eu-secondary);
    }

    :host([type="ghost"]) {
        --_bg-base: transparent;
        --_border-color: var(--eu-separation);
        --_border-style: dashed;
    }

    :host([type="subtle"]) {
        --_bg-base: transparent;
    }

    :host([type="flush"]) {
        --_bg-base: transparent;
        --_margin: 0;
        --_radius: 0;
        --_width: 100%;
    }
`;