import React from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {MapPin, Church, Martini} from "lucide-react";
import {GiDiamondRing, GiBigDiamondRing} from "react-icons/gi";

import flor from "../../assets/img/Flor-azul.png";

interface EventCardProps {
	icon: React.ReactNode;
	time: string;
	title: string;
	venue: string;
	address: string;
	mapsUrl: string;
	delay?: number;
	accentColor?: string;
}

const EventCard: React.FC<EventCardProps> = ({
	icon,
	time,
	title,
	venue,
	address,
	mapsUrl,
	delay = 0,
}) => (
	<motion.div
		className="relative w-full max-w-sm"
		initial={{opacity: 0, y: 28, scale: 0.97}}
		whileInView={{opacity: 1, y: 0, scale: 1}}
		transition={{duration: 0.85, delay, type: "spring", stiffness: 160}}
		viewport={{once: false, amount: 0.3}}
	>
		<div
			className="relative flex flex-col items-center text-center rounded-3xl px-6 py-7"
			style={{
				background: "linear-gradient(160deg, #F5FBFE 0%, #EDF6FB 100%)",
				border: "1.5px solid #B8DDEF",
				boxShadow:
					"0 6px 28px rgba(46,109,138,0.11), inset 0 1px 0 rgba(255,255,255,0.9)",
			}}
		>
			{/* Icono badge */}
			<div
				className="flex items-center justify-center w-14 h-14 rounded-full mb-4"
				style={{
					background: "linear-gradient(135deg, #6BAFC9 0%, #2E6D8A 100%)",
					boxShadow: "0 4px 14px rgba(46,109,138,0.28)",
				}}
			>
				<span style={{color: "#fff", fontSize: "1.4rem"}}>{icon}</span>
			</div>

			{/* Hora pill */}
			<div
				className="inline-flex items-center gap-1 px-4 py-1 rounded-full mb-2"
				style={{
					background: "rgba(142,200,224,0.18)",
					border: "1px solid #B8DDEF",
				}}
			>
				<span
					className="text-[11px] font-semibold tracking-[0.2em] uppercase"
					style={{color: "#2E6D8A"}}
				>
					{time}
				</span>
			</div>

			{/* Titulo */}
			<h3
				className="font-semibold tracking-wide uppercase text-base mb-1"
				style={{color: "#2E6D8A", letterSpacing: "0.08em"}}
			>
				{title}
			</h3>

			{/* Venue */}
			<p className="font-medium text-sm mb-0.5" style={{color: "#4A7A8F"}}>
				{venue}
			</p>
			<p className="italic text-xs mb-4" style={{color: "#6BAFC9"}}>
				{address}
			</p>

			{/* Linea decorativa */}
			<div
				className="w-12 h-px mb-4"
				style={{
					background:
						"linear-gradient(to right, transparent, #8EC8E0, transparent)",
				}}
			/>

			{/* Boton mapa */}
			<motion.a
				href={mapsUrl}
				target="_blank"
				rel="noopener noreferrer"
				whileHover={{
					scale: 1.05,
					boxShadow: "0 6px 20px rgba(46,109,138,0.28)",
				}}
				whileTap={{scale: 0.95}}
				className="inline-flex items-center gap-2 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all"
				style={{
					background: "linear-gradient(135deg, #6BAFC9 0%, #2E6D8A 100%)",
					boxShadow: "0 3px 12px rgba(46,109,138,0.22)",
					letterSpacing: "0.04em",
				}}
			>
				<MapPin size={15} />
				Ver ubicacion
			</motion.a>
		</div>
	</motion.div>
);

/* Conector vertical entre cards */
const TimelineConnector: React.FC = () => (
	<motion.div
		className="flex flex-col items-center gap-1 py-1"
		initial={{opacity: 0, scaleY: 0}}
		whileInView={{opacity: 1, scaleY: 1}}
		transition={{duration: 0.7}}
		viewport={{once: false}}
		style={{transformOrigin: "top"}}
	>
		<div
			className="w-px h-6"
			style={{background: "linear-gradient(to bottom, #B8DDEF, transparent)"}}
		/>
		<span style={{color: "#8EC8E0", fontSize: "0.7rem"}}>&#10022;</span>
		<div
			className="w-px h-6"
			style={{background: "linear-gradient(to bottom, transparent, #B8DDEF)"}}
		/>
	</motion.div>
);

