import { css } from 'lit';

export const styles = css`
    :host {
        display: flex;

        --hover-bg: var(--eu-hover);
    }

    :host(:hover) {
        cursor: pointer;
        background: var(--hover-bg);
    }
`;