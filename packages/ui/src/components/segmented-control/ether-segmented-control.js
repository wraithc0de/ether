import { EtherSegmentedControl } from "./EtherSegmentedControl.js";

if (!customElements.get('eu-segmented-control')) {
    customElements.define('eu-segmented-control', EtherSegmentedControl);
}

export { EtherSegmentedControl };