import React from "react";

const DigitalGift: React.FC = () => {
	return (
		<section className="bg-[#725E50] text-white py-12 px-6 text-center relative rounded-t-[60px] rounded-b-[60px] mx-4 shadow-lg">
			<p className="max-w-xl mx-auto mb-6 text-lg">
				Su presencia y sus buenos deseos son nuestro mejor regalo. Si desean
				hacernos llegar algún presente estaremos muy agradecidos.
			</p>
			<p className="mb-6">
				No es necesario estar cerca para sentir el amor y el cariño, y si así lo
				prefieres:
			</p>
			<p className="mb-4">Gracias por tu muestra de cariño</p>
			<div className="flex justify-center mb-4">
				<img
					src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://banco.com/cuenta12345"
					alt="QR Cuenta Bancaria"
					className="rounded-xl"
				/>
			</div>
			<p className="text-lg font-semibold">Banco Ganadero</p>
			<p>Caja de Ahorro (Bs) 1234567</p>
			<p>C.I. 1234567 SC</p>
		</section>
	);
};

export default DigitalGift;
