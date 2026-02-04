import React from "react";
import {motion} from "framer-motion";
import flor from "../../assets/img/image.png";
import nokids from "../../assets/img/nokids.png";

const NoKids: React.FC = () => {
	return (
		<section className="relative w-full flex flex-col items-center justify-center text-center px-6 py-12 bg-white overflow-hidden">
			{/* 🌸 Flor decorativa superior izquierda */}
			<img
				src={flor}
				alt="Decoración floral"
				className="absolute top-0 left-0 w-48 sm:w-56 opacity-35 pointer-events-none select-none transform -translate-x-8 -translate-y-4 rotate-[340deg]"
			/>

			{/* 🌸 Flor decorativa inferior derecha */}
			<img
				src={flor}
				alt="Decoración floral"
				className="absolute bottom-0 right-0 w-48 sm:w-56 opacity-35 pointer-events-none select-none transform translate-x-8 translate-y-4 rotate-[160deg]"
			/>

			{/* 🍼 Icono animado */}
			<motion.img
				src={nokids}
				alt="No niños"
				className="w-28 h-28 opacity-80 mb-4"
				initial={{scale: 0.8, opacity: 0}}
				whileInView={{scale: 1, opacity: 1}}
				transition={{duration: 0.8, ease: "easeOut"}}
				viewport={{once: true}}
			/>

			{/* ✨ Texto principal */}
			<motion.h3
				className="text-[#7A695D] uppercase font-serif tracking-widest text-lg mb-3"
				initial={{opacity: 0, y: 10}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.8, delay: 0.2}}
			>
				Sin niños, con mucho amor
			</motion.h3>

			{/* 💬 Mensaje amable */}
			<motion.p
				className="max-w-md text-[#725E50] text-base sm:text-lg leading-relaxed italic"
				initial={{opacity: 0, y: 20}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.9, delay: 0.3}}
			>
				Amamos a sus pequeños, pero queremos que disfruten, rían y bailen sin
				preocupaciones 💃🕺. Por ello, este evento será exclusivamente para
				adultos.
			</motion.p>
		</section>
	);
};

export default NoKids;
