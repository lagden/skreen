export const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Solicitação de adiantamento</title>


<style>/*! tailwindcss v4.3.0 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    --spacing: 0.25rem;
    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-lg: 1.125rem;
    --text-lg--line-height: calc(1.75 / 1.125);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --font-weight-medium: 500;
    --default-font-family: var(--font-sans);
    --default-mono-font-family: var(--font-mono);
  }
}
@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbd, samp, pre {
    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
    font-feature-settings: var(--default-mono-font-feature-settings, normal);
    font-variation-settings: var(--default-mono-font-variation-settings, normal);
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol, ul, menu {
    list-style: none;
  }
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
  button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::placeholder {
    opacity: 1;
  }
  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    ::placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {
    appearance: button;
  }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}
@layer utilities {
  .table {
    @layer daisyui.l1.l2.l3 {
      font-size: 0.875rem;
      position: relative;
      width: 100%;
      border-collapse: separate;
      --tw-border-spacing-x: calc(0.25rem * 0);
      --tw-border-spacing-y: calc(0.25rem * 0);
      border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y);
      border-radius: var(--radius-box);
      text-align: left;
      &:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
        text-align: right;
      }
      tr.row-hover {
        &, &:nth-child(even) {
          &:hover {
            @media (hover: hover) {
              background-color: var(--color-base-200);
            }
          }
        }
      }
      :where(th, td) {
        padding-inline: calc(0.25rem * 4);
        padding-block: calc(0.25rem * 3);
        vertical-align: middle;
      }
      :where(thead, tfoot) {
        white-space: nowrap;
        color: var(--color-base-content);
        @supports (color: color-mix(in lab, red, red)) {
          color: color-mix(in oklab, var(--color-base-content) 60%, transparent);
        }
        font-size: 0.875rem;
        font-weight: 600;
      }
      :where(tfoot tr:first-child :is(td, th)) {
        border-top: var(--border) solid var(--color-base-content);
        @supports (color: color-mix(in lab, red, red)) {
          border-top: var(--border) solid color-mix(in oklch, var(--color-base-content) 5%, #0000);
        }
      }
      :where(.table-pin-rows thead tr) {
        position: sticky;
        top: calc(0.25rem * 0);
        z-index: 1;
        background-color: var(--color-base-100);
      }
      :where(.table-pin-rows tfoot tr) {
        position: sticky;
        bottom: calc(0.25rem * 0);
        z-index: 1;
        background-color: var(--color-base-100);
      }
      :where(.table-pin-cols tr th) {
        position: sticky;
        right: calc(0.25rem * 0);
        left: calc(0.25rem * 0);
        background-color: var(--color-base-100);
      }
      :where(thead tr :is(td, th), tbody tr:not(:last-child) :is(td, th)) {
        border-bottom: var(--border) solid var(--color-base-content);
        @supports (color: color-mix(in lab, red, red)) {
          border-bottom: var(--border) solid color-mix(in oklch, var(--color-base-content) 5%, #0000);
        }
      }
    }
  }
  .navbar {
    @layer daisyui.l1.l2.l3 {
      display: flex;
      width: 100%;
      align-items: center;
      padding: 0.5rem;
      min-height: 4rem;
    }
    :where(&) {
      @layer daisyui.l1.l2 {
        position: relative;
      }
    }
  }
  .m-4 {
    margin: calc(var(--spacing) * 4);
  }
  .mt-2 {
    margin-top: calc(var(--spacing) * 2);
  }
  .mt-8 {
    margin-top: calc(var(--spacing) * 8);
  }
  .mt-12 {
    margin-top: calc(var(--spacing) * 12);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-8 {
    margin-bottom: calc(var(--spacing) * 8);
  }
  .footer {
    @layer daisyui.l1.l2.l3 {
      display: grid;
      width: 100%;
      grid-auto-flow: row;
      place-items: start;
      column-gap: calc(0.25rem * 4);
      row-gap: calc(0.25rem * 10);
      font-size: 0.875rem;
      line-height: 1.25rem;
      & > * {
        display: grid;
        place-items: start;
        gap: calc(0.25rem * 2);
      }
      &.footer-center {
        grid-auto-flow: column dense;
        place-items: center;
        text-align: center;
        & > * {
          place-items: center;
        }
      }
    }
  }
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .table {
    display: table;
  }
  .size-\[250px\] {
    width: 250px;
    height: 250px;
  }
  .flex-1 {
    flex: 1;
  }
  .flex-none {
    flex: none;
  }
  .table-fixed {
    table-layout: fixed;
  }
  .link {
    @layer daisyui.l1.l2.l3 {
      cursor: pointer;
      text-decoration-line: underline;
      &:focus {
        --tw-outline-style: none;
        outline-style: none;
        @media (forced-colors: active) {
          outline: 2px solid transparent;
          outline-offset: 2px;
        }
      }
      &:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: 2px;
      }
    }
  }
  .list-inside {
    list-style-position: inside;
  }
  .list-disc {
    list-style-type: disc;
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .flex-col {
    flex-direction: column;
  }
  .items-center-safe {
    align-items: safe center;
  }
  .gap-8 {
    gap: calc(var(--spacing) * 8);
  }
  .space-y-2 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .bg-neutral {
    background-color: var(--color-neutral);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .table-xs {
    @layer daisyui.l1.l2 {
      :not(thead, tfoot) tr {
        font-size: 0.6875rem;
      }
      :where(th, td) {
        padding-inline: calc(0.25rem * 2);
        padding-block: calc(0.25rem * 1);
      }
    }
  }
  .text-center {
    text-align: center;
  }
  .text-2xl {
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
  }
  .text-lg {
    font-size: var(--text-lg);
    line-height: var(--tw-leading, var(--text-lg--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .text-neutral-content {
    color: var(--color-neutral-content);
  }
}
@layer base {
  :where(:root),:root:has(input.theme-controller[value=light]:checked),[data-theme=light] {
    color-scheme: light;
    --color-base-100: oklch(100% 0 0);
    --color-base-200: oklch(98% 0 0);
    --color-base-300: oklch(95% 0 0);
    --color-base-content: oklch(21% 0.006 285.885);
    --color-primary: oklch(45% 0.24 277.023);
    --color-primary-content: oklch(93% 0.034 272.788);
    --color-secondary: oklch(65% 0.241 354.308);
    --color-secondary-content: oklch(94% 0.028 342.258);
    --color-accent: oklch(77% 0.152 181.912);
    --color-accent-content: oklch(38% 0.063 188.416);
    --color-neutral: oklch(14% 0.005 285.823);
    --color-neutral-content: oklch(92% 0.004 286.32);
    --color-info: oklch(74% 0.16 232.661);
    --color-info-content: oklch(29% 0.066 243.157);
    --color-success: oklch(76% 0.177 163.223);
    --color-success-content: oklch(37% 0.077 168.94);
    --color-warning: oklch(82% 0.189 84.429);
    --color-warning-content: oklch(41% 0.112 45.904);
    --color-error: oklch(71% 0.194 13.428);
    --color-error-content: oklch(27% 0.105 12.094);
    --radius-selector: 0.5rem;
    --radius-field: 0.25rem;
    --radius-box: 0.5rem;
    --size-selector: 0.25rem;
    --size-field: 0.25rem;
    --border: 1px;
    --depth: 1;
    --noise: 0;
  }
}
@layer base {
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme]) {
      color-scheme: dark;
      --color-base-100: oklch(25.33% 0.016 252.42);
      --color-base-200: oklch(23.26% 0.014 253.1);
      --color-base-300: oklch(21.15% 0.012 254.09);
      --color-base-content: oklch(97.807% 0.029 256.847);
      --color-primary: oklch(58% 0.233 277.117);
      --color-primary-content: oklch(96% 0.018 272.314);
      --color-secondary: oklch(65% 0.241 354.308);
      --color-secondary-content: oklch(94% 0.028 342.258);
      --color-accent: oklch(77% 0.152 181.912);
      --color-accent-content: oklch(38% 0.063 188.416);
      --color-neutral: oklch(14% 0.005 285.823);
      --color-neutral-content: oklch(92% 0.004 286.32);
      --color-info: oklch(74% 0.16 232.661);
      --color-info-content: oklch(29% 0.066 243.157);
      --color-success: oklch(76% 0.177 163.223);
      --color-success-content: oklch(37% 0.077 168.94);
      --color-warning: oklch(82% 0.189 84.429);
      --color-warning-content: oklch(41% 0.112 45.904);
      --color-error: oklch(71% 0.194 13.428);
      --color-error-content: oklch(27% 0.105 12.094);
      --radius-selector: 0.5rem;
      --radius-field: 0.25rem;
      --radius-box: 0.5rem;
      --size-selector: 0.25rem;
      --size-field: 0.25rem;
      --border: 1px;
      --depth: 1;
      --noise: 0;
    }
  }
}
@layer base {
  :root:has(input.theme-controller[value=light]:checked),[data-theme=light] {
    color-scheme: light;
    --color-base-100: oklch(100% 0 0);
    --color-base-200: oklch(98% 0 0);
    --color-base-300: oklch(95% 0 0);
    --color-base-content: oklch(21% 0.006 285.885);
    --color-primary: oklch(45% 0.24 277.023);
    --color-primary-content: oklch(93% 0.034 272.788);
    --color-secondary: oklch(65% 0.241 354.308);
    --color-secondary-content: oklch(94% 0.028 342.258);
    --color-accent: oklch(77% 0.152 181.912);
    --color-accent-content: oklch(38% 0.063 188.416);
    --color-neutral: oklch(14% 0.005 285.823);
    --color-neutral-content: oklch(92% 0.004 286.32);
    --color-info: oklch(74% 0.16 232.661);
    --color-info-content: oklch(29% 0.066 243.157);
    --color-success: oklch(76% 0.177 163.223);
    --color-success-content: oklch(37% 0.077 168.94);
    --color-warning: oklch(82% 0.189 84.429);
    --color-warning-content: oklch(41% 0.112 45.904);
    --color-error: oklch(71% 0.194 13.428);
    --color-error-content: oklch(27% 0.105 12.094);
    --radius-selector: 0.5rem;
    --radius-field: 0.25rem;
    --radius-box: 0.5rem;
    --size-selector: 0.25rem;
    --size-field: 0.25rem;
    --border: 1px;
    --depth: 1;
    --noise: 0;
  }
}
@layer base {
  :root:has(input.theme-controller[value=dark]:checked),[data-theme=dark] {
    color-scheme: dark;
    --color-base-100: oklch(25.33% 0.016 252.42);
    --color-base-200: oklch(23.26% 0.014 253.1);
    --color-base-300: oklch(21.15% 0.012 254.09);
    --color-base-content: oklch(97.807% 0.029 256.847);
    --color-primary: oklch(58% 0.233 277.117);
    --color-primary-content: oklch(96% 0.018 272.314);
    --color-secondary: oklch(65% 0.241 354.308);
    --color-secondary-content: oklch(94% 0.028 342.258);
    --color-accent: oklch(77% 0.152 181.912);
    --color-accent-content: oklch(38% 0.063 188.416);
    --color-neutral: oklch(14% 0.005 285.823);
    --color-neutral-content: oklch(92% 0.004 286.32);
    --color-info: oklch(74% 0.16 232.661);
    --color-info-content: oklch(29% 0.066 243.157);
    --color-success: oklch(76% 0.177 163.223);
    --color-success-content: oklch(37% 0.077 168.94);
    --color-warning: oklch(82% 0.189 84.429);
    --color-warning-content: oklch(41% 0.112 45.904);
    --color-error: oklch(71% 0.194 13.428);
    --color-error-content: oklch(27% 0.105 12.094);
    --radius-selector: 0.5rem;
    --radius-field: 0.25rem;
    --radius-box: 0.5rem;
    --size-selector: 0.25rem;
    --size-field: 0.25rem;
    --border: 1px;
    --depth: 1;
    --noise: 0;
  }
}
@layer base {
  :root:not(span) {
    overflow: var(--page-overflow);
  }
}
@layer base {
  :root, [data-theme] {
    background: var(--page-scroll-bg, var(--root-bg));
    color: var(--color-base-content);
  }
  :where(:root, [data-theme]) {
    --root-bg: var(--color-base-100);
  }
}
@layer base {
  :root {
    background: var(--page-scroll-bg, var(--root-bg));
    --page-scroll-bg-on: linear-gradient(var(--root-bg, #0000), var(--root-bg, #0000))
    var(--root-bg, #0000);
    @supports (color: color-mix(in lab, red, red)) {
      --page-scroll-bg-on: linear-gradient(var(--root-bg, #0000), var(--root-bg, #0000))
    color-mix(in srgb, var(--root-bg, #0000), oklch(0% 0 0) calc(var(--page-has-backdrop, 0) * 40%));
    }
    --page-scroll-transition-on: background-color 0.3s ease-out;
    transition: var(--page-scroll-transition);
    scrollbar-gutter: var(--page-scroll-gutter, unset);
    scrollbar-gutter: if(style(--page-has-scroll: 1): var(--page-scroll-gutter, unset) ; else: unset);
  }
  @keyframes set-page-has-scroll {
    0%, to {
      --page-has-scroll: 1;
    }
  }
}
@layer base {
  :root {
    --fx-noise: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E");
  }
}
@layer base {
  :root {
    scrollbar-color: currentColor #0000;
    @supports (color: color-mix(in lab, red, red)) {
      scrollbar-color: color-mix(in oklch, currentColor 35%, #0000) #0000;
    }
  }
}
@layer base {
  @property --radialprogress {
    syntax: "<percentage>";
    inherits: true;
    initial-value: 0%;
  }
}
@keyframes menu {
  0% {
    opacity: 0;
  }
}
@keyframes dropdown {
  0% {
    opacity: 0;
  }
}
@keyframes skeleton {
  0% {
    background-position: 150%;
  }
  100% {
    background-position: -50%;
  }
}
@keyframes rating {
  0%, 40% {
    scale: 1.1;
    filter: brightness(1.05) contrast(1.05);
  }
}
@keyframes progress {
  50% {
    background-position-x: -115%;
  }
}
@keyframes toast {
  0% {
    scale: 0.9;
    opacity: 0;
  }
  100% {
    scale: 1;
    opacity: 1;
  }
}
@keyframes rotator {
  89.9999%, 100% {
    --first-item-position: 0 0%;
  }
  90%, 99.9999% {
    --first-item-position: 0 calc(var(--items) * 100%);
  }
  100% {
    translate: 0 -100%;
  }
}
@keyframes radio {
  0% {
    padding: 5px;
  }
  50% {
    padding: 3px;
  }
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-space-y-reverse: 0;
      --tw-font-weight: initial;
    }
  }
}
:root {
  --font-sans: 'Inter', sans-serif;
  --default-font-family: 'Inter', sans-serif;
}
body, html { font-family: 'Inter', sans-serif; }
</style></head>
<body>
	<main data-theme="corporate">
		<div class="navbar gap-8 bg-neutral text-neutral-content mb-8" style="background-color: #1d1d2b; color: #ebebf5">
			<div class="flex-none">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="64" height="38" viewBox="0 0 103 62" class="m-4">
					<path fill="#45ac5d" d="M88.791 38.332q-4.035 0-7.184-1.723-3.15-1.77-4.97-4.822-1.82-3.05-1.82-6.938 0-3.936 1.82-6.938 1.82-3.051 4.97-4.773t7.184-1.722q4.084 0 7.234 1.722 3.198 1.722 4.969 4.724 1.821 3 1.821 6.987 0 3.887-1.821 6.938-1.77 3.05-4.97 4.822-3.148 1.722-7.233 1.722m0-5.266q2.264 0 4.035-.984t2.756-2.854q1.033-1.87 1.033-4.379 0-2.559-1.033-4.38-.984-1.869-2.756-2.853t-3.986-.984q-2.263 0-4.035.984-1.722.984-2.755 2.854-1.033 1.82-1.033 4.379 0 2.51 1.033 4.38 1.033 1.869 2.755 2.853 1.772.984 3.986.984M61.788 11.416q3.15 0 5.61 1.23 2.509 1.23 3.936 3.789 1.427 2.51 1.427 6.495v15.057h-6.15v-14.27q0-3.493-1.674-5.216-1.623-1.722-4.576-1.722-2.165 0-3.838.886-1.674.885-2.608 2.657-.886 1.722-.886 4.38v13.285h-6.15V11.711h5.855v7.086l-1.033-2.165q1.377-2.51 3.985-3.839 2.658-1.377 6.102-1.377M36.591 37.987V11.711h6.151v26.276zm3.1-30.606q-1.723 0-2.854-1.083a3.56 3.56 0 0 1-1.082-2.608q0-1.575 1.082-2.607Q37.97 0 39.691 0t2.805 1.033q1.132.984 1.132 2.51 0 1.623-1.083 2.755-1.082 1.083-2.854 1.083M20.412 37.987V11.711h5.856v7.233l-.69-2.116q1.182-2.657 3.691-4.034 2.559-1.378 6.348-1.378v5.855a3 3 0 0 0-.738-.098q-.345-.05-.69-.05-3.493 0-5.56 2.067-2.066 2.018-2.066 6.053v12.744z" />
					<path fill="#45ac5d" fill-rule="evenodd" d="M10.48 29.447H4.33V16.828H0v-4.92h4.33V5.905h6.15v6.003h7.037v4.92h-7.036z" clip-rule="evenodd" />
					<path stroke="#45ac5d" stroke-width="6.135" d="M39.57 42.343c0 8.81-7.21 15.95-16.104 15.95s-16.104-7.14-16.104-15.95" />
					<path fill="#45ac5d" d="M4.294 29.447h6.135v8.589H4.294z" />
				</svg>
			</div>
			<div class="flex-1">
				<p class="text-2xl">
					<span class="block">Solicitação de adiantamento</span>
					<span class="block text-xs">Data de emissão: 25 de maio de 2026</span>
				</p>
			</div>
		</div>
		<div class="flex flex-col gap-8">
			<section>
				<h2 class="text-lg mb-4">DADOS DA EMPRESA</h2>
				<table class="table table-xs table-fixed">
					<tbody>
						<tr>
							<td style="width: 200px">Razão Social:</td>
							<td>Prefeitura Municipal de São Paulo</td>
						</tr>
						<tr>
							<td style="width: 200px">CNPJ:</td>
							<td>46.395.000/0001-39</td>
						</tr>
						<tr>
							<td style="width: 200px">Endereço:</td>
							<td>Viaduto do Chá, 15 - Centro Histórico, São Paulo - SP, 01002-020</td>
						</tr>
						<tr>
							<td style="width: 200px">Telefone:</td>
							<td>(11) 3113-9000</td>
						</tr>
						<tr>
							<td style="width: 200px">E-mail:</td>
							<td>contato@prefeitura.sp.gov.br</td>
						</tr>
					</tbody>
				</table>
			</section>
			<section>
				<h2 class="text-lg mb-4">DADOS DO FUNCIONÁRIO</h2>
				<table class="table table-xs table-fixed">
					<tbody>
						<tr>
							<td style="width: 200px">Nome Completo:</td>
							<td>João Silva Santos</td>
						</tr>
						<tr>
							<td style="width: 200px">CPF:</td>
							<td>123.456.789-00</td>
						</tr>
						<tr>
							<td style="width: 200px">Cargo:</td>
							<td>Auxiliar Administrativo</td>
						</tr>
						<tr>
							<td style="width: 200px">Matrícula:</td>
							<td>SP2024001234</td>
						</tr>
						<tr>
							<td style="width: 200px">Data de Admissão:</td>
							<td>01/03/2024</td>
						</tr>
					</tbody>
				</table>
			</section>
			<section>
				<h2 class="text-lg mb-4">DETALHES DO ADIANTAMENTO</h2>
				<table class="table table-xs table-fixed">
					<tbody>
						<tr>
							<td style="width: 200px">Valor do Adiantamento:</td>
							<td>R$ 1.500,00</td>
						</tr>
						<tr>
							<td style="width: 200px">Data da Solicitação:</td>
							<td>25/05/2026</td>
						</tr>
						<tr>
							<td style="width: 200px">Data de Liberação:</td>
							<td>26/05/2026</td>
						</tr>
						<tr>
							<td style="width: 200px">Conta para Depósito:</td>
							<td>Banco Trino - Ag: 0001 - CC: 123456-7</td>
						</tr>
					</tbody>
				</table>
			</section>
			<section>
				<h2 class="text-lg mb-4">TERMOS E CONDIÇÕES</h2>
				<ul class="list-disc list-inside space-y-2 text-xs">
					<li>O valor do adiantamento será descontado automaticamente do salário do funcionário conforme o cronograma estabelecido.</li>
					<li>Em caso de rescisão do contrato de trabalho, o valor pendente será deduzido das verbas rescisórias.</li>
					<li>Este adiantamento não caracteriza empréstimo nem gera juros ou correção monetária.</li>
					<li>O funcionário declara estar ciente dos termos e condições desta operação.</li>
					<li>Este documento possui validade legal e serve como comprovante da operação realizada.</li>
				</ul>
			</section>
			<section class="grid grid-cols-2 gap-8 mt-12" style="break-before:page">
				<div class="flex flex-col items-center-safe">
					<figure>
						<svg class="size-[250px]" xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 111 111" shape-rendering="crispEdges"><path fill="#FFFFFF" d="M0 0h111v111H0z"/><path stroke="#000000" d="M1 1.5h7m1 0h4m2 0h5m1 0h2m4 0h1m1 0h1m4 0h1m2 0h3m1 0h4m1 0h1m2 0h1m1 0h2m1 0h5m1 0h2m1 0h2m1 0h5m2 0h1m1 0h2m1 0h2m1 0h2m1 0h1m2 0h1m1 0h4m1 0h1m1 0h2m3 0h1m1 0h7M1 2.5h1m5 0h1m2 0h1m1 0h5m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1m2 0h3m1 0h2m1 0h1m2 0h1m1 0h1m1 0h1m4 0h2m1 0h1m2 0h1m2 0h5m1 0h1m2 0h3m1 0h1m2 0h2m1 0h1m1 0h2m1 0h6m4 0h1m1 0h2m2 0h1m1 0h1m1 0h1m5 0h1M1 3.5h1m1 0h3m1 0h1m2 0h1m2 0h1m1 0h1m2 0h1m4 0h1m3 0h2m4 0h1m1 0h1m1 0h5m1 0h1m1 0h3m1 0h1m2 0h2m2 0h1m3 0h1m2 0h3m1 0h4m1 0h1m1 0h1m2 0h1m2 0h5m1 0h1m4 0h3m2 0h1m2 0h3m1 0h1m1 0h3m1 0h1M1 4.5h1m1 0h3m1 0h1m1 0h1m1 0h2m1 0h2m1 0h1m3 0h3m1 0h2m1 0h1m2 0h3m2 0h6m1 0h2m8 0h2m4 0h1m3 0h1m1 0h3m2 0h2m5 0h1m1 0h1m3 0h1m4 0h2m1 0h2m1 0h2m2 0h3m2 0h1m1 0h3m1 0h1M1 5.5h1m1 0h3m1 0h1m1 0h1m3 0h1m1 0h1m2 0h1m2 0h2m1 0h2m3 0h5m1 0h2m1 0h2m1 0h4m1 0h1m4 0h1m1 0h6m4 0h1m2 0h2m1 0h2m4 0h8m1 0h2m1 0h5m2 0h1m2 0h5m1 0h1m1 0h3m1 0h1M1 6.5h1m5 0h1m1 0h3m1 0h2m4 0h1m1 0h1m1 0h2m1 0h2m1 0h1m3 0h2m3 0h4m1 0h3m1 0h1m1 0h5m3 0h1m1 0h4m1 0h2m5 0h2m1 0h2m1 0h1m3 0h1m2 0h1m1 0h5m1 0h1m2 0h1m4 0h1m2 0h1m5 0h1M1 7.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M9 8.5h1m1 0h1m2 0h4m2 0h1m1 0h1m1 0h1m2 0h3m3 0h1m2 0h1m4 0h1m3 0h2m3 0h2m1 0h1m3 0h2m1 0h1m1 0h4m1 0h1m1 0h1m1 0h2m1 0h1m1 0h2m3 0h1m2 0h2m2 0h1m3 0h1m3 0h2m1 0h1M1 9.5h1m3 0h1m1 0h3m1 0h3m1 0h1m2 0h4m1 0h1m1 0h2m2 0h5m2 0h2m3 0h1m1 0h1m1 0h1m2 0h2m1 0h1m1 0h5m1 0h4m1 0h1m4 0h2m1 0h2m1 0h8m1 0h3m1 0h1m2 0h1m1 0h1m1 0h4m3 0h5m2 0h1M1 10.5h1m3 0h1m2 0h6m1 0h2m4 0h1m2 0h2m1 0h1m1 0h3m2 0h4m1 0h1m1 0h3m1 0h2m4 0h2m1 0h5m4 0h1m3 0h2m1 0h1m1 0h2m1 0h3m2 0h3m4 0h1m1 0h3m1 0h2m1 0h2m1 0h2m2 0h1m1 0h1m1 0h3M3 11.5h2m2 0h1m1 0h3m1 0h2m1 0h3m1 0h2m4 0h3m1 0h1m1 0h1m6 0h1m2 0h4m2 0h1m1 0h1m2 0h2m1 0h1m6 0h3m1 0h2m1 0h1m2 0h3m1 0h1m1 0h1m1 0h3m1 0h1m3 0h1m4 0h1m2 0h1m3 0h2m1 0h2m1 0h1m1 0h1M3 12.5h1m4 0h1m1 0h3m1 0h1m1 0h4m4 0h3m1 0h1m1 0h1m1 0h7m1 0h1m6 0h1m1 0h6m3 0h1m3 0h5m1 0h5m2 0h1m1 0h2m1 0h1m3 0h3m3 0h1m1 0h1m1 0h1m3 0h3m2 0h2m1 0h1M5 13.5h3m1 0h1m1 0h1m1 0h2m2 0h2m1 0h2m3 0h1m1 0h5m3 0h1m1 0h5m3 0h1m1 0h1m1 0h1m3 0h2m2 0h5m1 0h2m4 0h7m5 0h3m1 0h2m1 0h2m1 0h3m1 0h2m1 0h2m1 0h4m2 0h3M1 14.5h1m1 0h1m1 0h1m8 0h2m2 0h3m1 0h1m1 0h2m1 0h1m2 0h3m3 0h2m1 0h1m1 0h3m1 0h2m1 0h1m2 0h1m1 0h6m1 0h2m1 0h2m1 0h5m2 0h1m1 0h1m2 0h5m2 0h1m1 0h1m1 0h3m2 0h1m1 0h1m2 0h2m6 0h1m1 0h1M2 15.5h1m2 0h1m1 0h1m1 0h1m2 0h1m1 0h2m3 0h1m2 0h1m1 0h1m5 0h1m1 0h1m2 0h1m4 0h1m4 0h3m3 0h1m1 0h6m1 0h1m1 0h1m3 0h1m5 0h1m2 0h1m1 0h1m2 0h1m1 0h3m5 0h1m3 0h1m1 0h3m2 0h1m4 0h3M3 16.5h2m1 0h1m1 0h2m1 0h2m2 0h1m7 0h2m1 0h1m2 0h3m1 0h5m6 0h1m5 0h3m1 0h2m6 0h1m1 0h1m1 0h3m1 0h2m1 0h1m2 0h1m2 0h3m4 0h1m2 0h1m2 0h1m1 0h1m4 0h2m1 0h1m1 0h1M2 17.5h1m1 0h4m3 0h1m1 0h1m2 0h1m1 0h3m1 0h1m2 0h2m1 0h1m1 0h1m2 0h3m2 0h1m2 0h3m1 0h1m1 0h4m2 0h1m3 0h1m2 0h5m1 0h1m2 0h3m1 0h3m1 0h3m1 0h5m1 0h2m2 0h1m1 0h1m2 0h1m2 0h3M2 18.5h5m3 0h1m2 0h2m1 0h3m1 0h1m3 0h2m2 0h3m1 0h1m1 0h3m1 0h1m1 0h4m2 0h1m1 0h2m1 0h1m2 0h2m1 0h2m4 0h1m3 0h1m1 0h1m2 0h1m2 0h1m2 0h5m2 0h1m1 0h2m1 0h3m1 0h1m2 0h1m1 0h1m4 0h1m1 0h1M1 19.5h1m1 0h5m4 0h2m3 0h4m10 0h1m1 0h1m3 0h1m2 0h1m1 0h2m1 0h2m4 0h1m1 0h2m3 0h1m3 0h2m3 0h1m1 0h1m2 0h1m1 0h1m2 0h2m1 0h1m1 0h2m3 0h4m1 0h1m1 0h1m1 0h1m2 0h1m5 0h1m1 0h3M1 20.5h1m4 0h1m2 0h1m2 0h4m1 0h9m4 0h1m1 0h1m4 0h2m2 0h4m5 0h1m1 0h1m2 0h1m2 0h1m2 0h2m1 0h3m2 0h2m3 0h1m3 0h5m1 0h1m2 0h1m6 0h1m2 0h2m5 0h1M4 21.5h2m1 0h3m1 0h2m2 0h3m1 0h2m2 0h1m1 0h1m1 0h3m1 0h4m2 0h1m2 0h1m4 0h2m1 0h2m1 0h3m3 0h1m2 0h2m1 0h2m4 0h5m1 0h1m1 0h6m1 0h3m2 0h1m3 0h1m1 0h1m2 0h3m2 0h4m2 0h1M3 22.5h3m2 0h3m1 0h1m2 0h1m5 0h1m1 0h2m1 0h2m1 0h3m1 0h1m2 0h5m1 0h2m1 0h2m4 0h1m1 0h4m1 0h1m1 0h1m2 0h6m1 0h1m4 0h6m1 0h1m2 0h1m1 0h8m1 0h1m2 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 23.5h1m4 0h8m2 0h1m2 0h1m3 0h2m1 0h4m2 0h5m2 0h1m1 0h1m2 0h1m4 0h1m2 0h2m2 0h1m1 0h1m1 0h1m1 0h1m3 0h3m1 0h1m1 0h1m1 0h1m1 0h1m4 0h4m2 0h4m1 0h2m4 0h3m5 0h2M2 24.5h1m1 0h3m1 0h1m1 0h3m1 0h1m3 0h2m2 0h2m1 0h2m1 0h1m2 0h1m1 0h1m1 0h1m4 0h1m1 0h1m3 0h1m1 0h1m3 0h1m1 0h3m1 0h1m1 0h3m1 0h1m1 0h1m2 0h1m2 0h3m2 0h1m2 0h1m4 0h2m2 0h1m1 0h3m2 0h1m1 0h1m1 0h1m1 0h3m1 0h2M4 25.5h4m1 0h3m1 0h4m2 0h1m4 0h3m3 0h1m1 0h3m2 0h3m1 0h1m1 0h1m1 0h5m1 0h1m5 0h1m1 0h3m2 0h1m1 0h1m2 0h7m2 0h2m1 0h1m1 0h3m2 0h1m2 0h3m2 0h5m3 0h4M1 26.5h1m2 0h1m1 0h1m2 0h1m1 0h1m1 0h1m1 0h3m2 0h1m4 0h2m1 0h1m8 0h1m4 0h5m1 0h2m1 0h7m3 0h1m1 0h6m1 0h1m1 0h2m1 0h1m1 0h3m1 0h2m1 0h2m1 0h2m1 0h3m1 0h1m4 0h1m2 0h3m1 0h2m1 0h1M1 27.5h3m2 0h2m1 0h4m2 0h1m1 0h6m1 0h1m4 0h2m2 0h3m6 0h3m1 0h3m4 0h2m1 0h1m6 0h1m2 0h1m1 0h2m1 0h1m5 0h2m4 0h1m3 0h1m2 0h1m7 0h1m1 0h1m5 0h2m1 0h1M2 28.5h3m1 0h1m1 0h1m1 0h2m1 0h1m1 0h4m1 0h1m2 0h3m6 0h2m1 0h4m2 0h1m1 0h1m5 0h1m2 0h2m1 0h1m1 0h2m3 0h2m1 0h1m5 0h1m5 0h1m1 0h1m1 0h3m3 0h2m1 0h1m1 0h7m2 0h4m3 0h1M2 29.5h9m4 0h3m2 0h3m2 0h2m1 0h10m2 0h3m2 0h1m2 0h2m2 0h13m1 0h2m1 0h2m2 0h3m1 0h5m1 0h4m1 0h1m4 0h1m1 0h3m2 0h6m1 0h3M2 30.5h2m1 0h1m3 0h1m2 0h2m1 0h3m2 0h1m2 0h4m2 0h1m3 0h3m1 0h2m5 0h1m1 0h1m1 0h1m1 0h1m1 0h2m3 0h2m1 0h2m1 0h6m1 0h1m2 0h1m1 0h3m3 0h2m2 0h3m1 0h3m1 0h2m1 0h1m2 0h1m1 0h1m3 0h1m1 0h1M3 31.5h1m1 0h1m1 0h1m1 0h1m1 0h4m7 0h1m2 0h3m1 0h1m1 0h1m1 0h1m1 0h1m2 0h4m1 0h1m1 0h4m1 0h4m1 0h1m1 0h2m1 0h1m2 0h1m1 0h3m2 0h2m2 0h2m1 0h1m1 0h1m1 0h1m1 0h1m2 0h2m4 0h1m4 0h2m2 0h1m1 0h1m1 0h1m1 0h2M1 32.5h3m1 0h1m3 0h2m2 0h2m1 0h2m1 0h1m2 0h3m2 0h3m3 0h1m1 0h6m1 0h1m4 0h1m1 0h1m2 0h2m3 0h1m3 0h2m1 0h2m1 0h4m1 0h1m1 0h1m1 0h2m3 0h4m2 0h2m1 0h8m1 0h3m3 0h5M2 33.5h1m1 0h6m1 0h3m1 0h3m2 0h3m1 0h1m1 0h1m1 0h7m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1m1 0h3m2 0h6m6 0h1m3 0h1m3 0h10m1 0h6m2 0h1m1 0h1m2 0h3m2 0h5M2 34.5h1m1 0h1m4 0h2m1 0h2m6 0h2m1 0h2m2 0h3m2 0h1m3 0h2m4 0h2m2 0h1m3 0h2m3 0h1m1 0h2m1 0h1m2 0h1m2 0h2m5 0h1m1 0h1m5 0h2m4 0h1m1 0h6m4 0h2m1 0h6M1 35.5h2m2 0h3m3 0h2m4 0h2m1 0h8m1 0h1m3 0h2m2 0h3m4 0h1m1 0h2m2 0h1m6 0h6m2 0h2m2 0h1m7 0h1m2 0h1m2 0h1m1 0h2m1 0h1m1 0h1m2 0h1m2 0h1m2 0h2m6 0h2M3 36.5h3m6 0h2m1 0h2m1 0h1m2 0h1m2 0h3m6 0h2m1 0h1m1 0h2m1 0h2m2 0h1m2 0h4m1 0h3m1 0h2m4 0h1m4 0h1m2 0h1m1 0h4m1 0h1m1 0h2m1 0h5m1 0h1m2 0h2m1 0h1m2 0h2m1 0h2m1 0h2m1 0h2M3 37.5h1m2 0h2m7 0h1m1 0h1m3 0h1m2 0h1m1 0h1m1 0h2m3 0h4m1 0h1m6 0h1m2 0h3m2 0h1m1 0h2m1 0h1m1 0h2m7 0h2m1 0h2m2 0h1m1 0h1m1 0h2m1 0h4m1 0h1m2 0h1m1 0h1m1 0h3m1 0h1m1 0h2m1 0h2m1 0h1m1 0h1M1 38.5h1m3 0h2m1 0h1m2 0h2m1 0h2m2 0h3m1 0h4m1 0h1m5 0h2m3 0h6m1 0h2m1 0h1m2 0h1m1 0h3m1 0h1m2 0h2m1 0h3m1 0h2m6 0h4m2 0h2m1 0h2m1 0h5m1 0h2m1 0h4m1 0h5m1 0h3M4 39.5h1m2 0h1m1 0h1m2 0h2m1 0h3m1 0h3m3 0h3m2 0h2m2 0h4m3 0h2m3 0h1m2 0h1m1 0h3m2 0h1m8 0h1m1 0h1m4 0h3m6 0h2m4 0h2m1 0h2m6 0h6m3 0h1m1 0h1M1 40.5h2m2 0h1m5 0h2m1 0h2m5 0h2m3 0h1m1 0h10m2 0h2m2 0h1m5 0h3m1 0h1m3 0h2m2 0h3m3 0h2m1 0h1m1 0h2m2 0h1m1 0h1m1 0h3m1 0h1m1 0h1m1 0h7m2 0h1m1 0h1m3 0h3m1 0h1M6 41.5h2m2 0h1m1 0h3m1 0h1m1 0h1m1 0h2m1 0h4m1 0h1m6 0h1m1 0h9m4 0h3m1 0h1m5 0h2m2 0h1m2 0h1m1 0h3m1 0h7m2 0h5m1 0h1m3 0h2m1 0h3m1 0h1m2 0h4m1 0h2M1 42.5h1m2 0h3m2 0h1m1 0h2m1 0h2m3 0h2m1 0h2m1 0h2m1 0h2m2 0h1m1 0h1m1 0h1m1 0h1m2 0h1m1 0h2m1 0h1m2 0h1m1 0h1m1 0h3m1 0h2m3 0h1m1 0h4m1 0h1m1 0h1m3 0h1m1 0h3m1 0h2m2 0h1m1 0h1m2 0h2m2 0h1m1 0h1m2 0h1m2 0h3m1 0h1m1 0h1M5 43.5h4m1 0h2m1 0h1m2 0h1m4 0h4m1 0h2m3 0h2m4 0h3m1 0h1m1 0h2m1 0h1m1 0h1m3 0h2m2 0h1m1 0h3m1 0h3m1 0h1m1 0h1m4 0h1m2 0h2m2 0h1m1 0h1m1 0h1m1 0h2m2 0h1m4 0h1m2 0h1m2 0h2m2 0h5M1 44.5h1m1 0h2m1 0h1m1 0h2m5 0h2m3 0h2m1 0h4m4 0h2m1 0h4m1 0h1m2 0h1m3 0h2m1 0h1m4 0h1m1 0h2m1 0h1m4 0h2m3 0h6m1 0h1m2 0h2m5 0h1m1 0h1m1 0h1m1 0h3m2 0h1m2 0h1M3 45.5h2m1 0h3m3 0h1m1 0h2m1 0h4m1 0h8m2 0h2m2 0h1m1 0h1m1 0h3m2 0h1m4 0h1m2 0h2m1 0h2m2 0h2m1 0h2m1 0h2m1 0h1m1 0h3m2 0h1m4 0h2m1 0h5m1 0h1m2 0h1m2 0h3m2 0h1m1 0h1m1 0h2m2 0h1M4 46.5h2m5 0h1m1 0h4m6 0h1m2 0h1m1 0h1m1 0h1m2 0h2m1 0h3m3 0h5m1 0h1m2 0h1m1 0h3m1 0h4m1 0h2m1 0h1m2 0h2m1 0h3m1 0h1m1 0h3m1 0h2m2 0h1m1 0h1m1 0h5m3 0h1m1 0h2m2 0h2m1 0h1m1 0h2M1 47.5h1m4 0h3m3 0h2m1 0h4m1 0h1m4 0h2m4 0h3m4 0h1m1 0h4m4 0h1m2 0h1m5 0h4m1 0h1m1 0h2m3 0h1m1 0h1m1 0h2m1 0h3m1 0h1m1 0h3m3 0h3m2 0h2m3 0h3m1 0h1m1 0h1m1 0h4M2 48.5h1m1 0h2m2 0h3m3 0h4m2 0h2m3 0h4m5 0h1m4 0h9m1 0h1m2 0h5m4 0h1m1 0h1m2 0h1m3 0h7m2 0h2m2 0h3m2 0h3m1 0h2m2 0h2m3 0h1m2 0h1M1 49.5h2m1 0h1m2 0h1m1 0h1m1 0h1m1 0h2m1 0h5m2 0h1m1 0h2m2 0h3m2 0h3m1 0h2m5 0h1m2 0h2m3 0h1m4 0h2m1 0h1m1 0h1m2 0h1m2 0h1m2 0h3m2 0h1m1 0h1m1 0h2m1 0h2m1 0h2m1 0h4m2 0h4m3 0h1m1 0h1m2 0h2M3 50.5h1m5 0h3m4 0h3m1 0h1m2 0h2m2 0h2m1 0h1m2 0h1m5 0h1m1 0h3m2 0h1m1 0h1m2 0h1m2 0h1m1 0h2m5 0h6m1 0h1m2 0h3m3 0h1m1 0h1m2 0h1m2 0h2m1 0h2m1 0h1m2 0h1m2 0h3m1 0h1m2 0h4M1 51.5h1m1 0h1m3 0h1m1 0h2m5 0h1m4 0h9m1 0h4m2 0h4m1 0h1m1 0h1m2 0h3m1 0h2m3 0h2m4 0h1m3 0h2m1 0h3m1 0h3m1 0h1m8 0h2m3 0h1m1 0h2m1 0h1m4 0h2m1 0h1m2 0h2M1 52.5h1m3 0h1m2 0h3m3 0h1m1 0h1m1 0h1m4 0h1m1 0h1m1 0h1m2 0h1m1 0h3m4 0h1m1 0h1m2 0h3m1 0h1m1 0h1m1 0h1m1 0h3m1 0h7m1 0h3m1 0h1m1 0h1m4 0h3m3 0h1m1 0h1m1 0h3m3 0h1m13 0h1M3 53.5h10m1 0h2m1 0h1m3 0h2m1 0h11m1 0h1m1 0h3m3 0h6m2 0h6m2 0h2m2 0h1m1 0h2m1 0h2m1 0h3m2 0h12m1 0h1m2 0h1m2 0h2m1 0h1m1 0h6m1 0h1M1 54.5h1m3 0h1m3 0h2m1 0h2m1 0h2m1 0h8m3 0h1m3 0h2m1 0h1m1 0h3m1 0h2m2 0h1m2 0h1m1 0h3m3 0h2m1 0h1m2 0h1m3 0h1m1 0h1m2 0h2m1 0h3m3 0h1m1 0h3m1 0h1m5 0h2m1 0h1m2 0h3m3 0h5M2 55.5h4m1 0h1m1 0h1m3 0h2m3 0h4m1 0h1m2 0h4m1 0h1m1 0h1m2 0h4m1 0h1m4 0h3m2 0h3m1 0h1m1 0h4m3 0h1m2 0h2m7 0h2m1 0h1m1 0h1m2 0h1m3 0h2m1 0h1m1 0h3m1 0h1m1 0h1m1 0h1m1 0h1m1 0h2m2 0h1M3 56.5h3m3 0h1m1 0h1m4 0h1m1 0h3m1 0h1m2 0h1m3 0h1m3 0h1m1 0h3m1 0h1m2 0h1m1 0h2m1 0h1m1 0h1m1 0h3m3 0h1m3 0h2m1 0h1m5 0h2m1 0h3m1 0h1m3 0h3m1 0h2m1 0h1m1 0h1m1 0h1m2 0h4m1 0h2m3 0h1m1 0h1M1 57.5h1m1 0h1m1 0h5m3 0h4m1 0h3m1 0h1m4 0h8m2 0h1m2 0h3m2 0h1m3 0h2m1 0h7m2 0h4m1 0h2m1 0h1m1 0h1m1 0h2m1 0h11m1 0h1m4 0h1m1 0h5m1 0h5m1 0h3M2 58.5h5m2 0h4m3 0h1m2 0h1m1 0h1m2 0h2m3 0h1m2 0h1m1 0h1m3 0h3m1 0h5m1 0h1m2 0h1m1 0h1m1 0h1m2 0h1m1 0h1m2 0h1m1 0h3m1 0h2m1 0h1m1 0h2m1 0h1m2 0h1m2 0h4m2 0h1m4 0h1m2 0h2m1 0h2m1 0h1m1 0h1m2 0h2M1 59.5h1m1 0h2m2 0h2m1 0h2m3 0h1m1 0h1m2 0h1m2 0h1m1 0h3m1 0h1m1 0h3m2 0h1m1 0h2m2 0h1m1 0h1m1 0h1m4 0h2m1 0h3m1 0h1m1 0h1m2 0h3m2 0h1m2 0h1m1 0h3m1 0h1m2 0h1m2 0h1m2 0h1m1 0h1m3 0h1m2 0h4m2 0h1m1 0h1m1 0h3M2 60.5h4m4 0h2m6 0h1m1 0h5m1 0h3m1 0h1m3 0h7m1 0h1m2 0h1m1 0h1m1 0h3m1 0h1m2 0h1m1 0h1m1 0h1m4 0h1m2 0h2m1 0h2m4 0h1m3 0h2m2 0h1m3 0h1m4 0h3m5 0h1m2 0h3M1 61.5h1m2 0h2m1 0h1m5 0h1m1 0h1m2 0h1m2 0h1m3 0h1m2 0h2m1 0h1m1 0h1m3 0h1m1 0h1m2 0h2m1 0h1m1 0h5m1 0h1m4 0h5m1 0h1m1 0h1m2 0h2m1 0h2m2 0h1m1 0h1m1 0h2m1 0h6m1 0h2m1 0h5m1 0h1m1 0h6m1 0h1M5 62.5h1m3 0h1m2 0h1m1 0h7m1 0h3m3 0h3m1 0h1m2 0h1m3 0h5m1 0h2m4 0h1m1 0h1m2 0h1m3 0h2m1 0h2m1 0h2m2 0h1m1 0h2m1 0h2m3 0h3m1 0h2m1 0h1m3 0h1m1 0h2m1 0h2m5 0h1m1 0h1m1 0h1m1 0h1M2 63.5h10m1 0h1m1 0h2m1 0h2m1 0h1m1 0h1m2 0h5m1 0h2m2 0h1m1 0h2m1 0h2m3 0h1m4 0h3m2 0h1m4 0h2m1 0h1m1 0h1m1 0h1m1 0h4m3 0h1m2 0h1m1 0h1m1 0h2m1 0h2m1 0h3m6 0h1m1 0h2m1 0h2m1 0h2M1 64.5h4m1 0h1m1 0h2m3 0h1m1 0h3m2 0h1m2 0h1m1 0h3m1 0h2m1 0h2m1 0h1m2 0h1m2 0h2m1 0h1m2 0h1m1 0h1m1 0h1m1 0h2m4 0h2m2 0h2m2 0h1m2 0h4m3 0h2m1 0h1m2 0h1m1 0h3m1 0h1m2 0h1m3 0h1m5 0h2m1 0h3M1 65.5h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1m2 0h3m1 0h1m1 0h1m3 0h1m1 0h3m1 0h2m1 0h1m1 0h3m3 0h3m1 0h1m1 0h4m1 0h1m1 0h5m1 0h1m1 0h1m2 0h1m2 0h3m3 0h1m1 0h1m1 0h4m1 0h2m1 0h2m1 0h2m1 0h2m1 0h1m2 0h2m2 0h1m1 0h1M1 66.5h1m2 0h3m1 0h3m1 0h1m1 0h3m3 0h1m4 0h1m2 0h1m5 0h3m1 0h6m1 0h2m4 0h1m2 0h3m4 0h1m1 0h2m1 0h2m2 0h1m1 0h1m2 0h1m1 0h4m1 0h1m1 0h2m1 0h1m3 0h2m1 0h1m2 0h1m1 0h3m3 0h2m1 0h1M6 67.5h3m1 0h1m7 0h2m2 0h1m2 0h1m5 0h3m1 0h2m4 0h1m1 0h2m5 0h3m1 0h1m1 0h1m4 0h1m1 0h2m5 0h3m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1m4 0h1m1 0h1m1 0h1m4 0h4m1 0h1m3 0h3M1 68.5h1m1 0h3m4 0h1m1 0h5m3 0h2m1 0h3m3 0h1m1 0h1m6 0h2m1 0h1m2 0h2m1 0h4m2 0h1m3 0h2m1 0h1m1 0h3m1 0h3m1 0h2m1 0h1m1 0h1m1 0h1m2 0h1m1 0h1m2 0h1m1 0h2m1 0h1m2 0h1m1 0h3m1 0h3m2 0h1m1 0h1m1 0h1M2 69.5h1m1 0h4m1 0h2m5 0h1m1 0h5m1 0h2m1 0h1m1 0h1m1 0h3m3 0h2m2 0h2m2 0h1m1 0h3m1 0h1m4 0h1m3 0h3m1 0h1m4 0h1m1 0h1m1 0h3m1 0h1m1 0h1m5 0h4m1 0h2m1 0h1m1 0h3m1 0h1m1 0h5m1 0h3M1 70.5h1m1 0h1m1 0h2m2 0h1m3 0h3m3 0h2m2 0h1m3 0h1m1 0h3m2 0h5m3 0h2m1 0h2m1 0h1m1 0h2m1 0h1m2 0h1m1 0h1m2 0h1m1 0h2m1 0h2m5 0h1m1 0h3m2 0h3m2 0h1m1 0h1m2 0h2m1 0h2m3 0h6m1 0h1M1 71.5h3m1 0h1m1 0h3m1 0h1m3 0h1m3 0h1m1 0h2m2 0h2m2 0h4m2 0h2m4 0h1m5 0h5m2 0h3m2 0h3m1 0h2m1 0h1m1 0h2m2 0h2m1 0h3m1 0h2m1 0h3m1 0h3m1 0h1m3 0h1m1 0h1m1 0h2m1 0h2m2 0h1m1 0h1m1 0h1M2 72.5h2m4 0h1m2 0h2m2 0h2m5 0h3m4 0h1m1 0h2m2 0h1m2 0h1m2 0h1m4 0h1m1 0h1m1 0h1m2 0h1m2 0h1m1 0h3m2 0h1m3 0h1m1 0h3m1 0h1m1 0h1m1 0h1m2 0h1m1 0h2m1 0h1m1 0h1m1 0h1m1 0h4m1 0h1m1 0h1m1 0h1m1 0h3m1 0h3M2 73.5h1m1 0h1m1 0h4m1 0h1m1 0h1m1 0h1m2 0h2m2 0h1m1 0h1m5 0h1m4 0h3m3 0h1m1 0h1m1 0h1m1 0h3m1 0h4m1 0h3m1 0h2m1 0h2m1 0h2m1 0h2m1 0h4m1 0h1m2 0h1m1 0h2m1 0h1m2 0h1m2 0h7m1 0h1m1 0h3m2 0h3M2 74.5h1m1 0h1m1 0h1m1 0h3m1 0h1m2 0h2m3 0h2m1 0h2m2 0h2m1 0h1m1 0h1m1 0h1m2 0h1m3 0h6m1 0h1m2 0h2m5 0h1m1 0h1m2 0h2m1 0h3m1 0h1m1 0h2m1 0h2m2 0h1m2 0h1m1 0h5m1 0h3m1 0h1m1 0h1m2 0h1m1 0h2m2 0h1m1 0h1M2 75.5h6m1 0h1m2 0h3m3 0h1m1 0h6m2 0h1m2 0h2m3 0h1m2 0h2m1 0h1m6 0h3m2 0h1m3 0h1m2 0h3m1 0h2m1 0h1m1 0h1m1 0h1m3 0h1m2 0h2m4 0h5m1 0h2m2 0h3m3 0h2m2 0h1m1 0h2M1 76.5h1m1 0h3m7 0h1m3 0h1m2 0h2m3 0h5m4 0h2m3 0h10m1 0h1m1 0h2m5 0h2m4 0h1m1 0h1m2 0h1m2 0h1m1 0h1m1 0h1m2 0h1m1 0h1m1 0h1m2 0h1m1 0h1m3 0h1m1 0h1m1 0h1m2 0h1m1 0h3m1 0h1M1 77.5h1m3 0h6m2 0h1m1 0h1m6 0h1m3 0h1m2 0h5m1 0h1m3 0h1m1 0h5m2 0h10m1 0h3m2 0h1m2 0h1m1 0h1m3 0h1m3 0h6m1 0h2m2 0h1m2 0h1m1 0h1m2 0h3m2 0h5m2 0h2M1 78.5h1m3 0h1m3 0h1m1 0h1m1 0h2m1 0h2m1 0h1m3 0h1m1 0h1m1 0h3m3 0h2m3 0h3m1 0h2m1 0h2m2 0h1m1 0h3m3 0h2m2 0h1m1 0h2m1 0h3m1 0h1m1 0h1m2 0h1m1 0h1m3 0h2m2 0h4m1 0h3m1 0h1m2 0h1m1 0h3m3 0h4M1 79.5h1m1 0h3m1 0h1m1 0h1m1 0h1m2 0h1m1 0h1m3 0h2m3 0h1m1 0h3m1 0h1m1 0h2m2 0h3m2 0h2m1 0h2m2 0h1m2 0h2m1 0h1m1 0h4m1 0h3m1 0h1m2 0h1m1 0h3m1 0h3m1 0h1m1 0h1m2 0h6m1 0h1m1 0h1m1 0h4m2 0h1m1 0h1m1 0h1m1 0h2M1 80.5h5m3 0h2m1 0h1m1 0h1m5 0h2m4 0h1m1 0h2m3 0h1m1 0h3m1 0h2m1 0h2m1 0h1m2 0h1m1 0h2m1 0h1m3 0h1m4 0h1m2 0h3m3 0h5m1 0h1m3 0h2m1 0h2m1 0h4m2 0h2m1 0h1m1 0h1m2 0h1m3 0h3M2 81.5h2m1 0h6m1 0h1m2 0h1m5 0h2m1 0h11m1 0h2m3 0h1m1 0h1m1 0h2m1 0h2m3 0h5m1 0h3m2 0h1m2 0h1m1 0h2m1 0h2m1 0h8m1 0h5m1 0h2m1 0h2m1 0h3m1 0h8M1 82.5h2m1 0h1m1 0h1m1 0h2m2 0h1m2 0h1m3 0h1m3 0h3m1 0h4m3 0h1m1 0h8m4 0h1m1 0h6m2 0h1m1 0h1m2 0h2m1 0h2m2 0h1m1 0h2m1 0h1m1 0h1m1 0h4m1 0h2m1 0h3m1 0h1m2 0h1m4 0h1m1 0h3m1 0h4M1 83.5h2m2 0h1m1 0h1m1 0h1m4 0h1m3 0h1m3 0h2m2 0h5m3 0h1m2 0h1m1 0h2m1 0h2m1 0h1m2 0h1m1 0h3m1 0h2m2 0h1m1 0h1m1 0h3m1 0h1m1 0h1m2 0h6m3 0h1m1 0h3m3 0h2m1 0h2m1 0h4m2 0h2m2 0h2m1 0h2M1 84.5h4m1 0h1m3 0h2m2 0h2m1 0h1m3 0h1m3 0h1m1 0h5m1 0h2m1 0h2m5 0h1m1 0h5m3 0h1m1 0h2m1 0h4m1 0h1m2 0h4m1 0h1m1 0h2m3 0h1m1 0h1m2 0h1m1 0h2m1 0h3m2 0h1m2 0h3m1 0h1m1 0h1m1 0h4M2 85.5h1m2 0h1m1 0h2m1 0h5m3 0h2m1 0h4m1 0h5m1 0h2m1 0h1m3 0h3m1 0h1m1 0h1m2 0h3m1 0h2m3 0h2m1 0h2m2 0h1m1 0h1m1 0h2m1 0h4m1 0h1m1 0h3m2 0h1m1 0h3m2 0h2m1 0h1m1 0h1m2 0h1m1 0h4m2 0h2m1 0h1M3 86.5h2m1 0h1m2 0h2m7 0h1m2 0h2m2 0h2m2 0h3m1 0h8m1 0h2m2 0h1m2 0h1m1 0h4m2 0h2m2 0h1m1 0h5m2 0h1m1 0h2m1 0h1m1 0h2m2 0h2m4 0h1m3 0h1m1 0h2m4 0h1m2 0h2m1 0h2m2 0h1M1 87.5h3m3 0h1m1 0h1m1 0h1m4 0h1m2 0h1m3 0h4m2 0h3m2 0h1m4 0h1m1 0h2m1 0h1m3 0h2m1 0h4m3 0h1m2 0h3m1 0h3m1 0h1m1 0h2m1 0h1m1 0h4m2 0h1m2 0h2m2 0h1m1 0h1m1 0h5m1 0h1m3 0h2m2 0h2M1 88.5h1m1 0h1m5 0h3m1 0h3m4 0h1m2 0h1m1 0h3m1 0h2m3 0h4m6 0h2m1 0h1m2 0h2m2 0h1m1 0h1m2 0h4m1 0h1m2 0h7m5 0h2m3 0h1m1 0h1m2 0h1m2 0h1m5 0h3m3 0h1m1 0h2M2 89.5h3m2 0h1m5 0h1m1 0h2m2 0h1m3 0h5m1 0h2m1 0h1m1 0h2m4 0h3m2 0h1m1 0h3m1 0h1m1 0h2m2 0h2m1 0h2m1 0h2m1 0h1m2 0h1m2 0h3m1 0h1m2 0h4m1 0h2m1 0h3m4 0h3m1 0h5m1 0h5M1 90.5h1m2 0h1m5 0h3m1 0h2m1 0h4m1 0h2m3 0h1m1 0h4m2 0h1m7 0h1m2 0h1m2 0h1m1 0h1m1 0h4m1 0h1m4 0h6m1 0h1m1 0h2m1 0h1m1 0h2m3 0h1m4 0h1m3 0h1m2 0h1m1 0h2m1 0h1m1 0h3m2 0h1M3 91.5h1m2 0h3m2 0h2m4 0h1m6 0h2m1 0h1m2 0h3m1 0h1m1 0h1m2 0h2m4 0h2m1 0h10m2 0h2m1 0h7m1 0h4m1 0h1m1 0h2m1 0h2m1 0h1m4 0h1m1 0h1m2 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1m1 0h1M10 92.5h2m1 0h1m2 0h2m3 0h1m3 0h2m1 0h2m1 0h1m2 0h1m1 0h1m2 0h3m1 0h1m1 0h1m1 0h1m5 0h1m1 0h1m2 0h4m1 0h1m6 0h5m1 0h1m2 0h2m4 0h1m1 0h4m1 0h5m2 0h1m1 0h2m1 0h1m2 0h1M3 93.5h1m1 0h4m6 0h3m1 0h1m4 0h1m1 0h1m1 0h1m1 0h1m4 0h1m1 0h2m6 0h2m1 0h2m3 0h4m3 0h2m1 0h1m3 0h1m1 0h7m1 0h3m3 0h1m2 0h3m1 0h1m1 0h1m4 0h3m1 0h1m2 0h1m2 0h2M9 94.5h2m1 0h2m10 0h2m2 0h2m1 0h1m3 0h1m4 0h1m2 0h2m1 0h1m1 0h2m1 0h2m1 0h2m2 0h1m2 0h1m1 0h1m3 0h1m1 0h2m2 0h1m1 0h1m1 0h2m2 0h2m1 0h1m2 0h1m2 0h2m2 0h1m1 0h1m2 0h1m1 0h3m2 0h4M1 95.5h1m1 0h3m1 0h1m1 0h1m1 0h1m3 0h2m3 0h1m1 0h1m3 0h1m3 0h2m4 0h1m3 0h4m2 0h2m2 0h1m1 0h2m5 0h1m4 0h2m1 0h1m1 0h4m2 0h2m3 0h3m1 0h3m1 0h2m1 0h1m1 0h3m2 0h1m1 0h1m6 0h1m1 0h1M1 96.5h1m2 0h2m6 0h3m3 0h2m4 0h1m1 0h1m2 0h1m3 0h1m1 0h1m4 0h1m2 0h3m2 0h3m2 0h1m2 0h1m1 0h1m1 0h1m1 0h1m2 0h1m3 0h3m1 0h1m1 0h1m1 0h2m3 0h1m2 0h1m1 0h1m1 0h1m2 0h3m2 0h2m1 0h4m1 0h4M1 97.5h3m2 0h3m1 0h1m1 0h1m2 0h2m2 0h1m2 0h7m4 0h5m1 0h1m1 0h2m1 0h2m1 0h3m1 0h7m2 0h3m1 0h1m1 0h2m1 0h1m3 0h1m4 0h2m5 0h4m4 0h2m1 0h2m3 0h4m1 0h4M1 98.5h4m4 0h1m7 0h2m1 0h4m1 0h1m2 0h1m1 0h2m1 0h1m1 0h3m4 0h2m1 0h2m1 0h1m2 0h3m2 0h3m1 0h1m2 0h2m1 0h2m1 0h2m4 0h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h2m1 0h2m1 0h1m2 0h1m2 0h1m2 0h5m1 0h2M2 99.5h4m1 0h1m1 0h1m2 0h1m1 0h1m2 0h2m1 0h2m4 0h1m2 0h3m1 0h3m1 0h1m1 0h1m1 0h3m2 0h3m2 0h8m1 0h2m1 0h2m2 0h1m2 0h1m2 0h2m1 0h2m3 0h1m3 0h2m3 0h2m1 0h2m2 0h1m1 0h6m1 0h2M3 100.5h4m1 0h2m4 0h2m1 0h2m2 0h2m5 0h1m1 0h1m4 0h2m1 0h3m1 0h2m1 0h1m1 0h1m1 0h1m3 0h1m3 0h3m3 0h1m1 0h1m2 0h1m2 0h1m4 0h3m1 0h1m1 0h4m2 0h3m1 0h2m6 0h1m1 0h2m1 0h1M1 101.5h3m1 0h1m1 0h2m3 0h1m3 0h3m1 0h1m4 0h2m2 0h6m2 0h2m1 0h1m2 0h1m1 0h3m1 0h11m1 0h4m1 0h1m3 0h2m1 0h1m2 0h7m1 0h5m2 0h3m1 0h11m2 0h1M9 102.5h1m1 0h2m1 0h1m1 0h1m3 0h1m3 0h3m2 0h1m3 0h1m3 0h1m1 0h4m1 0h2m1 0h1m3 0h1m1 0h1m3 0h1m2 0h1m2 0h1m1 0h6m1 0h2m1 0h1m1 0h1m3 0h2m1 0h1m2 0h1m1 0h3m1 0h2m1 0h1m2 0h1m1 0h1m3 0h1m1 0h2M1 103.5h7m1 0h5m4 0h1m1 0h1m1 0h1m2 0h1m1 0h3m1 0h1m1 0h1m4 0h1m9 0h2m3 0h1m1 0h1m1 0h1m5 0h6m2 0h2m3 0h2m1 0h1m1 0h3m2 0h2m1 0h1m1 0h1m1 0h2m5 0h2m1 0h1m1 0h1m1 0h1M1 104.5h1m5 0h1m2 0h1m1 0h2m3 0h2m1 0h1m6 0h1m1 0h1m3 0h1m2 0h1m2 0h2m5 0h3m1 0h1m2 0h1m3 0h1m1 0h2m1 0h1m3 0h2m2 0h2m1 0h3m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1m4 0h2m1 0h1m1 0h2m1 0h2m3 0h1m1 0h3M1 105.5h1m1 0h3m1 0h1m1 0h7m2 0h2m1 0h3m1 0h2m1 0h6m1 0h2m1 0h1m2 0h1m1 0h1m1 0h1m2 0h2m1 0h1m1 0h10m2 0h2m2 0h1m7 0h5m1 0h1m1 0h1m2 0h1m1 0h1m1 0h4m1 0h3m1 0h6m1 0h1M1 106.5h1m1 0h3m1 0h1m2 0h1m3 0h1m1 0h1m2 0h4m1 0h2m2 0h3m2 0h1m14 0h1m2 0h2m1 0h2m2 0h1m2 0h1m1 0h8m1 0h1m2 0h1m2 0h1m1 0h3m2 0h1m1 0h6m3 0h2m1 0h1m1 0h1m2 0h2m3 0h1M1 107.5h1m1 0h3m1 0h1m3 0h1m1 0h2m3 0h1m2 0h3m1 0h2m2 0h6m3 0h3m3 0h1m2 0h2m1 0h1m2 0h2m3 0h1m1 0h1m1 0h1m2 0h2m1 0h1m8 0h1m3 0h1m1 0h1m3 0h1m1 0h1m6 0h1m1 0h1m2 0h2m1 0h2m1 0h2M1 108.5h1m5 0h1m3 0h1m2 0h8m2 0h6m1 0h3m3 0h1m2 0h2m1 0h1m5 0h1m1 0h6m1 0h1m2 0h2m2 0h1m1 0h4m2 0h3m2 0h1m2 0h1m1 0h2m1 0h2m2 0h2m1 0h1m1 0h1m1 0h1m2 0h1m2 0h2m2 0h2M1 109.5h7m1 0h4m3 0h3m1 0h8m3 0h1m1 0h1m1 0h1m3 0h1m1 0h3m1 0h2m1 0h5m4 0h8m3 0h7m1 0h1m4 0h1m1 0h3m5 0h1m1 0h6m2 0h6m1 0h2"/></svg>
						<figcaption class="text-center">
							<p class="mt-2 text-sm">João Silva Santos</p>
							<p class="text-xs text-muted-foreground">123.456.789-00</p>
						</figcaption>
					</figure>
				</div>
				<div class="flex flex-col items-center-safe">
					<figure>
						<svg class="size-[250px]" xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 107 107" shape-rendering="crispEdges"><path fill="#FFFFFF" d="M0 0h107v107H0z"/><path stroke="#000000" d="M1 1.5h7m5 0h1m1 0h2m2 0h4m1 0h3m2 0h1m1 0h2m1 0h2m1 0h1m1 0h6m5 0h1m1 0h3m6 0h1m2 0h1m1 0h2m1 0h2m1 0h1m1 0h1m1 0h2m1 0h1m5 0h2m1 0h5m2 0h1m3 0h7M1 2.5h1m5 0h1m2 0h2m2 0h2m1 0h1m1 0h2m1 0h7m3 0h1m2 0h4m4 0h4m1 0h1m2 0h1m3 0h1m2 0h1m2 0h3m1 0h1m1 0h2m2 0h3m1 0h2m1 0h1m1 0h3m1 0h1m4 0h1m2 0h1m2 0h1m3 0h1m5 0h1M1 3.5h1m1 0h3m1 0h1m1 0h1m3 0h2m2 0h1m1 0h1m3 0h1m1 0h2m1 0h3m1 0h2m2 0h3m2 0h2m4 0h1m2 0h5m1 0h2m3 0h2m1 0h1m1 0h1m2 0h2m1 0h2m1 0h1m2 0h2m2 0h1m3 0h4m4 0h3m2 0h1m1 0h3m1 0h1M1 4.5h1m1 0h3m1 0h1m1 0h2m1 0h1m2 0h3m2 0h4m8 0h4m1 0h3m1 0h1m1 0h2m3 0h4m2 0h2m1 0h1m2 0h4m2 0h3m3 0h4m2 0h1m1 0h1m1 0h1m1 0h3m5 0h1m4 0h1m1 0h1m1 0h3m1 0h1M1 5.5h1m1 0h3m1 0h1m1 0h3m1 0h1m2 0h1m1 0h1m2 0h10m1 0h2m1 0h2m3 0h6m3 0h10m4 0h2m1 0h3m1 0h1m2 0h7m1 0h1m4 0h1m1 0h5m1 0h1m1 0h2m1 0h1m1 0h3m1 0h1M1 6.5h1m5 0h1m1 0h1m1 0h1m4 0h2m7 0h1m3 0h4m1 0h1m3 0h3m3 0h2m1 0h3m3 0h1m6 0h6m2 0h1m1 0h2m1 0h1m3 0h2m1 0h1m3 0h2m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1m2 0h1m5 0h1M1 7.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M9 8.5h1m1 0h1m2 0h1m1 0h1m2 0h3m3 0h1m3 0h2m1 0h2m1 0h1m1 0h1m2 0h2m4 0h4m3 0h1m1 0h7m2 0h1m1 0h1m1 0h2m1 0h1m1 0h1m3 0h3m1 0h2m1 0h5m1 0h2m1 0h2m2 0h1M1 9.5h1m1 0h5m3 0h1m3 0h1m3 0h11m2 0h4m1 0h2m2 0h2m1 0h1m4 0h6m1 0h1m1 0h1m1 0h3m4 0h2m1 0h1m1 0h7m1 0h1m1 0h1m1 0h3m3 0h3m1 0h1m2 0h1m1 0h5M3 10.5h2m1 0h1m7 0h1m1 0h2m1 0h2m1 0h1m1 0h2m3 0h2m2 0h2m2 0h2m2 0h4m3 0h1m1 0h1m1 0h2m1 0h1m1 0h1m5 0h2m1 0h3m3 0h3m3 0h2m6 0h1m1 0h1m1 0h2m4 0h2m1 0h2m3 0h2M1 11.5h2m3 0h2m2 0h1m1 0h2m1 0h4m1 0h2m1 0h1m1 0h1m2 0h1m1 0h1m1 0h1m2 0h3m1 0h5m3 0h3m4 0h1m5 0h3m4 0h1m1 0h5m3 0h1m1 0h1m1 0h2m2 0h3m2 0h1m2 0h2m1 0h1m3 0h1m2 0h1m1 0h1M1 12.5h1m7 0h1m3 0h3m2 0h5m2 0h3m7 0h1m2 0h4m4 0h4m2 0h1m1 0h4m2 0h2m4 0h3m6 0h4m1 0h1m1 0h3m6 0h1m1 0h3m1 0h3m2 0h1m1 0h1M4 13.5h1m1 0h3m4 0h1m2 0h1m1 0h1m1 0h1m1 0h3m6 0h1m1 0h3m1 0h4m3 0h1m1 0h2m2 0h1m3 0h3m3 0h2m1 0h1m4 0h1m2 0h4m4 0h2m4 0h1m1 0h1m3 0h2m6 0h3m1 0h1m1 0h1M2 14.5h1m1 0h2m4 0h2m1 0h1m1 0h1m1 0h2m1 0h1m1 0h3m2 0h3m1 0h2m1 0h1m1 0h1m1 0h1m1 0h4m4 0h2m2 0h7m3 0h1m1 0h2m3 0h3m1 0h2m1 0h5m4 0h2m1 0h5m3 0h2m1 0h1m1 0h3M1 15.5h1m1 0h1m1 0h1m1 0h4m1 0h1m1 0h1m2 0h2m2 0h1m1 0h1m2 0h2m1 0h2m3 0h1m1 0h1m1 0h1m4 0h1m2 0h7m1 0h3m2 0h3m1 0h2m1 0h2m1 0h1m1 0h7m7 0h1m1 0h1m1 0h1m1 0h2m1 0h1m2 0h2m1 0h6M4 16.5h3m1 0h6m3 0h1m1 0h4m1 0h1m1 0h2m2 0h1m1 0h2m2 0h2m2 0h2m1 0h1m1 0h1m1 0h4m4 0h1m2 0h1m3 0h2m3 0h2m1 0h1m2 0h2m2 0h3m2 0h2m1 0h1m1 0h2m2 0h3m1 0h1m2 0h1m3 0h1M1 17.5h12m1 0h1m1 0h4m1 0h2m4 0h2m1 0h2m2 0h1m2 0h2m5 0h1m2 0h2m7 0h1m2 0h5m2 0h3m2 0h1m1 0h2m3 0h1m1 0h1m2 0h4m3 0h3m1 0h1m2 0h1m3 0h1M1 18.5h2m1 0h3m5 0h1m2 0h1m1 0h1m2 0h2m1 0h2m1 0h1m3 0h1m1 0h3m5 0h4m2 0h1m1 0h2m4 0h2m1 0h2m1 0h3m2 0h4m9 0h4m2 0h3m4 0h1m1 0h2m1 0h4m3 0h3M5 19.5h1m1 0h1m1 0h3m1 0h1m1 0h1m3 0h1m2 0h2m1 0h1m1 0h2m3 0h1m4 0h1m2 0h2m2 0h2m1 0h1m1 0h1m1 0h2m1 0h2m1 0h1m1 0h1m1 0h1m6 0h1m3 0h4m1 0h2m1 0h1m1 0h2m3 0h2m1 0h1m2 0h1m1 0h2m1 0h3m1 0h2M4 20.5h3m3 0h2m3 0h3m1 0h3m2 0h1m1 0h2m2 0h1m2 0h3m4 0h1m1 0h1m3 0h1m1 0h1m1 0h2m3 0h1m1 0h2m1 0h1m1 0h2m2 0h1m1 0h1m2 0h1m7 0h2m1 0h1m1 0h1m8 0h1m4 0h1m3 0h3M2 21.5h1m3 0h5m2 0h1m1 0h2m1 0h1m2 0h1m1 0h1m3 0h2m1 0h1m2 0h2m1 0h1m3 0h2m1 0h2m1 0h1m1 0h2m4 0h3m1 0h2m1 0h3m2 0h1m1 0h1m3 0h4m2 0h1m1 0h1m1 0h5m3 0h2m1 0h1m1 0h1m1 0h2m1 0h1m1 0h2m1 0h1M2 22.5h3m4 0h2m1 0h1m1 0h6m1 0h1m1 0h1m1 0h1m2 0h2m3 0h1m2 0h1m1 0h1m1 0h4m1 0h1m3 0h2m2 0h5m2 0h1m1 0h1m1 0h1m1 0h4m2 0h2m2 0h6m3 0h2m2 0h3m1 0h1m2 0h5m2 0h1M1 23.5h3m2 0h2m4 0h1m5 0h2m3 0h5m3 0h2m2 0h2m2 0h3m1 0h1m2 0h4m5 0h1m1 0h2m7 0h10m3 0h2m5 0h1m3 0h1m2 0h1m1 0h1m1 0h2m2 0h3M2 24.5h1m1 0h2m4 0h2m1 0h1m3 0h1m2 0h1m3 0h2m6 0h3m2 0h3m3 0h5m1 0h2m3 0h1m3 0h2m1 0h1m1 0h1m1 0h3m2 0h1m1 0h1m3 0h1m1 0h2m1 0h1m5 0h3m1 0h2m4 0h2m1 0h1m1 0h1m1 0h1M2 25.5h12m5 0h2m1 0h9m1 0h6m1 0h5m1 0h1m2 0h6m1 0h2m1 0h1m1 0h5m1 0h3m1 0h2m1 0h6m1 0h1m1 0h6m4 0h2m2 0h6m1 0h1M2 26.5h1m2 0h1m3 0h4m1 0h1m1 0h3m1 0h1m1 0h1m1 0h2m3 0h1m2 0h5m1 0h1m1 0h1m1 0h4m3 0h1m3 0h3m1 0h1m3 0h2m2 0h4m3 0h2m3 0h3m1 0h2m1 0h3m3 0h2m4 0h2m3 0h1m3 0h1M1 27.5h1m1 0h3m1 0h1m1 0h1m1 0h2m1 0h1m6 0h1m3 0h1m1 0h1m1 0h1m1 0h1m4 0h2m1 0h2m4 0h1m1 0h3m1 0h1m1 0h1m1 0h1m2 0h1m1 0h2m2 0h1m3 0h4m1 0h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h4m2 0h1m2 0h1m2 0h1m1 0h1m1 0h3m1 0h1M1 28.5h5m3 0h1m6 0h2m1 0h1m1 0h1m1 0h3m3 0h1m2 0h1m1 0h2m3 0h3m1 0h4m2 0h1m3 0h6m1 0h1m1 0h2m1 0h1m5 0h3m3 0h1m2 0h1m4 0h1m1 0h1m2 0h1m3 0h1m2 0h1m3 0h4M1 29.5h1m1 0h1m1 0h5m3 0h2m2 0h2m5 0h6m1 0h1m2 0h3m2 0h2m1 0h2m3 0h7m1 0h1m4 0h5m3 0h1m1 0h1m1 0h6m1 0h2m2 0h1m1 0h2m3 0h2m5 0h7m1 0h1M2 30.5h1m2 0h1m5 0h1m3 0h1m4 0h1m1 0h2m2 0h1m2 0h1m3 0h1m1 0h2m1 0h3m2 0h3m8 0h2m2 0h1m3 0h1m2 0h1m1 0h1m5 0h3m2 0h3m1 0h1m2 0h2m1 0h5m4 0h1m2 0h1m2 0h3M3 31.5h2m1 0h6m1 0h3m4 0h2m4 0h1m1 0h1m1 0h1m2 0h2m1 0h3m2 0h2m7 0h3m1 0h3m2 0h1m1 0h3m1 0h2m1 0h3m1 0h1m1 0h1m1 0h1m2 0h1m3 0h2m3 0h1m2 0h2m2 0h2m3 0h1m1 0h3M1 32.5h1m4 0h1m2 0h1m1 0h2m5 0h3m1 0h4m2 0h1m2 0h1m1 0h1m1 0h1m2 0h1m2 0h3m2 0h2m1 0h2m2 0h1m3 0h2m1 0h1m1 0h1m1 0h2m1 0h1m3 0h1m1 0h1m1 0h1m1 0h6m1 0h2m3 0h1m2 0h2m3 0h2m6 0h1M1 33.5h2m1 0h1m2 0h3m2 0h4m7 0h1m2 0h1m1 0h5m4 0h3m4 0h1m1 0h3m2 0h2m3 0h1m4 0h2m4 0h2m2 0h1m2 0h5m4 0h3m1 0h4m1 0h1m1 0h1m2 0h1m1 0h1m4 0h2M1 34.5h1m1 0h1m1 0h2m1 0h2m2 0h1m2 0h5m1 0h1m2 0h1m4 0h1m2 0h3m1 0h1m1 0h2m1 0h3m1 0h1m3 0h2m3 0h2m1 0h1m4 0h1m1 0h4m1 0h2m2 0h1m2 0h1m4 0h6m2 0h4m1 0h1m1 0h1m6 0h1m1 0h1M3 35.5h1m3 0h2m1 0h2m3 0h1m1 0h1m2 0h2m2 0h1m2 0h2m2 0h3m5 0h3m2 0h1m3 0h3m3 0h2m2 0h1m1 0h1m3 0h2m2 0h1m2 0h3m4 0h2m3 0h3m1 0h1m4 0h2m1 0h5m3 0h1M2 36.5h3m1 0h1m5 0h1m1 0h2m1 0h11m3 0h1m1 0h2m6 0h2m5 0h2m1 0h2m2 0h2m4 0h6m2 0h1m4 0h2m1 0h1m2 0h1m1 0h1m2 0h3m1 0h1m3 0h6m1 0h1m1 0h1M2 37.5h4m1 0h2m1 0h1m1 0h2m2 0h2m1 0h5m3 0h2m1 0h2m1 0h2m9 0h1m2 0h1m2 0h1m1 0h2m2 0h1m1 0h1m1 0h3m5 0h1m2 0h2m1 0h1m4 0h2m1 0h4m2 0h1m1 0h3m5 0h2M2 38.5h2m1 0h1m2 0h1m1 0h2m1 0h3m1 0h2m1 0h2m1 0h3m2 0h2m1 0h4m1 0h4m3 0h3m4 0h1m3 0h3m1 0h1m3 0h1m1 0h4m1 0h1m3 0h2m4 0h1m2 0h2m1 0h2m3 0h2m5 0h1m3 0h3m1 0h1M2 39.5h1m1 0h2m1 0h1m1 0h1m1 0h2m1 0h1m1 0h1m3 0h1m1 0h2m2 0h2m1 0h2m1 0h2m1 0h2m3 0h1m1 0h1m6 0h2m1 0h2m1 0h2m1 0h2m1 0h1m2 0h2m1 0h1m4 0h1m1 0h1m13 0h1m2 0h1m1 0h2m1 0h1m1 0h3m1 0h3M1 40.5h1m2 0h2m2 0h2m1 0h1m3 0h2m1 0h1m4 0h1m1 0h1m1 0h5m1 0h2m1 0h3m4 0h1m2 0h3m2 0h2m1 0h4m1 0h3m1 0h5m1 0h3m2 0h1m1 0h1m1 0h1m1 0h3m2 0h2m5 0h2m2 0h1m1 0h1m1 0h3m1 0h1M2 41.5h1m1 0h1m2 0h1m3 0h1m1 0h1m1 0h2m1 0h5m1 0h3m1 0h4m3 0h3m1 0h2m1 0h3m1 0h2m3 0h5m4 0h2m1 0h1m4 0h1m1 0h1m3 0h1m2 0h3m1 0h5m1 0h1m2 0h1m1 0h1m4 0h2m3 0h2m1 0h1M2 42.5h2m1 0h1m2 0h1m3 0h1m5 0h2m1 0h1m1 0h1m1 0h4m2 0h1m2 0h1m1 0h1m3 0h5m4 0h1m4 0h3m4 0h2m3 0h2m6 0h3m2 0h6m2 0h1m1 0h1m6 0h1m1 0h1m1 0h1m2 0h1m1 0h1M2 43.5h2m1 0h5m1 0h3m1 0h1m2 0h2m1 0h1m4 0h1m2 0h1m3 0h1m4 0h2m2 0h1m2 0h3m2 0h1m1 0h1m3 0h1m3 0h2m3 0h1m2 0h1m1 0h1m2 0h1m2 0h3m1 0h1m1 0h5m2 0h2m1 0h3m1 0h2m2 0h6M5 44.5h1m3 0h1m1 0h2m3 0h4m2 0h2m4 0h2m1 0h3m1 0h2m1 0h1m1 0h1m2 0h2m2 0h1m1 0h1m1 0h1m2 0h2m3 0h1m2 0h4m4 0h1m1 0h1m1 0h4m1 0h8m1 0h1m2 0h1m1 0h6m1 0h5M1 45.5h2m1 0h1m2 0h1m2 0h1m2 0h1m3 0h4m1 0h1m3 0h1m1 0h3m2 0h3m2 0h3m2 0h2m1 0h3m1 0h5m1 0h1m2 0h3m1 0h1m2 0h1m1 0h1m2 0h2m1 0h1m1 0h3m5 0h4m4 0h1m9 0h4M3 46.5h1m2 0h1m1 0h2m2 0h6m1 0h1m1 0h1m2 0h2m1 0h3m2 0h1m1 0h1m2 0h2m2 0h3m7 0h1m3 0h1m1 0h2m2 0h2m1 0h4m5 0h1m1 0h1m2 0h2m5 0h1m3 0h4m3 0h4m2 0h4M1 47.5h2m2 0h1m1 0h1m2 0h1m1 0h1m1 0h2m5 0h2m1 0h3m1 0h2m1 0h2m1 0h1m3 0h1m1 0h1m2 0h1m1 0h1m1 0h1m1 0h2m2 0h2m4 0h1m1 0h1m2 0h1m2 0h4m2 0h2m2 0h2m1 0h1m2 0h1m2 0h1m2 0h3m1 0h2m1 0h2m1 0h2m1 0h2m1 0h1M2 48.5h1m1 0h1m1 0h1m3 0h1m1 0h1m2 0h1m1 0h1m1 0h1m2 0h1m2 0h1m2 0h1m1 0h3m4 0h2m3 0h3m1 0h1m6 0h1m2 0h4m1 0h2m1 0h1m1 0h2m3 0h3m2 0h6m3 0h1m2 0h1m2 0h1m1 0h1m4 0h1m2 0h1M1 49.5h2m1 0h6m3 0h2m1 0h1m2 0h1m1 0h2m1 0h6m1 0h2m4 0h1m1 0h1m3 0h2m2 0h1m1 0h5m1 0h1m4 0h2m6 0h1m1 0h1m1 0h6m1 0h2m1 0h1m1 0h2m1 0h1m2 0h1m1 0h1m1 0h1m2 0h5M1 50.5h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1m2 0h1m1 0h1m1 0h4m1 0h1m3 0h3m2 0h1m2 0h3m1 0h1m1 0h7m3 0h3m4 0h3m1 0h1m1 0h3m3 0h2m3 0h5m4 0h1m3 0h1m2 0h3m1 0h1m3 0h2M1 51.5h1m2 0h2m1 0h1m1 0h1m3 0h1m1 0h1m2 0h1m1 0h1m1 0h4m1 0h1m1 0h2m1 0h1m3 0h4m1 0h3m3 0h1m1 0h1m1 0h1m1 0h1m1 0h5m1 0h2m1 0h1m2 0h1m2 0h2m1 0h1m1 0h1m1 0h4m1 0h1m1 0h2m1 0h1m2 0h2m1 0h1m3 0h1m1 0h1m1 0h1m2 0h1M1 52.5h5m3 0h3m1 0h1m1 0h1m1 0h2m1 0h2m1 0h1m1 0h1m3 0h2m6 0h1m2 0h1m1 0h1m2 0h2m2 0h1m3 0h1m3 0h1m7 0h6m1 0h2m3 0h5m1 0h3m1 0h4m1 0h3m2 0h1m3 0h4M2 53.5h1m1 0h6m6 0h1m2 0h3m2 0h8m4 0h1m5 0h1m1 0h1m3 0h7m1 0h1m1 0h1m1 0h2m1 0h2m8 0h5m2 0h1m2 0h4m5 0h1m1 0h1m1 0h6m2 0h1M3 54.5h1m2 0h1m5 0h3m1 0h3m1 0h3m2 0h1m6 0h2m1 0h3m2 0h1m1 0h4m2 0h2m2 0h1m1 0h2m1 0h2m1 0h3m2 0h3m1 0h1m2 0h4m1 0h4m5 0h1m2 0h4m1 0h2m1 0h1m2 0h1M1 55.5h3m3 0h1m1 0h1m1 0h2m1 0h1m2 0h1m1 0h2m1 0h1m2 0h3m4 0h2m1 0h3m1 0h1m4 0h1m4 0h3m5 0h1m1 0h1m4 0h3m1 0h1m1 0h1m1 0h1m1 0h3m2 0h2m1 0h1m2 0h1m1 0h3m3 0h1m2 0h4m4 0h1M2 56.5h2m1 0h1m2 0h3m2 0h2m1 0h1m3 0h3m2 0h1m1 0h10m1 0h3m1 0h1m1 0h7m1 0h6m2 0h6m1 0h2m2 0h3m2 0h1m2 0h1m1 0h2m4 0h1m3 0h3m1 0h2m2 0h3m1 0h2M6 57.5h10m4 0h1m1 0h1m2 0h1m1 0h1m3 0h2m1 0h1m5 0h1m1 0h2m2 0h1m3 0h2m2 0h3m2 0h3m1 0h1m2 0h2m2 0h1m3 0h4m2 0h1m2 0h4m5 0h1m3 0h1m1 0h1M2 58.5h1m1 0h1m8 0h2m2 0h1m1 0h1m1 0h2m2 0h1m3 0h3m1 0h2m2 0h1m2 0h5m4 0h2m1 0h1m2 0h1m1 0h2m3 0h1m3 0h2m10 0h3m5 0h1m1 0h1m1 0h3m4 0h1m1 0h1m4 0h1M1 59.5h1m2 0h4m1 0h2m3 0h2m1 0h2m3 0h1m1 0h1m1 0h2m1 0h3m1 0h2m2 0h3m6 0h1m1 0h1m1 0h1m3 0h1m4 0h3m1 0h1m1 0h3m4 0h3m4 0h2m1 0h1m1 0h4m3 0h1m1 0h2m1 0h4m2 0h4M2 60.5h2m1 0h1m2 0h5m2 0h1m2 0h3m1 0h3m4 0h1m1 0h2m1 0h1m9 0h3m1 0h3m2 0h3m2 0h7m2 0h3m2 0h3m3 0h7m1 0h1m1 0h1m1 0h2m5 0h1m1 0h1m4 0h1M2 61.5h2m3 0h3m1 0h1m1 0h3m5 0h1m2 0h2m2 0h1m2 0h1m5 0h6m3 0h1m1 0h2m2 0h2m1 0h2m1 0h1m1 0h3m3 0h2m1 0h3m3 0h1m1 0h2m4 0h3m1 0h1m3 0h2m5 0h1m1 0h2m1 0h3M1 62.5h1m1 0h1m1 0h1m2 0h2m1 0h4m1 0h1m4 0h2m1 0h1m4 0h1m2 0h4m1 0h8m3 0h1m1 0h1m3 0h2m1 0h2m1 0h3m1 0h2m1 0h4m1 0h4m2 0h2m6 0h1m1 0h5m1 0h1m2 0h3m2 0h1m1 0h2M3 63.5h6m1 0h1m1 0h1m1 0h2m1 0h3m4 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h3m2 0h1m2 0h1m1 0h1m2 0h2m1 0h1m2 0h1m1 0h1m1 0h2m5 0h1m1 0h2m1 0h1m1 0h3m2 0h1m1 0h1m1 0h1m1 0h3m2 0h1m1 0h3m1 0h4m3 0h2M1 64.5h2m2 0h2m1 0h2m3 0h1m1 0h1m2 0h1m1 0h1m1 0h2m1 0h2m4 0h2m1 0h2m1 0h2m5 0h1m2 0h4m1 0h1m3 0h7m1 0h1m4 0h2m1 0h2m1 0h2m1 0h2m4 0h1m1 0h1m1 0h3m7 0h3m2 0h2M1 65.5h1m2 0h1m1 0h3m2 0h2m4 0h1m1 0h2m1 0h6m1 0h1m3 0h1m4 0h1m2 0h4m1 0h3m1 0h3m2 0h2m1 0h4m4 0h1m1 0h1m2 0h1m1 0h4m1 0h3m1 0h1m1 0h4m4 0h1m1 0h5m2 0h1m3 0h1M4 66.5h1m1 0h1m3 0h4m1 0h1m2 0h4m1 0h2m4 0h1m1 0h1m2 0h1m3 0h2m1 0h4m3 0h3m2 0h3m1 0h1m2 0h1m1 0h1m1 0h1m1 0h2m4 0h1m3 0h6m4 0h1m4 0h1m5 0h4m4 0h1M1 67.5h1m1 0h1m1 0h5m4 0h3m1 0h1m3 0h1m3 0h1m1 0h2m2 0h1m1 0h2m9 0h1m2 0h2m2 0h2m1 0h2m4 0h1m3 0h6m2 0h1m4 0h2m4 0h2m1 0h4m2 0h2m1 0h2m1 0h6M1 68.5h1m2 0h1m1 0h1m2 0h2m3 0h3m1 0h4m3 0h1m2 0h1m4 0h1m2 0h1m1 0h2m2 0h2m1 0h2m1 0h2m3 0h4m3 0h1m1 0h3m1 0h2m4 0h5m1 0h3m1 0h2m3 0h3m2 0h2m2 0h1m1 0h1m1 0h1m3 0h1M7 69.5h1m1 0h1m1 0h3m4 0h3m1 0h2m1 0h1m3 0h1m3 0h3m2 0h1m2 0h1m1 0h2m1 0h2m1 0h1m1 0h3m1 0h2m2 0h1m6 0h3m2 0h1m1 0h2m1 0h3m1 0h1m2 0h3m1 0h1m8 0h1m1 0h1m2 0h1m1 0h3M6 70.5h1m2 0h2m5 0h1m2 0h1m3 0h2m1 0h1m1 0h4m1 0h3m2 0h1m1 0h5m3 0h1m1 0h3m1 0h3m1 0h3m1 0h1m1 0h1m2 0h1m1 0h1m2 0h2m4 0h2m5 0h2m1 0h6m5 0h1m2 0h2m1 0h1M2 71.5h3m1 0h4m2 0h1m1 0h2m1 0h6m4 0h1m2 0h1m2 0h2m1 0h1m2 0h3m1 0h2m4 0h1m1 0h1m3 0h2m2 0h1m2 0h1m3 0h1m3 0h1m3 0h1m4 0h2m1 0h1m3 0h4m1 0h3m1 0h4m1 0h4M2 72.5h1m1 0h3m4 0h1m1 0h6m1 0h1m1 0h1m7 0h3m1 0h2m1 0h1m1 0h1m3 0h2m1 0h5m1 0h1m1 0h1m3 0h1m5 0h2m1 0h4m1 0h3m2 0h1m2 0h4m1 0h1m1 0h3m4 0h2m1 0h2m4 0h2M1 73.5h9m1 0h3m1 0h2m1 0h1m1 0h1m2 0h1m1 0h9m2 0h2m2 0h3m1 0h1m1 0h11m2 0h3m4 0h1m6 0h5m1 0h1m2 0h4m5 0h2m1 0h9M1 74.5h2m1 0h2m3 0h1m1 0h1m1 0h5m1 0h1m1 0h3m1 0h1m3 0h1m2 0h1m2 0h1m1 0h1m1 0h1m3 0h2m4 0h1m3 0h3m2 0h1m2 0h2m2 0h1m1 0h2m4 0h1m3 0h4m5 0h1m3 0h2m5 0h1m3 0h2m1 0h2M5 75.5h1m1 0h1m1 0h2m2 0h1m2 0h2m1 0h2m2 0h3m1 0h1m1 0h1m1 0h1m3 0h1m1 0h1m2 0h1m1 0h1m2 0h1m3 0h1m1 0h1m1 0h3m4 0h2m4 0h1m1 0h1m2 0h1m1 0h1m1 0h1m1 0h2m1 0h1m1 0h2m3 0h5m1 0h2m1 0h2m1 0h1m1 0h3M1 76.5h2m2 0h1m3 0h3m3 0h1m1 0h1m1 0h3m2 0h2m3 0h1m1 0h3m2 0h3m2 0h1m1 0h1m1 0h3m1 0h1m3 0h3m2 0h3m1 0h1m2 0h1m1 0h2m1 0h1m1 0h2m3 0h1m1 0h2m3 0h2m1 0h1m1 0h1m1 0h3m3 0h1m3 0h4M2 77.5h1m1 0h7m3 0h1m1 0h2m3 0h2m2 0h6m1 0h3m1 0h1m1 0h7m1 0h2m1 0h5m1 0h2m2 0h1m1 0h1m1 0h1m2 0h1m1 0h1m2 0h1m1 0h8m1 0h1m1 0h4m2 0h1m1 0h1m1 0h8m3 0h1M2 78.5h3m1 0h1m1 0h6m2 0h1m1 0h1m1 0h1m1 0h1m4 0h2m1 0h8m2 0h1m1 0h3m6 0h1m2 0h2m4 0h1m1 0h1m5 0h1m3 0h1m4 0h4m3 0h3m1 0h1m1 0h4m4 0h1m6 0h1M1 79.5h3m1 0h1m1 0h2m1 0h1m2 0h1m3 0h1m2 0h1m1 0h1m4 0h2m3 0h1m1 0h1m2 0h1m1 0h2m1 0h3m1 0h1m3 0h1m1 0h1m1 0h1m3 0h1m2 0h2m1 0h3m1 0h3m2 0h1m1 0h2m1 0h2m1 0h3m3 0h3m1 0h1m1 0h3m2 0h1m3 0h2M4 80.5h3m1 0h3m4 0h2m1 0h2m1 0h1m2 0h2m2 0h5m3 0h1m2 0h1m2 0h2m3 0h3m6 0h1m3 0h1m2 0h1m1 0h1m1 0h1m1 0h1m2 0h1m1 0h1m3 0h2m1 0h4m1 0h2m1 0h1m4 0h6m3 0h2M3 81.5h1m2 0h5m1 0h1m1 0h5m4 0h2m1 0h6m3 0h2m4 0h2m1 0h1m4 0h2m1 0h1m1 0h3m4 0h3m3 0h2m1 0h1m3 0h1m1 0h1m1 0h3m1 0h1m2 0h2m3 0h1m1 0h1m3 0h1m5 0h4M1 82.5h4m1 0h1m3 0h3m4 0h2m1 0h3m4 0h1m1 0h1m3 0h5m3 0h4m3 0h1m5 0h2m4 0h1m1 0h1m1 0h1m1 0h1m9 0h1m1 0h2m1 0h1m4 0h1m1 0h1m1 0h2m1 0h1m3 0h2m1 0h1m2 0h2M6 83.5h2m5 0h2m1 0h2m2 0h1m1 0h4m3 0h2m4 0h1m2 0h6m1 0h1m3 0h2m2 0h4m1 0h1m1 0h2m1 0h5m1 0h2m4 0h5m4 0h1m5 0h1m1 0h2m1 0h3m1 0h2m1 0h3M1 84.5h3m1 0h1m4 0h2m3 0h1m2 0h1m2 0h3m1 0h5m2 0h3m3 0h1m1 0h1m2 0h1m1 0h1m4 0h1m3 0h3m2 0h1m1 0h1m1 0h2m2 0h2m3 0h4m2 0h1m1 0h1m4 0h2m2 0h1m4 0h2m1 0h2m1 0h1m1 0h3M1 85.5h5m1 0h2m1 0h2m4 0h1m1 0h1m1 0h3m1 0h3m1 0h1m1 0h7m2 0h4m1 0h1m1 0h2m1 0h1m2 0h2m2 0h1m1 0h4m5 0h2m7 0h5m1 0h5m1 0h1m2 0h2m8 0h1m2 0h2M1 86.5h1m1 0h1m4 0h2m1 0h2m1 0h2m2 0h1m7 0h5m2 0h1m2 0h2m2 0h1m1 0h2m1 0h1m4 0h2m2 0h3m5 0h1m2 0h3m2 0h1m1 0h4m2 0h4m2 0h3m3 0h3m5 0h1m6 0h1M1 87.5h3m3 0h2m1 0h2m3 0h4m4 0h1m2 0h2m2 0h2m1 0h2m1 0h4m2 0h1m1 0h2m3 0h1m3 0h1m2 0h1m4 0h1m1 0h3m1 0h2m5 0h1m1 0h1m3 0h2m2 0h3m1 0h1m1 0h2m2 0h5m3 0h2M2 88.5h1m1 0h1m1 0h1m2 0h1m1 0h2m3 0h1m2 0h3m2 0h1m1 0h1m1 0h1m1 0h2m1 0h3m4 0h2m1 0h2m3 0h2m4 0h1m2 0h1m3 0h1m1 0h2m6 0h2m2 0h1m3 0h1m1 0h2m1 0h1m2 0h1m1 0h1m3 0h1m1 0h1m7 0h2M3 89.5h5m2 0h1m1 0h2m1 0h1m1 0h1m1 0h3m1 0h1m2 0h1m1 0h1m5 0h2m2 0h3m1 0h2m1 0h1m1 0h1m2 0h1m1 0h5m1 0h4m1 0h1m3 0h2m1 0h2m2 0h1m2 0h4m1 0h1m2 0h1m2 0h1m1 0h4m1 0h2m2 0h1m2 0h3M3 90.5h1m5 0h1m3 0h1m2 0h2m1 0h2m2 0h1m1 0h1m1 0h1m6 0h3m1 0h1m2 0h3m6 0h2m2 0h2m4 0h2m2 0h4m1 0h2m4 0h1m1 0h4m1 0h1m1 0h3m2 0h4m4 0h2m2 0h5M1 91.5h1m2 0h4m1 0h1m1 0h3m2 0h1m5 0h4m2 0h1m1 0h1m1 0h3m1 0h1m1 0h1m2 0h4m1 0h1m4 0h1m1 0h2m3 0h2m2 0h4m3 0h1m1 0h1m4 0h1m1 0h1m2 0h1m1 0h1m2 0h1m2 0h3m1 0h3m1 0h4m1 0h2M8 92.5h2m2 0h2m4 0h2m2 0h2m1 0h1m5 0h3m8 0h1m4 0h4m1 0h1m5 0h1m1 0h2m2 0h1m1 0h5m2 0h1m7 0h2m2 0h1m3 0h4m1 0h1m2 0h2m3 0h3M1 93.5h1m1 0h1m1 0h1m1 0h1m2 0h1m2 0h1m1 0h1m2 0h3m1 0h3m1 0h2m1 0h7m1 0h5m2 0h1m1 0h1m1 0h1m1 0h1m3 0h3m2 0h5m2 0h3m2 0h1m2 0h1m3 0h3m2 0h4m3 0h1m1 0h2m4 0h1m2 0h1m1 0h2M1 94.5h1m8 0h4m1 0h1m2 0h1m1 0h2m2 0h1m2 0h2m4 0h2m2 0h1m1 0h1m3 0h1m8 0h1m1 0h2m1 0h2m1 0h3m2 0h5m2 0h1m3 0h1m1 0h2m1 0h1m3 0h2m2 0h4m5 0h1m1 0h1m2 0h2M1 95.5h3m3 0h1m1 0h1m1 0h1m1 0h5m1 0h1m3 0h2m1 0h3m1 0h3m2 0h2m1 0h3m1 0h1m9 0h1m1 0h1m1 0h1m2 0h1m1 0h4m2 0h2m1 0h2m1 0h1m2 0h1m2 0h1m1 0h2m1 0h6m4 0h4m4 0h3M3 96.5h1m1 0h2m2 0h2m1 0h2m1 0h1m5 0h1m3 0h1m1 0h1m2 0h1m1 0h3m1 0h4m1 0h1m6 0h2m1 0h1m6 0h3m2 0h4m1 0h1m1 0h2m2 0h2m2 0h2m1 0h2m7 0h2m3 0h3m1 0h3m2 0h1M4 97.5h2m1 0h1m5 0h1m1 0h2m1 0h1m1 0h1m4 0h5m1 0h3m2 0h2m2 0h2m2 0h1m1 0h2m1 0h5m2 0h1m1 0h1m2 0h1m4 0h1m1 0h1m3 0h7m1 0h1m1 0h2m1 0h2m2 0h1m2 0h1m2 0h8m1 0h1M9 98.5h2m2 0h4m1 0h3m1 0h4m3 0h4m2 0h2m1 0h1m2 0h4m3 0h2m3 0h4m5 0h1m1 0h1m1 0h4m3 0h1m3 0h1m2 0h2m2 0h3m2 0h4m1 0h1m1 0h2m3 0h3M1 99.5h7m2 0h1m1 0h1m1 0h2m1 0h4m2 0h1m1 0h1m1 0h1m1 0h2m1 0h1m1 0h1m1 0h3m1 0h1m5 0h1m1 0h2m1 0h1m1 0h1m1 0h3m2 0h1m1 0h4m1 0h1m1 0h2m2 0h1m1 0h1m1 0h2m1 0h2m2 0h2m4 0h1m2 0h3m1 0h1m1 0h1m1 0h4M1 100.5h1m5 0h1m1 0h8m2 0h2m2 0h3m3 0h8m2 0h2m1 0h3m2 0h1m1 0h1m3 0h3m2 0h2m6 0h1m1 0h2m2 0h2m3 0h1m1 0h1m1 0h8m1 0h3m2 0h1m1 0h1m3 0h3M1 101.5h1m1 0h3m1 0h1m1 0h2m1 0h1m3 0h2m2 0h1m1 0h8m1 0h1m5 0h2m3 0h3m1 0h1m1 0h7m1 0h1m1 0h1m1 0h2m1 0h1m3 0h2m4 0h5m2 0h1m1 0h1m1 0h1m1 0h1m5 0h1m3 0h6m3 0h1M1 102.5h1m1 0h3m1 0h1m1 0h1m2 0h4m1 0h1m1 0h3m6 0h1m1 0h1m2 0h1m1 0h2m1 0h1m1 0h5m3 0h1m1 0h1m1 0h6m4 0h1m1 0h1m1 0h3m1 0h1m1 0h1m1 0h1m2 0h4m4 0h2m1 0h1m1 0h4m5 0h2m1 0h2M1 103.5h1m1 0h3m1 0h1m1 0h2m1 0h4m2 0h1m2 0h2m1 0h1m1 0h1m1 0h7m3 0h1m2 0h2m1 0h2m1 0h1m1 0h1m1 0h3m1 0h1m2 0h1m3 0h1m3 0h3m2 0h2m5 0h5m2 0h1m3 0h1m1 0h1m1 0h3m3 0h1m1 0h3M1 104.5h1m5 0h1m6 0h1m1 0h2m4 0h7m2 0h1m2 0h1m4 0h1m4 0h1m3 0h1m1 0h2m1 0h1m8 0h1m1 0h1m3 0h1m1 0h1m2 0h5m1 0h1m4 0h1m1 0h1m1 0h1m2 0h2m1 0h5m1 0h1m1 0h2M1 105.5h7m1 0h1m1 0h1m1 0h7m3 0h2m1 0h1m2 0h1m1 0h2m1 0h2m3 0h1m4 0h1m1 0h1m2 0h2m5 0h1m1 0h4m1 0h1m3 0h2m1 0h4m1 0h1m4 0h1m1 0h2m2 0h2m2 0h1m1 0h1m1 0h1m2 0h1m1 0h1m2 0h3"/></svg>
						<figcaption class="text-center">
							<p class="mt-2 text-sm">Maria Aparecida Costa</p>
							<p class="text-xs text-muted-foreground">987.654.321-00</p>
						</figcaption>
					</figure>
				</div>
			</section>
		</div>
		<footer class="bg-neutral text-neutral-content p-4 mt-8 text-center" style="background-color: #1d1d2b; color: #ebebf5">
			<p class="text-sm font-medium">Trino - Soluções Financeiras Digitais | trinopagamentos.com </p>
		</footer>
	</main>
</body>
</html>
`;
