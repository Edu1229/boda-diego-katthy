import React, {useMemo} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import flor from "../../assets/img/image.png";

const PassesSection: React.FC = () => {
	const {scrollYProgress} = useScroll();
	const florY = useTransform(scrollYProgress, [0, 1], [0, 60]);

	// 🔍 Detectar cantidad de personas del enlace
	const paseCount = useMemo(() => {
		const path = window.location.pathname.toLowerCase();

		// Soporta /+pase1, /pase1, /pase/1
		const match = path.match(/pase\/?(\d+)/) || path.match(/\+pase(\d+)/);
		const n = match ? parseInt(match[1]) : 1;

		return n >= 1 && n <= 5 ? n : 1;
	}, []);

	// 🪄 Texto adaptativo singular/plural
	const paseText = paseCount === 1 ? "1 persona" : `${paseCount} personas`;

	return (
		<section className="relative w-full text-center py-16 px-6 bg-gradient-to-b from-[#7A695D] via-[#725E50] to-[#5E4C3D] overflow-hidden text-white">
			{/* 🌸 Flor decorativa sutil */}
			<motion.img
				src={flor}
				alt="Decoración floral"
				style={{y: florY}}
				className="absolute top-1/2 left-1/2 w-80 sm:w-[28rem] opacity-10 transform -translate-x-1/2 -translate-y-1/2 rotate-[20deg] pointer-events-none select-none"
				initial={{opacity: 0}}
				whileInView={{opacity: 0.1}}
				transition={{duration: 1.2}}
				viewport={{once: false}}
			/>

			{/* ✨ Mensaje principal */}
			<motion.h3
				className="text-lg md:text-3xl font-serif mb-4 leading-relaxed text-[#FDF8F3] max-w-2xl mx-auto px-4"
				initial={{opacity: 0, y: 20}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 1}}
				viewport={{once: false}}
			>
				Su presencia es el regalo más valioso que podemos recibir.
			</motion.h3>

			{/* 💞 Separador con corazón */}
			<motion.div
				className="flex justify-center items-center gap-4 mt-4"
				initial={{opacity: 0, scale: 0.9}}
				whileInView={{opacity: 1, scale: 1}}
				transition={{duration: 1.2}}
				viewport={{once: false}}
			>
				<motion.div
					className="w-1/5 border-t border-white/70"
					initial={{width: 0}}
					whileInView={{width: "20%"}}
					transition={{duration: 1.2}}
				/>
				<motion.span
					className="text-[#F2E0D2] text-2xl md:text-3xl"
					initial={{scale: 0}}
					whileInView={{scale: [0, 1.3, 1]}}
					transition={{duration: 1.2, delay: 0.2}}
				>
					♥
				</motion.span>
				<motion.div
					className="w-1/5 border-t border-white/70"
					initial={{width: 0}}
					whileInView={{width: "20%"}}
					transition={{duration: 1.2, delay: 0.3}}
				/>
			</motion.div>

			{/* 💌 Subtexto */}
			<motion.p
				className="mt-8 text-sm md:text-base text-[#F6E8D8]/90 italic font-light"
				initial={{opacity: 0, y: 15}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 1, delay: 0.4}}
				viewport={{once: false}}
			>
				Gracias por acompañarnos en este día tan especial.
			</motion.p>

			{/* 🎟 Pase animado dinámico */}
			<motion.div
				className="mt-10 inline-block bg-[#F8F6F2]/10 border border-[#F6E8D8]/30 rounded-2xl px-8 py-4 backdrop-blur-sm shadow-md"
				initial={{opacity: 0, scale: 0.9, y: 20}}
				whileInView={{opacity: 1, scale: 1, y: 0}}
				transition={{duration: 1.2, delay: 0.5}}
				viewport={{once: false}}
			>
				<p className="uppercase tracking-[0.15em] text-sm md:text-base text-[#FDF8F3] font-medium">
					Pase para{" "}
					<span className="text-[#F4D9B0] font-semibold">{paseText}</span>
				</p>
			</motion.div>
		</section>
	);
};

export default PassesSection;
