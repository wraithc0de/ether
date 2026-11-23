import { EtherDivider } from "./EtherDivider.js";

if (!customElements.get('eu-divider')) {
    customElements.define('eu-divider', EtherDivider);
}

export { EtherDivider };