export const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Comprovante</title>

<style>/*! tailwindcss v4.3.0 | MIT License | https://tailwindcss.com */
@layer properties {
  @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
    *, :before, :after, ::backdrop {
      --tw-font-weight: initial;
    }
  }
}

@layer theme {
  :root, :host {
    --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    --spacing: .25rem;
    --text-sm: .875rem;
    --text-sm--line-height: calc(1.25 / .875);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --font-weight-bold: 700;
    --default-font-family: var(--font-sans);
    --default-mono-font-family: var(--font-mono);
  }
}

@layer base {
  *, :after, :before, ::backdrop {
    box-sizing: border-box;
    border: 0 solid;
    margin: 0;
    padding: 0;
  }

  ::-webkit-file-upload-button {
    box-sizing: border-box;
    border: 0 solid;
    margin: 0;
    padding: 0;
  }

  ::file-selector-button {
    box-sizing: border-box;
    border: 0 solid;
    margin: 0;
    padding: 0;
  }

  html, :host {
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    line-height: 1.5;
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
    vertical-align: baseline;
    font-size: 75%;
    line-height: 0;
    position: relative;
  }

  sub {
    bottom: -.25em;
  }

  sup {
    top: -.5em;
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
    vertical-align: middle;
    display: block;
  }

  img, video {
    max-width: 100%;
    height: auto;
  }

  button, input, select, optgroup, textarea {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    opacity: 1;
    background-color: #0000;
    border-radius: 0;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    opacity: 1;
    background-color: #0000;
    border-radius: 0;
  }

  ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    opacity: 1;
    background-color: #0000;
    border-radius: 0;
  }

  :where(select:-webkit-any([multiple], [size])) optgroup {
    font-weight: bolder;
  }

  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }

  :where(select:-webkit-any([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }

  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }

  ::-webkit-file-upload-button {
    margin-inline-end: 4px;
  }

  ::file-selector-button {
    margin-inline-end: 4px;
  }

  ::placeholder {
    opacity: 1;
  }

  @supports (not ((-webkit-appearance: -apple-pay-button))) or (contain-intrinsic-size: 1px) {
    ::placeholder {
      color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      ::placeholder {
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

  ::-webkit-datetime-edit {
    padding-block-start: 0;
    padding-block-end: 0;
  }

  ::-webkit-datetime-edit-year-field {
    padding-block-start: 0;
    padding-block-end: 0;
  }

  ::-webkit-datetime-edit-month-field {
    padding-block-start: 0;
    padding-block-end: 0;
  }

  ::-webkit-datetime-edit-day-field {
    padding-block-start: 0;
    padding-block-end: 0;
  }

  ::-webkit-datetime-edit-hour-field {
    padding-block-start: 0;
    padding-block-end: 0;
  }

  ::-webkit-datetime-edit-minute-field {
    padding-block-start: 0;
    padding-block-end: 0;
  }

  ::-webkit-datetime-edit-second-field {
    padding-block-start: 0;
    padding-block-end: 0;
  }

  ::-webkit-datetime-edit-millisecond-field {
    padding-block-start: 0;
    padding-block-end: 0;
  }

  ::-webkit-datetime-edit-meridiem-field {
    padding-block-start: 0;
    padding-block-end: 0;
  }

  ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }

  :-moz-ui-invalid {
    box-shadow: none;
  }

  button {
    -webkit-appearance: button;
    appearance: button;
  }

  input:where([type="button"], [type="reset"], [type="submit"]) {
    -webkit-appearance: button;
    appearance: button;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    appearance: button;
  }

  ::file-selector-button {
    -webkit-appearance: button;
    appearance: button;
  }

  ::-webkit-inner-spin-button {
    height: auto;
  }

  ::-webkit-outer-spin-button {
    height: auto;
  }

  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}

@layer components;

@layer utilities {
  .block {
    display: block;
  }

  .flex {
    display: flex;
  }

  .h-\[14px\] {
    height: 14px;
  }

  .h-\[38px\] {
    height: 38px;
  }

  .w-\[14px\] {
    width: 14px;
  }

  .w-\[64px\] {
    width: 64px;
  }

  .flex-col {
    flex-direction: column;
  }

  .flex-row {
    flex-direction: row;
  }

  .items-center-safe {
    align-items: safe center;
  }

  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }

  .gap-5 {
    gap: calc(var(--spacing) * 5);
  }

  .p-4 {
    padding: calc(var(--spacing) * 4);
  }

  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }

  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }

  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
}

@property --tw-font-weight {
  syntax: "*";
  inherits: false
}
  html { background: white; }
