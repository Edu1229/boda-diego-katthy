import React, {useState} from "react";
import {motion, useScroll, useTransform, AnimatePresence} from "framer-motion";
import {Gift, MapPin, Heart, Phone} from "lucide-react";
import flor from "../../assets/img/image.png";
import AttendanceModal from "../AttendanceModal/AttendanceModal";

const GiftsAndConfirmation: React.FC = () => {
	const [option, setOption] = useState<"none" | "fisico" | "virtual">("none");
	const [showModal, setShowModal] = useState(false);
	const {scrollYProgress} = useScroll();
	const florSuperiorY = useTransform(scrollYProgress, [0, 1], [0, 80]);
	const florInferiorY = useTransform(scrollYProgress, [0, 1], [0, -80]);

	return (
		<section
			className="relative w-full flex flex-col items-center text-center px-6 py-20 overflow-visible"
			style={{
				background:
					"linear-gradient(160deg, #F0F8FD 0%, #F7FBFE 60%, #EBF4FA 100%)",
			}}
		>
			{/* 🌸 Flor decorativa superior derecha */}
			<motion.img
				src={flor}
				alt="Decoración floral"
				style={{y: florSuperiorY}}
				className="absolute top-0 right-0 w-44 sm:w-52 md:w-60 opacity-30 pointer-events-none select-none transform translate-x-8 -translate-y-4 rotate-[10deg]"
				initial={{opacity: 0}}
				whileInView={{opacity: 0.3}}
				transition={{duration: 1.2}}
				viewport={{once: false}}
			/>

			{/* 🌸 Flor decorativa inferior izquierda */}
			<motion.img
				src={flor}
				alt="Decoración floral"
				style={{y: florInferiorY}}
				className="absolute bottom-0 left-0 w-44 sm:w-52 md:w-60 opacity-25 pointer-events-none select-none transform -translate-x-8 translate-y-6 rotate-[200deg]"
				initial={{opacity: 0}}
				whileInView={{opacity: 0.25}}
				transition={{duration: 1.2}}
				viewport={{once: false}}
			/>

			{/* 🎁 Sugerencia de Regalos */}
			<motion.div
				initial={{opacity: 0, y: 20}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 1}}
				viewport={{once: false}}
				className="flex flex-col items-center justify-center"
			>
				<Gift size={38} strokeWidth={1.8} className="text-[#6BAFC9] mb-3" />
				<h3 className="font-serif uppercase text-[#2E6D8A] tracking-widest text-lg mb-4">
					Sugerencia de Regalos
				</h3>
				<p className="text-[#4A7A8F] max-w-md leading-relaxed mb-6">
					El mejor regalo es tu presencia, pero si deseas tener un detalle con
					nosotros, elige una opción:
				</p>
			</motion.div>

			{/* 💌 Botones de selección */}
			<motion.div
				className="flex flex-col sm:flex-row gap-4 mb-8 mt-4"
				initial={{opacity: 0, y: 20}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 1, delay: 0.2}}
				viewport={{once: false}}
			>
				<motion.button
					onClick={() => setOption("fisico")}
					whileHover={{scale: 1.05}}
					whileTap={{scale: 0.95}}
					className={`w-48 py-3 rounded-full font-medium flex items-center justify-center gap-2 shadow-md transition-all duration-300 ${
						option === "fisico"
							? "bg-[#6BAFC9] text-white scale-105 shadow-lg shadow-[#6BAFC9]/30"
							: "bg-white text-[#2E6D8A] border border-[#B8DDEF] hover:bg-[#EEF7FB] hover:shadow-md"
					}`}
				>
					<MapPin
						size={20}
						strokeWidth={2}
						className={`${option === "fisico" ? "text-white" : "text-[#6BAFC9]"}`}
					/>
					<span>Regalo físico</span>
				</motion.button>

				<motion.button
					onClick={() => setOption("virtual")}
					whileHover={{scale: 1.05}}
					whileTap={{scale: 0.95}}
					className={`w-48 py-3 rounded-full font-medium flex items-center justify-center gap-2 shadow-md transition-all duration-300 ${
						option === "virtual"
							? "bg-[#6BAFC9] text-white scale-105 shadow-lg shadow-[#6BAFC9]/30"
							: "bg-white text-[#2E6D8A] border border-[#B8DDEF] hover:bg-[#EEF7FB] hover:shadow-md"
					}`}
				>
					<Heart
						size={20}
						strokeWidth={2}
						className={`${option === "virtual" ? "text-white" : "text-[#6BAFC9]"}`}
					/>
					<span>Plin / Virtual</span>
				</motion.button>
			</motion.div>

			{/* 💬 Mensajes dinámicos */}
			<AnimatePresence mode="wait">
				{option === "fisico" && (
					<motion.div
						key="fisico"
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
						exit={{opacity: 0, y: -20}}
						transition={{duration: 0.5}}
						className="border border-[#B8DDEF] bg-[#F0F8FD] rounded-2xl shadow-sm p-5 max-w-sm mx-auto"
					>
						<h4 className="font-serif uppercase text-[#2E6D8A] tracking-wide text-lg mb-2">
							Lugar de entrega
						</h4>
						<p className="text-[#4A7A8F] leading-relaxed">
							Calle Andrés Garrido 470 <br /> El Obrero
						</p>
						<p className="mt-3 text-sm italic text-gray-600">
							Puedes dejar tu obsequio en este domicilio. 💐
						</p>
					</motion.div>
				)}

				{option === "virtual" && (
					<motion.div
						key="virtual"
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
						exit={{opacity: 0, y: -20}}
						transition={{duration: 0.5}}
						className="border border-[#B8DDEF] bg-[#F0F8FD] rounded-2xl shadow-sm p-5 max-w-sm mx-auto"
					>
						<h4 className="font-serif uppercase text-[#2E6D8A] tracking-wide text-lg mb-2">
							Transferencia o Plin
						</h4>
						<p className="text-[#4A7A8F]">
							Número: <span className="font-semibold">998 599 413</span>
						</p>
						<p className="text-[#4A7A8F] mt-1">Titular: Javier &amp; Jema</p>
						<p className="mt-3 text-sm italic text-gray-600">
							Por favor, coordinar con los novios vía WhatsApp 💞
						</p>
					</motion.div>
				)}
			</AnimatePresence>

			{/* ✨ Línea separadora */}
			<motion.div
				className="w-24 h-px bg-[#8EC8E0] my-10"
				initial={{width: 0, opacity: 0}}
				whileInView={{width: 96, opacity: 1}}
				transition={{duration: 1, delay: 0.4}}
				viewport={{once: false}}
			/>

			{/* 📞 Confirmar asistencia con modal */}
			<motion.div
				initial={{opacity: 0, y: 30}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 1, delay: 0.2}}
				viewport={{once: false}}
				className="flex flex-col items-center justify-center"
			>
				<Phone size={36} strokeWidth={1.8} className="text-[#6BAFC9] mb-3" />
				<h3 className="font-serif uppercase text-[#2E6D8A] tracking-widest text-lg mb-3">
					Confirmar Asistencia
				</h3>
				<p className="text-[#4A7A8F] text-base mb-6">
					Agradecemos que confirmes tu asistencia antes del{" "}
					<span className="font-semibold text-[#6BAFC9]">20 de Noviembre</span>.
				</p>

				<motion.button
					onClick={() => setShowModal(true)}
					whileHover={{scale: 1.05}}
					whileTap={{scale: 0.95}}
					className="w-52 py-3 rounded-full font-semibold text-white bg-[#6BAFC9] shadow-md hover:bg-[#2E6D8A] transition-all shadow-[#6BAFC9]/20"
				>
					💌 Confirmar Asistencia
				</motion.button>
			</motion.div>

			{/* 📱 Modal de confirmación */}
			{showModal && <AttendanceModal onClose={() => setShowModal(false)} />}

			{/* 💬 Nota final */}
			<motion.p
				className="text-sm italic text-gray-500 mt-8"
				initial={{opacity: 0, y: 10}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 1, delay: 0.5}}
				viewport={{once: false}}
			>
				Evento exclusivo para adultos — ¡Te esperamos con mucha alegría!
			</motion.p>
		</section>
	);
};

export default GiftsAndConfirmation;
