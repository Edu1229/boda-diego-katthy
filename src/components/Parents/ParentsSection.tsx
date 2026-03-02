import React from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import flor from "../../assets/img/Flor-azul.png";

/* â”€â”€ Sub-componente: bloque de familia (padres o hermanos) â”€â”€ */
interface FamilyBlockProps {
	label: string;
	names: string[];
	delay?: number;
}

const FamilyBlock: React.FC<FamilyBlockProps> = ({label, names, delay = 0}) => (
	<motion.div
		className="w-full"
		initial={{opacity: 0, y: 18}}
		whileInView={{opacity: 1, y: 0}}
		transition={{duration: 0.7, delay}}
		viewport={{once: false, amount: 0.2}}
	>
		{/* Etiqueta de categorÃ­a */}
		<p className="uppercase text-[10px] tracking-[0.25em] text-[#6BAFC9] mb-2 font-medium">
			{label}
		</p>
		{/* LÃ­nea decorativa */}
		<div className="flex items-center justify-center gap-2 mb-3">
			<div className="h-px w-6 bg-[#8EC8E0]" />
			<div className="w-1 h-1 rounded-full bg-[#8EC8E0]" />
			<div className="h-px w-6 bg-[#8EC8E0]" />
		</div>
		<div className="space-y-1">
			{names.map((name, i) => (
				<p
					key={i}
					className="text-sm md:text-[15px] text-[#4A7A8F] leading-relaxed"
				>
					{name}
				</p>
			))}
		</div>
	</motion.div>
);

/* â”€â”€ Sub-componente: columna completa de una familia â”€â”€ */
interface FamilySideProps {
	title: string;
	subtitle: string;
	parents: string[];
	siblings: string[];
	delayBase?: number;
}

const FamilySide: React.FC<FamilySideProps> = ({
	title,
	subtitle,
	parents,
	siblings,
	delayBase = 0,
}) => (
	<motion.div
		className="flex flex-col items-center gap-6 w-full sm:w-[45%]"
		initial={{opacity: 0, y: 30}}
		whileInView={{opacity: 1, y: 0}}
		transition={{duration: 0.9, delay: delayBase}}
		viewport={{once: false, amount: 0.2}}
	>
		{/* Encabezado de familia */}
		<div className="text-center">
			<h2 className="font-[Playfair_Display] text-2xl md:text-3xl text-[#2E6D8A] leading-snug">
				{title}
			</h2>
			<p className="text-[11px] uppercase tracking-widest text-[#6BAFC9] mt-1">
				{subtitle}
			</p>
		</div>

		{/* Tarjeta interna */}
		<div className="w-full max-w-xs border border-[#B8DDEF] rounded-2xl px-6 py-7 bg-white/80 backdrop-blur-sm shadow-sm space-y-6 text-center">
			<FamilyBlock label="Padres" names={parents} delay={delayBase + 0.1} />
			<div className="h-px w-full bg-[#D6EEF8]" />
			<FamilyBlock label="Hermanos" names={siblings} delay={delayBase + 0.2} />
		</div>
	</motion.div>
);

/* â”€â”€ Componente principal â”€â”€ */
const ParentsSection: React.FC = () => {
	const {scrollYProgress} = useScroll();
	const florTopY = useTransform(scrollYProgress, [0, 1], [0, 50]);
	const florBotY = useTransform(scrollYProgress, [0, 1], [0, -50]);

	return (
		<section
			className="relative z-10 text-center px-6 py-20 overflow-hidden"
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
				className="absolute top-0 right-0 w-44 sm:w-56 opacity-30 pointer-events-none select-none translate-x-6 -translate-y-4 rotate-[15deg]"
				initial={{opacity: 0}}
				whileInView={{opacity: 0.3}}
				transition={{duration: 1.2}}
				viewport={{once: false, amount: 0.2}}
			/>
			<motion.img
				src={flor}
				alt=""
				style={{y: florBotY, zIndex: 0}}
				className="absolute bottom-0 left-0 w-44 sm:w-56 opacity-25 pointer-events-none select-none -translate-x-8 translate-y-4 rotate-[200deg]"
				initial={{opacity: 0}}
				whileInView={{opacity: 0.25}}
				transition={{duration: 1.2}}
				viewport={{once: false, amount: 0.2}}
			/>

			{/* â”€â”€ Encabezado de secciÃ³n â”€â”€ */}
			<motion.div
				className="relative z-10 mb-12"
				initial={{opacity: 0, y: 20}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.8}}
				viewport={{once: false, amount: 0.2}}
			>
				<p className="uppercase text-[10px] tracking-[0.3em] text-[#6BAFC9] mb-3">
					Con el amor y bendición de
				</p>
				<h1 className="font-[Playfair_Display] text-3xl md:text-4xl text-[#2E6D8A]">
					Nuestras Familias
				</h1>
				{/* Ornamento */}
				<div className="flex items-center justify-center gap-3 mt-4">
					<div className="h-px w-10 bg-[#8EC8E0]" />
					<span className="text-[#8EC8E0] text-xs">âœ¦</span>
					<div className="h-px w-10 bg-[#8EC8E0]" />
				</div>
			</motion.div>

			{/* â”€â”€ Columnas de familia â”€â”€ */}
			<div className="relative z-10 flex flex-col sm:flex-row items-start justify-center gap-8 md:gap-14">
				{/* Novio */}
				<FamilySide
					title="Familia Mogollon"
					subtitle="Del Novio"
					parents={["Marlem Mogollon Meca", "Ruth Villena Irigoyen"]}
					siblings={["Abby Mogollon Villena", "Billy Mogollon Villena"]}
					delayBase={0.1}
				/>

				{/* Separador central */}
				<motion.div
					className="hidden sm:flex flex-col items-center gap-2 self-center py-4"
					initial={{opacity: 0, scale: 0.8}}
					whileInView={{opacity: 1, scale: 1}}
					transition={{duration: 0.8, delay: 0.3}}
					viewport={{once: false, amount: 0.2}}
				>
					<div className="w-px h-12 bg-[#8EC8E0]" />
					<span className="text-[#6BAFC9] text-xl">â™¡</span>
					<div className="w-px h-12 bg-[#8EC8E0]" />
				</motion.div>

				{/* Novia */}
				<FamilySide
					title="Familia Mendoza"
					subtitle="De la Novia"
					parents={[
						"Juan Eduardo Mendoza Ortiz",
						"Milagros del Pilar Crisanto Panta",
					]}
					siblings={[
						"Eduardo Aldair Mendoza Crisanto",
						"Thiago Eduardo Mendoza Crisanto",
					]}
					delayBase={0.2}
				/>
			</div>

			{/* â”€â”€ LÃ­nea separadora inferior â”€â”€ */}
			<motion.div
				className="flex items-center justify-center gap-3 mt-14"
				initial={{opacity: 0}}
				whileInView={{opacity: 1}}
				transition={{duration: 1, delay: 0.4}}
				viewport={{once: false, amount: 0.2}}
			>
				<div className="h-px w-14 bg-[#8EC8E0]" />
				<span className="text-[#8EC8E0] text-sm">âœ¦</span>
				<div className="h-px w-14 bg-[#8EC8E0]" />
			</motion.div>
		</section>
	);
};

export default ParentsSection;
