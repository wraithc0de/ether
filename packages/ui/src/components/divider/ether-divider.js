import { EtherDivider } from "./EtherDivider.js";

if (!customElements.get('ether-divider')) {
    customElements.define('ether-divider', EtherDivider);
}

export { EtherDivider };