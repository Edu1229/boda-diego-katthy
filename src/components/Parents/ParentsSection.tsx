import React from "react";
import {motion} from "framer-motion";
import flor from "../../assets/img/image.png";

const ParentsSection: React.FC = () => {
	return (
		<section className="relative z-10 text-center px-6 py-16 bg-white overflow-hidden">
			{/* 🌸 Flor decorativa superior */}
			<motion.img
				src={flor}
				alt="Decoración floral"
				className="absolute top-0 right-0 w-44 sm:w-52 md:w-60 opacity-30 pointer-events-none select-none transform translate-x-6 -translate-y-4 rotate-[15deg]"
				initial={{opacity: 0, y: -20}}
				whileInView={{opacity: 0.35, y: 0}}
				transition={{duration: 1.2}}
				viewport={{once: false, amount: 0.2}}
			/>

			{/* ✨ Texto introductorio */}
			<motion.p
				className="text-[#7A695D] text-base sm:text-lg mb-8 tracking-wide"
				initial={{opacity: 0, y: 20}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.8}}
				viewport={{once: false, amount: 0.2}}
			>
				Con la bendición de nuestros padres
			</motion.p>

			{/* 💞 Padres */}
			<motion.div
				className="flex flex-col sm:flex-row justify-center gap-10 text-sm md:text-base text-gray-700"
				initial={{opacity: 0, y: 20}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 1, delay: 0.2}}
				viewport={{once: false, amount: 0.2}}
			>
				<div>
					<h1 className="font-bold mb-1 text-[#7A695D]">Padres del Novio</h1>
					<p className="text-xs">Alberto Maza Curay (+)</p>
					<p className="text-xs">Faustina Sandoval Quispe (+)</p>
				</div>
				<div>
					<h1 className="font-bold mb-1 text-[#7A695D]">Padres de la Novia</h1>
					<p className="text-xs">Jorge Benjamín García Castillo</p>
					<p className="text-xs">María Elena Saldarriaga Ancajima</p>
				</div>
			</motion.div>

			{/* 💍 Nombres */}
			<motion.div
				className="font-marck-script text-[#9B8C74] text-5xl sm:text-7xl font-light mt-10"
				initial={{opacity: 0, scale: 0.95}}
				whileInView={{opacity: 1, scale: 1}}
				transition={{duration: 1, delay: 0.5, ease: "easeOut"}}
				viewport={{once: false, amount: 0.2}}
			>
				<h1 className="font-marck-script text-[#9B8C74] text-6xl md:text-7xl text-start sm:text-center ml-4 sm:mr-80">
					Javier
				</h1>
				<div className="flex justify-end sm:justify-center gap-6 items-start sm:ml-40">
					<p className="text-xl sm:text-4xl sm:mr-8">&amp;</p>
					<h1 className="font-marck-script text-[#9B8C74] text-6xl md:text-6xl mt-2 mr-4">
						JeMa
					</h1>
				</div>
			</motion.div>
		</section>
	);
};

export default ParentsSection;
