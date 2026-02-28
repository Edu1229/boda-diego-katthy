import React from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import flor from "../../assets/img/image.png";

const SponsorsSection: React.FC = () => {
	const {scrollYProgress} = useScroll();
	const florSuperiorY = useTransform(scrollYProgress, [0, 1], [0, 60]);
	const florInferiorY = useTransform(scrollYProgress, [0, 1], [0, -60]);

	return (
		<section className="relative w-full text-center py-16 px-6 text-[#725E50] bg-white overflow-hidden">
			{/* 🌸 Flor decorativa superior derecha */}
			<motion.img
				src={flor}
				alt="Decoración floral"
				style={{y: florSuperiorY}}
				className="absolute top-0 right-0 w-44 sm:w-52 md:w-60 opacity-35 pointer-events-none select-none transform translate-x-6 -translate-y-4 rotate-[10deg]"
				initial={{opacity: 0}}
				whileInView={{opacity: 0.35}}
				transition={{duration: 1.2}}
				viewport={{once: false, amount: 0.2}}
			/>

			{/* 🌸 Flor decorativa inferior izquierda */}
			<motion.img
				src={flor}
				alt="Decoración floral"
				style={{y: florInferiorY}}
				className="absolute bottom-0 left-0 w-44 sm:w-52 md:w-60 opacity-70 pointer-events-none select-none transform -translate-x-8 translate-y-6 rotate-[200deg]"
				initial={{opacity: 0}}
				whileInView={{opacity: 0.35}}
				transition={{duration: 1.2}}
				viewport={{once: false, amount: 0.2}}
			/>

			{/* ✨ Título principal */}
			<motion.h2
				className="font-serif text-2xl md:text-3xl mb-6 text-[#7A695D]"
				initial={{opacity: 0, y: 20, scale: 0.95}}
				whileInView={{opacity: 1, y: 0, scale: 1}}
				transition={{duration: 0.8, ease: "easeOut"}}
				viewport={{once: false, amount: 0.2}}
			>
				Nuestros Padrinos
			</motion.h2>

			{/* 💞 Lista de padrinos */}
			<motion.div
				className="text-sm md:text-base leading-relaxed mb-10"
				initial={{opacity: 0, y: 20}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.9, delay: 0.2}}
				viewport={{once: false, amount: 0.2}}
			>
				<p className="text-sm md:text-base">Cesar Ramos Ancajima</p>
				<p className="text-sm md:text-base">Ingrid Navarro Flores</p>
			</motion.div>

			{/* 💍 Testigos de boda */}
			<motion.div
				className="flex flex-col items-center justify-center gap-3"
				initial={{opacity: 0, y: 20}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 1, delay: 0.4}}
				viewport={{once: false, amount: 0.2}}
			>
				<h3 className="uppercase font-serif text-lg tracking-widest text-[#A38B6F] mb-2">
					Testigos de Boda
				</h3>
				<div className="text-sm md:text-base leading-relaxed text-gray-700">
					<p>Juan Manuel Gamarra Cruz</p>
					<p>Astrid Arixel Flores Peña</p>
					<p>Daniel Valera Farfán</p>
					<p>Marita García Delgado</p>
				</div>
			</motion.div>

			{/* 🌿 Línea separadora */}
			<motion.div
				className="mx-auto w-24 h-[1px] bg-[#C7B299] my-10"
				initial={{width: 0, opacity: 0}}
				whileInView={{width: 96, opacity: 1}}
				transition={{duration: 1, delay: 0.8}}
				viewport={{once: false, amount: 0.2}}
			/>

			{/* 💬 Frase final */}
			<motion.p
				className="text-lg sm:text-xl font-cursive italic text-[#5B4A3A]"
				initial={{opacity: 0, y: 15, scale: 0.98}}
				whileInView={{opacity: 1, y: 0, scale: 1}}
				transition={{duration: 1, delay: 1}}
				viewport={{once: false, amount: 0.2}}
			>
				Nos gustaría que seas parte de este día especial
			</motion.p>
		</section>
	);
};

export default SponsorsSection;
