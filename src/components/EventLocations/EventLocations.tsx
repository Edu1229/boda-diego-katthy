import React from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {MapPin, Church, Martini} from "lucide-react";
import flor from "../../assets/img/image.png";

const EventLocations: React.FC = () => {
	const {scrollYProgress} = useScroll();
	const florSuperiorY = useTransform(scrollYProgress, [0, 1], [0, 80]);
	const florInferiorY = useTransform(scrollYProgress, [0, 1], [0, -80]);

	return (
		<section
			className="relative w-full flex flex-col items-center justify-center text-center px-6 py-20 overflow-visible"
			style={{
				background:
					"linear-gradient(160deg, #F0F8FD 0%, #F7FBFE 60%, #EBF4FA 100%)",
			}}
		>
			{/* 🌸 Flor superior derecha con movimiento sutil */}
			<motion.img
				src={flor}
				alt="Decoración floral"
				style={{y: florSuperiorY}}
				className="absolute top-0 right-0 w-40 sm:w-48 md:w-56 opacity-25 pointer-events-none select-none transform translate-x-6 -translate-y-4 rotate-[15deg]"
				initial={{opacity: 0}}
				whileInView={{opacity: 0.35}}
				transition={{duration: 1.2}}
				viewport={{once: false}}
			/>

			{/* 🌸 Flor inferior izquierda con parallax */}
			<motion.img
				src={flor}
				alt="Decoración floral"
				style={{y: florInferiorY}}
				className="absolute bottom-0 left-0 w-40 sm:w-48 md:w-56 opacity-15 pointer-events-none select-none transform -translate-x-6 translate-y-4 rotate-[200deg]"
				initial={{opacity: 0}}
				whileInView={{opacity: 0.35}}
				transition={{duration: 1.2}}
				viewport={{once: false}}
			/>

			{/* 💒 CEREMONIA */}
			<motion.div
				className="mb-12"
				initial={{opacity: 0, y: 30}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 1}}
				viewport={{once: false, amount: 0.3}}
			>
				<Church size={42} className="mx-auto text-[#6BAFC9] mb-4" />
				<p className="text-[#2E6D8A] font-serif text-lg mb-1">11:00 HRS.</p>
				<h3 className="uppercase text-[#2E6D8A] font-semibold tracking-wide text-lg">
					Ceremonía
				</h3>
				<p className="text-[#4A7A8F] mt-1 leading-relaxed">
					Parroquia Nuestra Señora del Tránsito
					<br />
					<span className="italic text-sm text-[#6BAFC9]">
						Trans. Piura con C. 6
					</span>
				</p>
				<motion.a
					href="https://maps.app.goo.gl/Majto1QVB1NzwjPA6"
					target="_blank"
					whileHover={{scale: 1.07}}
					whileTap={{scale: 0.95}}
					className="inline-flex items-center justify-center gap-2 bg-[#6BAFC9] text-white px-6 py-2 rounded-full mt-4 shadow-sm hover:bg-[#2E6D8A] transition-all"
				>
					<MapPin size={18} /> Ver ubicación
				</motion.a>
			</motion.div>

			{/* ✨ Separador animado */}
			<motion.div
				className="w-20 h-px bg-[#8EC8E0] my-8"
				initial={{width: 0, opacity: 0}}
				whileInView={{width: 80, opacity: 1}}
				transition={{duration: 1}}
				viewport={{once: false}}
			/>

			{/* 🍸 RECEPCIÓN */}
			<motion.div
				className="mb-10"
				initial={{opacity: 0, y: 30}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 1, delay: 0.2}}
				viewport={{once: false, amount: 0.3}}
			>
				<Martini size={42} className="mx-auto text-[#6BAFC9] mb-4" />
				<p className="text-[#2E6D8A] font-serif text-lg mb-1">13:00 HRS.</p>
				<h3 className="uppercase text-[#2E6D8A] font-semibold tracking-wide text-lg">
					Recepción
				</h3>
				<p className="text-[#4A7A8F] mt-1 leading-relaxed">
					Los Cantaritos
					<br />
					<span className="italic text-sm text-[#6BAFC9]">
						Calle Cola del Alacrán, cerca a Carretera Panamericana N
					</span>
				</p>
				<motion.a
					href="https://maps.app.goo.gl/bDzVMBLprrX3L7J29"
					target="_blank"
					whileHover={{scale: 1.07}}
					whileTap={{scale: 0.95}}
					className="inline-flex items-center justify-center gap-2 bg-[#6BAFC9] text-white px-6 py-2 rounded-full mt-4 shadow-sm hover:bg-[#2E6D8A] transition-all"
				>
					<MapPin size={18} /> Ver ubicación
				</motion.a>
			</motion.div>

			{/* ✨ Separador */}
			<motion.div
				className="w-20 h-px bg-[#8EC8E0] my-8"
				initial={{width: 0, opacity: 0}}
				whileInView={{width: 80, opacity: 1}}
				transition={{duration: 1}}
				viewport={{once: false}}
			/>

			{/* 💞 Firma final */}
			<motion.div
				initial={{opacity: 0, y: 20}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 1, delay: 0.4}}
				viewport={{once: false}}
			>
				<p className="text-[#2E6D8A] italic font-marck-script text-3xl">
					Con cariño,
				</p>
				<p className="text-[#6BAFC9] font-marck-script text-4xl md:text-5xl -mt-2">
					Javier & Jema
				</p>
			</motion.div>
		</section>
	);
};

export default EventLocations;
