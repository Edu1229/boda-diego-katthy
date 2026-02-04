import {motion} from "framer-motion";
import React from "react";
import type {RefObject} from "react";
import fondo from "../../assets/img/moño_2.png";
import flor from "../../assets/img/image.png"; // 🌸 tu imagen floral

interface Props {
	onEnter: () => void;
	audioRef: RefObject<HTMLAudioElement>;
}

const OverlayInicial: React.FC<Props> = ({onEnter, audioRef}) => {
	const handleClick = () => {
		audioRef.current?.play().catch(() => {});
		onEnter();
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-[#EEECEA] z-[100]">
			{/* 📜 Marco tipo tarjeta */}
			<div className="relative w-full h-full flex items-center justify-center sm:w-[480px] sm:h-[720px] bg-[#EEECEA] shadow-lg overflow-hidden rounded-none sm:rounded-[24px]">
				{/* 🎀 Imagen principal (moño e iniciales) */}
				<img
					src={fondo}
					alt="Moño e iniciales"
					className="absolute top-0 left-0 w-full h-full object-contain"
				/>

				{/* 🌸 Flor superior izquierda */}
				<motion.img
					src={flor}
					alt="Decoración floral superior izquierda"
					initial={{opacity: 0, y: -20, x: -20, rotate: -10}}
					animate={{opacity: 0.35, y: 0, x: 0}}
					transition={{duration: 1.2, ease: "easeOut"}}
					className="absolute top-0 left-0 w-44 sm:w-52 opacity-35 pointer-events-none select-none transform -translate-x-4 translate-y-2 rotate-[185deg]"
				/>

				{/* 🌸 Flor inferior derecha */}
				<motion.img
					src={flor}
					alt="Decoración floral inferior derecha"
					initial={{opacity: 0, y: 20, x: 20, rotate: 15}}
					animate={{opacity: 0.35, y: 0, x: 0}}
					transition={{duration: 1.2, delay: 0.3, ease: "easeOut"}}
					className="absolute bottom-0 right-0 w-48 sm:w-56 opacity-35 pointer-events-none select-none transform translate-x-4 -translate-y-2 rotate-[15deg]"
				/>

				{/* 🩶 Capa translúcida para legibilidad */}
				<div className="absolute inset-0 bg-white/10" />

				{/* ✨ Botón central animado */}
				<motion.button
					onClick={handleClick}
					initial={{opacity: 0, y: 15}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 1, delay: 0.8}}
					whileHover={{scale: 1.05}}
					whileTap={{scale: 0.95}}
					className="
						relative z-10
						bg-[#A38B6F]
						text-white 
						px-8 py-3 
						rounded-full 
						font-medium tracking-wide
						shadow-md 
						hover:bg-[#8F7A62]
						transition
					"
					style={{
						position: "absolute",
						bottom: "15%",
					}}
				>
					Clic para abrir
				</motion.button>
			</div>
		</div>
	);
};

export default OverlayInicial;
