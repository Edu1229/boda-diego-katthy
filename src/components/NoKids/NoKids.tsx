import React from "react";
import {motion} from "framer-motion";
import flor from "../../assets/img/Flor-azul.png";
import nokids from "../../assets/img/nokids.png";

const NoKids: React.FC = () => {
	return (
		<section
			className="relative w-full flex flex-col items-center justify-center text-center px-6 py-12 overflow-hidden"
			style={{
				background:
					"linear-gradient(160deg, #EEF7FB 0%, #F5FBFE 60%, #EBF4FA 100%)",
			}}
		>
			{/* ðŸŒ¸ Flor decorativa superior izquierda */}
			<img
				src={flor}
				alt="DecoraciÃ³n floral"
				className="absolute top-0 left-0 w-48 sm:w-56 opacity-35 pointer-events-none select-none transform -translate-x-8 -translate-y-4 rotate-[340deg]"
			/>

			{/* ðŸŒ¸ Flor decorativa inferior derecha */}
			<img
				src={flor}
				alt="DecoraciÃ³n floral"
				className="absolute bottom-0 right-0 w-48 sm:w-56 opacity-35 pointer-events-none select-none transform translate-x-8 translate-y-4 rotate-[160deg]"
			/>

			{/* ðŸ¼ Icono animado */}
			<motion.img
				src={nokids}
				alt="No niÃ±os"
				className="w-28 h-28 opacity-80 mb-4"
				initial={{scale: 0.8, opacity: 0}}
				whileInView={{scale: 1, opacity: 1}}
				transition={{duration: 0.8, ease: "easeOut"}}
				viewport={{once: true}}
			/>

			{/* âœ¨ Texto principal */}
			<motion.h3
				className="text-[#2E6D8A] uppercase font-serif tracking-widest text-lg mb-3"
				initial={{opacity: 0, y: 10}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.8, delay: 0.2}}
			>
				Sin niÃ±os, con mucho amor
			</motion.h3>

			{/* ðŸ’¬ Mensaje amable */}
			<motion.p
				className="max-w-md text-[#4A7A8F] text-base sm:text-lg leading-relaxed italic"
				initial={{opacity: 0, y: 20}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.9, delay: 0.3}}
			>
				Amamos a sus pequeÃ±os, pero queremos que disfruten, rÃ­an y bailen sin
				preocupaciones ðŸ’ƒðŸ•º. Por ello, este evento serÃ¡ exclusivamente para
				adultos.
			</motion.p>
		</section>
	);
};

export default NoKids;