const EventLocations: React.FC = () => {
	const {scrollYProgress} = useScroll();
	const florSuperiorY = useTransform(scrollYProgress, [0, 1], [0, 80]);
	const florInferiorY = useTransform(scrollYProgress, [0, 1], [0, -80]);

	return (
		<section
			className="relative w-full flex flex-col items-center justify-center text-center px-4 py-14 overflow-visible"
			style={{
				background:
					"linear-gradient(160deg, #F0F8FD 0%, #F7FBFE 60%, #EBF4FA 100%)",
			}}
		>
			{/* Flores decorativas parallax */}
			<motion.img
				src={flor}
				alt=""
				style={{y: florSuperiorY, zIndex: 0}}
				className="absolute top-0 right-0 w-36 sm:w-44 opacity-20 pointer-events-none select-none transform translate-x-6 -translate-y-4 rotate-[15deg]"
				initial={{opacity: 0}}
				whileInView={{opacity: 0.22}}
				transition={{duration: 1.2}}
				viewport={{once: false}}
			/>
			<motion.img
				src={flor}
				alt=""
				style={{y: florInferiorY, zIndex: 0}}
				className="absolute bottom-0 left-0 w-36 sm:w-44 opacity-15 pointer-events-none select-none transform -translate-x-6 translate-y-4 rotate-[200deg]"
				initial={{opacity: 0}}
				whileInView={{opacity: 0.22}}
				transition={{duration: 1.2}}
				viewport={{once: false}}
			/>

			{/* Encabezado de seccion */}
			<motion.div
				className="relative z-10 flex flex-col items-center mb-10"
				initial={{opacity: 0, y: -18}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.9}}
				viewport={{once: false, amount: 0.4}}
			>
				<div className="flex items-center gap-3 mb-3">
					<div
						className="h-px w-12 sm:w-20"
						style={{
							background: "linear-gradient(to right, transparent, #8EC8E0)",
						}}
					/>
					<GiDiamondRing style={{color: "#6BAFC9", fontSize: "1.2rem"}} />
					<div
						className="h-px w-12 sm:w-20"
						style={{
							background: "linear-gradient(to left, transparent, #8EC8E0)",
						}}
					/>
				</div>
				<p
					className="uppercase tracking-[0.28em] text-[10px] sm:text-xs font-medium mb-1"
					style={{color: "#6BAFC9"}}
				>
					lugares del evento
				</p>
				<h2
					className="font-[Dancing_Script] text-3xl sm:text-4xl"
					style={{color: "#2E6D8A"}}
				>
					Nuestra Celebracion
				</h2>
				<div className="flex items-center gap-2 mt-2">
					<div className="h-px w-8" style={{background: "#B8DDEF"}} />
					<span style={{color: "#B8DDEF", fontSize: "0.8rem"}}>&#9825;</span>
					<div className="h-px w-8" style={{background: "#B8DDEF"}} />
				</div>
			</motion.div>

			{/* Timeline de eventos */}
			<div className="relative z-10 flex flex-col items-center w-full max-w-sm">
				{/* 1. BENDICION DE AROS */}
				<EventCard
					icon={<GiBigDiamondRing />}
					time="12:00 HRS"
					title="Bendicion de Aros"
					venue="Fundo Las Tortugas"
					address="Piura, Peru"
					mapsUrl="https://maps.app.goo.gl/p1fbq5MQwu5SHjDe6"
					delay={0}
				/>

				<TimelineConnector />

				{/* 2. CEREMONIA CIVIL */}
				<EventCard
					icon={<Church size={22} />}
					time="13:00 HRS"
					title="Ceremonia Civil"
					venue="Fundo Las Tortugas"
					address="Piura, Peru"
					mapsUrl="https://maps.app.goo.gl/p1fbq5MQwu5SHjDe6"
					delay={0.1}
				/>

				<TimelineConnector />

				{/* 3. RECEPCION */}
				<EventCard
					icon={<Martini size={22} />}
					time="14:00 HRS"
					title="Recepcion"
					venue="Fundo Las Tortugas"
					address="Piura, Peru"
					mapsUrl="https://maps.app.goo.gl/p1fbq5MQwu5SHjDe6"
					delay={0.2}
				/>
			</div>

			{/* Separador */}
			<motion.div
				className="h-px my-10"
				style={{
					background:
						"linear-gradient(to right, transparent, #8EC8E0, transparent)",
					width: "min(240px, 70vw)",
				}}
				initial={{scaleX: 0, opacity: 0}}
				whileInView={{scaleX: 1, opacity: 1}}
				transition={{duration: 1}}
				viewport={{once: false}}
			/>

			{/* Firma final */}
			<motion.div
				className="relative z-10 flex flex-col items-center"
				initial={{opacity: 0, y: 20}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 1, delay: 0.3}}
				viewport={{once: false}}
			>
				<p
					className="italic text-2xl"
					style={{fontFamily: "'Marck Script', cursive", color: "#2E6D8A"}}
				>
					Con carino,
				</p>
				<p
					className="text-3xl md:text-4xl -mt-1"
					style={{fontFamily: "'Marck Script', cursive", color: "#6BAFC9"}}
				>
					Diego &amp; Kattherine
				</p>
			</motion.div>
		</section>
	);
};

export default EventLocations;
