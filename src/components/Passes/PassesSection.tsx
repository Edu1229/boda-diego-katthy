import React, {useMemo} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {FaHeart} from "react-icons/fa6";
import flor from "../../assets/img/Flor-azul.png";

const PassesSection: React.FC = () => {
	const {scrollYProgress} = useScroll();
	const florY = useTransform(scrollYProgress, [0, 1], [0, 60]);

	// Detectar cantidad de acompañantes del enlace
	const paseCount = useMemo(() => {
		const path = window.location.pathname.toLowerCase();

		// Soporta /+pase1, /pase1, /pase/1
		const match = path.match(/pase\/?(\d+)/) || path.match(/\+pase(\d+)/);
		if (!match) return 0; // Sin número → invitación personal, sin pase adicional
		const n = parseInt(match[1]);
		return n >= 0 && n <= 5 ? n : 0;
	}, []);

	// Texto según el tipo de pase
	const paseLabel =
		paseCount === 0
			? "Invitación personal"
			: paseCount === 1
				? "1 acompañante"
				: `${paseCount} acompañantes`;

	return (
		<section
			className="relative w-full text-center py-16 px-6 overflow-hidden text-white"
			style={{
				background:
					"linear-gradient(160deg, #C8EBF9 0%, #DDF2FC 50%, #9ED4EC 100%)",
			}}
		>
			{/* ðŸŒ¸ Flor decorativa sutil */}
			<motion.img
				src={flor}
				alt="DecoraciÃ³n floral"
				style={{y: florY, zIndex: 0}}
				className="absolute top-1/2 left-1/2 w-80 sm:w-[28rem] opacity-10 transform -translate-x-1/2 -translate-y-1/2 rotate-[20deg] pointer-events-none select-none"
				initial={{opacity: 0}}
				whileInView={{opacity: 0.1}}
				transition={{duration: 1.2}}
				viewport={{once: false}}
			/>

			{/* âœ¨ Mensaje principal */}
			<motion.h3
				className="text-lg md:text-3xl font-serif mb-4 leading-relaxed text-[#2E6D8A] max-w-2xl mx-auto px-4"
				initial={{opacity: 0, y: 20}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 1}}
				viewport={{once: false}}
			>
				Cuando te das cuenta de que quieres pasar el resto de tu vida con
				alguien deseas que el resto de tu vida empiece antes.
			</motion.h3>

			{/* ðŸ’ž Separador con corazÃ³n */}
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
					className="text-[#f1c8a9] text-2xl md:text-3xl"
					initial={{scale: 0}}
					whileInView={{scale: [0, 1.3, 1]}}
					transition={{duration: 1.2, delay: 0.2}}
				>
					<FaHeart className="animate-pulse" />
				</motion.span>
				<motion.div
					className="w-1/5 border-t border-white/70"
					initial={{width: 0}}
					whileInView={{width: "20%"}}
					transition={{duration: 1.2, delay: 0.3}}
				/>
			</motion.div>

			{/* ðŸ’Œ Subtexto */}
			<motion.p
				className="mt-8 text-sm md:text-base text-[#2E6D8A] italic font-semibold"
				initial={{opacity: 0, y: 15}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 1, delay: 0.4}}
				viewport={{once: false}}
			>
				Gracias por acompañarnos en este día tan especial.
			</motion.p>

			{/* ðŸŽŸ Pase animado dinÃ¡mico */}
			<motion.div
				className="mt-10 inline-block bg-white/20 border border-white/40 rounded-2xl px-8 py-4 backdrop-blur-sm shadow-md"
				initial={{opacity: 0, scale: 0.9, y: 20}}
				whileInView={{opacity: 1, scale: 1, y: 0}}
				transition={{duration: 1.2, delay: 0.5}}
				viewport={{once: false}}
			>
				<p className="uppercase tracking-[0.15em] text-sm md:text-base text-white font-medium">
					{paseCount === 0 ? (
						<span className="text-[#2E6D8A] font-bold">{paseLabel}</span>
					) : (
						<>
							<span className="font-normal text-[#2E6D8A]">Pase para </span>
							<span className="text-[#2E6D8A] font-bold">{paseLabel}</span>
						</>
					)}
				</p>
			</motion.div>
		</section>
	);
};

export default PassesSection;
