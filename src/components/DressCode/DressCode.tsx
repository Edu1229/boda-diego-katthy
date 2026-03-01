import React from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import moño from "../../assets/img/moño.png";
import flor from "../../assets/img/image.png";

const DressCode: React.FC = () => {
	const {scrollYProgress} = useScroll();
	const florSuperiorY = useTransform(scrollYProgress, [0, 1], [0, 80]);
	const florInferiorY = useTransform(scrollYProgress, [0, 1], [0, -80]);

	return (
		<section
			className="relative flex flex-col items-center text-center py-16 px-6 overflow-visible"
			style={{
				background:
					"linear-gradient(160deg, #EEF7FB 0%, #F5FBFE 60%, #EBF4FA 100%)",
			}}
		>
			{/* 🌸 Flor decorativa superior derecha */}
			<motion.img
				src={flor}
				alt="Decoración floral"
				style={{y: florSuperiorY}}
				className="absolute top-0 right-0 w-44 sm:w-52 md:w-60 opacity-15 pointer-events-none select-none transform translate-x-6 -translate-y-4 rotate-[15deg]"
				initial={{opacity: 0}}
				whileInView={{opacity: 0.35}}
				transition={{duration: 1.2}}
				viewport={{once: false}}
			/>

			{/* 🌸 Flor decorativa inferior izquierda */}
			<motion.img
				src={flor}
				alt="Decoración floral"
				style={{y: florInferiorY}}
				className="absolute bottom-0 left-0 w-44 sm:w-52 md:w-60 opacity-10 pointer-events-none select-none transform -translate-x-8 translate-y-6 rotate-[200deg] z-20"
				initial={{opacity: 0}}
				whileInView={{opacity: 0.35}}
				transition={{duration: 1.2}}
				viewport={{once: false}}
			/>

			{/* 🎀 Moño con animación de entrada */}
			<motion.img
				src={moño}
				alt="Dress Code"
				className="w-20 mb-6"
				initial={{opacity: 0, scale: 0.8}}
				whileInView={{opacity: 1, scale: 1}}
				transition={{duration: 0.8, ease: "easeOut"}}
				animate={{y: [0, -6, 0]}}
				viewport={{once: false}}
			/>

			{/* ✨ Título */}
			<motion.h4
				className="font-serif uppercase tracking-widest text-[#2E6D8A] mb-2"
				initial={{opacity: 0, y: 15}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.8, delay: 0.2}}
				viewport={{once: false}}
			>
				Código de Vestimenta
			</motion.h4>

			{/* 💫 Subtítulo */}
			<motion.p
				className="text-lg text-[#4A7A8F] mb-8"
				initial={{opacity: 0, y: 10}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.8, delay: 0.3}}
				viewport={{once: false}}
			>
				Elegante
			</motion.p>

			{/* 👗 Restricciones */}
			<motion.div
				className="max-w-sm bg-white/80 rounded-2xl shadow-md p-6 border border-[#B8DDEF]"
				initial={{opacity: 0, scale: 0.9}}
				whileInView={{opacity: 1, scale: 1}}
				transition={{duration: 0.9, delay: 0.4, ease: "easeOut"}}
				viewport={{once: false}}
			>
				<h5 className="font-serif uppercase text-[#2E6D8A] tracking-wider mb-4">
					Por favor, evita usar:
				</h5>

				<div className="flex flex-col items-center gap-3">
					<p className="text-[#4A7A8F] text-base">
						👗 <span className="font-medium">Mujeres:</span>{" "}
						<span className="text-[#F25A8C] font-semibold">Fucsia</span> y{" "}
						<span className="text-[#FF8C42] font-semibold">Naranja</span>
					</p>
					<p className="text-[#4A7A8F] text-base">
						🤵 <span className="font-medium">Hombres:</span>{" "}
						<span className="text-[#3B6BA5] font-semibold">Azul marino</span>
					</p>
				</div>
			</motion.div>
		</section>
	);
};

export default DressCode;
