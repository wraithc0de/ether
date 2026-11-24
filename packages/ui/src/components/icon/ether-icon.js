import { EtherIcon } from "./EtherIcon.js";

if (!customElements.get('eu-icon')) {
    customElements.define('eu-icon', EtherIcon);
}

export { EtherIcon };