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
			<section class="grid grid-cols-2 gap-8 mt-12">
				<div class="flex flex-col items-center-safe">
					<figure>
						<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAiIGhlaWdodD0iMjUwIiB2aWV3Qm94PSIwIDAgMTExIDExMSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMCAwaDExMXYxMTFIMHoiLz48cGF0aCBzdHJva2U9IiMwMDAwMDAiIGQ9Ik0xIDEuNWg3bTEgMGg0bTIgMGg1bTEgMGgybTQgMGgxbTEgMGgxbTQgMGgxbTIgMGgzbTEgMGg0bTEgMGgxbTIgMGgxbTEgMGgybTEgMGg1bTEgMGgybTEgMGgybTEgMGg1bTIgMGgxbTEgMGgybTEgMGgybTEgMGgybTEgMGgxbTIgMGgxbTEgMGg0bTEgMGgxbTEgMGgybTMgMGgxbTEgMGg3TTEgMi41aDFtNSAwaDFtMiAwaDFtMSAwaDVtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMyAwaDFtMiAwaDNtMSAwaDJtMSAwaDFtMiAwaDFtMSAwaDFtMSAwaDFtNCAwaDJtMSAwaDFtMiAwaDFtMiAwaDVtMSAwaDFtMiAwaDNtMSAwaDFtMiAwaDJtMSAwaDFtMSAwaDJtMSAwaDZtNCAwaDFtMSAwaDJtMiAwaDFtMSAwaDFtMSAwaDFtNSAwaDFNMSAzLjVoMW0xIDBoM20xIDBoMW0yIDBoMW0yIDBoMW0xIDBoMW0yIDBoMW00IDBoMW0zIDBoMm00IDBoMW0xIDBoMW0xIDBoNW0xIDBoMW0xIDBoM20xIDBoMW0yIDBoMm0yIDBoMW0zIDBoMW0yIDBoM20xIDBoNG0xIDBoMW0xIDBoMW0yIDBoMW0yIDBoNW0xIDBoMW00IDBoM20yIDBoMW0yIDBoM20xIDBoMW0xIDBoM20xIDBoMU0xIDQuNWgxbTEgMGgzbTEgMGgxbTEgMGgxbTEgMGgybTEgMGgybTEgMGgxbTMgMGgzbTEgMGgybTEgMGgxbTIgMGgzbTIgMGg2bTEgMGgybTggMGgybTQgMGgxbTMgMGgxbTEgMGgzbTIgMGgybTUgMGgxbTEgMGgxbTMgMGgxbTQgMGgybTEgMGgybTEgMGgybTIgMGgzbTIgMGgxbTEgMGgzbTEgMGgxTTEgNS41aDFtMSAwaDNtMSAwaDFtMSAwaDFtMyAwaDFtMSAwaDFtMiAwaDFtMiAwaDJtMSAwaDJtMyAwaDVtMSAwaDJtMSAwaDJtMSAwaDRtMSAwaDFtNCAwaDFtMSAwaDZtNCAwaDFtMiAwaDJtMSAwaDJtNCAwaDhtMSAwaDJtMSAwaDVtMiAwaDFtMiAwaDVtMSAwaDFtMSAwaDNtMSAwaDFNMSA2LjVoMW01IDBoMW0xIDBoM20xIDBoMm00IDBoMW0xIDBoMW0xIDBoMm0xIDBoMm0xIDBoMW0zIDBoMm0zIDBoNG0xIDBoM20xIDBoMW0xIDBoNW0zIDBoMW0xIDBoNG0xIDBoMm01IDBoMm0xIDBoMm0xIDBoMW0zIDBoMW0yIDBoMW0xIDBoNW0xIDBoMW0yIDBoMW00IDBoMW0yIDBoMW01IDBoMU0xIDcuNWg3bTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGg3TTkgOC41aDFtMSAwaDFtMiAwaDRtMiAwaDFtMSAwaDFtMSAwaDFtMiAwaDNtMyAwaDFtMiAwaDFtNCAwaDFtMyAwaDJtMyAwaDJtMSAwaDFtMyAwaDJtMSAwaDFtMSAwaDRtMSAwaDFtMSAwaDFtMSAwaDJtMSAwaDFtMSAwaDJtMyAwaDFtMiAwaDJtMiAwaDFtMyAwaDFtMyAwaDJtMSAwaDFNMSA5LjVoMW0zIDBoMW0xIDBoM20xIDBoM20xIDBoMW0yIDBoNG0xIDBoMW0xIDBoMm0yIDBoNW0yIDBoMm0zIDBoMW0xIDBoMW0xIDBoMW0yIDBoMm0xIDBoMW0xIDBoNW0xIDBoNG0xIDBoMW00IDBoMm0xIDBoMm0xIDBoOG0xIDBoM20xIDBoMW0yIDBoMW0xIDBoMW0xIDBoNG0zIDBoNW0yIDBoMU0xIDEwLjVoMW0zIDBoMW0yIDBoNm0xIDBoMm00IDBoMW0yIDBoMm0xIDBoMW0xIDBoM20yIDBoNG0xIDBoMW0xIDBoM20xIDBoMm00IDBoMm0xIDBoNW00IDBoMW0zIDBoMm0xIDBoMW0xIDBoMm0xIDBoM20yIDBoM200IDBoMW0xIDBoM20xIDBoMm0xIDBoMm0xIDBoMm0yIDBoMW0xIDBoMW0xIDBoM00zIDExLjVoMm0yIDBoMW0xIDBoM20xIDBoMm0xIDBoM20xIDBoMm00IDBoM20xIDBoMW0xIDBoMW02IDBoMW0yIDBoNG0yIDBoMW0xIDBoMW0yIDBoMm0xIDBoMW02IDBoM20xIDBoMm0xIDBoMW0yIDBoM20xIDBoMW0xIDBoMW0xIDBoM20xIDBoMW0zIDBoMW00IDBoMW0yIDBoMW0zIDBoMm0xIDBoMm0xIDBoMW0xIDBoMU0zIDEyLjVoMW00IDBoMW0xIDBoM20xIDBoMW0xIDBoNG00IDBoM20xIDBoMW0xIDBoMW0xIDBoN20xIDBoMW02IDBoMW0xIDBoNm0zIDBoMW0zIDBoNW0xIDBoNW0yIDBoMW0xIDBoMm0xIDBoMW0zIDBoM20zIDBoMW0xIDBoMW0xIDBoMW0zIDBoM20yIDBoMm0xIDBoMU01IDEzLjVoM20xIDBoMW0xIDBoMW0xIDBoMm0yIDBoMm0xIDBoMm0zIDBoMW0xIDBoNW0zIDBoMW0xIDBoNW0zIDBoMW0xIDBoMW0xIDBoMW0zIDBoMm0yIDBoNW0xIDBoMm00IDBoN201IDBoM20xIDBoMm0xIDBoMm0xIDBoM20xIDBoMm0xIDBoMm0xIDBoNG0yIDBoM00xIDE0LjVoMW0xIDBoMW0xIDBoMW04IDBoMm0yIDBoM20xIDBoMW0xIDBoMm0xIDBoMW0yIDBoM20zIDBoMm0xIDBoMW0xIDBoM20xIDBoMm0xIDBoMW0yIDBoMW0xIDBoNm0xIDBoMm0xIDBoMm0xIDBoNW0yIDBoMW0xIDBoMW0yIDBoNW0yIDBoMW0xIDBoMW0xIDBoM20yIDBoMW0xIDBoMW0yIDBoMm02IDBoMW0xIDBoMU0yIDE1LjVoMW0yIDBoMW0xIDBoMW0xIDBoMW0yIDBoMW0xIDBoMm0zIDBoMW0yIDBoMW0xIDBoMW01IDBoMW0xIDBoMW0yIDBoMW00IDBoMW00IDBoM20zIDBoMW0xIDBoNm0xIDBoMW0xIDBoMW0zIDBoMW01IDBoMW0yIDBoMW0xIDBoMW0yIDBoMW0xIDBoM201IDBoMW0zIDBoMW0xIDBoM20yIDBoMW00IDBoM00zIDE2LjVoMm0xIDBoMW0xIDBoMm0xIDBoMm0yIDBoMW03IDBoMm0xIDBoMW0yIDBoM20xIDBoNW02IDBoMW01IDBoM20xIDBoMm02IDBoMW0xIDBoMW0xIDBoM20xIDBoMm0xIDBoMW0yIDBoMW0yIDBoM200IDBoMW0yIDBoMW0yIDBoMW0xIDBoMW00IDBoMm0xIDBoMW0xIDBoMU0yIDE3LjVoMW0xIDBoNG0zIDBoMW0xIDBoMW0yIDBoMW0xIDBoM20xIDBoMW0yIDBoMm0xIDBoMW0xIDBoMW0yIDBoM20yIDBoMW0yIDBoM20xIDBoMW0xIDBoNG0yIDBoMW0zIDBoMW0yIDBoNW0xIDBoMW0yIDBoM20xIDBoM20xIDBoM20xIDBoNW0xIDBoMm0yIDBoMW0xIDBoMW0yIDBoMW0yIDBoM00yIDE4LjVoNW0zIDBoMW0yIDBoMm0xIDBoM20xIDBoMW0zIDBoMm0yIDBoM20xIDBoMW0xIDBoM20xIDBoMW0xIDBoNG0yIDBoMW0xIDBoMm0xIDBoMW0yIDBoMm0xIDBoMm00IDBoMW0zIDBoMW0xIDBoMW0yIDBoMW0yIDBoMW0yIDBoNW0yIDBoMW0xIDBoMm0xIDBoM20xIDBoMW0yIDBoMW0xIDBoMW00IDBoMW0xIDBoMU0xIDE5LjVoMW0xIDBoNW00IDBoMm0zIDBoNG0xMCAwaDFtMSAwaDFtMyAwaDFtMiAwaDFtMSAwaDJtMSAwaDJtNCAwaDFtMSAwaDJtMyAwaDFtMyAwaDJtMyAwaDFtMSAwaDFtMiAwaDFtMSAwaDFtMiAwaDJtMSAwaDFtMSAwaDJtMyAwaDRtMSAwaDFtMSAwaDFtMSAwaDFtMiAwaDFtNSAwaDFtMSAwaDNNMSAyMC41aDFtNCAwaDFtMiAwaDFtMiAwaDRtMSAwaDltNCAwaDFtMSAwaDFtNCAwaDJtMiAwaDRtNSAwaDFtMSAwaDFtMiAwaDFtMiAwaDFtMiAwaDJtMSAwaDNtMiAwaDJtMyAwaDFtMyAwaDVtMSAwaDFtMiAwaDFtNiAwaDFtMiAwaDJtNSAwaDFNNCAyMS41aDJtMSAwaDNtMSAwaDJtMiAwaDNtMSAwaDJtMiAwaDFtMSAwaDFtMSAwaDNtMSAwaDRtMiAwaDFtMiAwaDFtNCAwaDJtMSAwaDJtMSAwaDNtMyAwaDFtMiAwaDJtMSAwaDJtNCAwaDVtMSAwaDFtMSAwaDZtMSAwaDNtMiAwaDFtMyAwaDFtMSAwaDFtMiAwaDNtMiAwaDRtMiAwaDFNMyAyMi41aDNtMiAwaDNtMSAwaDFtMiAwaDFtNSAwaDFtMSAwaDJtMSAwaDJtMSAwaDNtMSAwaDFtMiAwaDVtMSAwaDJtMSAwaDJtNCAwaDFtMSAwaDRtMSAwaDFtMSAwaDFtMiAwaDZtMSAwaDFtNCAwaDZtMSAwaDFtMiAwaDFtMSAwaDhtMSAwaDFtMiAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFNMiAyMy41aDFtNCAwaDhtMiAwaDFtMiAwaDFtMyAwaDJtMSAwaDRtMiAwaDVtMiAwaDFtMSAwaDFtMiAwaDFtNCAwaDFtMiAwaDJtMiAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMyAwaDNtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtNCAwaDRtMiAwaDRtMSAwaDJtNCAwaDNtNSAwaDJNMiAyNC41aDFtMSAwaDNtMSAwaDFtMSAwaDNtMSAwaDFtMyAwaDJtMiAwaDJtMSAwaDJtMSAwaDFtMiAwaDFtMSAwaDFtMSAwaDFtNCAwaDFtMSAwaDFtMyAwaDFtMSAwaDFtMyAwaDFtMSAwaDNtMSAwaDFtMSAwaDNtMSAwaDFtMSAwaDFtMiAwaDFtMiAwaDNtMiAwaDFtMiAwaDFtNCAwaDJtMiAwaDFtMSAwaDNtMiAwaDFtMSAwaDFtMSAwaDFtMSAwaDNtMSAwaDJNNCAyNS41aDRtMSAwaDNtMSAwaDRtMiAwaDFtNCAwaDNtMyAwaDFtMSAwaDNtMiAwaDNtMSAwaDFtMSAwaDFtMSAwaDVtMSAwaDFtNSAwaDFtMSAwaDNtMiAwaDFtMSAwaDFtMiAwaDdtMiAwaDJtMSAwaDFtMSAwaDNtMiAwaDFtMiAwaDNtMiAwaDVtMyAwaDRNMSAyNi41aDFtMiAwaDFtMSAwaDFtMiAwaDFtMSAwaDFtMSAwaDFtMSAwaDNtMiAwaDFtNCAwaDJtMSAwaDFtOCAwaDFtNCAwaDVtMSAwaDJtMSAwaDdtMyAwaDFtMSAwaDZtMSAwaDFtMSAwaDJtMSAwaDFtMSAwaDNtMSAwaDJtMSAwaDJtMSAwaDJtMSAwaDNtMSAwaDFtNCAwaDFtMiAwaDNtMSAwaDJtMSAwaDFNMSAyNy41aDNtMiAwaDJtMSAwaDRtMiAwaDFtMSAwaDZtMSAwaDFtNCAwaDJtMiAwaDNtNiAwaDNtMSAwaDNtNCAwaDJtMSAwaDFtNiAwaDFtMiAwaDFtMSAwaDJtMSAwaDFtNSAwaDJtNCAwaDFtMyAwaDFtMiAwaDFtNyAwaDFtMSAwaDFtNSAwaDJtMSAwaDFNMiAyOC41aDNtMSAwaDFtMSAwaDFtMSAwaDJtMSAwaDFtMSAwaDRtMSAwaDFtMiAwaDNtNiAwaDJtMSAwaDRtMiAwaDFtMSAwaDFtNSAwaDFtMiAwaDJtMSAwaDFtMSAwaDJtMyAwaDJtMSAwaDFtNSAwaDFtNSAwaDFtMSAwaDFtMSAwaDNtMyAwaDJtMSAwaDFtMSAwaDdtMiAwaDRtMyAwaDFNMiAyOS41aDltNCAwaDNtMiAwaDNtMiAwaDJtMSAwaDEwbTIgMGgzbTIgMGgxbTIgMGgybTIgMGgxM20xIDBoMm0xIDBoMm0yIDBoM20xIDBoNW0xIDBoNG0xIDBoMW00IDBoMW0xIDBoM20yIDBoNm0xIDBoM00yIDMwLjVoMm0xIDBoMW0zIDBoMW0yIDBoMm0xIDBoM20yIDBoMW0yIDBoNG0yIDBoMW0zIDBoM20xIDBoMm01IDBoMW0xIDBoMW0xIDBoMW0xIDBoMW0xIDBoMm0zIDBoMm0xIDBoMm0xIDBoNm0xIDBoMW0yIDBoMW0xIDBoM20zIDBoMm0yIDBoM20xIDBoM20xIDBoMm0xIDBoMW0yIDBoMW0xIDBoMW0zIDBoMW0xIDBoMU0zIDMxLjVoMW0xIDBoMW0xIDBoMW0xIDBoMW0xIDBoNG03IDBoMW0yIDBoM20xIDBoMW0xIDBoMW0xIDBoMW0xIDBoMW0yIDBoNG0xIDBoMW0xIDBoNG0xIDBoNG0xIDBoMW0xIDBoMm0xIDBoMW0yIDBoMW0xIDBoM20yIDBoMm0yIDBoMm0xIDBoMW0xIDBoMW0xIDBoMW0xIDBoMW0yIDBoMm00IDBoMW00IDBoMm0yIDBoMW0xIDBoMW0xIDBoMW0xIDBoMk0xIDMyLjVoM20xIDBoMW0zIDBoMm0yIDBoMm0xIDBoMm0xIDBoMW0yIDBoM20yIDBoM20zIDBoMW0xIDBoNm0xIDBoMW00IDBoMW0xIDBoMW0yIDBoMm0zIDBoMW0zIDBoMm0xIDBoMm0xIDBoNG0xIDBoMW0xIDBoMW0xIDBoMm0zIDBoNG0yIDBoMm0xIDBoOG0xIDBoM20zIDBoNU0yIDMzLjVoMW0xIDBoNm0xIDBoM20xIDBoM20yIDBoM20xIDBoMW0xIDBoMW0xIDBoN20xIDBoMW0xIDBoMW0xIDBoMW0xIDBoMW0yIDBoMW0xIDBoM20yIDBoNm02IDBoMW0zIDBoMW0zIDBoMTBtMSAwaDZtMiAwaDFtMSAwaDFtMiAwaDNtMiAwaDVNMiAzNC41aDFtMSAwaDFtNCAwaDJtMSAwaDJtNiAwaDJtMSAwaDJtMiAwaDNtMiAwaDFtMyAwaDJtNCAwaDJtMiAwaDFtMyAwaDJtMyAwaDFtMSAwaDJtMSAwaDFtMiAwaDFtMiAwaDJtNSAwaDFtMSAwaDFtNSAwaDJtNCAwaDFtMSAwaDZtNCAwaDJtMSAwaDZNMSAzNS41aDJtMiAwaDNtMyAwaDJtNCAwaDJtMSAwaDhtMSAwaDFtMyAwaDJtMiAwaDNtNCAwaDFtMSAwaDJtMiAwaDFtNiAwaDZtMiAwaDJtMiAwaDFtNyAwaDFtMiAwaDFtMiAwaDFtMSAwaDJtMSAwaDFtMSAwaDFtMiAwaDFtMiAwaDFtMiAwaDJtNiAwaDJNMyAzNi41aDNtNiAwaDJtMSAwaDJtMSAwaDFtMiAwaDFtMiAwaDNtNiAwaDJtMSAwaDFtMSAwaDJtMSAwaDJtMiAwaDFtMiAwaDRtMSAwaDNtMSAwaDJtNCAwaDFtNCAwaDFtMiAwaDFtMSAwaDRtMSAwaDFtMSAwaDJtMSAwaDVtMSAwaDFtMiAwaDJtMSAwaDFtMiAwaDJtMSAwaDJtMSAwaDJtMSAwaDJNMyAzNy41aDFtMiAwaDJtNyAwaDFtMSAwaDFtMyAwaDFtMiAwaDFtMSAwaDFtMSAwaDJtMyAwaDRtMSAwaDFtNiAwaDFtMiAwaDNtMiAwaDFtMSAwaDJtMSAwaDFtMSAwaDJtNyAwaDJtMSAwaDJtMiAwaDFtMSAwaDFtMSAwaDJtMSAwaDRtMSAwaDFtMiAwaDFtMSAwaDFtMSAwaDNtMSAwaDFtMSAwaDJtMSAwaDJtMSAwaDFtMSAwaDFNMSAzOC41aDFtMyAwaDJtMSAwaDFtMiAwaDJtMSAwaDJtMiAwaDNtMSAwaDRtMSAwaDFtNSAwaDJtMyAwaDZtMSAwaDJtMSAwaDFtMiAwaDFtMSAwaDNtMSAwaDFtMiAwaDJtMSAwaDNtMSAwaDJtNiAwaDRtMiAwaDJtMSAwaDJtMSAwaDVtMSAwaDJtMSAwaDRtMSAwaDVtMSAwaDNNNCAzOS41aDFtMiAwaDFtMSAwaDFtMiAwaDJtMSAwaDNtMSAwaDNtMyAwaDNtMiAwaDJtMiAwaDRtMyAwaDJtMyAwaDFtMiAwaDFtMSAwaDNtMiAwaDFtOCAwaDFtMSAwaDFtNCAwaDNtNiAwaDJtNCAwaDJtMSAwaDJtNiAwaDZtMyAwaDFtMSAwaDFNMSA0MC41aDJtMiAwaDFtNSAwaDJtMSAwaDJtNSAwaDJtMyAwaDFtMSAwaDEwbTIgMGgybTIgMGgxbTUgMGgzbTEgMGgxbTMgMGgybTIgMGgzbTMgMGgybTEgMGgxbTEgMGgybTIgMGgxbTEgMGgxbTEgMGgzbTEgMGgxbTEgMGgxbTEgMGg3bTIgMGgxbTEgMGgxbTMgMGgzbTEgMGgxTTYgNDEuNWgybTIgMGgxbTEgMGgzbTEgMGgxbTEgMGgxbTEgMGgybTEgMGg0bTEgMGgxbTYgMGgxbTEgMGg5bTQgMGgzbTEgMGgxbTUgMGgybTIgMGgxbTIgMGgxbTEgMGgzbTEgMGg3bTIgMGg1bTEgMGgxbTMgMGgybTEgMGgzbTEgMGgxbTIgMGg0bTEgMGgyTTEgNDIuNWgxbTIgMGgzbTIgMGgxbTEgMGgybTEgMGgybTMgMGgybTEgMGgybTEgMGgybTEgMGgybTIgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTIgMGgxbTEgMGgybTEgMGgxbTIgMGgxbTEgMGgxbTEgMGgzbTEgMGgybTMgMGgxbTEgMGg0bTEgMGgxbTEgMGgxbTMgMGgxbTEgMGgzbTEgMGgybTIgMGgxbTEgMGgxbTIgMGgybTIgMGgxbTEgMGgxbTIgMGgxbTIgMGgzbTEgMGgxbTEgMGgxTTUgNDMuNWg0bTEgMGgybTEgMGgxbTIgMGgxbTQgMGg0bTEgMGgybTMgMGgybTQgMGgzbTEgMGgxbTEgMGgybTEgMGgxbTEgMGgxbTMgMGgybTIgMGgxbTEgMGgzbTEgMGgzbTEgMGgxbTEgMGgxbTQgMGgxbTIgMGgybTIgMGgxbTEgMGgxbTEgMGgxbTEgMGgybTIgMGgxbTQgMGgxbTIgMGgxbTIgMGgybTIgMGg1TTEgNDQuNWgxbTEgMGgybTEgMGgxbTEgMGgybTUgMGgybTMgMGgybTEgMGg0bTQgMGgybTEgMGg0bTEgMGgxbTIgMGgxbTMgMGgybTEgMGgxbTQgMGgxbTEgMGgybTEgMGgxbTQgMGgybTMgMGg2bTEgMGgxbTIgMGgybTUgMGgxbTEgMGgxbTEgMGgxbTEgMGgzbTIgMGgxbTIgMGgxTTMgNDUuNWgybTEgMGgzbTMgMGgxbTEgMGgybTEgMGg0bTEgMGg4bTIgMGgybTIgMGgxbTEgMGgxbTEgMGgzbTIgMGgxbTQgMGgxbTIgMGgybTEgMGgybTIgMGgybTEgMGgybTEgMGgybTEgMGgxbTEgMGgzbTIgMGgxbTQgMGgybTEgMGg1bTEgMGgxbTIgMGgxbTIgMGgzbTIgMGgxbTEgMGgxbTEgMGgybTIgMGgxTTQgNDYuNWgybTUgMGgxbTEgMGg0bTYgMGgxbTIgMGgxbTEgMGgxbTEgMGgxbTIgMGgybTEgMGgzbTMgMGg1bTEgMGgxbTIgMGgxbTEgMGgzbTEgMGg0bTEgMGgybTEgMGgxbTIgMGgybTEgMGgzbTEgMGgxbTEgMGgzbTEgMGgybTIgMGgxbTEgMGgxbTEgMGg1bTMgMGgxbTEgMGgybTIgMGgybTEgMGgxbTEgMGgyTTEgNDcuNWgxbTQgMGgzbTMgMGgybTEgMGg0bTEgMGgxbTQgMGgybTQgMGgzbTQgMGgxbTEgMGg0bTQgMGgxbTIgMGgxbTUgMGg0bTEgMGgxbTEgMGgybTMgMGgxbTEgMGgxbTEgMGgybTEgMGgzbTEgMGgxbTEgMGgzbTMgMGgzbTIgMGgybTMgMGgzbTEgMGgxbTEgMGgxbTEgMGg0TTIgNDguNWgxbTEgMGgybTIgMGgzbTMgMGg0bTIgMGgybTMgMGg0bTUgMGgxbTQgMGg5bTEgMGgxbTIgMGg1bTQgMGgxbTEgMGgxbTIgMGgxbTMgMGg3bTIgMGgybTIgMGgzbTIgMGgzbTEgMGgybTIgMGgybTMgMGgxbTIgMGgxTTEgNDkuNWgybTEgMGgxbTIgMGgxbTEgMGgxbTEgMGgxbTEgMGgybTEgMGg1bTIgMGgxbTEgMGgybTIgMGgzbTIgMGgzbTEgMGgybTUgMGgxbTIgMGgybTMgMGgxbTQgMGgybTEgMGgxbTEgMGgxbTIgMGgxbTIgMGgxbTIgMGgzbTIgMGgxbTEgMGgxbTEgMGgybTEgMGgybTEgMGgybTEgMGg0bTIgMGg0bTMgMGgxbTEgMGgxbTIgMGgyTTMgNTAuNWgxbTUgMGgzbTQgMGgzbTEgMGgxbTIgMGgybTIgMGgybTEgMGgxbTIgMGgxbTUgMGgxbTEgMGgzbTIgMGgxbTEgMGgxbTIgMGgxbTIgMGgxbTEgMGgybTUgMGg2bTEgMGgxbTIgMGgzbTMgMGgxbTEgMGgxbTIgMGgxbTIgMGgybTEgMGgybTEgMGgxbTIgMGgxbTIgMGgzbTEgMGgxbTIgMGg0TTEgNTEuNWgxbTEgMGgxbTMgMGgxbTEgMGgybTUgMGgxbTQgMGg5bTEgMGg0bTIgMGg0bTEgMGgxbTEgMGgxbTIgMGgzbTEgMGgybTMgMGgybTQgMGgxbTMgMGgybTEgMGgzbTEgMGgzbTEgMGgxbTggMGgybTMgMGgxbTEgMGgybTEgMGgxbTQgMGgybTEgMGgxbTIgMGgyTTEgNTIuNWgxbTMgMGgxbTIgMGgzbTMgMGgxbTEgMGgxbTEgMGgxbTQgMGgxbTEgMGgxbTEgMGgxbTIgMGgxbTEgMGgzbTQgMGgxbTEgMGgxbTIgMGgzbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgzbTEgMGg3bTEgMGgzbTEgMGgxbTEgMGgxbTQgMGgzbTMgMGgxbTEgMGgxbTEgMGgzbTMgMGgxbTEzIDBoMU0zIDUzLjVoMTBtMSAwaDJtMSAwaDFtMyAwaDJtMSAwaDExbTEgMGgxbTEgMGgzbTMgMGg2bTIgMGg2bTIgMGgybTIgMGgxbTEgMGgybTEgMGgybTEgMGgzbTIgMGgxMm0xIDBoMW0yIDBoMW0yIDBoMm0xIDBoMW0xIDBoNm0xIDBoMU0xIDU0LjVoMW0zIDBoMW0zIDBoMm0xIDBoMm0xIDBoMm0xIDBoOG0zIDBoMW0zIDBoMm0xIDBoMW0xIDBoM20xIDBoMm0yIDBoMW0yIDBoMW0xIDBoM20zIDBoMm0xIDBoMW0yIDBoMW0zIDBoMW0xIDBoMW0yIDBoMm0xIDBoM20zIDBoMW0xIDBoM20xIDBoMW01IDBoMm0xIDBoMW0yIDBoM20zIDBoNU0yIDU1LjVoNG0xIDBoMW0xIDBoMW0zIDBoMm0zIDBoNG0xIDBoMW0yIDBoNG0xIDBoMW0xIDBoMW0yIDBoNG0xIDBoMW00IDBoM20yIDBoM20xIDBoMW0xIDBoNG0zIDBoMW0yIDBoMm03IDBoMm0xIDBoMW0xIDBoMW0yIDBoMW0zIDBoMm0xIDBoMW0xIDBoM20xIDBoMW0xIDBoMW0xIDBoMW0xIDBoMW0xIDBoMm0yIDBoMU0zIDU2LjVoM20zIDBoMW0xIDBoMW00IDBoMW0xIDBoM20xIDBoMW0yIDBoMW0zIDBoMW0zIDBoMW0xIDBoM20xIDBoMW0yIDBoMW0xIDBoMm0xIDBoMW0xIDBoMW0xIDBoM20zIDBoMW0zIDBoMm0xIDBoMW01IDBoMm0xIDBoM20xIDBoMW0zIDBoM20xIDBoMm0xIDBoMW0xIDBoMW0xIDBoMW0yIDBoNG0xIDBoMm0zIDBoMW0xIDBoMU0xIDU3LjVoMW0xIDBoMW0xIDBoNW0zIDBoNG0xIDBoM20xIDBoMW00IDBoOG0yIDBoMW0yIDBoM20yIDBoMW0zIDBoMm0xIDBoN20yIDBoNG0xIDBoMm0xIDBoMW0xIDBoMW0xIDBoMm0xIDBoMTFtMSAwaDFtNCAwaDFtMSAwaDVtMSAwaDVtMSAwaDNNMiA1OC41aDVtMiAwaDRtMyAwaDFtMiAwaDFtMSAwaDFtMiAwaDJtMyAwaDFtMiAwaDFtMSAwaDFtMyAwaDNtMSAwaDVtMSAwaDFtMiAwaDFtMSAwaDFtMSAwaDFtMiAwaDFtMSAwaDFtMiAwaDFtMSAwaDNtMSAwaDJtMSAwaDFtMSAwaDJtMSAwaDFtMiAwaDFtMiAwaDRtMiAwaDFtNCAwaDFtMiAwaDJtMSAwaDJtMSAwaDFtMSAwaDFtMiAwaDJNMSA1OS41aDFtMSAwaDJtMiAwaDJtMSAwaDJtMyAwaDFtMSAwaDFtMiAwaDFtMiAwaDFtMSAwaDNtMSAwaDFtMSAwaDNtMiAwaDFtMSAwaDJtMiAwaDFtMSAwaDFtMSAwaDFtNCAwaDJtMSAwaDNtMSAwaDFtMSAwaDFtMiAwaDNtMiAwaDFtMiAwaDFtMSAwaDNtMSAwaDFtMiAwaDFtMiAwaDFtMiAwaDFtMSAwaDFtMyAwaDFtMiAwaDRtMiAwaDFtMSAwaDFtMSAwaDNNMiA2MC41aDRtNCAwaDJtNiAwaDFtMSAwaDVtMSAwaDNtMSAwaDFtMyAwaDdtMSAwaDFtMiAwaDFtMSAwaDFtMSAwaDNtMSAwaDFtMiAwaDFtMSAwaDFtMSAwaDFtNCAwaDFtMiAwaDJtMSAwaDJtNCAwaDFtMyAwaDJtMiAwaDFtMyAwaDFtNCAwaDNtNSAwaDFtMiAwaDNNMSA2MS41aDFtMiAwaDJtMSAwaDFtNSAwaDFtMSAwaDFtMiAwaDFtMiAwaDFtMyAwaDFtMiAwaDJtMSAwaDFtMSAwaDFtMyAwaDFtMSAwaDFtMiAwaDJtMSAwaDFtMSAwaDVtMSAwaDFtNCAwaDVtMSAwaDFtMSAwaDFtMiAwaDJtMSAwaDJtMiAwaDFtMSAwaDFtMSAwaDJtMSAwaDZtMSAwaDJtMSAwaDVtMSAwaDFtMSAwaDZtMSAwaDFNNSA2Mi41aDFtMyAwaDFtMiAwaDFtMSAwaDdtMSAwaDNtMyAwaDNtMSAwaDFtMiAwaDFtMyAwaDVtMSAwaDJtNCAwaDFtMSAwaDFtMiAwaDFtMyAwaDJtMSAwaDJtMSAwaDJtMiAwaDFtMSAwaDJtMSAwaDJtMyAwaDNtMSAwaDJtMSAwaDFtMyAwaDFtMSAwaDJtMSAwaDJtNSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFNMiA2My41aDEwbTEgMGgxbTEgMGgybTEgMGgybTEgMGgxbTEgMGgxbTIgMGg1bTEgMGgybTIgMGgxbTEgMGgybTEgMGgybTMgMGgxbTQgMGgzbTIgMGgxbTQgMGgybTEgMGgxbTEgMGgxbTEgMGgxbTEgMGg0bTMgMGgxbTIgMGgxbTEgMGgxbTEgMGgybTEgMGgybTEgMGgzbTYgMGgxbTEgMGgybTEgMGgybTEgMGgyTTEgNjQuNWg0bTEgMGgxbTEgMGgybTMgMGgxbTEgMGgzbTIgMGgxbTIgMGgxbTEgMGgzbTEgMGgybTEgMGgybTEgMGgxbTIgMGgxbTIgMGgybTEgMGgxbTIgMGgxbTEgMGgxbTEgMGgxbTEgMGgybTQgMGgybTIgMGgybTIgMGgxbTIgMGg0bTMgMGgybTEgMGgxbTIgMGgxbTEgMGgzbTEgMGgxbTIgMGgxbTMgMGgxbTUgMGgybTEgMGgzTTEgNjUuNWgxbTEgMGgxbTEgMGgxbTEgMGgxbTMgMGgxbTEgMGgxbTEgMGgxbTIgMGgzbTEgMGgxbTEgMGgxbTMgMGgxbTEgMGgzbTEgMGgybTEgMGgxbTEgMGgzbTMgMGgzbTEgMGgxbTEgMGg0bTEgMGgxbTEgMGg1bTEgMGgxbTEgMGgxbTIgMGgxbTIgMGgzbTMgMGgxbTEgMGgxbTEgMGg0bTEgMGgybTEgMGgybTEgMGgybTEgMGgybTEgMGgxbTIgMGgybTIgMGgxbTEgMGgxTTEgNjYuNWgxbTIgMGgzbTEgMGgzbTEgMGgxbTEgMGgzbTMgMGgxbTQgMGgxbTIgMGgxbTUgMGgzbTEgMGg2bTEgMGgybTQgMGgxbTIgMGgzbTQgMGgxbTEgMGgybTEgMGgybTIgMGgxbTEgMGgxbTIgMGgxbTEgMGg0bTEgMGgxbTEgMGgybTEgMGgxbTMgMGgybTEgMGgxbTIgMGgxbTEgMGgzbTMgMGgybTEgMGgxTTYgNjcuNWgzbTEgMGgxbTcgMGgybTIgMGgxbTIgMGgxbTUgMGgzbTEgMGgybTQgMGgxbTEgMGgybTUgMGgzbTEgMGgxbTEgMGgxbTQgMGgxbTEgMGgybTUgMGgzbTEgMGgxbTEgMGgxbTMgMGgxbTEgMGgxbTEgMGgxbTQgMGgxbTEgMGgxbTEgMGgxbTQgMGg0bTEgMGgxbTMgMGgzTTEgNjguNWgxbTEgMGgzbTQgMGgxbTEgMGg1bTMgMGgybTEgMGgzbTMgMGgxbTEgMGgxbTYgMGgybTEgMGgxbTIgMGgybTEgMGg0bTIgMGgxbTMgMGgybTEgMGgxbTEgMGgzbTEgMGgzbTEgMGgybTEgMGgxbTEgMGgxbTEgMGgxbTIgMGgxbTEgMGgxbTIgMGgxbTEgMGgybTEgMGgxbTIgMGgxbTEgMGgzbTEgMGgzbTIgMGgxbTEgMGgxbTEgMGgxTTIgNjkuNWgxbTEgMGg0bTEgMGgybTUgMGgxbTEgMGg1bTEgMGgybTEgMGgxbTEgMGgxbTEgMGgzbTMgMGgybTIgMGgybTIgMGgxbTEgMGgzbTEgMGgxbTQgMGgxbTMgMGgzbTEgMGgxbTQgMGgxbTEgMGgxbTEgMGgzbTEgMGgxbTEgMGgxbTUgMGg0bTEgMGgybTEgMGgxbTEgMGgzbTEgMGgxbTEgMGg1bTEgMGgzTTEgNzAuNWgxbTEgMGgxbTEgMGgybTIgMGgxbTMgMGgzbTMgMGgybTIgMGgxbTMgMGgxbTEgMGgzbTIgMGg1bTMgMGgybTEgMGgybTEgMGgxbTEgMGgybTEgMGgxbTIgMGgxbTEgMGgxbTIgMGgxbTEgMGgybTEgMGgybTUgMGgxbTEgMGgzbTIgMGgzbTIgMGgxbTEgMGgxbTIgMGgybTEgMGgybTMgMGg2bTEgMGgxTTEgNzEuNWgzbTEgMGgxbTEgMGgzbTEgMGgxbTMgMGgxbTMgMGgxbTEgMGgybTIgMGgybTIgMGg0bTIgMGgybTQgMGgxbTUgMGg1bTIgMGgzbTIgMGgzbTEgMGgybTEgMGgxbTEgMGgybTIgMGgybTEgMGgzbTEgMGgybTEgMGgzbTEgMGgzbTEgMGgxbTMgMGgxbTEgMGgxbTEgMGgybTEgMGgybTIgMGgxbTEgMGgxbTEgMGgxTTIgNzIuNWgybTQgMGgxbTIgMGgybTIgMGgybTUgMGgzbTQgMGgxbTEgMGgybTIgMGgxbTIgMGgxbTIgMGgxbTQgMGgxbTEgMGgxbTEgMGgxbTIgMGgxbTIgMGgxbTEgMGgzbTIgMGgxbTMgMGgxbTEgMGgzbTEgMGgxbTEgMGgxbTEgMGgxbTIgMGgxbTEgMGgybTEgMGgxbTEgMGgxbTEgMGgxbTEgMGg0bTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgzbTEgMGgzTTIgNzMuNWgxbTEgMGgxbTEgMGg0bTEgMGgxbTEgMGgxbTEgMGgxbTIgMGgybTIgMGgxbTEgMGgxbTUgMGgxbTQgMGgzbTMgMGgxbTEgMGgxbTEgMGgxbTEgMGgzbTEgMGg0bTEgMGgzbTEgMGgybTEgMGgybTEgMGgybTEgMGgybTEgMGg0bTEgMGgxbTIgMGgxbTEgMGgybTEgMGgxbTIgMGgxbTIgMGg3bTEgMGgxbTEgMGgzbTIgMGgzTTIgNzQuNWgxbTEgMGgxbTEgMGgxbTEgMGgzbTEgMGgxbTIgMGgybTMgMGgybTEgMGgybTIgMGgybTEgMGgxbTEgMGgxbTEgMGgxbTIgMGgxbTMgMGg2bTEgMGgxbTIgMGgybTUgMGgxbTEgMGgxbTIgMGgybTEgMGgzbTEgMGgxbTEgMGgybTEgMGgybTIgMGgxbTIgMGgxbTEgMGg1bTEgMGgzbTEgMGgxbTEgMGgxbTIgMGgxbTEgMGgybTIgMGgxbTEgMGgxTTIgNzUuNWg2bTEgMGgxbTIgMGgzbTMgMGgxbTEgMGg2bTIgMGgxbTIgMGgybTMgMGgxbTIgMGgybTEgMGgxbTYgMGgzbTIgMGgxbTMgMGgxbTIgMGgzbTEgMGgybTEgMGgxbTEgMGgxbTEgMGgxbTMgMGgxbTIgMGgybTQgMGg1bTEgMGgybTIgMGgzbTMgMGgybTIgMGgxbTEgMGgyTTEgNzYuNWgxbTEgMGgzbTcgMGgxbTMgMGgxbTIgMGgybTMgMGg1bTQgMGgybTMgMGgxMG0xIDBoMW0xIDBoMm01IDBoMm00IDBoMW0xIDBoMW0yIDBoMW0yIDBoMW0xIDBoMW0xIDBoMW0yIDBoMW0xIDBoMW0xIDBoMW0yIDBoMW0xIDBoMW0zIDBoMW0xIDBoMW0xIDBoMW0yIDBoMW0xIDBoM20xIDBoMU0xIDc3LjVoMW0zIDBoNm0yIDBoMW0xIDBoMW02IDBoMW0zIDBoMW0yIDBoNW0xIDBoMW0zIDBoMW0xIDBoNW0yIDBoMTBtMSAwaDNtMiAwaDFtMiAwaDFtMSAwaDFtMyAwaDFtMyAwaDZtMSAwaDJtMiAwaDFtMiAwaDFtMSAwaDFtMiAwaDNtMiAwaDVtMiAwaDJNMSA3OC41aDFtMyAwaDFtMyAwaDFtMSAwaDFtMSAwaDJtMSAwaDJtMSAwaDFtMyAwaDFtMSAwaDFtMSAwaDNtMyAwaDJtMyAwaDNtMSAwaDJtMSAwaDJtMiAwaDFtMSAwaDNtMyAwaDJtMiAwaDFtMSAwaDJtMSAwaDNtMSAwaDFtMSAwaDFtMiAwaDFtMSAwaDFtMyAwaDJtMiAwaDRtMSAwaDNtMSAwaDFtMiAwaDFtMSAwaDNtMyAwaDRNMSA3OS41aDFtMSAwaDNtMSAwaDFtMSAwaDFtMSAwaDFtMiAwaDFtMSAwaDFtMyAwaDJtMyAwaDFtMSAwaDNtMSAwaDFtMSAwaDJtMiAwaDNtMiAwaDJtMSAwaDJtMiAwaDFtMiAwaDJtMSAwaDFtMSAwaDRtMSAwaDNtMSAwaDFtMiAwaDFtMSAwaDNtMSAwaDNtMSAwaDFtMSAwaDFtMiAwaDZtMSAwaDFtMSAwaDFtMSAwaDRtMiAwaDFtMSAwaDFtMSAwaDFtMSAwaDJNMSA4MC41aDVtMyAwaDJtMSAwaDFtMSAwaDFtNSAwaDJtNCAwaDFtMSAwaDJtMyAwaDFtMSAwaDNtMSAwaDJtMSAwaDJtMSAwaDFtMiAwaDFtMSAwaDJtMSAwaDFtMyAwaDFtNCAwaDFtMiAwaDNtMyAwaDVtMSAwaDFtMyAwaDJtMSAwaDJtMSAwaDRtMiAwaDJtMSAwaDFtMSAwaDFtMiAwaDFtMyAwaDNNMiA4MS41aDJtMSAwaDZtMSAwaDFtMiAwaDFtNSAwaDJtMSAwaDExbTEgMGgybTMgMGgxbTEgMGgxbTEgMGgybTEgMGgybTMgMGg1bTEgMGgzbTIgMGgxbTIgMGgxbTEgMGgybTEgMGgybTEgMGg4bTEgMGg1bTEgMGgybTEgMGgybTEgMGgzbTEgMGg4TTEgODIuNWgybTEgMGgxbTEgMGgxbTEgMGgybTIgMGgxbTIgMGgxbTMgMGgxbTMgMGgzbTEgMGg0bTMgMGgxbTEgMGg4bTQgMGgxbTEgMGg2bTIgMGgxbTEgMGgxbTIgMGgybTEgMGgybTIgMGgxbTEgMGgybTEgMGgxbTEgMGgxbTEgMGg0bTEgMGgybTEgMGgzbTEgMGgxbTIgMGgxbTQgMGgxbTEgMGgzbTEgMGg0TTEgODMuNWgybTIgMGgxbTEgMGgxbTEgMGgxbTQgMGgxbTMgMGgxbTMgMGgybTIgMGg1bTMgMGgxbTIgMGgxbTEgMGgybTEgMGgybTEgMGgxbTIgMGgxbTEgMGgzbTEgMGgybTIgMGgxbTEgMGgxbTEgMGgzbTEgMGgxbTEgMGgxbTIgMGg2bTMgMGgxbTEgMGgzbTMgMGgybTEgMGgybTEgMGg0bTIgMGgybTIgMGgybTEgMGgyTTEgODQuNWg0bTEgMGgxbTMgMGgybTIgMGgybTEgMGgxbTMgMGgxbTMgMGgxbTEgMGg1bTEgMGgybTEgMGgybTUgMGgxbTEgMGg1bTMgMGgxbTEgMGgybTEgMGg0bTEgMGgxbTIgMGg0bTEgMGgxbTEgMGgybTMgMGgxbTEgMGgxbTIgMGgxbTEgMGgybTEgMGgzbTIgMGgxbTIgMGgzbTEgMGgxbTEgMGgxbTEgMGg0TTIgODUuNWgxbTIgMGgxbTEgMGgybTEgMGg1bTMgMGgybTEgMGg0bTEgMGg1bTEgMGgybTEgMGgxbTMgMGgzbTEgMGgxbTEgMGgxbTIgMGgzbTEgMGgybTMgMGgybTEgMGgybTIgMGgxbTEgMGgxbTEgMGgybTEgMGg0bTEgMGgxbTEgMGgzbTIgMGgxbTEgMGgzbTIgMGgybTEgMGgxbTEgMGgxbTIgMGgxbTEgMGg0bTIgMGgybTEgMGgxTTMgODYuNWgybTEgMGgxbTIgMGgybTcgMGgxbTIgMGgybTIgMGgybTIgMGgzbTEgMGg4bTEgMGgybTIgMGgxbTIgMGgxbTEgMGg0bTIgMGgybTIgMGgxbTEgMGg1bTIgMGgxbTEgMGgybTEgMGgxbTEgMGgybTIgMGgybTQgMGgxbTMgMGgxbTEgMGgybTQgMGgxbTIgMGgybTEgMGgybTIgMGgxTTEgODcuNWgzbTMgMGgxbTEgMGgxbTEgMGgxbTQgMGgxbTIgMGgxbTMgMGg0bTIgMGgzbTIgMGgxbTQgMGgxbTEgMGgybTEgMGgxbTMgMGgybTEgMGg0bTMgMGgxbTIgMGgzbTEgMGgzbTEgMGgxbTEgMGgybTEgMGgxbTEgMGg0bTIgMGgxbTIgMGgybTIgMGgxbTEgMGgxbTEgMGg1bTEgMGgxbTMgMGgybTIgMGgyTTEgODguNWgxbTEgMGgxbTUgMGgzbTEgMGgzbTQgMGgxbTIgMGgxbTEgMGgzbTEgMGgybTMgMGg0bTYgMGgybTEgMGgxbTIgMGgybTIgMGgxbTEgMGgxbTIgMGg0bTEgMGgxbTIgMGg3bTUgMGgybTMgMGgxbTEgMGgxbTIgMGgxbTIgMGgxbTUgMGgzbTMgMGgxbTEgMGgyTTIgODkuNWgzbTIgMGgxbTUgMGgxbTEgMGgybTIgMGgxbTMgMGg1bTEgMGgybTEgMGgxbTEgMGgybTQgMGgzbTIgMGgxbTEgMGgzbTEgMGgxbTEgMGgybTIgMGgybTEgMGgybTEgMGgybTEgMGgxbTIgMGgxbTIgMGgzbTEgMGgxbTIgMGg0bTEgMGgybTEgMGgzbTQgMGgzbTEgMGg1bTEgMGg1TTEgOTAuNWgxbTIgMGgxbTUgMGgzbTEgMGgybTEgMGg0bTEgMGgybTMgMGgxbTEgMGg0bTIgMGgxbTcgMGgxbTIgMGgxbTIgMGgxbTEgMGgxbTEgMGg0bTEgMGgxbTQgMGg2bTEgMGgxbTEgMGgybTEgMGgxbTEgMGgybTMgMGgxbTQgMGgxbTMgMGgxbTIgMGgxbTEgMGgybTEgMGgxbTEgMGgzbTIgMGgxTTMgOTEuNWgxbTIgMGgzbTIgMGgybTQgMGgxbTYgMGgybTEgMGgxbTIgMGgzbTEgMGgxbTEgMGgxbTIgMGgybTQgMGgybTEgMGgxMG0yIDBoMm0xIDBoN20xIDBoNG0xIDBoMW0xIDBoMm0xIDBoMm0xIDBoMW00IDBoMW0xIDBoMW0yIDBoMW0xIDBoMW0xIDBoMW0xIDBoMW0xIDBoMW0xIDBoMW0yIDBoMW0xIDBoMU0xMCA5Mi41aDJtMSAwaDFtMiAwaDJtMyAwaDFtMyAwaDJtMSAwaDJtMSAwaDFtMiAwaDFtMSAwaDFtMiAwaDNtMSAwaDFtMSAwaDFtMSAwaDFtNSAwaDFtMSAwaDFtMiAwaDRtMSAwaDFtNiAwaDVtMSAwaDFtMiAwaDJtNCAwaDFtMSAwaDRtMSAwaDVtMiAwaDFtMSAwaDJtMSAwaDFtMiAwaDFNMyA5My41aDFtMSAwaDRtNiAwaDNtMSAwaDFtNCAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtNCAwaDFtMSAwaDJtNiAwaDJtMSAwaDJtMyAwaDRtMyAwaDJtMSAwaDFtMyAwaDFtMSAwaDdtMSAwaDNtMyAwaDFtMiAwaDNtMSAwaDFtMSAwaDFtNCAwaDNtMSAwaDFtMiAwaDFtMiAwaDJNOSA5NC41aDJtMSAwaDJtMTAgMGgybTIgMGgybTEgMGgxbTMgMGgxbTQgMGgxbTIgMGgybTEgMGgxbTEgMGgybTEgMGgybTEgMGgybTIgMGgxbTIgMGgxbTEgMGgxbTMgMGgxbTEgMGgybTIgMGgxbTEgMGgxbTEgMGgybTIgMGgybTEgMGgxbTIgMGgxbTIgMGgybTIgMGgxbTEgMGgxbTIgMGgxbTEgMGgzbTIgMGg0TTEgOTUuNWgxbTEgMGgzbTEgMGgxbTEgMGgxbTEgMGgxbTMgMGgybTMgMGgxbTEgMGgxbTMgMGgxbTMgMGgybTQgMGgxbTMgMGg0bTIgMGgybTIgMGgxbTEgMGgybTUgMGgxbTQgMGgybTEgMGgxbTEgMGg0bTIgMGgybTMgMGgzbTEgMGgzbTEgMGgybTEgMGgxbTEgMGgzbTIgMGgxbTEgMGgxbTYgMGgxbTEgMGgxTTEgOTYuNWgxbTIgMGgybTYgMGgzbTMgMGgybTQgMGgxbTEgMGgxbTIgMGgxbTMgMGgxbTEgMGgxbTQgMGgxbTIgMGgzbTIgMGgzbTIgMGgxbTIgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTIgMGgxbTMgMGgzbTEgMGgxbTEgMGgxbTEgMGgybTMgMGgxbTIgMGgxbTEgMGgxbTEgMGgxbTIgMGgzbTIgMGgybTEgMGg0bTEgMGg0TTEgOTcuNWgzbTIgMGgzbTEgMGgxbTEgMGgxbTIgMGgybTIgMGgxbTIgMGg3bTQgMGg1bTEgMGgxbTEgMGgybTEgMGgybTEgMGgzbTEgMGg3bTIgMGgzbTEgMGgxbTEgMGgybTEgMGgxbTMgMGgxbTQgMGgybTUgMGg0bTQgMGgybTEgMGgybTMgMGg0bTEgMGg0TTEgOTguNWg0bTQgMGgxbTcgMGgybTEgMGg0bTEgMGgxbTIgMGgxbTEgMGgybTEgMGgxbTEgMGgzbTQgMGgybTEgMGgybTEgMGgxbTIgMGgzbTIgMGgzbTEgMGgxbTIgMGgybTEgMGgybTEgMGgybTQgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTMgMGgxbTEgMGgybTEgMGgybTEgMGgxbTIgMGgxbTIgMGgxbTIgMGg1bTEgMGgyTTIgOTkuNWg0bTEgMGgxbTEgMGgxbTIgMGgxbTEgMGgxbTIgMGgybTEgMGgybTQgMGgxbTIgMGgzbTEgMGgzbTEgMGgxbTEgMGgxbTEgMGgzbTIgMGgzbTIgMGg4bTEgMGgybTEgMGgybTIgMGgxbTIgMGgxbTIgMGgybTEgMGgybTMgMGgxbTMgMGgybTMgMGgybTEgMGgybTIgMGgxbTEgMGg2bTEgMGgyTTMgMTAwLjVoNG0xIDBoMm00IDBoMm0xIDBoMm0yIDBoMm01IDBoMW0xIDBoMW00IDBoMm0xIDBoM20xIDBoMm0xIDBoMW0xIDBoMW0xIDBoMW0zIDBoMW0zIDBoM20zIDBoMW0xIDBoMW0yIDBoMW0yIDBoMW00IDBoM20xIDBoMW0xIDBoNG0yIDBoM20xIDBoMm02IDBoMW0xIDBoMm0xIDBoMU0xIDEwMS41aDNtMSAwaDFtMSAwaDJtMyAwaDFtMyAwaDNtMSAwaDFtNCAwaDJtMiAwaDZtMiAwaDJtMSAwaDFtMiAwaDFtMSAwaDNtMSAwaDExbTEgMGg0bTEgMGgxbTMgMGgybTEgMGgxbTIgMGg3bTEgMGg1bTIgMGgzbTEgMGgxMW0yIDBoMU05IDEwMi41aDFtMSAwaDJtMSAwaDFtMSAwaDFtMyAwaDFtMyAwaDNtMiAwaDFtMyAwaDFtMyAwaDFtMSAwaDRtMSAwaDJtMSAwaDFtMyAwaDFtMSAwaDFtMyAwaDFtMiAwaDFtMiAwaDFtMSAwaDZtMSAwaDJtMSAwaDFtMSAwaDFtMyAwaDJtMSAwaDFtMiAwaDFtMSAwaDNtMSAwaDJtMSAwaDFtMiAwaDFtMSAwaDFtMyAwaDFtMSAwaDJNMSAxMDMuNWg3bTEgMGg1bTQgMGgxbTEgMGgxbTEgMGgxbTIgMGgxbTEgMGgzbTEgMGgxbTEgMGgxbTQgMGgxbTkgMGgybTMgMGgxbTEgMGgxbTEgMGgxbTUgMGg2bTIgMGgybTMgMGgybTEgMGgxbTEgMGgzbTIgMGgybTEgMGgxbTEgMGgxbTEgMGgybTUgMGgybTEgMGgxbTEgMGgxbTEgMGgxTTEgMTA0LjVoMW01IDBoMW0yIDBoMW0xIDBoMm0zIDBoMm0xIDBoMW02IDBoMW0xIDBoMW0zIDBoMW0yIDBoMW0yIDBoMm01IDBoM20xIDBoMW0yIDBoMW0zIDBoMW0xIDBoMm0xIDBoMW0zIDBoMm0yIDBoMm0xIDBoM20xIDBoMW0zIDBoMW0xIDBoMW0xIDBoMW0xIDBoMW00IDBoMm0xIDBoMW0xIDBoMm0xIDBoMm0zIDBoMW0xIDBoM00xIDEwNS41aDFtMSAwaDNtMSAwaDFtMSAwaDdtMiAwaDJtMSAwaDNtMSAwaDJtMSAwaDZtMSAwaDJtMSAwaDFtMiAwaDFtMSAwaDFtMSAwaDFtMiAwaDJtMSAwaDFtMSAwaDEwbTIgMGgybTIgMGgxbTcgMGg1bTEgMGgxbTEgMGgxbTIgMGgxbTEgMGgxbTEgMGg0bTEgMGgzbTEgMGg2bTEgMGgxTTEgMTA2LjVoMW0xIDBoM20xIDBoMW0yIDBoMW0zIDBoMW0xIDBoMW0yIDBoNG0xIDBoMm0yIDBoM20yIDBoMW0xNCAwaDFtMiAwaDJtMSAwaDJtMiAwaDFtMiAwaDFtMSAwaDhtMSAwaDFtMiAwaDFtMiAwaDFtMSAwaDNtMiAwaDFtMSAwaDZtMyAwaDJtMSAwaDFtMSAwaDFtMiAwaDJtMyAwaDFNMSAxMDcuNWgxbTEgMGgzbTEgMGgxbTMgMGgxbTEgMGgybTMgMGgxbTIgMGgzbTEgMGgybTIgMGg2bTMgMGgzbTMgMGgxbTIgMGgybTEgMGgxbTIgMGgybTMgMGgxbTEgMGgxbTEgMGgxbTIgMGgybTEgMGgxbTggMGgxbTMgMGgxbTEgMGgxbTMgMGgxbTEgMGgxbTYgMGgxbTEgMGgxbTIgMGgybTEgMGgybTEgMGgyTTEgMTA4LjVoMW01IDBoMW0zIDBoMW0yIDBoOG0yIDBoNm0xIDBoM20zIDBoMW0yIDBoMm0xIDBoMW01IDBoMW0xIDBoNm0xIDBoMW0yIDBoMm0yIDBoMW0xIDBoNG0yIDBoM20yIDBoMW0yIDBoMW0xIDBoMm0xIDBoMm0yIDBoMm0xIDBoMW0xIDBoMW0xIDBoMW0yIDBoMW0yIDBoMm0yIDBoMk0xIDEwOS41aDdtMSAwaDRtMyAwaDNtMSAwaDhtMyAwaDFtMSAwaDFtMSAwaDFtMyAwaDFtMSAwaDNtMSAwaDJtMSAwaDVtNCAwaDhtMyAwaDdtMSAwaDFtNCAwaDFtMSAwaDNtNSAwaDFtMSAwaDZtMiAwaDZtMSAwaDIiLz48L3N2Zz4K" alt="Assinatura - João Silva Santos" class="size-[250px]">
						<figcaption class="text-center">
							<p class="mt-2 text-sm">João Silva Santos</p>
							<p class="text-xs text-muted-foreground">123.456.789-00</p>
						</figcaption>
					</figure>
				</div>
				<div class="flex flex-col items-center-safe">
					<figure>
						<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAiIGhlaWdodD0iMjUwIiB2aWV3Qm94PSIwIDAgMTA3IDEwNyIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMCAwaDEwN3YxMDdIMHoiLz48cGF0aCBzdHJva2U9IiMwMDAwMDAiIGQ9Ik0xIDEuNWg3bTUgMGgxbTEgMGgybTIgMGg0bTEgMGgzbTIgMGgxbTEgMGgybTEgMGgybTEgMGgxbTEgMGg2bTUgMGgxbTEgMGgzbTYgMGgxbTIgMGgxbTEgMGgybTEgMGgybTEgMGgxbTEgMGgxbTEgMGgybTEgMGgxbTUgMGgybTEgMGg1bTIgMGgxbTMgMGg3TTEgMi41aDFtNSAwaDFtMiAwaDJtMiAwaDJtMSAwaDFtMSAwaDJtMSAwaDdtMyAwaDFtMiAwaDRtNCAwaDRtMSAwaDFtMiAwaDFtMyAwaDFtMiAwaDFtMiAwaDNtMSAwaDFtMSAwaDJtMiAwaDNtMSAwaDJtMSAwaDFtMSAwaDNtMSAwaDFtNCAwaDFtMiAwaDFtMiAwaDFtMyAwaDFtNSAwaDFNMSAzLjVoMW0xIDBoM20xIDBoMW0xIDBoMW0zIDBoMm0yIDBoMW0xIDBoMW0zIDBoMW0xIDBoMm0xIDBoM20xIDBoMm0yIDBoM20yIDBoMm00IDBoMW0yIDBoNW0xIDBoMm0zIDBoMm0xIDBoMW0xIDBoMW0yIDBoMm0xIDBoMm0xIDBoMW0yIDBoMm0yIDBoMW0zIDBoNG00IDBoM20yIDBoMW0xIDBoM20xIDBoMU0xIDQuNWgxbTEgMGgzbTEgMGgxbTEgMGgybTEgMGgxbTIgMGgzbTIgMGg0bTggMGg0bTEgMGgzbTEgMGgxbTEgMGgybTMgMGg0bTIgMGgybTEgMGgxbTIgMGg0bTIgMGgzbTMgMGg0bTIgMGgxbTEgMGgxbTEgMGgxbTEgMGgzbTUgMGgxbTQgMGgxbTEgMGgxbTEgMGgzbTEgMGgxTTEgNS41aDFtMSAwaDNtMSAwaDFtMSAwaDNtMSAwaDFtMiAwaDFtMSAwaDFtMiAwaDEwbTEgMGgybTEgMGgybTMgMGg2bTMgMGgxMG00IDBoMm0xIDBoM20xIDBoMW0yIDBoN20xIDBoMW00IDBoMW0xIDBoNW0xIDBoMW0xIDBoMm0xIDBoMW0xIDBoM20xIDBoMU0xIDYuNWgxbTUgMGgxbTEgMGgxbTEgMGgxbTQgMGgybTcgMGgxbTMgMGg0bTEgMGgxbTMgMGgzbTMgMGgybTEgMGgzbTMgMGgxbTYgMGg2bTIgMGgxbTEgMGgybTEgMGgxbTMgMGgybTEgMGgxbTMgMGgybTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTIgMGgxbTIgMGgxbTUgMGgxTTEgNy41aDdtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDdNOSA4LjVoMW0xIDBoMW0yIDBoMW0xIDBoMW0yIDBoM20zIDBoMW0zIDBoMm0xIDBoMm0xIDBoMW0xIDBoMW0yIDBoMm00IDBoNG0zIDBoMW0xIDBoN20yIDBoMW0xIDBoMW0xIDBoMm0xIDBoMW0xIDBoMW0zIDBoM20xIDBoMm0xIDBoNW0xIDBoMm0xIDBoMm0yIDBoMU0xIDkuNWgxbTEgMGg1bTMgMGgxbTMgMGgxbTMgMGgxMW0yIDBoNG0xIDBoMm0yIDBoMm0xIDBoMW00IDBoNm0xIDBoMW0xIDBoMW0xIDBoM200IDBoMm0xIDBoMW0xIDBoN20xIDBoMW0xIDBoMW0xIDBoM20zIDBoM20xIDBoMW0yIDBoMW0xIDBoNU0zIDEwLjVoMm0xIDBoMW03IDBoMW0xIDBoMm0xIDBoMm0xIDBoMW0xIDBoMm0zIDBoMm0yIDBoMm0yIDBoMm0yIDBoNG0zIDBoMW0xIDBoMW0xIDBoMm0xIDBoMW0xIDBoMW01IDBoMm0xIDBoM20zIDBoM20zIDBoMm02IDBoMW0xIDBoMW0xIDBoMm00IDBoMm0xIDBoMm0zIDBoMk0xIDExLjVoMm0zIDBoMm0yIDBoMW0xIDBoMm0xIDBoNG0xIDBoMm0xIDBoMW0xIDBoMW0yIDBoMW0xIDBoMW0xIDBoMW0yIDBoM20xIDBoNW0zIDBoM200IDBoMW01IDBoM200IDBoMW0xIDBoNW0zIDBoMW0xIDBoMW0xIDBoMm0yIDBoM20yIDBoMW0yIDBoMm0xIDBoMW0zIDBoMW0yIDBoMW0xIDBoMU0xIDEyLjVoMW03IDBoMW0zIDBoM20yIDBoNW0yIDBoM203IDBoMW0yIDBoNG00IDBoNG0yIDBoMW0xIDBoNG0yIDBoMm00IDBoM202IDBoNG0xIDBoMW0xIDBoM202IDBoMW0xIDBoM20xIDBoM20yIDBoMW0xIDBoMU00IDEzLjVoMW0xIDBoM200IDBoMW0yIDBoMW0xIDBoMW0xIDBoMW0xIDBoM202IDBoMW0xIDBoM20xIDBoNG0zIDBoMW0xIDBoMm0yIDBoMW0zIDBoM20zIDBoMm0xIDBoMW00IDBoMW0yIDBoNG00IDBoMm00IDBoMW0xIDBoMW0zIDBoMm02IDBoM20xIDBoMW0xIDBoMU0yIDE0LjVoMW0xIDBoMm00IDBoMm0xIDBoMW0xIDBoMW0xIDBoMm0xIDBoMW0xIDBoM20yIDBoM20xIDBoMm0xIDBoMW0xIDBoMW0xIDBoMW0xIDBoNG00IDBoMm0yIDBoN20zIDBoMW0xIDBoMm0zIDBoM20xIDBoMm0xIDBoNW00IDBoMm0xIDBoNW0zIDBoMm0xIDBoMW0xIDBoM00xIDE1LjVoMW0xIDBoMW0xIDBoMW0xIDBoNG0xIDBoMW0xIDBoMW0yIDBoMm0yIDBoMW0xIDBoMW0yIDBoMm0xIDBoMm0zIDBoMW0xIDBoMW0xIDBoMW00IDBoMW0yIDBoN20xIDBoM20yIDBoM20xIDBoMm0xIDBoMm0xIDBoMW0xIDBoN203IDBoMW0xIDBoMW0xIDBoMW0xIDBoMm0xIDBoMW0yIDBoMm0xIDBoNk00IDE2LjVoM20xIDBoNm0zIDBoMW0xIDBoNG0xIDBoMW0xIDBoMm0yIDBoMW0xIDBoMm0yIDBoMm0yIDBoMm0xIDBoMW0xIDBoMW0xIDBoNG00IDBoMW0yIDBoMW0zIDBoMm0zIDBoMm0xIDBoMW0yIDBoMm0yIDBoM20yIDBoMm0xIDBoMW0xIDBoMm0yIDBoM20xIDBoMW0yIDBoMW0zIDBoMU0xIDE3LjVoMTJtMSAwaDFtMSAwaDRtMSAwaDJtNCAwaDJtMSAwaDJtMiAwaDFtMiAwaDJtNSAwaDFtMiAwaDJtNyAwaDFtMiAwaDVtMiAwaDNtMiAwaDFtMSAwaDJtMyAwaDFtMSAwaDFtMiAwaDRtMyAwaDNtMSAwaDFtMiAwaDFtMyAwaDFNMSAxOC41aDJtMSAwaDNtNSAwaDFtMiAwaDFtMSAwaDFtMiAwaDJtMSAwaDJtMSAwaDFtMyAwaDFtMSAwaDNtNSAwaDRtMiAwaDFtMSAwaDJtNCAwaDJtMSAwaDJtMSAwaDNtMiAwaDRtOSAwaDRtMiAwaDNtNCAwaDFtMSAwaDJtMSAwaDRtMyAwaDNNNSAxOS41aDFtMSAwaDFtMSAwaDNtMSAwaDFtMSAwaDFtMyAwaDFtMiAwaDJtMSAwaDFtMSAwaDJtMyAwaDFtNCAwaDFtMiAwaDJtMiAwaDJtMSAwaDFtMSAwaDFtMSAwaDJtMSAwaDJtMSAwaDFtMSAwaDFtMSAwaDFtNiAwaDFtMyAwaDRtMSAwaDJtMSAwaDFtMSAwaDJtMyAwaDJtMSAwaDFtMiAwaDFtMSAwaDJtMSAwaDNtMSAwaDJNNCAyMC41aDNtMyAwaDJtMyAwaDNtMSAwaDNtMiAwaDFtMSAwaDJtMiAwaDFtMiAwaDNtNCAwaDFtMSAwaDFtMyAwaDFtMSAwaDFtMSAwaDJtMyAwaDFtMSAwaDJtMSAwaDFtMSAwaDJtMiAwaDFtMSAwaDFtMiAwaDFtNyAwaDJtMSAwaDFtMSAwaDFtOCAwaDFtNCAwaDFtMyAwaDNNMiAyMS41aDFtMyAwaDVtMiAwaDFtMSAwaDJtMSAwaDFtMiAwaDFtMSAwaDFtMyAwaDJtMSAwaDFtMiAwaDJtMSAwaDFtMyAwaDJtMSAwaDJtMSAwaDFtMSAwaDJtNCAwaDNtMSAwaDJtMSAwaDNtMiAwaDFtMSAwaDFtMyAwaDRtMiAwaDFtMSAwaDFtMSAwaDVtMyAwaDJtMSAwaDFtMSAwaDFtMSAwaDJtMSAwaDFtMSAwaDJtMSAwaDFNMiAyMi41aDNtNCAwaDJtMSAwaDFtMSAwaDZtMSAwaDFtMSAwaDFtMSAwaDFtMiAwaDJtMyAwaDFtMiAwaDFtMSAwaDFtMSAwaDRtMSAwaDFtMyAwaDJtMiAwaDVtMiAwaDFtMSAwaDFtMSAwaDFtMSAwaDRtMiAwaDJtMiAwaDZtMyAwaDJtMiAwaDNtMSAwaDFtMiAwaDVtMiAwaDFNMSAyMy41aDNtMiAwaDJtNCAwaDFtNSAwaDJtMyAwaDVtMyAwaDJtMiAwaDJtMiAwaDNtMSAwaDFtMiAwaDRtNSAwaDFtMSAwaDJtNyAwaDEwbTMgMGgybTUgMGgxbTMgMGgxbTIgMGgxbTEgMGgxbTEgMGgybTIgMGgzTTIgMjQuNWgxbTEgMGgybTQgMGgybTEgMGgxbTMgMGgxbTIgMGgxbTMgMGgybTYgMGgzbTIgMGgzbTMgMGg1bTEgMGgybTMgMGgxbTMgMGgybTEgMGgxbTEgMGgxbTEgMGgzbTIgMGgxbTEgMGgxbTMgMGgxbTEgMGgybTEgMGgxbTUgMGgzbTEgMGgybTQgMGgybTEgMGgxbTEgMGgxbTEgMGgxTTIgMjUuNWgxMm01IDBoMm0xIDBoOW0xIDBoNm0xIDBoNW0xIDBoMW0yIDBoNm0xIDBoMm0xIDBoMW0xIDBoNW0xIDBoM20xIDBoMm0xIDBoNm0xIDBoMW0xIDBoNm00IDBoMm0yIDBoNm0xIDBoMU0yIDI2LjVoMW0yIDBoMW0zIDBoNG0xIDBoMW0xIDBoM20xIDBoMW0xIDBoMW0xIDBoMm0zIDBoMW0yIDBoNW0xIDBoMW0xIDBoMW0xIDBoNG0zIDBoMW0zIDBoM20xIDBoMW0zIDBoMm0yIDBoNG0zIDBoMm0zIDBoM20xIDBoMm0xIDBoM20zIDBoMm00IDBoMm0zIDBoMW0zIDBoMU0xIDI3LjVoMW0xIDBoM20xIDBoMW0xIDBoMW0xIDBoMm0xIDBoMW02IDBoMW0zIDBoMW0xIDBoMW0xIDBoMW0xIDBoMW00IDBoMm0xIDBoMm00IDBoMW0xIDBoM20xIDBoMW0xIDBoMW0xIDBoMW0yIDBoMW0xIDBoMm0yIDBoMW0zIDBoNG0xIDBoMW0xIDBoMW0xIDBoMW0zIDBoMW0xIDBoMW0xIDBoNG0yIDBoMW0yIDBoMW0yIDBoMW0xIDBoMW0xIDBoM20xIDBoMU0xIDI4LjVoNW0zIDBoMW02IDBoMm0xIDBoMW0xIDBoMW0xIDBoM20zIDBoMW0yIDBoMW0xIDBoMm0zIDBoM20xIDBoNG0yIDBoMW0zIDBoNm0xIDBoMW0xIDBoMm0xIDBoMW01IDBoM20zIDBoMW0yIDBoMW00IDBoMW0xIDBoMW0yIDBoMW0zIDBoMW0yIDBoMW0zIDBoNE0xIDI5LjVoMW0xIDBoMW0xIDBoNW0zIDBoMm0yIDBoMm01IDBoNm0xIDBoMW0yIDBoM20yIDBoMm0xIDBoMm0zIDBoN20xIDBoMW00IDBoNW0zIDBoMW0xIDBoMW0xIDBoNm0xIDBoMm0yIDBoMW0xIDBoMm0zIDBoMm01IDBoN20xIDBoMU0yIDMwLjVoMW0yIDBoMW01IDBoMW0zIDBoMW00IDBoMW0xIDBoMm0yIDBoMW0yIDBoMW0zIDBoMW0xIDBoMm0xIDBoM20yIDBoM204IDBoMm0yIDBoMW0zIDBoMW0yIDBoMW0xIDBoMW01IDBoM20yIDBoM20xIDBoMW0yIDBoMm0xIDBoNW00IDBoMW0yIDBoMW0yIDBoM00zIDMxLjVoMm0xIDBoNm0xIDBoM200IDBoMm00IDBoMW0xIDBoMW0xIDBoMW0yIDBoMm0xIDBoM20yIDBoMm03IDBoM20xIDBoM20yIDBoMW0xIDBoM20xIDBoMm0xIDBoM20xIDBoMW0xIDBoMW0xIDBoMW0yIDBoMW0zIDBoMm0zIDBoMW0yIDBoMm0yIDBoMm0zIDBoMW0xIDBoM00xIDMyLjVoMW00IDBoMW0yIDBoMW0xIDBoMm01IDBoM20xIDBoNG0yIDBoMW0yIDBoMW0xIDBoMW0xIDBoMW0yIDBoMW0yIDBoM20yIDBoMm0xIDBoMm0yIDBoMW0zIDBoMm0xIDBoMW0xIDBoMW0xIDBoMm0xIDBoMW0zIDBoMW0xIDBoMW0xIDBoMW0xIDBoNm0xIDBoMm0zIDBoMW0yIDBoMm0zIDBoMm02IDBoMU0xIDMzLjVoMm0xIDBoMW0yIDBoM20yIDBoNG03IDBoMW0yIDBoMW0xIDBoNW00IDBoM200IDBoMW0xIDBoM20yIDBoMm0zIDBoMW00IDBoMm00IDBoMm0yIDBoMW0yIDBoNW00IDBoM20xIDBoNG0xIDBoMW0xIDBoMW0yIDBoMW0xIDBoMW00IDBoMk0xIDM0LjVoMW0xIDBoMW0xIDBoMm0xIDBoMm0yIDBoMW0yIDBoNW0xIDBoMW0yIDBoMW00IDBoMW0yIDBoM20xIDBoMW0xIDBoMm0xIDBoM20xIDBoMW0zIDBoMm0zIDBoMm0xIDBoMW00IDBoMW0xIDBoNG0xIDBoMm0yIDBoMW0yIDBoMW00IDBoNm0yIDBoNG0xIDBoMW0xIDBoMW02IDBoMW0xIDBoMU0zIDM1LjVoMW0zIDBoMm0xIDBoMm0zIDBoMW0xIDBoMW0yIDBoMm0yIDBoMW0yIDBoMm0yIDBoM201IDBoM20yIDBoMW0zIDBoM20zIDBoMm0yIDBoMW0xIDBoMW0zIDBoMm0yIDBoMW0yIDBoM200IDBoMm0zIDBoM20xIDBoMW00IDBoMm0xIDBoNW0zIDBoMU0yIDM2LjVoM20xIDBoMW01IDBoMW0xIDBoMm0xIDBoMTFtMyAwaDFtMSAwaDJtNiAwaDJtNSAwaDJtMSAwaDJtMiAwaDJtNCAwaDZtMiAwaDFtNCAwaDJtMSAwaDFtMiAwaDFtMSAwaDFtMiAwaDNtMSAwaDFtMyAwaDZtMSAwaDFtMSAwaDFNMiAzNy41aDRtMSAwaDJtMSAwaDFtMSAwaDJtMiAwaDJtMSAwaDVtMyAwaDJtMSAwaDJtMSAwaDJtOSAwaDFtMiAwaDFtMiAwaDFtMSAwaDJtMiAwaDFtMSAwaDFtMSAwaDNtNSAwaDFtMiAwaDJtMSAwaDFtNCAwaDJtMSAwaDRtMiAwaDFtMSAwaDNtNSAwaDJNMiAzOC41aDJtMSAwaDFtMiAwaDFtMSAwaDJtMSAwaDNtMSAwaDJtMSAwaDJtMSAwaDNtMiAwaDJtMSAwaDRtMSAwaDRtMyAwaDNtNCAwaDFtMyAwaDNtMSAwaDFtMyAwaDFtMSAwaDRtMSAwaDFtMyAwaDJtNCAwaDFtMiAwaDJtMSAwaDJtMyAwaDJtNSAwaDFtMyAwaDNtMSAwaDFNMiAzOS41aDFtMSAwaDJtMSAwaDFtMSAwaDFtMSAwaDJtMSAwaDFtMSAwaDFtMyAwaDFtMSAwaDJtMiAwaDJtMSAwaDJtMSAwaDJtMSAwaDJtMyAwaDFtMSAwaDFtNiAwaDJtMSAwaDJtMSAwaDJtMSAwaDJtMSAwaDFtMiAwaDJtMSAwaDFtNCAwaDFtMSAwaDFtMTMgMGgxbTIgMGgxbTEgMGgybTEgMGgxbTEgMGgzbTEgMGgzTTEgNDAuNWgxbTIgMGgybTIgMGgybTEgMGgxbTMgMGgybTEgMGgxbTQgMGgxbTEgMGgxbTEgMGg1bTEgMGgybTEgMGgzbTQgMGgxbTIgMGgzbTIgMGgybTEgMGg0bTEgMGgzbTEgMGg1bTEgMGgzbTIgMGgxbTEgMGgxbTEgMGgxbTEgMGgzbTIgMGgybTUgMGgybTIgMGgxbTEgMGgxbTEgMGgzbTEgMGgxTTIgNDEuNWgxbTEgMGgxbTIgMGgxbTMgMGgxbTEgMGgxbTEgMGgybTEgMGg1bTEgMGgzbTEgMGg0bTMgMGgzbTEgMGgybTEgMGgzbTEgMGgybTMgMGg1bTQgMGgybTEgMGgxbTQgMGgxbTEgMGgxbTMgMGgxbTIgMGgzbTEgMGg1bTEgMGgxbTIgMGgxbTEgMGgxbTQgMGgybTMgMGgybTEgMGgxTTIgNDIuNWgybTEgMGgxbTIgMGgxbTMgMGgxbTUgMGgybTEgMGgxbTEgMGgxbTEgMGg0bTIgMGgxbTIgMGgxbTEgMGgxbTMgMGg1bTQgMGgxbTQgMGgzbTQgMGgybTMgMGgybTYgMGgzbTIgMGg2bTIgMGgxbTEgMGgxbTYgMGgxbTEgMGgxbTEgMGgxbTIgMGgxbTEgMGgxTTIgNDMuNWgybTEgMGg1bTEgMGgzbTEgMGgxbTIgMGgybTEgMGgxbTQgMGgxbTIgMGgxbTMgMGgxbTQgMGgybTIgMGgxbTIgMGgzbTIgMGgxbTEgMGgxbTMgMGgxbTMgMGgybTMgMGgxbTIgMGgxbTEgMGgxbTIgMGgxbTIgMGgzbTEgMGgxbTEgMGg1bTIgMGgybTEgMGgzbTEgMGgybTIgMGg2TTUgNDQuNWgxbTMgMGgxbTEgMGgybTMgMGg0bTIgMGgybTQgMGgybTEgMGgzbTEgMGgybTEgMGgxbTEgMGgxbTIgMGgybTIgMGgxbTEgMGgxbTEgMGgxbTIgMGgybTMgMGgxbTIgMGg0bTQgMGgxbTEgMGgxbTEgMGg0bTEgMGg4bTEgMGgxbTIgMGgxbTEgMGg2bTEgMGg1TTEgNDUuNWgybTEgMGgxbTIgMGgxbTIgMGgxbTIgMGgxbTMgMGg0bTEgMGgxbTMgMGgxbTEgMGgzbTIgMGgzbTIgMGgzbTIgMGgybTEgMGgzbTEgMGg1bTEgMGgxbTIgMGgzbTEgMGgxbTIgMGgxbTEgMGgxbTIgMGgybTEgMGgxbTEgMGgzbTUgMGg0bTQgMGgxbTkgMGg0TTMgNDYuNWgxbTIgMGgxbTEgMGgybTIgMGg2bTEgMGgxbTEgMGgxbTIgMGgybTEgMGgzbTIgMGgxbTEgMGgxbTIgMGgybTIgMGgzbTcgMGgxbTMgMGgxbTEgMGgybTIgMGgybTEgMGg0bTUgMGgxbTEgMGgxbTIgMGgybTUgMGgxbTMgMGg0bTMgMGg0bTIgMGg0TTEgNDcuNWgybTIgMGgxbTEgMGgxbTIgMGgxbTEgMGgxbTEgMGgybTUgMGgybTEgMGgzbTEgMGgybTEgMGgybTEgMGgxbTMgMGgxbTEgMGgxbTIgMGgxbTEgMGgxbTEgMGgxbTEgMGgybTIgMGgybTQgMGgxbTEgMGgxbTIgMGgxbTIgMGg0bTIgMGgybTIgMGgybTEgMGgxbTIgMGgxbTIgMGgxbTIgMGgzbTEgMGgybTEgMGgybTEgMGgybTEgMGgybTEgMGgxTTIgNDguNWgxbTEgMGgxbTEgMGgxbTMgMGgxbTEgMGgxbTIgMGgxbTEgMGgxbTEgMGgxbTIgMGgxbTIgMGgxbTIgMGgxbTEgMGgzbTQgMGgybTMgMGgzbTEgMGgxbTYgMGgxbTIgMGg0bTEgMGgybTEgMGgxbTEgMGgybTMgMGgzbTIgMGg2bTMgMGgxbTIgMGgxbTIgMGgxbTEgMGgxbTQgMGgxbTIgMGgxTTEgNDkuNWgybTEgMGg2bTMgMGgybTEgMGgxbTIgMGgxbTEgMGgybTEgMGg2bTEgMGgybTQgMGgxbTEgMGgxbTMgMGgybTIgMGgxbTEgMGg1bTEgMGgxbTQgMGgybTYgMGgxbTEgMGgxbTEgMGg2bTEgMGgybTEgMGgxbTEgMGgybTEgMGgxbTIgMGgxbTEgMGgxbTEgMGgxbTIgMGg1TTEgNTAuNWgxbTEgMGgxbTEgMGgxbTMgMGgxbTEgMGgxbTEgMGgxbTIgMGgxbTEgMGgxbTEgMGg0bTEgMGgxbTMgMGgzbTIgMGgxbTIgMGgzbTEgMGgxbTEgMGg3bTMgMGgzbTQgMGgzbTEgMGgxbTEgMGgzbTMgMGgybTMgMGg1bTQgMGgxbTMgMGgxbTIgMGgzbTEgMGgxbTMgMGgyTTEgNTEuNWgxbTIgMGgybTEgMGgxbTEgMGgxbTMgMGgxbTEgMGgxbTIgMGgxbTEgMGgxbTEgMGg0bTEgMGgxbTEgMGgybTEgMGgxbTMgMGg0bTEgMGgzbTMgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGg1bTEgMGgybTEgMGgxbTIgMGgxbTIgMGgybTEgMGgxbTEgMGgxbTEgMGg0bTEgMGgxbTEgMGgybTEgMGgxbTIgMGgybTEgMGgxbTMgMGgxbTEgMGgxbTEgMGgxbTIgMGgxTTEgNTIuNWg1bTMgMGgzbTEgMGgxbTEgMGgxbTEgMGgybTEgMGgybTEgMGgxbTEgMGgxbTMgMGgybTYgMGgxbTIgMGgxbTEgMGgxbTIgMGgybTIgMGgxbTMgMGgxbTMgMGgxbTcgMGg2bTEgMGgybTMgMGg1bTEgMGgzbTEgMGg0bTEgMGgzbTIgMGgxbTMgMGg0TTIgNTMuNWgxbTEgMGg2bTYgMGgxbTIgMGgzbTIgMGg4bTQgMGgxbTUgMGgxbTEgMGgxbTMgMGg3bTEgMGgxbTEgMGgxbTEgMGgybTEgMGgybTggMGg1bTIgMGgxbTIgMGg0bTUgMGgxbTEgMGgxbTEgMGg2bTIgMGgxTTMgNTQuNWgxbTIgMGgxbTUgMGgzbTEgMGgzbTEgMGgzbTIgMGgxbTYgMGgybTEgMGgzbTIgMGgxbTEgMGg0bTIgMGgybTIgMGgxbTEgMGgybTEgMGgybTEgMGgzbTIgMGgzbTEgMGgxbTIgMGg0bTEgMGg0bTUgMGgxbTIgMGg0bTEgMGgybTEgMGgxbTIgMGgxTTEgNTUuNWgzbTMgMGgxbTEgMGgxbTEgMGgybTEgMGgxbTIgMGgxbTEgMGgybTEgMGgxbTIgMGgzbTQgMGgybTEgMGgzbTEgMGgxbTQgMGgxbTQgMGgzbTUgMGgxbTEgMGgxbTQgMGgzbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgzbTIgMGgybTEgMGgxbTIgMGgxbTEgMGgzbTMgMGgxbTIgMGg0bTQgMGgxTTIgNTYuNWgybTEgMGgxbTIgMGgzbTIgMGgybTEgMGgxbTMgMGgzbTIgMGgxbTEgMGgxMG0xIDBoM20xIDBoMW0xIDBoN20xIDBoNm0yIDBoNm0xIDBoMm0yIDBoM20yIDBoMW0yIDBoMW0xIDBoMm00IDBoMW0zIDBoM20xIDBoMm0yIDBoM20xIDBoMk02IDU3LjVoMTBtNCAwaDFtMSAwaDFtMiAwaDFtMSAwaDFtMyAwaDJtMSAwaDFtNSAwaDFtMSAwaDJtMiAwaDFtMyAwaDJtMiAwaDNtMiAwaDNtMSAwaDFtMiAwaDJtMiAwaDFtMyAwaDRtMiAwaDFtMiAwaDRtNSAwaDFtMyAwaDFtMSAwaDFNMiA1OC41aDFtMSAwaDFtOCAwaDJtMiAwaDFtMSAwaDFtMSAwaDJtMiAwaDFtMyAwaDNtMSAwaDJtMiAwaDFtMiAwaDVtNCAwaDJtMSAwaDFtMiAwaDFtMSAwaDJtMyAwaDFtMyAwaDJtMTAgMGgzbTUgMGgxbTEgMGgxbTEgMGgzbTQgMGgxbTEgMGgxbTQgMGgxTTEgNTkuNWgxbTIgMGg0bTEgMGgybTMgMGgybTEgMGgybTMgMGgxbTEgMGgxbTEgMGgybTEgMGgzbTEgMGgybTIgMGgzbTYgMGgxbTEgMGgxbTEgMGgxbTMgMGgxbTQgMGgzbTEgMGgxbTEgMGgzbTQgMGgzbTQgMGgybTEgMGgxbTEgMGg0bTMgMGgxbTEgMGgybTEgMGg0bTIgMGg0TTIgNjAuNWgybTEgMGgxbTIgMGg1bTIgMGgxbTIgMGgzbTEgMGgzbTQgMGgxbTEgMGgybTEgMGgxbTkgMGgzbTEgMGgzbTIgMGgzbTIgMGg3bTIgMGgzbTIgMGgzbTMgMGg3bTEgMGgxbTEgMGgxbTEgMGgybTUgMGgxbTEgMGgxbTQgMGgxTTIgNjEuNWgybTMgMGgzbTEgMGgxbTEgMGgzbTUgMGgxbTIgMGgybTIgMGgxbTIgMGgxbTUgMGg2bTMgMGgxbTEgMGgybTIgMGgybTEgMGgybTEgMGgxbTEgMGgzbTMgMGgybTEgMGgzbTMgMGgxbTEgMGgybTQgMGgzbTEgMGgxbTMgMGgybTUgMGgxbTEgMGgybTEgMGgzTTEgNjIuNWgxbTEgMGgxbTEgMGgxbTIgMGgybTEgMGg0bTEgMGgxbTQgMGgybTEgMGgxbTQgMGgxbTIgMGg0bTEgMGg4bTMgMGgxbTEgMGgxbTMgMGgybTEgMGgybTEgMGgzbTEgMGgybTEgMGg0bTEgMGg0bTIgMGgybTYgMGgxbTEgMGg1bTEgMGgxbTIgMGgzbTIgMGgxbTEgMGgyTTMgNjMuNWg2bTEgMGgxbTEgMGgxbTEgMGgybTEgMGgzbTQgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTMgMGgzbTIgMGgxbTIgMGgxbTEgMGgxbTIgMGgybTEgMGgxbTIgMGgxbTEgMGgxbTEgMGgybTUgMGgxbTEgMGgybTEgMGgxbTEgMGgzbTIgMGgxbTEgMGgxbTEgMGgxbTEgMGgzbTIgMGgxbTEgMGgzbTEgMGg0bTMgMGgyTTEgNjQuNWgybTIgMGgybTEgMGgybTMgMGgxbTEgMGgxbTIgMGgxbTEgMGgxbTEgMGgybTEgMGgybTQgMGgybTEgMGgybTEgMGgybTUgMGgxbTIgMGg0bTEgMGgxbTMgMGg3bTEgMGgxbTQgMGgybTEgMGgybTEgMGgybTEgMGgybTQgMGgxbTEgMGgxbTEgMGgzbTcgMGgzbTIgMGgyTTEgNjUuNWgxbTIgMGgxbTEgMGgzbTIgMGgybTQgMGgxbTEgMGgybTEgMGg2bTEgMGgxbTMgMGgxbTQgMGgxbTIgMGg0bTEgMGgzbTEgMGgzbTIgMGgybTEgMGg0bTQgMGgxbTEgMGgxbTIgMGgxbTEgMGg0bTEgMGgzbTEgMGgxbTEgMGg0bTQgMGgxbTEgMGg1bTIgMGgxbTMgMGgxTTQgNjYuNWgxbTEgMGgxbTMgMGg0bTEgMGgxbTIgMGg0bTEgMGgybTQgMGgxbTEgMGgxbTIgMGgxbTMgMGgybTEgMGg0bTMgMGgzbTIgMGgzbTEgMGgxbTIgMGgxbTEgMGgxbTEgMGgxbTEgMGgybTQgMGgxbTMgMGg2bTQgMGgxbTQgMGgxbTUgMGg0bTQgMGgxTTEgNjcuNWgxbTEgMGgxbTEgMGg1bTQgMGgzbTEgMGgxbTMgMGgxbTMgMGgxbTEgMGgybTIgMGgxbTEgMGgybTkgMGgxbTIgMGgybTIgMGgybTEgMGgybTQgMGgxbTMgMGg2bTIgMGgxbTQgMGgybTQgMGgybTEgMGg0bTIgMGgybTEgMGgybTEgMGg2TTEgNjguNWgxbTIgMGgxbTEgMGgxbTIgMGgybTMgMGgzbTEgMGg0bTMgMGgxbTIgMGgxbTQgMGgxbTIgMGgxbTEgMGgybTIgMGgybTEgMGgybTEgMGgybTMgMGg0bTMgMGgxbTEgMGgzbTEgMGgybTQgMGg1bTEgMGgzbTEgMGgybTMgMGgzbTIgMGgybTIgMGgxbTEgMGgxbTEgMGgxbTMgMGgxTTcgNjkuNWgxbTEgMGgxbTEgMGgzbTQgMGgzbTEgMGgybTEgMGgxbTMgMGgxbTMgMGgzbTIgMGgxbTIgMGgxbTEgMGgybTEgMGgybTEgMGgxbTEgMGgzbTEgMGgybTIgMGgxbTYgMGgzbTIgMGgxbTEgMGgybTEgMGgzbTEgMGgxbTIgMGgzbTEgMGgxbTggMGgxbTEgMGgxbTIgMGgxbTEgMGgzTTYgNzAuNWgxbTIgMGgybTUgMGgxbTIgMGgxbTMgMGgybTEgMGgxbTEgMGg0bTEgMGgzbTIgMGgxbTEgMGg1bTMgMGgxbTEgMGgzbTEgMGgzbTEgMGgzbTEgMGgxbTEgMGgxbTIgMGgxbTEgMGgxbTIgMGgybTQgMGgybTUgMGgybTEgMGg2bTUgMGgxbTIgMGgybTEgMGgxTTIgNzEuNWgzbTEgMGg0bTIgMGgxbTEgMGgybTEgMGg2bTQgMGgxbTIgMGgxbTIgMGgybTEgMGgxbTIgMGgzbTEgMGgybTQgMGgxbTEgMGgxbTMgMGgybTIgMGgxbTIgMGgxbTMgMGgxbTMgMGgxbTMgMGgxbTQgMGgybTEgMGgxbTMgMGg0bTEgMGgzbTEgMGg0bTEgMGg0TTIgNzIuNWgxbTEgMGgzbTQgMGgxbTEgMGg2bTEgMGgxbTEgMGgxbTcgMGgzbTEgMGgybTEgMGgxbTEgMGgxbTMgMGgybTEgMGg1bTEgMGgxbTEgMGgxbTMgMGgxbTUgMGgybTEgMGg0bTEgMGgzbTIgMGgxbTIgMGg0bTEgMGgxbTEgMGgzbTQgMGgybTEgMGgybTQgMGgyTTEgNzMuNWg5bTEgMGgzbTEgMGgybTEgMGgxbTEgMGgxbTIgMGgxbTEgMGg5bTIgMGgybTIgMGgzbTEgMGgxbTEgMGgxMW0yIDBoM200IDBoMW02IDBoNW0xIDBoMW0yIDBoNG01IDBoMm0xIDBoOU0xIDc0LjVoMm0xIDBoMm0zIDBoMW0xIDBoMW0xIDBoNW0xIDBoMW0xIDBoM20xIDBoMW0zIDBoMW0yIDBoMW0yIDBoMW0xIDBoMW0xIDBoMW0zIDBoMm00IDBoMW0zIDBoM20yIDBoMW0yIDBoMm0yIDBoMW0xIDBoMm00IDBoMW0zIDBoNG01IDBoMW0zIDBoMm01IDBoMW0zIDBoMm0xIDBoMk01IDc1LjVoMW0xIDBoMW0xIDBoMm0yIDBoMW0yIDBoMm0xIDBoMm0yIDBoM20xIDBoMW0xIDBoMW0xIDBoMW0zIDBoMW0xIDBoMW0yIDBoMW0xIDBoMW0yIDBoMW0zIDBoMW0xIDBoMW0xIDBoM200IDBoMm00IDBoMW0xIDBoMW0yIDBoMW0xIDBoMW0xIDBoMW0xIDBoMm0xIDBoMW0xIDBoMm0zIDBoNW0xIDBoMm0xIDBoMm0xIDBoMW0xIDBoM00xIDc2LjVoMm0yIDBoMW0zIDBoM20zIDBoMW0xIDBoMW0xIDBoM20yIDBoMm0zIDBoMW0xIDBoM20yIDBoM20yIDBoMW0xIDBoMW0xIDBoM20xIDBoMW0zIDBoM20yIDBoM20xIDBoMW0yIDBoMW0xIDBoMm0xIDBoMW0xIDBoMm0zIDBoMW0xIDBoMm0zIDBoMm0xIDBoMW0xIDBoMW0xIDBoM20zIDBoMW0zIDBoNE0yIDc3LjVoMW0xIDBoN20zIDBoMW0xIDBoMm0zIDBoMm0yIDBoNm0xIDBoM20xIDBoMW0xIDBoN20xIDBoMm0xIDBoNW0xIDBoMm0yIDBoMW0xIDBoMW0xIDBoMW0yIDBoMW0xIDBoMW0yIDBoMW0xIDBoOG0xIDBoMW0xIDBoNG0yIDBoMW0xIDBoMW0xIDBoOG0zIDBoMU0yIDc4LjVoM20xIDBoMW0xIDBoNm0yIDBoMW0xIDBoMW0xIDBoMW0xIDBoMW00IDBoMm0xIDBoOG0yIDBoMW0xIDBoM202IDBoMW0yIDBoMm00IDBoMW0xIDBoMW01IDBoMW0zIDBoMW00IDBoNG0zIDBoM20xIDBoMW0xIDBoNG00IDBoMW02IDBoMU0xIDc5LjVoM20xIDBoMW0xIDBoMm0xIDBoMW0yIDBoMW0zIDBoMW0yIDBoMW0xIDBoMW00IDBoMm0zIDBoMW0xIDBoMW0yIDBoMW0xIDBoMm0xIDBoM20xIDBoMW0zIDBoMW0xIDBoMW0xIDBoMW0zIDBoMW0yIDBoMm0xIDBoM20xIDBoM20yIDBoMW0xIDBoMm0xIDBoMm0xIDBoM20zIDBoM20xIDBoMW0xIDBoM20yIDBoMW0zIDBoMk00IDgwLjVoM20xIDBoM200IDBoMm0xIDBoMm0xIDBoMW0yIDBoMm0yIDBoNW0zIDBoMW0yIDBoMW0yIDBoMm0zIDBoM202IDBoMW0zIDBoMW0yIDBoMW0xIDBoMW0xIDBoMW0xIDBoMW0yIDBoMW0xIDBoMW0zIDBoMm0xIDBoNG0xIDBoMm0xIDBoMW00IDBoNm0zIDBoMk0zIDgxLjVoMW0yIDBoNW0xIDBoMW0xIDBoNW00IDBoMm0xIDBoNm0zIDBoMm00IDBoMm0xIDBoMW00IDBoMm0xIDBoMW0xIDBoM200IDBoM20zIDBoMm0xIDBoMW0zIDBoMW0xIDBoMW0xIDBoM20xIDBoMW0yIDBoMm0zIDBoMW0xIDBoMW0zIDBoMW01IDBoNE0xIDgyLjVoNG0xIDBoMW0zIDBoM200IDBoMm0xIDBoM200IDBoMW0xIDBoMW0zIDBoNW0zIDBoNG0zIDBoMW01IDBoMm00IDBoMW0xIDBoMW0xIDBoMW0xIDBoMW05IDBoMW0xIDBoMm0xIDBoMW00IDBoMW0xIDBoMW0xIDBoMm0xIDBoMW0zIDBoMm0xIDBoMW0yIDBoMk02IDgzLjVoMm01IDBoMm0xIDBoMm0yIDBoMW0xIDBoNG0zIDBoMm00IDBoMW0yIDBoNm0xIDBoMW0zIDBoMm0yIDBoNG0xIDBoMW0xIDBoMm0xIDBoNW0xIDBoMm00IDBoNW00IDBoMW01IDBoMW0xIDBoMm0xIDBoM20xIDBoMm0xIDBoM00xIDg0LjVoM20xIDBoMW00IDBoMm0zIDBoMW0yIDBoMW0yIDBoM20xIDBoNW0yIDBoM20zIDBoMW0xIDBoMW0yIDBoMW0xIDBoMW00IDBoMW0zIDBoM20yIDBoMW0xIDBoMW0xIDBoMm0yIDBoMm0zIDBoNG0yIDBoMW0xIDBoMW00IDBoMm0yIDBoMW00IDBoMm0xIDBoMm0xIDBoMW0xIDBoM00xIDg1LjVoNW0xIDBoMm0xIDBoMm00IDBoMW0xIDBoMW0xIDBoM20xIDBoM20xIDBoMW0xIDBoN20yIDBoNG0xIDBoMW0xIDBoMm0xIDBoMW0yIDBoMm0yIDBoMW0xIDBoNG01IDBoMm03IDBoNW0xIDBoNW0xIDBoMW0yIDBoMm04IDBoMW0yIDBoMk0xIDg2LjVoMW0xIDBoMW00IDBoMm0xIDBoMm0xIDBoMm0yIDBoMW03IDBoNW0yIDBoMW0yIDBoMm0yIDBoMW0xIDBoMm0xIDBoMW00IDBoMm0yIDBoM201IDBoMW0yIDBoM20yIDBoMW0xIDBoNG0yIDBoNG0yIDBoM20zIDBoM201IDBoMW02IDBoMU0xIDg3LjVoM20zIDBoMm0xIDBoMm0zIDBoNG00IDBoMW0yIDBoMm0yIDBoMm0xIDBoMm0xIDBoNG0yIDBoMW0xIDBoMm0zIDBoMW0zIDBoMW0yIDBoMW00IDBoMW0xIDBoM20xIDBoMm01IDBoMW0xIDBoMW0zIDBoMm0yIDBoM20xIDBoMW0xIDBoMm0yIDBoNW0zIDBoMk0yIDg4LjVoMW0xIDBoMW0xIDBoMW0yIDBoMW0xIDBoMm0zIDBoMW0yIDBoM20yIDBoMW0xIDBoMW0xIDBoMW0xIDBoMm0xIDBoM200IDBoMm0xIDBoMm0zIDBoMm00IDBoMW0yIDBoMW0zIDBoMW0xIDBoMm02IDBoMm0yIDBoMW0zIDBoMW0xIDBoMm0xIDBoMW0yIDBoMW0xIDBoMW0zIDBoMW0xIDBoMW03IDBoMk0zIDg5LjVoNW0yIDBoMW0xIDBoMm0xIDBoMW0xIDBoMW0xIDBoM20xIDBoMW0yIDBoMW0xIDBoMW01IDBoMm0yIDBoM20xIDBoMm0xIDBoMW0xIDBoMW0yIDBoMW0xIDBoNW0xIDBoNG0xIDBoMW0zIDBoMm0xIDBoMm0yIDBoMW0yIDBoNG0xIDBoMW0yIDBoMW0yIDBoMW0xIDBoNG0xIDBoMm0yIDBoMW0yIDBoM00zIDkwLjVoMW01IDBoMW0zIDBoMW0yIDBoMm0xIDBoMm0yIDBoMW0xIDBoMW0xIDBoMW02IDBoM20xIDBoMW0yIDBoM202IDBoMm0yIDBoMm00IDBoMm0yIDBoNG0xIDBoMm00IDBoMW0xIDBoNG0xIDBoMW0xIDBoM20yIDBoNG00IDBoMm0yIDBoNU0xIDkxLjVoMW0yIDBoNG0xIDBoMW0xIDBoM20yIDBoMW01IDBoNG0yIDBoMW0xIDBoMW0xIDBoM20xIDBoMW0xIDBoMW0yIDBoNG0xIDBoMW00IDBoMW0xIDBoMm0zIDBoMm0yIDBoNG0zIDBoMW0xIDBoMW00IDBoMW0xIDBoMW0yIDBoMW0xIDBoMW0yIDBoMW0yIDBoM20xIDBoM20xIDBoNG0xIDBoMk04IDkyLjVoMm0yIDBoMm00IDBoMm0yIDBoMm0xIDBoMW01IDBoM204IDBoMW00IDBoNG0xIDBoMW01IDBoMW0xIDBoMm0yIDBoMW0xIDBoNW0yIDBoMW03IDBoMm0yIDBoMW0zIDBoNG0xIDBoMW0yIDBoMm0zIDBoM00xIDkzLjVoMW0xIDBoMW0xIDBoMW0xIDBoMW0yIDBoMW0yIDBoMW0xIDBoMW0yIDBoM20xIDBoM20xIDBoMm0xIDBoN20xIDBoNW0yIDBoMW0xIDBoMW0xIDBoMW0xIDBoMW0zIDBoM20yIDBoNW0yIDBoM20yIDBoMW0yIDBoMW0zIDBoM20yIDBoNG0zIDBoMW0xIDBoMm00IDBoMW0yIDBoMW0xIDBoMk0xIDk0LjVoMW04IDBoNG0xIDBoMW0yIDBoMW0xIDBoMm0yIDBoMW0yIDBoMm00IDBoMm0yIDBoMW0xIDBoMW0zIDBoMW04IDBoMW0xIDBoMm0xIDBoMm0xIDBoM20yIDBoNW0yIDBoMW0zIDBoMW0xIDBoMm0xIDBoMW0zIDBoMm0yIDBoNG01IDBoMW0xIDBoMW0yIDBoMk0xIDk1LjVoM20zIDBoMW0xIDBoMW0xIDBoMW0xIDBoNW0xIDBoMW0zIDBoMm0xIDBoM20xIDBoM20yIDBoMm0xIDBoM20xIDBoMW05IDBoMW0xIDBoMW0xIDBoMW0yIDBoMW0xIDBoNG0yIDBoMm0xIDBoMm0xIDBoMW0yIDBoMW0yIDBoMW0xIDBoMm0xIDBoNm00IDBoNG00IDBoM00zIDk2LjVoMW0xIDBoMm0yIDBoMm0xIDBoMm0xIDBoMW01IDBoMW0zIDBoMW0xIDBoMW0yIDBoMW0xIDBoM20xIDBoNG0xIDBoMW02IDBoMm0xIDBoMW02IDBoM20yIDBoNG0xIDBoMW0xIDBoMm0yIDBoMm0yIDBoMm0xIDBoMm03IDBoMm0zIDBoM20xIDBoM20yIDBoMU00IDk3LjVoMm0xIDBoMW01IDBoMW0xIDBoMm0xIDBoMW0xIDBoMW00IDBoNW0xIDBoM20yIDBoMm0yIDBoMm0yIDBoMW0xIDBoMm0xIDBoNW0yIDBoMW0xIDBoMW0yIDBoMW00IDBoMW0xIDBoMW0zIDBoN20xIDBoMW0xIDBoMm0xIDBoMm0yIDBoMW0yIDBoMW0yIDBoOG0xIDBoMU05IDk4LjVoMm0yIDBoNG0xIDBoM20xIDBoNG0zIDBoNG0yIDBoMm0xIDBoMW0yIDBoNG0zIDBoMm0zIDBoNG01IDBoMW0xIDBoMW0xIDBoNG0zIDBoMW0zIDBoMW0yIDBoMm0yIDBoM20yIDBoNG0xIDBoMW0xIDBoMm0zIDBoM00xIDk5LjVoN20yIDBoMW0xIDBoMW0xIDBoMm0xIDBoNG0yIDBoMW0xIDBoMW0xIDBoMW0xIDBoMm0xIDBoMW0xIDBoMW0xIDBoM20xIDBoMW01IDBoMW0xIDBoMm0xIDBoMW0xIDBoMW0xIDBoM20yIDBoMW0xIDBoNG0xIDBoMW0xIDBoMm0yIDBoMW0xIDBoMW0xIDBoMm0xIDBoMm0yIDBoMm00IDBoMW0yIDBoM20xIDBoMW0xIDBoMW0xIDBoNE0xIDEwMC41aDFtNSAwaDFtMSAwaDhtMiAwaDJtMiAwaDNtMyAwaDhtMiAwaDJtMSAwaDNtMiAwaDFtMSAwaDFtMyAwaDNtMiAwaDJtNiAwaDFtMSAwaDJtMiAwaDJtMyAwaDFtMSAwaDFtMSAwaDhtMSAwaDNtMiAwaDFtMSAwaDFtMyAwaDNNMSAxMDEuNWgxbTEgMGgzbTEgMGgxbTEgMGgybTEgMGgxbTMgMGgybTIgMGgxbTEgMGg4bTEgMGgxbTUgMGgybTMgMGgzbTEgMGgxbTEgMGg3bTEgMGgxbTEgMGgxbTEgMGgybTEgMGgxbTMgMGgybTQgMGg1bTIgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTUgMGgxbTMgMGg2bTMgMGgxTTEgMTAyLjVoMW0xIDBoM20xIDBoMW0xIDBoMW0yIDBoNG0xIDBoMW0xIDBoM202IDBoMW0xIDBoMW0yIDBoMW0xIDBoMm0xIDBoMW0xIDBoNW0zIDBoMW0xIDBoMW0xIDBoNm00IDBoMW0xIDBoMW0xIDBoM20xIDBoMW0xIDBoMW0xIDBoMW0yIDBoNG00IDBoMm0xIDBoMW0xIDBoNG01IDBoMm0xIDBoMk0xIDEwMy41aDFtMSAwaDNtMSAwaDFtMSAwaDJtMSAwaDRtMiAwaDFtMiAwaDJtMSAwaDFtMSAwaDFtMSAwaDdtMyAwaDFtMiAwaDJtMSAwaDJtMSAwaDFtMSAwaDFtMSAwaDNtMSAwaDFtMiAwaDFtMyAwaDFtMyAwaDNtMiAwaDJtNSAwaDVtMiAwaDFtMyAwaDFtMSAwaDFtMSAwaDNtMyAwaDFtMSAwaDNNMSAxMDQuNWgxbTUgMGgxbTYgMGgxbTEgMGgybTQgMGg3bTIgMGgxbTIgMGgxbTQgMGgxbTQgMGgxbTMgMGgxbTEgMGgybTEgMGgxbTggMGgxbTEgMGgxbTMgMGgxbTEgMGgxbTIgMGg1bTEgMGgxbTQgMGgxbTEgMGgxbTEgMGgxbTIgMGgybTEgMGg1bTEgMGgxbTEgMGgyTTEgMTA1LjVoN20xIDBoMW0xIDBoMW0xIDBoN20zIDBoMm0xIDBoMW0yIDBoMW0xIDBoMm0xIDBoMm0zIDBoMW00IDBoMW0xIDBoMW0yIDBoMm01IDBoMW0xIDBoNG0xIDBoMW0zIDBoMm0xIDBoNG0xIDBoMW00IDBoMW0xIDBoMm0yIDBoMm0yIDBoMW0xIDBoMW0xIDBoMW0yIDBoMW0xIDBoMW0yIDBoMyIvPjwvc3ZnPgo=" alt="Assinatura - Maria Aparecida Costa" class="size-[250px]">
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
