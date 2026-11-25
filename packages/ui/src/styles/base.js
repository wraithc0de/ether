import { css } from 'lit';

export const base = css`
    :host {
        box-sizing: border-box;
        color: var(--eu-text, inherit);
        -webkit-font-smoothing: antialiased;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    :host([hidden]) {display: none !important;}

    :host([disabled]) {
        opacity: var(--eu-disabled-opacity, 0.5);
        pointer-events: none;
        cursor: not-allowed;
    }

    :host(:focus-visible) {
        outline: none;
        box-shadow: var(--eu-focus-ring, 0 0 0 3px blue)
    }
`;