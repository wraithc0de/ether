# Ether

A lightweight library of reusable web components and icons for building consistent, interactive UIs.

## Demo

- A work-in-progress documentation site built using Ether can be found at https://etherui.surge.sh/docs
- You can also tinker with it at the [codepen](https://codepen.io/editor/wraithc0de/pen/01a21f9b-8319-77be-91b0-5e7f0e0874f3).

## Getting started

The package has not been published to package providers yet, but will be once complete. In the meantime, use the cdn links.

Load the UI Bundle and styles, plus the font stylesheet if you plan to use `<eu-icon>`:

```html
<link rel="stylesheet" href="https://etherui.surge.sh/packages/ui/dist/styles/index.css">
<link rel="stylesheet" href="https://etherui.surge.sh/packages/icons/dist/css/ether-icons.css">

<script type="module" src="https://etherui.surge.sh/packages/ui/src/index.js"></script>
```

If working in a static environment, you must also specify an import map for Lit:

```html
<script type="importmap">
    {
        "imports": {
            "lit": "https://cdn.jsdelivr.net/npm/lit@3.3.3/+esm"
        }
    }
</script> 
```

## Components

### Button `<eu-button>`
A customizable button-type element.

| Attribute | Supported Values |
|-----------|------------------|
| `type`    | `primary` `secondary` `ghost` `subtle` `flush` |
| `align`   | `start` `center` `end` `between` |

### Divider `<eu-divider>`
A visual separator line used to divide content horizontally or vertically.<br>
Optional slotted text displays in the center of the divider.

| Attribute | Supported Values |
|-----------|------------------|
| `orientation` | `horizontal` `vertical` |
| `dashed` | Exclude for solid style. |

### Icon `<eu-icon>`
Displays an icon by name, for example `<eu-icon>check</eu-icon>`. The icon font stylesheet must also be loaded. See the [icon preview](./packages/icons/dist/preview/index.html) page for currently available icons - I'll make a proper icon browser in the future.

## Development

The source components are in [`packages/ui/src`](./packages/ui/src). Run the
workspace build commands above after making changes. The icon build generates
font and stylesheet assets from the icon sources.
