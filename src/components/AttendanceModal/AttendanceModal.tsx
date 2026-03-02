import React, {useMemo, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {
	FaHeart,
	FaCheckCircle,
	FaTimesCircle,
	FaUser,
	FaPhone,
	FaEnvelope,
	FaTimes,
} from "react-icons/fa";
import {GiDiamondRing} from "react-icons/gi";

interface Props {
	onClose: () => void;
}

/** CONFIG */
const WEB_APP_URL =
	"https://script.google.com/macros/s/AKfycbxBZkDcIuI3CCowkJCrgfEDaVDvYnhl_HSyskdp2hz0KN18JawGhfxXJws2QGNDHC3J/exec";
const TOKEN = "rsvp-secreto-123";

const AttendanceModal: React.FC<Props> = ({onClose}) => {
	const [nombre, setNombre] = useState("");
	const [celular, setCelular] = useState("");
	const [asistencia, setAsistencia] = useState("");
	const [mensaje, setMensaje] = useState("");
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");
	const [company, setCompany] = useState(""); // honeypot

	const isPhoneValid = useMemo(() => /^9\d{8}$/.test(celular), [celular]);
	const isFormValid = useMemo(
		() => nombre.trim().length >= 3 && isPhoneValid && !!asistencia,
		[nombre, isPhoneValid, asistencia],
	);

	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const digits = e.target.value.replace(/\D/g, "").slice(0, 9);
		setCelular(digits);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (loading) return;
		if (company.trim()) return;
		if (!isFormValid) {
			setErrorMsg("Verifica tus datos antes de enviar.");
			return;
		}

		setLoading(true);
		setErrorMsg("");

		try {
			const body = new URLSearchParams({
				Nombre: nombre.trim(),
				Celular: celular,
				Asistencia: asistencia,
				Mensaje: mensaje.trim(),
				token: TOKEN,
			});

			const res = await fetch(WEB_APP_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
				},
				body: body.toString(),
			});

			const data = await res.json();
			if (!res.ok || data?.ok === false)
				throw new Error(data?.error || "Error");

			setSuccess(true);
			setNombre("");
			setCelular("");
			setAsistencia("");
			setMensaje("");
		} catch {
			setErrorMsg(
				"Ocurrió un error al enviar tu confirmación. Intenta de nuevo.",
			);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
			<motion.div
				initial={{opacity: 0, scale: 0.88, y: 40}}
				animate={{opacity: 1, scale: 1, y: 0}}
				exit={{opacity: 0, scale: 0.95, y: 30}}
				transition={{duration: 0.45, ease: "easeOut"}}
				className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden"
			>
				{success ? (
					<div className="px-8 py-12 text-center flex flex-col items-center gap-4">
						<motion.div
							initial={{scale: 0, rotate: -20}}
							animate={{scale: 1, rotate: 0}}
							transition={{type: "spring", stiffness: 200, damping: 12}}
							className="text-6xl"
						>
							🥂
						</motion.div>
						<motion.h3
							initial={{opacity: 0, y: 10}}
							animate={{opacity: 1, y: 0}}
							transition={{delay: 0.2}}
							className="text-2xl font-serif text-[#2E6D8A]"
						>
							¡Gracias por confirmar!
						</motion.h3>
						<motion.p
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							transition={{delay: 0.35}}
							className="text-[#6BAFC9] text-sm italic leading-relaxed max-w-xs"
						>
							Tu presencia hace este día aún más especial para nosotros. ¡Te
							esperamos con los brazos abiertos! 💙
						</motion.p>
						<motion.button
							whileHover={{scale: 1.05}}
							whileTap={{scale: 0.95}}
							onClick={onClose}
							className="mt-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#6BAFC9] to-[#2E6D8A] text-white font-semibold shadow-md shadow-[#6BAFC9]/30 transition-all"
						>
							Cerrar
						</motion.button>
					</div>
				) : (
					<>
						{/* Banner header */}
						<div
							className="relative px-6 pt-7 pb-5 flex flex-col items-center text-center"
							style={{
								background: "linear-gradient(135deg, #d4eef7 0%, #f0f8fd 100%)",
							}}
						>
							{/* Botón cerrar */}
							<button
								type="button"
								onClick={onClose}
								className="absolute top-4 right-4 text-[#6BAFC9] hover:text-[#2E6D8A] transition-colors text-lg"
								aria-label="Cerrar"
							>
								<FaTimes />
							</button>
							{/* Ícono animado */}
							<motion.div
								animate={{rotate: [0, 12, -12, 0]}}
								transition={{repeat: Infinity, duration: 4, ease: "easeInOut"}}
								className="text-[#e07aa0] text-3xl mb-2"
							>
								<GiDiamondRing />
							</motion.div>
							<h2 className="font-serif text-xl text-[#2E6D8A] uppercase tracking-widest">
								Confirmar Asistencia
							</h2>
							<div className="flex items-center gap-2 mt-1">
								<span className="block h-px w-10 bg-[#B8DDEF]" />
								<FaHeart className="text-[#e07aa0] text-[10px]" />
								<span className="block h-px w-10 bg-[#B8DDEF]" />
							</div>
							<p className="text-[11px] text-[#5a8099] mt-1 italic">
								Tu respuesta es muy importante para nosotros 💙
							</p>
						</div>

						<form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
							{/* Honeypot */}
							<input
								type="text"
								name="company"
								value={company}
								onChange={(e) => setCompany(e.target.value)}
								className="hidden"
								tabIndex={-1}
								autoComplete="off"
							/>

							{/* Nombre */}
							<div className="flex flex-col gap-1.5">
								<label className="text-xs font-semibold text-[#2E6D8A] uppercase tracking-wide flex items-center gap-1.5">
									<FaUser className="text-[#6BAFC9]" /> Nombre completo
								</label>
								<input
									type="text"
									placeholder="Ej. Juan Pérez"
									className="w-full h-11 px-4 rounded-xl border border-[#B8DDEF] bg-[#f5fbfe] focus:border-[#6BAFC9] focus:ring-2 focus:ring-[#6BAFC9]/20 outline-none text-sm text-[#2E6D8A] transition-all placeholder:text-[#aac8d6]"
									value={nombre}
									onChange={(e) => setNombre(e.target.value)}
									required
								/>
							</div>

							{/* Celular */}
							<div className="flex flex-col gap-1.5">
								<label className="text-xs font-semibold text-[#2E6D8A] uppercase tracking-wide flex items-center gap-1.5">
									<FaPhone className="text-[#6BAFC9]" /> Celular (Perú)
								</label>
								<input
									type="tel"
									placeholder="9XXXXXXXX"
									maxLength={9}
									className={`w-full h-11 px-4 rounded-xl border ${
										celular && !isPhoneValid
											? "border-red-300 bg-red-50 focus:ring-red-200"
											: "border-[#B8DDEF] bg-[#f5fbfe] focus:ring-[#6BAFC9]/20"
									} focus:border-[#6BAFC9] focus:ring-2 outline-none text-sm text-[#2E6D8A] transition-all placeholder:text-[#aac8d6]`}
									value={celular}
									onChange={handlePhoneChange}
									required
								/>
								{celular && !isPhoneValid && (
									<span className="text-xs text-red-500">
										El número debe empezar con 9 y tener 9 dígitos.
									</span>
								)}
							</div>

							{/* Asistencia — tarjetas clickeables */}
							<div className="flex flex-col gap-1.5">
								<label className="text-xs font-semibold text-[#2E6D8A] uppercase tracking-wide">
									¿Confirmas tu asistencia?
								</label>
								<div className="grid grid-cols-2 gap-3">
									{/* Sí */}
									<motion.button
										type="button"
										onClick={() => setAsistencia("Sí confirmo asistencia")}
										whileHover={{scale: 1.03}}
										whileTap={{scale: 0.97}}
										className={`flex flex-col items-center justify-center gap-1.5 py-3 rounded-2xl border-2 transition-all ${
											asistencia === "Sí confirmo asistencia"
												? "border-[#6BAFC9] bg-[#d4eef7] shadow-md shadow-[#6BAFC9]/20"
												: "border-[#c8e4f0] bg-white hover:bg-[#f0f8fd]"
										}`}
									>
										<FaCheckCircle
											className={`text-xl transition-colors ${
												asistencia === "Sí confirmo asistencia"
													? "text-[#2E6D8A]"
													: "text-[#93c5d8]"
											}`}
										/>
										<span
											className={`text-xs font-semibold ${
												asistencia === "Sí confirmo asistencia"
													? "text-[#2E6D8A]"
													: "text-[#5a8099]"
											}`}
										>
											¡Allá estaré! 🎉
										</span>
									</motion.button>

									{/* No */}
									<motion.button
										type="button"
										onClick={() => setAsistencia("No puedo asistir")}
										whileHover={{scale: 1.03}}
										whileTap={{scale: 0.97}}
										className={`flex flex-col items-center justify-center gap-1.5 py-3 rounded-2xl border-2 transition-all ${
											asistencia === "No puedo asistir"
												? "border-red-300 bg-red-50 shadow-md shadow-red-200/40"
												: "border-[#e8c8c8] bg-white hover:bg-red-50/40"
										}`}
									>
										<FaTimesCircle
											className={`text-xl transition-colors ${
												asistencia === "No puedo asistir"
													? "text-red-400"
													: "text-[#d4a0a0]"
											}`}
										/>
										<span
											className={`text-xs font-semibold ${
												asistencia === "No puedo asistir"
													? "text-red-500"
													: "text-[#9a7070]"
											}`}
										>
											No podré ir 😢
										</span>
									</motion.button>
								</div>
							</div>

							{/* Mensaje */}
							<div className="flex flex-col gap-1.5">
								<label className="text-xs font-semibold text-[#2E6D8A] uppercase tracking-wide flex items-center gap-1.5">
									<FaEnvelope className="text-[#6BAFC9]" /> Mensaje para los
									novios
									<span className="normal-case font-normal text-[#8aabbc]">
										(opcional)
									</span>
								</label>
								<textarea
									placeholder="Escríbeles algo bonito... 💌"
									className="p-3 w-full min-h-[80px] rounded-xl border border-[#B8DDEF] bg-[#f5fbfe] focus:border-[#6BAFC9] focus:ring-2 focus:ring-[#6BAFC9]/20 outline-none text-sm text-[#2E6D8A] transition-all resize-none placeholder:text-[#aac8d6]"
									value={mensaje}
									onChange={(e) => setMensaje(e.target.value)}
								/>
							</div>

							{/* Error */}
							<AnimatePresence>
								{errorMsg && (
									<motion.div
										initial={{opacity: 0, y: -5}}
										animate={{opacity: 1, y: 0}}
										exit={{opacity: 0, y: -5}}
										className="text-xs text-red-500 bg-red-50 px-3 py-2 rounded-lg border border-red-200"
									>
										{errorMsg}
									</motion.div>
								)}
							</AnimatePresence>

							{/* Submit */}
							<motion.button
								whileHover={{scale: 1.03}}
								whileTap={{scale: 0.97}}
								type="submit"
								className="w-full h-12 rounded-full bg-gradient-to-r from-[#6BAFC9] to-[#2E6D8A] text-white font-semibold shadow-md shadow-[#6BAFC9]/30 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
								disabled={loading || !isFormValid}
							>
								{loading ? (
									<>
										<motion.div
											animate={{rotate: 360}}
											transition={{
												repeat: Infinity,
												duration: 0.8,
												ease: "linear",
											}}
											className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
										/>
										Enviando...
									</>
								) : (
									<>
										<FaHeart className="text-sm" />
										Enviar Confirmación
									</>
								)}
							</motion.button>
						</form>
					</>
				)}
			</motion.div>
		</div>
	);
};

export default AttendanceModal;
