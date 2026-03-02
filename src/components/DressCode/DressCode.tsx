import React from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {FaHeart} from "react-icons/fa";
import {MdWarningAmber} from "react-icons/md";
import flor from "../../assets/img/Flor-azul.png";
import vestido from "../../assets/img/vestido.png";
import terno from "../../assets/img/terno.png";

/* ── Imagen vestido ───────────────────────────────────────── */
const DressSVG: React.FC = () => (
	<img
		src={vestido}
		alt="Vestido"
		className="w-full h-full object-contain drop-shadow-sm"
	/>
);

/* ── Imagen terno ─────────────────────────────────────────── */
const SuitSVG: React.FC = () => (
	<img
		src={terno}
		alt="Terno"
		className="w-full h-full object-contain drop-shadow-sm"
	/>
);

/* ── Swatch de color prohibido ────────────────────────────── */
interface ColorSwatchProps {
	color: string;
	label: string;
	delay: number;
}
const ColorSwatch: React.FC<ColorSwatchProps> = ({color, label, delay}) => (
	<motion.div
		className="flex flex-col items-center gap-1"
		initial={{opacity: 0, scale: 0.5}}
		whileInView={{opacity: 1, scale: 1}}
		transition={{duration: 0.4, delay}}
		viewport={{once: false}}
	>
		<div
			className="w-8 h-8 rounded-full border-2 border-white shadow-md relative"
			style={{backgroundColor: color}}
		>
			<div className="absolute inset-0 flex items-center justify-center">
				<span className="text-white text-xs font-bold drop-shadow">✕</span>
			</div>
		</div>
		<span className="text-[10px] text-[#5a7a8a] font-medium leading-tight text-center max-w-[52px]">
			{label}
		</span>
	</motion.div>
);

