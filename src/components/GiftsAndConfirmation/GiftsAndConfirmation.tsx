import React, {useState} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {
	FaHeart,
	FaCopy,
	FaCheckCircle,
	FaMobileAlt,
	FaUniversity,
} from "react-icons/fa";
import {Gift, Phone, Sparkles} from "lucide-react";
import flor from "../../assets/img/Flor-azul.png";
import AttendanceModal from "../AttendanceModal/AttendanceModal";

/* ── Tarjeta de cuenta con copiar ─────────────────────────── */
interface AccountCardProps {
	icon: React.ReactNode;
	bank: string;
	bankColor: string;
	borderColor: string;
	bgColor: string;
	fields: {label: string; value: string}[];
	delay: number;
}

const AccountCard: React.FC<AccountCardProps> = ({
	icon,
	bank,
	bankColor,
	borderColor,
	bgColor,
	fields,
	delay,
}) => {
	const [copiedKey, setCopiedKey] = useState<string | null>(null);

	const handleCopy = (value: string, key: string) => {
		navigator.clipboard.writeText(value).then(() => {
			setCopiedKey(key);
			setTimeout(() => setCopiedKey(null), 2000);
		});
	};

	return (
		<motion.div
			className={`w-full rounded-3xl shadow-lg border ${borderColor} ${bgColor} overflow-hidden`}
			initial={{opacity: 0, y: 30}}
			whileInView={{opacity: 1, y: 0}}
			transition={{duration: 0.6, delay, ease: "easeOut"}}
			viewport={{once: false}}
		>
			<div
				className="px-5 py-3 flex items-center gap-3"
				style={{background: bankColor}}
			>
				<div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
					{icon}
				</div>
				<p className="font-serif font-bold text-white text-sm uppercase tracking-wide">
					{bank}
				</p>
			</div>

			<div className="px-5 py-4 flex flex-col gap-3">
				{fields.map((field) => {
					const isCopied = copiedKey === field.label;
					return (
						<div key={field.label} className="flex flex-col gap-1">
							<p className="text-[10px] font-semibold uppercase tracking-widest text-[#5a8099]">
								{field.label}
							</p>
							<div className="flex items-center justify-between gap-2 bg-white/70 rounded-xl px-3 py-2 border border-white/80">
								<span className="text-[#2E6D8A] font-mono text-sm font-semibold tracking-wide break-all">
									{field.value}
								</span>
								<button
									onClick={() => handleCopy(field.value, field.label)}
									className="flex-shrink-0 text-[#6BAFC9] hover:text-[#2E6D8A] transition-colors ml-2"
									aria-label={`Copiar ${field.label}`}
								>
									{isCopied ? (
										<FaCheckCircle className="text-green-500 text-base" />
									) : (
										<FaCopy className="text-base" />
									)}
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</motion.div>
	);
};

/* ── Campo Plin con copiar independiente ──────────────────── */
const PlinField: React.FC<{value: string}> = ({value}) => {
	const [copied, setCopied] = useState(false);
	const handleCopy = () => {
		navigator.clipboard.writeText(value).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	};
	return (
		<div className="flex items-center justify-between gap-2 bg-white/70 rounded-xl px-3 py-2 border border-white/80">
			<span className="text-[#6B2FA0] font-mono text-sm font-semibold tracking-wide">
				{value}
			</span>
			<button
				onClick={handleCopy}
				className="flex-shrink-0 text-[#9B5DE5] hover:text-[#6B2FA0] transition-colors"
				aria-label="Copiar número Plin"
			>
				{copied ? (
					<FaCheckCircle className="text-green-500 text-base" />
				) : (
					<FaCopy className="text-base" />
				)}
			</button>
		</div>
	);
};

/* ── Componente principal ─────────────────────────────────── */
const GiftsAndConfirmation: React.FC = () => {
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
			{/* Flores decorativas */}
			<motion.img
				src={flor}
				alt=""
				style={{y: florSuperiorY, zIndex: 0}}
				className="absolute top-0 right-0 w-44 sm:w-52 md:w-60 opacity-30 pointer-events-none select-none transform translate-x-8 -translate-y-4 rotate-[10deg]"
				initial={{opacity: 0}}
				whileInView={{opacity: 0.3}}
				transition={{duration: 1.2}}
				viewport={{once: false}}
			/>
			<motion.img
				src={flor}
				alt=""
				style={{y: florInferiorY, zIndex: 0}}
				className="absolute bottom-0 left-0 w-44 sm:w-52 md:w-60 opacity-25 pointer-events-none select-none transform -translate-x-8 translate-y-6 rotate-[200deg]"
				initial={{opacity: 0}}
				whileInView={{opacity: 0.25}}
				transition={{duration: 1.2}}
				viewport={{once: false}}
			/>

			{/* ── ENCABEZADO ── */}
			<motion.div
				className="relative z-10 flex flex-col items-center mb-8"
				initial={{opacity: 0, y: -20}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.8}}
				viewport={{once: false}}
			>
				<motion.div
					animate={{rotate: [0, 10, -10, 0]}}
					transition={{repeat: Infinity, duration: 3.5, ease: "easeInOut"}}
					className="text-[#6BAFC9] mb-3"
				>
					<Gift size={40} strokeWidth={1.6} />
				</motion.div>
				<h3 className="font-serif uppercase text-[#2E6D8A] tracking-widest text-lg mb-2">
					Sugerencia de regalo
				</h3>
				<div className="flex items-center gap-2 mb-3">
					<span className="block h-px w-12 bg-[#B8DDEF]" />
					<FaHeart className="text-[#e07aa0] text-xs" />
					<span className="block h-px w-12 bg-[#B8DDEF]" />
				</div>
				<p className="text-[#4A7A8F] max-w-xs leading-relaxed text-sm">
					Tu presencia es nuestro mejor regalo. Si deseas hacernos llegar un
					aporte, puedes hacerlo de forma digital. ¡Gracias de corazón! 💙
				</p>
			</motion.div>

			{/* ── TITULAR ── */}
			<motion.div
				className="relative z-10 mb-6 flex items-center gap-3 bg-white/70 rounded-2xl px-5 py-3 border border-[#c5e3f0] shadow-sm"
				initial={{opacity: 0, scale: 0.9}}
				whileInView={{opacity: 1, scale: 1}}
				transition={{duration: 0.6, delay: 0.15}}
				viewport={{once: false}}
			>
				<Sparkles size={18} className="text-[#e07aa0] flex-shrink-0" />
				<div className="text-left">
					<p className="text-[10px] uppercase tracking-widest text-[#5a8099] font-semibold">
						Titular
					</p>
					<p className="text-[#2E6D8A] font-serif font-semibold text-sm">
						Kattherine Mendoza Crisanto
					</p>
					<p className="text-[10px] text-[#4A7A8F] italic">La novia 👰</p>
				</div>
			</motion.div>

			{/* ── TARJETAS DE CUENTAS ── */}
			<div className="relative z-10 w-full max-w-sm flex flex-col gap-5">
				{/* Interbank */}
				<AccountCard
					delay={0.2}
					bank="Interbank"
					bankColor="linear-gradient(90deg, #006B3F 0%, #009250 100%)"
					borderColor="border-[#b2dbc6]"
					bgColor="bg-[#f0fbf5]"
					icon={<FaUniversity className="text-white text-lg" />}
					fields={[
						{label: "Cuenta Simple Soles", value: "7323332947897"},
						{label: "CCI (Interbancario)", value: "00373201333294789757"},
					]}
				/>

				{/* Plin */}
				<motion.div
					className="w-full rounded-3xl shadow-lg border border-[#d4b8ef] bg-[#f8f2ff] overflow-hidden"
					initial={{opacity: 0, y: 30}}
					whileInView={{opacity: 1, y: 0}}
					transition={{duration: 0.6, delay: 0.35, ease: "easeOut"}}
					viewport={{once: false}}
				>
					<div
						className="px-5 py-3 flex items-center gap-3"
						style={{
							background: "linear-gradient(90deg, #7B2FBE 0%, #9B5DE5 100%)",
						}}
					>
						<div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
							<FaMobileAlt className="text-white text-lg" />
						</div>
						<p className="font-serif font-bold text-white text-sm uppercase tracking-wide">
							Plin
						</p>
					</div>
					<div className="px-5 py-4">
						<p className="text-[10px] font-semibold uppercase tracking-widest text-[#7a4a9a] mb-1">
							Número Plin
						</p>
						<PlinField value="900300652" />
					</div>
				</motion.div>
			</div>

			{/* Nota copiar */}
			<motion.p
				className="relative z-10 mt-4 text-[11px] text-[#8ab0bf] italic flex items-center gap-1 justify-center"
				initial={{opacity: 0}}
				whileInView={{opacity: 1}}
				transition={{duration: 0.8, delay: 0.5}}
				viewport={{once: false}}
			>
				Toca <FaCopy className="inline text-[10px]" /> para copiar el número
			</motion.p>

			{/* ── SEPARADOR ── */}
			<motion.div
				className="relative z-10 flex items-center gap-3 my-10 w-full max-w-sm"
				initial={{opacity: 0}}
				whileInView={{opacity: 1}}
				transition={{duration: 1, delay: 0.4}}
				viewport={{once: false}}
			>
				<span className="flex-1 h-px bg-[#B8DDEF]" />
				<FaHeart className="text-[#e07aa0] text-sm" />
				<span className="flex-1 h-px bg-[#B8DDEF]" />
			</motion.div>

			{/* ── CONFIRMAR ASISTENCIA ── */}
			<motion.div
				initial={{opacity: 0, y: 30}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 1, delay: 0.2}}
				viewport={{once: false}}
				className="relative z-10 flex flex-col items-center"
			>
				<motion.div
					animate={{scale: [1, 1.12, 1]}}
					transition={{repeat: Infinity, duration: 2.5, ease: "easeInOut"}}
					className="text-[#6BAFC9] mb-3"
				>
					<Phone size={36} strokeWidth={1.8} />
				</motion.div>
				<h3 className="font-serif uppercase text-[#2E6D8A] tracking-widest text-lg mb-2">
					Confirmar Asistencia
				</h3>
				<p className="text-[#4A7A8F] text-sm mb-6 max-w-xs leading-relaxed">
					Agradecemos que confirmes tu asistencia antes del{" "}
					<span className="font-semibold text-[#6BAFC9]">10 de Marzo</span>.
				</p>

				<motion.button
					onClick={() => setShowModal(true)}
					whileHover={{scale: 1.05}}
					whileTap={{scale: 0.95}}
					className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#6BAFC9] to-[#2E6D8A] shadow-md shadow-[#6BAFC9]/30 hover:shadow-lg transition-all"
				>
					💌 Confirmar Asistencia
				</motion.button>
			</motion.div>

			{showModal && <AttendanceModal onClose={() => setShowModal(false)} />}

			{/* Nota final */}
			<motion.p
				className="relative z-10 text-sm italic text-[#8aabbc] mt-8"
				initial={{opacity: 0, y: 10}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 1, delay: 0.5}}
				viewport={{once: false}}
			>
				¡Te esperamos con mucha alegría! 🎉
			</motion.p>
		</section>
	);
};

export default GiftsAndConfirmation;