</style></head>
<body>
	<main class="flex flex-col gap-5 p-4">
		<style>hr { display: block; height: 1px; background-color: #d1d5db; border: none; }</style>
		<header class="flex flex-col gap-5">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="64" height="38" viewBox="0 0 103 62" class="w-[64px] h-[38px]" style="width: 64px;height: 38px;">
				<path fill="#45ac5d" d="M88.791 38.332q-4.035 0-7.184-1.723-3.15-1.77-4.97-4.822-1.82-3.05-1.82-6.938 0-3.936 1.82-6.938 1.82-3.051 4.97-4.773t7.184-1.722q4.084 0 7.234 1.722 3.198 1.722 4.969 4.724 1.821 3 1.821 6.987 0 3.887-1.821 6.938-1.77 3.05-4.97 4.822-3.148 1.722-7.233 1.722m0-5.266q2.264 0 4.035-.984t2.756-2.854q1.033-1.87 1.033-4.379 0-2.559-1.033-4.38-.984-1.869-2.756-2.853t-3.986-.984q-2.263 0-4.035.984-1.722.984-2.755 2.854-1.033 1.82-1.033 4.379 0 2.51 1.033 4.38 1.033 1.869 2.755 2.853 1.772.984 3.986.984M61.788 11.416q3.15 0 5.61 1.23 2.509 1.23 3.936 3.789 1.427 2.51 1.427 6.495v15.057h-6.15v-14.27q0-3.493-1.674-5.216-1.623-1.722-4.576-1.722-2.165 0-3.838.886-1.674.885-2.608 2.657-.886 1.722-.886 4.38v13.285h-6.15V11.711h5.855v7.086l-1.033-2.165q1.377-2.51 3.985-3.839 2.658-1.377 6.102-1.377M36.591 37.987V11.711h6.151v26.276zm3.1-30.606q-1.723 0-2.854-1.083a3.56 3.56 0 0 1-1.082-2.608q0-1.575 1.082-2.607Q37.97 0 39.691 0t2.805 1.033q1.132.984 1.132 2.51 0 1.623-1.083 2.755-1.082 1.083-2.854 1.083M20.412 37.987V11.711h5.856v7.233l-.69-2.116q1.182-2.657 3.691-4.034 2.559-1.378 6.348-1.378v5.855a3 3 0 0 0-.738-.098q-.345-.05-.69-.05-3.493 0-5.56 2.067-2.066 2.018-2.066 6.053v12.744z" />
				<path fill="#45ac5d" fill-rule="evenodd" d="M10.48 29.447H4.33V16.828H0v-4.92h4.33V5.905h6.15v6.003h7.037v4.92h-7.036z" clip-rule="evenodd" />
				<path stroke="#45ac5d" stroke-width="6.135" d="M39.57 42.343c0 8.81-7.21 15.95-16.104 15.95s-16.104-7.14-16.104-15.95" />
				<path fill="#45ac5d" d="M4.294 29.447h6.135v8.589H4.294z" />
			</svg>
			<hgroup>
				<h1 class="text-xl">Comprovante de Pagamento</h1><small class="text-sm">29/05/2026, 12:15:43</small>
			</hgroup>
		</header>
		<section class="text-sm">
			<h3 class="font-bold">Valor</h3>
			<p class="text-xl">R$ 1.234,56</p>
		</section>
		<section class="text-sm">
			<h3 class="font-bold">Tipo de transação</h3>
			<p>Pagamento</p>
		</section>
		<hr>
		<section class="text-sm">
			<h3 class="font-bold">Destinatário</h3>
			<p>Empresa Teste LTDA</p>
			<p><span>CNPJ:</span> 12.345.678/0001-99</p>
		</section>
		<section class="text-sm">
			<h3 class="font-bold">Origem</h3>
			<p>João da Silva</p>
			<p><span>CPF:</span> 123.456.789-00</p>
		</section>
		<hr>
		<section class="text-sm">
			<h3 class="font-bold">ID da transação</h3>
			<p>4a42d2fb-10b4-4a42-b489-19c749ce72ba</p>
		</section>
		<footer class="flex flex-col gap-5 text-sm">
			<p>Em caso de dúvidas ou se precisar de orientações, acesse nosso FAQ no app ou entre em contato com o nosso SAC.</p>
			<section>
				<div class="flex flex-row items-center-safe gap-2">
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone w-[14px] h-[14px]" style="width: 14px;height: 14px;">
						<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
					</svg>
					<h3 class="font-bold">SAC</h3>
				</div>
				<p>0800 000 0000</p>
			</section>
		</footer>
	</main>
</body>
</html>
`;