/* ── Componente principal ─────────────────────────────────── */
const DressCode: React.FC = () => {
	const {scrollYProgress} = useScroll();
	const florSuperiorY = useTransform(scrollYProgress, [0, 1], [0, 80]);
	const florInferiorY = useTransform(scrollYProgress, [0, 1], [0, -80]);

	const womenForbidden = [
		{color: "#FFFFFF", label: "Blanco"},
		{color: "#F5F5DC", label: "Crema"},
		{color: "#87CEEB", label: "Celeste"},
		{color: "#4477AA", label: "Azul"},
		{color: "#003087", label: "Marino"},
		{color: "#6CB4E4", label: "Az. cielo"},
	];

	const menForbidden = [
		{color: "#87CEEB", label: "Celeste"},
		{color: "#4477AA", label: "Azul"},
		{color: "#003087", label: "Marino"},
		{color: "#5B8DB8", label: "Az. medio"},
		{color: "#6CB4E4", label: "Az. cielo"},
	];

	return (
		<section
			className="relative flex flex-col items-center text-center py-16 px-6 overflow-visible"
			style={{
				background:
					"linear-gradient(160deg, #EEF7FB 0%, #F5FBFE 60%, #EBF4FA 100%)",
			}}
		>
			{/* Flores decorativas */}
			<motion.img
				src={flor}
				alt=""
				style={{y: florSuperiorY, zIndex: 0}}
				className="absolute top-0 right-0 w-44 sm:w-52 md:w-60 opacity-25 pointer-events-none select-none transform translate-x-6 -translate-y-4 rotate-[15deg]"
				initial={{opacity: 0}}
				whileInView={{opacity: 0.35}}
				transition={{duration: 1.2}}
				viewport={{once: false}}
			/>
			<motion.img
				src={flor}
				alt=""
				style={{y: florInferiorY, zIndex: 0}}
				className="absolute bottom-0 left-0 w-44 sm:w-52 md:w-60 opacity-25 pointer-events-none select-none transform -translate-x-8 translate-y-6 rotate-[200deg]"
				initial={{opacity: 0}}
				whileInView={{opacity: 0.35}}
				transition={{duration: 1.2}}
				viewport={{once: false}}
			/>

			{/* Encabezado */}
			<motion.div
				className="relative z-10 flex flex-col items-center mb-2"
				initial={{opacity: 0, y: -20}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.8}}
				viewport={{once: false}}
			>
				<motion.div
					animate={{scale: [1, 1.15, 1]}}
					transition={{repeat: Infinity, duration: 2.2, ease: "easeInOut"}}
					className="text-[#e07aa0] text-3xl mb-3"
				>
					<FaHeart />
				</motion.div>
				<h4 className="font-serif uppercase tracking-widest text-[#2E6D8A] text-lg mb-1">
					Código de Vestimenta
				</h4>
				<div className="flex items-center gap-2">
					<span className="block h-px w-12 bg-[#B8DDEF]" />
					<p className="text-base text-[#4A7A8F] font-medium italic">
						Elegante
					</p>
					<span className="block h-px w-12 bg-[#B8DDEF]" />
				</div>
			</motion.div>

			{/* Tarjetas principales */}
			<div className="relative z-10 w-full max-w-md flex flex-col gap-5 mt-8">
				{/* ── MUJERES ── */}
				<motion.div
					className="bg-white/85 backdrop-blur-sm rounded-3xl shadow-lg border border-[#f7c5da] overflow-hidden"
					initial={{opacity: 0, x: -40}}
					whileInView={{opacity: 1, x: 0}}
					transition={{duration: 0.7, ease: "easeOut"}}
					viewport={{once: false}}
				>
					{/* header mujer */}
					<div className="bg-gradient-to-r from-[#fce4ec] to-[#f8bbd0] px-5 py-3 flex items-center gap-3">
						<div className="w-9 h-9 bg-white/60 rounded-full flex items-center justify-center text-lg">
							👗
						</div>
						<div className="text-left">
							<p className="font-serif font-bold text-[#b5385e] text-sm uppercase tracking-wide">
								Ellas
							</p>
							<p className="text-[#c2587a] text-xs">Vestimenta femenina</p>
						</div>
					</div>

					<div className="px-5 py-4 flex gap-4 items-start">
						{/* Imagen vestido */}
						<motion.div
							className="w-20 h-28 flex-shrink-0"
							initial={{opacity: 0, scale: 0.7}}
							whileInView={{opacity: 1, scale: 1}}
							transition={{duration: 0.6, delay: 0.2}}
							animate={{y: [0, -5, 0]}}
							viewport={{once: false}}
						>
							<DressSVG />
						</motion.div>

						<div className="flex-1 text-left">
							{/* blanco reservado */}
							<motion.div
								className="mb-3 bg-pink-50 rounded-xl px-3 py-2 border border-pink-100"
								initial={{opacity: 0, y: 10}}
								whileInView={{opacity: 1, y: 0}}
								transition={{duration: 0.5, delay: 0.3}}
								viewport={{once: false}}
							>
								<p className="text-xs font-bold text-[#b5385e] flex items-center gap-1">
									<span>👰</span> Blanco reservado para la novia
								</p>
								<p className="text-[10px] text-[#8a4055] mt-0.5 leading-tight">
									El blanco es exclusivo para la novia 🤍
								</p>
								<p className="text-[10px] text-[#b5385e] mt-1.5 leading-tight font-medium">
									¡Y los azules tampoco!
								</p>
							</motion.div>

							{/* colores a evitar */}
							<div className="flex items-center gap-1 mb-2">
								<MdWarningAmber className="text-amber-400 text-sm flex-shrink-0" />
								<p className="text-[11px] font-semibold text-[#7a5565] uppercase tracking-wide">
									Por favor evita:
								</p>
							</div>
							<div className="flex flex-wrap gap-2">
								{womenForbidden.map((c, i) => (
									<ColorSwatch
										key={c.label}
										color={c.color}
										label={c.label}
										delay={0.35 + i * 0.07}
									/>
								))}
							</div>
						</div>
					</div>
				</motion.div>

				{/* ── HOMBRES ── */}
				<motion.div
					className="bg-white/85 backdrop-blur-sm rounded-3xl shadow-lg border border-[#b8d8ef] overflow-hidden"
					initial={{opacity: 0, x: 40}}
					whileInView={{opacity: 1, x: 0}}
					transition={{duration: 0.7, ease: "easeOut", delay: 0.15}}
					viewport={{once: false}}
				>
					{/* header hombre */}
					<div className="bg-gradient-to-r from-[#d4eef7] to-[#b8ddef] px-5 py-3 flex items-center gap-3">
						<div className="w-9 h-9 bg-white/60 rounded-full flex items-center justify-center text-lg">
							🤵
						</div>
						<div className="text-left">
							<p className="font-serif font-bold text-[#2E6D8A] text-sm uppercase tracking-wide">
								Ellos
							</p>
							<p className="text-[#3a80a0] text-xs">Vestimenta masculina</p>
						</div>
					</div>

					<div className="px-5 py-4 flex gap-4 items-start">
						{/* Imagen terno */}
						<motion.div
							className="w-20 h-28 flex-shrink-0"
							initial={{opacity: 0, scale: 0.7}}
							whileInView={{opacity: 1, scale: 1}}
							transition={{duration: 0.6, delay: 0.3}}
							animate={{y: [0, -5, 0]}}
							viewport={{once: false}}
						>
							<SuitSVG />
						</motion.div>

						<div className="flex-1 text-left">
							{/* terno del novio */}
							<motion.div
								className="mb-3 bg-blue-50 rounded-xl px-3 py-2 border border-blue-100"
								initial={{opacity: 0, y: 10}}
								whileInView={{opacity: 1, y: 0}}
								transition={{duration: 0.5, delay: 0.4}}
								viewport={{once: false}}
							>
								<p className="text-xs font-bold text-[#2E6D8A] flex items-center gap-1">
									<span>🤵</span> El terno del novio es solo para él
								</p>
								<p className="text-[10px] text-[#3a6a80] mt-0.5 leading-tight">
									El color y estilo del novio son únicos esa noche 👑
								</p>
							</motion.div>

							{/* colores a evitar */}
							<div className="flex items-center gap-1 mb-2">
								<MdWarningAmber className="text-amber-400 text-sm flex-shrink-0" />
								<p className="text-[11px] font-semibold text-[#3a6a80] uppercase tracking-wide">
									Azules a evitar:
								</p>
							</div>
							<div className="flex flex-wrap gap-2">
								{menForbidden.map((c, i) => (
									<ColorSwatch
										key={c.label}
										color={c.color}
										label={c.label}
										delay={0.45 + i * 0.07}
									/>
								))}
							</div>
						</div>
					</div>
				</motion.div>
			</div>

			{/* Nota final */}
			<motion.div
				className="relative z-10 mt-6 max-w-xs bg-white/70 rounded-2xl px-5 py-4 border border-[#c5e3f0] shadow-sm"
				initial={{opacity: 0, y: 20}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.7, delay: 0.5}}
				viewport={{once: false}}
			>
				<p className="text-sm text-[#4A7A8F] leading-relaxed">
					¡Gracias por ayudarnos a que todo se vea increíble! 💙
				</p>
			</motion.div>
		</section>
	);
};

export default DressCode;
