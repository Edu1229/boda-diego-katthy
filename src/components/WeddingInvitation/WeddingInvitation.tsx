import React from "react";
import {motion} from "framer-motion";
import video from "/video_2.mp4";
const WeddingInvitation: React.FC = () => {
	return (
		<section className="relative w-full h-[72vh] flex items-end justify-center overflow-hidden">
			{/* 🎥 Video de fondo con fade-in */}
			<motion.video
				autoPlay
				loop
				muted
				playsInline
				initial={{opacity: 0, scale: 1.05}}
				animate={{opacity: 1, scale: 1}}
				transition={{duration: 2, ease: "easeOut"}}
				className="absolute inset-0 w-full h-full object-cover"
			>
				<source src={video} type="video/mp4" />
				Tu navegador no soporta videos en HTML5.
			</motion.video>
			{/* 🌤️ Degradado inferior suave */}
			<motion.div
				className="absolute -bottom-4 left-0 w-full h-[45%] bg-gradient-to-t from-white via-white/80 to-transparent"
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				transition={{duration: 1.2, delay: 0.5}}
			/>

			{/* 💬 Texto con animación de aparición elegante */}
			<motion.div
				className="relative z-10 text-center px-6 pb-12"
				initial={{opacity: 0, y: 20}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 1.2, delay: 1}}
			>
				<p className="text-[#7A695D] italic text-lg sm:text-xl leading-relaxed">
					“Por tanto, lo que Dios unió, nadie lo separe.” —{" "}
					<span className="text-[#A38B6F] font-medium">Mateo 19:6</span>
				</p>

				{/* 🌷 Línea sutil decorativa */}
				<motion.div
					className="mx-auto mt-4 w-24 h-[1px] bg-[#C7B299]"
					initial={{width: 0, opacity: 0}}
					animate={{width: 96, opacity: 1}}
					transition={{duration: 1.5, delay: 1.3, ease: "easeOut"}}
				/>
			</motion.div>
		</section>
	);
};

export default WeddingInvitation;
