import React from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {FaHeart} from "react-icons/fa";
import {GiDiamondRing, GiRing} from "react-icons/gi";
import flor from "../../assets/img/Flor-azul.png";

/* â”€â”€ Paleta celeste pastel â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   bg secciÃ³n : #EEF7FB  (celeste muy suave)
   borde card : #B8DDEF
   acento     : #6BAFC9  (celeste medio)
   texto title: #2E6D8A
   texto body : #4A7A8F
   ornamento  : #8EC8E0
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

interface NameCardProps {
	names: string[];
	delay?: number;
}

const NameCard: React.FC<NameCardProps> = ({names, delay = 0}) => (
	<motion.div
		className="bg-white/80 backdrop-blur-sm border border-[#B8DDEF] rounded-2xl px-7 py-5 shadow-sm w-full max-w-xs text-center space-y-1"
		initial={{opacity: 0, y: 16}}
		whileInView={{opacity: 1, y: 0}}
		transition={{duration: 0.7, delay}}
		viewport={{once: false, amount: 0.2}}
	>
		{names.map((name, i) => (
			<p
				key={i}
				className="text-sm md:text-[15px] text-[#4A7A8F] leading-relaxed"
			>
				{name}
			</p>
		))}
	</motion.div>
);

const SponsorsSection: React.FC = () => {
	const {scrollYProgress} = useScroll();
	const florTopY = useTransform(scrollYProgress, [0, 1], [0, 55]);
	const florBotY = useTransform(scrollYProgress, [0, 1], [0, -55]);

	return (
		<section
			className="relative w-full text-center py-20 px-6 overflow-hidden"
			style={{
				background:
					"linear-gradient(160deg, #EEF7FB 0%, #F5FBFE 50%, #EBF4FA 100%)",
			}}
		>
			{/* â”€â”€ Flores decorativas â”€â”€ */}
			<motion.img
				src={flor}
				alt=""
				style={{y: florTopY, zIndex: 0}}
				className="absolute top-0 right-0 w-44 sm:w-56 opacity-25 pointer-events-none select-none translate-x-6 -translate-y-4 rotate-[10deg]"
				initial={{opacity: 0}}
				whileInView={{opacity: 0.25}}
				transition={{duration: 1.2}}
				viewport={{once: false, amount: 0.2}}
			/>
			<motion.img
				src={flor}
				alt=""
				style={{y: florBotY, zIndex: 0}}
				className="absolute bottom-0 left-0 w-44 sm:w-56 opacity-20 pointer-events-none select-none -translate-x-8 translate-y-6 rotate-[200deg]"
				initial={{opacity: 0}}
				whileInView={{opacity: 0.2}}
				transition={{duration: 1.2}}
				viewport={{once: false, amount: 0.2}}
			/>

			{/* â”€â”€ Encabezado â”€â”€ */}
			<motion.div
				className="relative z-10 mb-12"
				initial={{opacity: 0, y: 20}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.8}}
				viewport={{once: false, amount: 0.2}}
			>
				<p className="uppercase text-[10px] tracking-[0.3em] text-[#6BAFC9] mb-3">
					Quienes hacen posible este día
				</p>
				<h2 className="font-[Playfair_Display] text-3xl md:text-4xl text-[#2E6D8A]">
					Nuestros Padrinos
				</h2>
				{/* Ornamento */}
				<div className="flex items-center justify-center gap-3 mt-4">
					<div className="h-px w-10 bg-[#8EC8E0]" />
					<GiRing className="text-[#8EC8E0] text-base" />
					<div className="h-px w-10 bg-[#8EC8E0]" />
				</div>
			</motion.div>

			{/* â”€â”€ Tarjeta de padrinos â”€â”€ */}
			<div className="relative z-10 flex flex-col items-center gap-4 mb-12">
				<NameCard
					names={["Cesar Ramos Ancajima", "Ingrid Navarro Flores"]}
					delay={0.15}
				/>
			</div>

			{/* â”€â”€ Separador con Ã­cono â”€â”€ */}
			<motion.div
				className="relative z-10 flex items-center justify-center gap-3 mb-12"
				initial={{opacity: 0, scaleX: 0.6}}
				whileInView={{opacity: 1, scaleX: 1}}
				transition={{duration: 0.9, delay: 0.3}}
				viewport={{once: false, amount: 0.2}}
			>
				<div className="h-px w-12 bg-[#8EC8E0]" />
				<GiDiamondRing className="text-[#6BAFC9] text-xl" />
				<div className="h-px w-12 bg-[#8EC8E0]" />
			</motion.div>

			{/* â”€â”€ Testigos de boda â”€â”€ */}
			<motion.div
				className="relative z-10 flex flex-col items-center gap-5"
				initial={{opacity: 0, y: 20}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.9, delay: 0.35}}
				viewport={{once: false, amount: 0.2}}
			>
				{/* Label testigos */}
				<div className="text-center">
					<p className="uppercase text-[10px] tracking-[0.28em] text-[#6BAFC9] mb-1">
						Nuestros
					</p>
					<h3 className="font-[Playfair_Display] text-2xl md:text-3xl text-[#2E6D8A]">
						Testigos de Boda
					</h3>
				</div>

				{/* Tarjeta testigos */}
				<NameCard
					names={["Daleska Rivera Alamo", "Jordi Elera Erazo"]}
					delay={0.45}
				/>
			</motion.div>

			{/* â”€â”€ Separador final + frase â”€â”€ */}
			<motion.div
				className="relative z-10 flex flex-col items-center gap-4 mt-12"
				initial={{opacity: 0, y: 16}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 1, delay: 0.5}}
				viewport={{once: false, amount: 0.2}}
			>
				<div className="flex items-center justify-center gap-3">
					<div className="h-px w-14 bg-[#8EC8E0]" />
					<FaHeart className="text-[#e07aa0] text-xs" />
					<div className="h-px w-14 bg-[#8EC8E0]" />
				</div>
				<p
					className="text-lg sm:text-xl italic text-[#2E6D8A]/80"
					style={{fontFamily: "'Dancing Script', cursive"}}
				>
					Nos gustaría que seas parte de este día especial
				</p>
			</motion.div>
		</section>
	);
};

export default SponsorsSection;
