# **Ether**

A lightweight library of reusable web components and icons for building consistent, interactive UIs.

# Demo

- A work-in-progress documentation site built using Ether can be found at https://etherui.surge.sh/docs
- You can also tinker with it at the [codepen](https://codepen.io/editor/wraithc0de/pen/01a21f9b-8319-77be-91b0-5e7f0e0874f3).

# Getting started

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

# Components

## Button `<eu-button>`
A customizable button-type element.

| Attribute | Supported Values |
|-----------|------------------|
| `type`    | `primary` (default) `secondary` `ghost` `subtle` `flush` |
| `align`   | `start` `center` (default) `end` `between` |

## Divider `<eu-divider>`
A visual separator line used to divide content horizontally or vertically.<br>
Optional slotted text displays in the center of the divider.

| Attribute | Supported Values |
|-----------|------------------|
| `orientation` | `horizontal` (default) `vertical` |
| `dashed` | Exclude for solid style. |

## Segmented Control `<eu-segmented-control>`
A linear set of two or more mutually exclusive options with an active indicator.

| Attribute | Supported Values |
|-----------|------------------|
| `type`    | `monochrome` (default) `primary` |
| `default` | Any existing button value or index. |
| `value`   | Any existing button value or index. Can be read and changed programmatically. |

Its options must be buttons with an optional `value` attribute, supporting names or numbers.

## Icon `<eu-icon>`
Displays an icon by name, for example `<eu-icon>check</eu-icon>`. The icon font stylesheet must also be loaded. See the [icon preview](./packages/icons/dist/preview/index.html) page for currently available icons - I'll make a proper icon browser in the future.

# Tokens
Global Ether variables for spacing, colors, and timing.

| Token | Default |
|---|---|
| Colors ||
| `--eu-bg` | `light-dark(#f0f6fa, #050b0f)` |
| `--eu-surface` | `color-mix(in oklch, var(--eu-bg) 80%, var(--eu-text))` |
| `--eu-text` | `light-dark(#080d12, #edf2f7)` |
| `--eu-text-muted` | `color-mix(in oklch, var(--eu-text) 60%, transparent)` |
| `--eu-separation` | `light-dark(#bbbbbb, #333333)` |
| `--eu-primary` | `light-dark(#16486f, #90c3e9)` |
| `--eu-secondary` | `light-dark(#74bbf1, #0e558b)` |
| `--eu-accent` | `light-dark(#0588e6, #199cfa)` |
| `--eu-hover-dir` | `light-dark(#000000, #ffffff)` |
| Scale & Sizing ||
| `--eu-space-[0-8]` | `[0, 0.125, 0.25, 0.5, 0.75, 1, 1.5, 2, 4]rem` |
| `--eu-size-[sm, md, lg]` | `[1.75, 2.25, 2.75]rem` |
| `--eu-radius-[tiny, sm, md, lg, full]` | `[0.125, 0.25, 0.5, 0.75, 9999]rem` |
| `--eu-text-[tiny, sm, md, normal, lg]` | `[0.5, 0.75, 0.9, 1, 1.2]rem` |
| Utility ||
| `--eu-transition` | `0.2s` |

# Development

Build instructions will be posted once complete.
