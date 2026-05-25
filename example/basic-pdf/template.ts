const data = {
	title: "Comprovante de Transferência",
	currentDate: new Intl.DateTimeFormat("pt-BR", {
		weekday: "long",
		day: "2-digit",
		month: "long",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	}).format(new Date()),
	amount: "R$ 1.250,00",
	transaction_type: "Pix",
	applicant_business_name: "Empresa Pagadora Ltda",
	applicant_doc_type: "CNPJ",
	applicant_doc: "12.345.678/0001-90",
	applicant_pix_key: "pagamento@empresapagadora.com.br",
	recipient_business_name: "Empresa Recebedora S.A.",
	recipient_doc_type: "CNPJ",
	recipient_doc: "98.765.432/0001-10",
	fee_amount: "R$ 0,00",
	fee_iof: "R$ 0,00",
	fee_cet: "0,00% a.m.",
	transaction_id: "E12345678202404281530XPTO9876543",
	sac: "0800 000 0000",
};

export const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>${data.title}</title>
</head>
<body>
	<main class="flex flex-col gap-5 p-4">
		<header class="flex flex-col gap-5">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" class="w-[64px] h-[38px]" viewBox="0 0 103 62">
				<path fill="#45ac5d" d="M88.791 38.332q-4.035 0-7.184-1.723-3.15-1.77-4.97-4.822-1.82-3.05-1.82-6.938 0-3.936 1.82-6.938 1.82-3.051 4.97-4.773t7.184-1.722q4.084 0 7.234 1.722 3.198 1.722 4.969 4.724 1.821 3 1.821 6.987 0 3.887-1.821 6.938-1.77 3.05-4.97 4.822-3.148 1.722-7.233 1.722m0-5.266q2.264 0 4.035-.984t2.756-2.854q1.033-1.87 1.033-4.379 0-2.559-1.033-4.38-.984-1.869-2.756-2.853t-3.986-.984q-2.263 0-4.035.984-1.722.984-2.755 2.854-1.033 1.82-1.033 4.379 0 2.51 1.033 4.38 1.033 1.869 2.755 2.853 1.772.984 3.986.984M61.788 11.416q3.15 0 5.61 1.23 2.509 1.23 3.936 3.789 1.427 2.51 1.427 6.495v15.057h-6.15v-14.27q0-3.493-1.674-5.216-1.623-1.722-4.576-1.722-2.165 0-3.838.886-1.674.885-2.608 2.657-.886 1.722-.886 4.38v13.285h-6.15V11.711h5.855v7.086l-1.033-2.165q1.377-2.51 3.985-3.839 2.658-1.377 6.102-1.377M36.591 37.987V11.711h6.151v26.276zm3.1-30.606q-1.723 0-2.854-1.083a3.56 3.56 0 0 1-1.082-2.608q0-1.575 1.082-2.607Q37.97 0 39.691 0t2.805 1.033q1.132.984 1.132 2.51 0 1.623-1.083 2.755-1.082 1.083-2.854 1.083M20.412 37.987V11.711h5.856v7.233l-.69-2.116q1.182-2.657 3.691-4.034 2.559-1.378 6.348-1.378v5.855a3 3 0 0 0-.738-.098q-.345-.05-.69-.05-3.493 0-5.56 2.067-2.066 2.018-2.066 6.053v12.744z" />
				<path fill="#45ac5d" fill-rule="evenodd" d="M10.48 29.447H4.33V16.828H0v-4.92h4.33V5.905h6.15v6.003h7.037v4.92h-7.036z" clip-rule="evenodd" />
				<path stroke="#45ac5d" stroke-width="6.135" d="M39.57 42.343c0 8.81-7.21 15.95-16.104 15.95s-16.104-7.14-16.104-15.95" />
				<path fill="#45ac5d" d="M4.294 29.447h6.135v8.589H4.294z" />
			</svg>
			<hgroup>
				<h1 class="text-xl font-semibold">${data.title}</h1>
				<small class="text-gray-500">${data.currentDate}</small>
			</hgroup>
		</header>
		<section class="text-sm">
			<h3 class="font-bold">Valor</h3>
			<p class="text-xl">${data.amount}</p>
		</section>
		<section class="text-sm">
			<h3 class="font-bold">Tipo de transação</h3>
			<p>${data.transaction_type}</p>
		</section>
		<!-- <hr class="border-t border-gray-200 w-full"> -->
		<div class="border-t border-gray-200 w-full"></div>
		<section class="text-sm">
			<h3 class="font-bold">Solicitante</h3>
			<p>${data.applicant_business_name}</p>
			<p>${data.applicant_doc_type}: ${data.applicant_doc}</p>
		</section>
		<!-- <hr class="border-t border-gray-200 w-full"> -->
		<div class="border-t border-gray-200 w-full"></div>
		<section class="text-sm">
			<h3 class="font-bold">Chave Pix de Destino</h3>
			<p>${data.applicant_pix_key}</p>
		</section>
		<section>
			<h3 class="font-bold">Titular da conta de destino</h3>
			<p>${data.recipient_business_name}</p>
			<p>${data.recipient_doc_type}: ${data.recipient_doc}</p>
		</section>
		<!-- <hr class="border-t border-gray-200 w-full"> -->
		<div class="border-t border-gray-200 w-full"></div>
		<section class="text-sm">
			<h3 class="font-bold">Taxa da operação</h3>
			<p>${data.fee_amount}</p>
		</section>
		<section class="text-sm">
			<h3 class="font-bold">IOF</h3>
			<p>${data.fee_iof}</p>
		</section>
		<section class="text-sm">
			<h3 class="font-bold">Custo Efetivo Total (CET)</h3>
			<p>${data.fee_cet}</p>
		</section>
		<!-- <hr class="border-t border-gray-200 w-full"> -->
		<div class="border-t border-gray-200 w-full"></div>
		<section class="text-sm">
			<h3 class="font-bold">ID da transação</h3>
			<p class="break-all">${data.transaction_id}</p>
		</section>
		<footer class="flex flex-col gap-5">
			<p class="text-gray-500">Em caso de dúvidas ou se precisar de orientações, acesse nosso FAQ no app ou entre em contato com o nosso SAC.</p>
			<section>
				<div class="flex items-center gap-2 font-bold">
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
					</svg>
					<span>SAC</span>
				</div>
				<p>${data.sac}</p>
			</section>
		</footer>
	</main>
</body>
</html>`;
