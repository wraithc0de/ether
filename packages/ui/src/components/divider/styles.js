import { css } from 'lit';

export const styles = css`
    :host {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        height: auto;
    }

    :host([orientation="vertical"]) {
        height: 100%;
        width: fit-content;
    }

    .wrapper {
        width: var(--_size);
        display: flex;
        align-items: center;
        justify-content: center;
        
        &.vertical {
            height: var(--_size);
            flex-direction: column;

            .label {
                padding: 0.75rem 0;
            }
        }

        hr {
            border: none;
            width: var(--_size, 80%);
            height: 1px;
            background: var(--eu-separation);
            margin: 1rem 0;

            &.vertical {
                width: 1px;
                height: var(--_size, 80%);
                margin: 0 1rem;

                &.dashed {
                    border-top: none;
                    border-left: 1px dashed var(--eu-separation);
                }
            }
            
            &.dashed {
                background: none;
                border-top: 1px dashed var(--eu-separation);
            }
        }
        
        .label {
            color: var(--eu-text-muted);
            padding: 0 0.75rem;
            white-space: nowrap;
            font-size: 0.em;
        }
    }
`;