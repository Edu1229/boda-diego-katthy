// components/loveWedding/LoveWedding.tsx
import React, {useRef} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {motion} from "framer-motion";

import pareja1 from "../../assets/img/galeria_4.png";
import pareja2 from "../../assets/img/galeria_5.png";
import pareja3 from "../../assets/img/galeria_6.png";
import pareja4 from "../../assets/img/galeria_7.png";
import pareja5 from "../../assets/img/galeria_8.png";
import pareja6 from "../../assets/img/galeria_9.png";
import pareja7 from "../../assets/img/galeria_10.png";

const LoveWedding: React.FC = () => {
	// 🎠 Configuración del carrusel con autoplay
	const autoplay = useRef(
		Autoplay({delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true})
	);
	const [emblaRef] = useEmblaCarousel(
		{loop: true, align: "center", duration: 30},
		[autoplay.current]
	);

	const slides = [
		pareja1,
		pareja2,
		pareja3,
		pareja4,
		pareja5,
		pareja6,
		pareja7,
	];

	return (
		<motion.section
			className="relative w-full h-[80vh] overflow-hidden flex flex-col justify-end text-center bg-white"
			initial={{opacity: 0, y: 20}}
			whileInView={{opacity: 1, y: 0}}
			transition={{duration: 1.2, ease: "easeOut"}}
			viewport={{once: false, amount: 0.3}}
		>
			{/* 🌅 Carrusel principal */}
			<div className="embla relative w-full h-full" ref={emblaRef}>
				<div className="embla__container flex h-full">
					{slides.map((src, index) => (
						<motion.div
							key={index}
							className="embla__slide flex-[0_0_100%] relative"
							initial={{opacity: 0.8}}
							whileInView={{opacity: 1}}
							transition={{duration: 1}}
						>
							<img
								src={src}
								alt={`Foto ${index + 1}`}
								className="w-full h-full object-cover brightness-95"
							/>
						</motion.div>
					))}
				</div>
			</div>

			{/* 💫 Degradado superior */}
			<div className="absolute top-0 left-0 w-full h-[25%] bg-gradient-to-b from-white via-white/90 to-transparent pointer-events-none" />

			{/* 💫 Degradado inferior */}
			<div className="absolute bottom-0 left-0 w-full h-[25%] bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none" />

			{/* ✨ Frase o cita romántica */}
			<motion.p
				className="relative z-10 text-gray-600 italic text-lg sm:text-xl mb-10 px-6"
				initial={{opacity: 0, y: 15}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 1, delay: 0.3}}
			>
				“Por tanto, lo que Dios unió, nadie lo separe.” — Mateo 19:6
			</motion.p>
		</motion.section>
	);
};

export default LoveWedding;
