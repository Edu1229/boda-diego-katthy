import React from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import flor from "../../assets/img/Flor-azul.png";

const WeddingDate: React.FC = () => {
	const {scrollYProgress} = useScroll();
	const florSuperiorY = useTransform(scrollYProgress, [0, 1], [0, 60]);
	const florInferiorY = useTransform(scrollYProgress, [0, 1], [0, -60]);

	return (
		<section
			className="relative w-full py-16 px-6 overflow-hidden flex flex-col items-center text-center"
			style={{
				background:
					"linear-gradient(160deg, #EEF7FB 0%, #F5FBFE 60%, #EBF4FA 100%)",
			}}
		>
			{/* ðŸŒ¸ Flor decorativa superior derecha con movimiento parallax */}
			<motion.img
				src={flor}
				alt="DecoraciÃ³n floral"
				style={{y: florSuperiorY, zIndex: 0}}
				className="absolute top-0 right-0 w-40 sm:w-48 md:w-56 opacity-20 pointer-events-none select-none transform translate-x-8 -translate-y-4 rotate-[15deg]"
				initial={{opacity: 0}}
				whileInView={{opacity: 0.35}}
				transition={{duration: 1.2}}
				viewport={{once: false}}
			/>

			{/* ðŸŒ¸ Flor decorativa inferior izquierda con parallax */}
			<motion.img
				src={flor}
				alt="DecoraciÃ³n floral"
				style={{y: florInferiorY, zIndex: 0}}
				className="absolute bottom-0 left-0 w-40 sm:w-48 md:w-56 opacity-15 pointer-events-none select-none transform -translate-x-8 translate-y-4 rotate-[200deg]"
				initial={{opacity: 0}}
				whileInView={{opacity: 0.35}}
				transition={{duration: 1.2}}
				viewport={{once: false}}
			/>

			{/* âœ¨ Texto superior */}
			<motion.p
				className="uppercase text-xs text-[#6BAFC9] tracking-widest mb-3"
				initial={{opacity: 0, y: 10}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.8}}
				viewport={{once: false}}
			>
				Día del evento
			</motion.p>

			{/* ðŸ’ Caja de fecha */}
			<motion.div
				className="mb-5 border-[#8EC8E0] border-y py-3 px-6 text-center bg-white/70 backdrop-blur-sm rounded-lg shadow-sm"
				initial={{opacity: 0, scale: 0.95, y: 10}}
				whileInView={{opacity: 1, scale: 1, y: 0}}
				transition={{duration: 1, ease: "easeOut"}}
				viewport={{once: false, amount: 0.3}}
			>
				<h2 className="text-4xl md:text-6xl font-serif text-[#2E6D8A]">
					21 / MARZO / 2026
				</h2>
				<p className="text-lg text-[#6BAFC9] mt-2">Sábado, 2:00 PM</p>
			</motion.div>
		</section>
	);
};

export default WeddingDate;
