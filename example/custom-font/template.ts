export const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Font</title>
	<style>
		body { margin: 24px; }
		h2 { margin: 0 0 4px; font-size: 13px; color: #888; font-family: monospace; font-weight: normal; }
		h1 { margin: 0 0 24px; }
	</style>
</head>
<body>
	<h2>font-family: Roboto (custom)</h2>
	<h1 style="font-family: Roboto, sans-serif;">The quick brown fox</h1>
	<h2>font-family: Inter (embedded default)</h2>
	<h1 style="font-family: Inter, sans-serif;">The quick brown fox</h1>
	<h2>font-family: sans-serif (generic → Roboto via mapping)</h2>
	<h1 style="font-family: sans-serif;">The quick brown fox</h1>
</body>
</html>
`;
