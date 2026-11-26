import { css } from 'lit';

export const styles = css`
    :host {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        height: auto;

        --_line-color: var(--eu-dv-line-color, var(--eu-separation));
        --_line-thickness: var(--eu-dv-line-thickness, 1px);
        --_text-color: var(--eu-dv-text-color, var(--eu-text-muted));
        --_text-size: var(--eu-dv-text-size, var(--eu-text-md));
        --_size: var(--eu-dv-length, 80%);
        --_margin: var(--eu-dv-margin, var(--eu-space-5));
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
                padding: var(--eu-space-4) 0;
            }
        }

        hr {
            border: none;
            width: 100%;
            height: var(--_line-thickness);
            background: var(--_line-color);
            margin: var(--_margin) 0;

            &.vertical {
                width: var(--_line-thickness);
                height: 100%;
                margin: 0 var(--_margin);

                &.dashed {
                    border-top: none;
                    border-left: var(--_line-thickness) dashed var(--_line-color);
                }
            }
            
            &.dashed {
                background: none;
                border-top: var(--_line-thickness) dashed var(--_line-color);
            }
        }
        
        .label {
            color: var(--_text-color);
            padding: 0 var(--eu-space-4);
            white-space: nowrap;
            font-size: var(--_text-size);
        }
    }
`;