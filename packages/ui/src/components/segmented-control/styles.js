import { css } from 'lit';

export const styles = css`
    :host {
        display: inline-flex;
        position: relative;
        background: var(--_bg);
        border: var(--_border);
        border-radius: var(--_radius);

        --_bg: var(--eu-segctrl-bg, transparent);
        --_bg-hover: color-mix(in oklch, var(--_bg) 85%, var(--_color));
        --_color: var(--eu-segctrl-color, var(--eu-text));
        --_color-active: var(--eu-segctrl-color-active, var(--eu-bg));
        --_border: var(--eu-segctrl-border, var(--_border-thickness) var(--_border-style) var(--_border-color));
        --_border-thickness: var(--eu-segctrl-border-thickness, 1px);
        --_border-style: var(--eu-segctrl-border-style, solid);
        --_border-color: var(--eu-segctrl-border-color, var(--eu-separation));
        --_radius: var(--eu-segctrl-radius, var(--eu-radius-md));
        --_padding-ext: var(--eu-segctrl-padding-ext, var(--eu-space-2));
        --_padding-int: var(--eu-segctrl-padding-int, var(--eu-space-2) var(--eu-space-3));
        --_gap: var(--eu-segctrl-gap, var(--eu-space-1));
    }

    .track {
        display: flex;
        gap: var(--_gap);
        padding: var(--_padding-ext);
        position: relative;
    }

    ::slotted(button) {
        position: relative;
        z-index: 1;
        border: none;
        background-color: transparent;
        border-radius: var(--_radius);
        padding: var(--_padding-int);
        cursor: pointer;
        transition: background-color var(--eu-transition) ease, color var(--eu-transition ease);
    }

    ::slotted(button[aria-checked="false"]:hover) {
        background-color: var(--_bg-hover);
    }

    ::slotted(button[aria-checked="true"]) {
        color: var(--_color-active);
    }

    .indicator {
        position: absolute;
        z-index: 0;
        top: var(--_padding-ext);
        bottom: var(--_padding-ext);
        left: 0;
        background: var(--_color);
        border-radius: var(--_radius);
        pointer-events: none;
        transition: transform var(--eu-transition) ease, width var(--eu-transition) ease;
    }
`;