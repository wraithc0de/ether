import { EtherButton } from "./EtherButton.js";

if (!customElements.get('eu-button')) {
    customElements.define('eu-button', EtherButton);
}

export { EtherButton };