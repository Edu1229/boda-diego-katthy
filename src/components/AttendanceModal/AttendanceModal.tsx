import React, {useMemo, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {User, Phone} from "lucide-react";

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

	// === Validaciones ===
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
		<div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 p-4">
			<motion.div
				initial={{opacity: 0, scale: 0.9, y: 30}}
				animate={{opacity: 1, scale: 1, y: 0}}
				exit={{opacity: 0, scale: 0.95, y: 30}}
				transition={{duration: 0.4}}
				className="bg-white rounded-3xl w-full max-w-lg text-[#2E6D8A] shadow-2xl overflow-hidden"
			>
				{success ? (
					<div className="p-10 text-center space-y-6">
						<motion.div
							initial={{scale: 0.8, opacity: 0}}
							animate={{scale: 1, opacity: 1}}
							transition={{duration: 0.6}}
							className="text-5xl"
						>
							🥂
						</motion.div>
						<h3 className="text-2xl font-serif text-[#2E6D8A]">
							¡Gracias por confirmar tu asistencia!
						</h3>
						<p className="text-[#6BAFC9] italic text-sm">
							Tu presencia hace más especial este día.
						</p>
						<button
							onClick={onClose}
							className="mt-4 px-6 py-2 rounded-full bg-[#6BAFC9] text-white hover:bg-[#2E6D8A] transition-all duration-300"
						>
							Cerrar
						</button>
					</div>
				) : (
					<form onSubmit={handleSubmit} className="p-8 space-y-6 relative">
						{/* Header */}
						<div className="flex justify-between items-center mb-4">
							<h2 className="text-2xl font-serif text-[#2E6D8A]">
								Confirmar Asistencia
							</h2>
							<button
								type="button"
								onClick={onClose}
								className="text-3xl leading-none text-[#6BAFC9] hover:text-[#2E6D8A]"
							>
								×
							</button>
						</div>

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
						<div className="flex flex-col gap-2">
							<label className="text-sm font-medium">Nombre completo</label>
							<div className="relative">
								<User
									size={18}
									className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6BAFC9]/70"
								/>
								<input
									type="text"
									placeholder="Ej. Juan Pérez"
									className="pl-10 pr-3 w-full h-11 rounded-lg border border-[#6BAFC9]/40 focus:border-[#6BAFC9] focus:ring-2 focus:ring-[#6BAFC9]/20 outline-none transition-all duration-300"
									value={nombre}
									onChange={(e) => setNombre(e.target.value)}
									required
								/>
							</div>
						</div>

						{/* Celular */}
						<div className="flex flex-col gap-2">
							<label className="text-sm font-medium">Celular (Perú)</label>
							<div className="relative">
								<Phone
									size={18}
									className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6BAFC9]/70"
								/>
								<input
									type="tel"
									placeholder="9XXXXXXXX"
									maxLength={9}
									className={`pl-10 pr-3 w-full h-11 rounded-lg border ${
										isPhoneValid
											? "border-[#6BAFC9]/40 focus:ring-[#6BAFC9]/20"
											: "border-red-300 focus:ring-red-200"
									} focus:border-[#6BAFC9] focus:ring-2 outline-none transition-all duration-300`}
									value={celular}
									onChange={handlePhoneChange}
									required
								/>
							</div>
							{celular && !isPhoneValid && (
								<span className="text-xs text-red-500">
									El número debe empezar con 9 y tener 9 dígitos.
								</span>
							)}
						</div>

						{/* Asistencia */}
						<div className="flex flex-col gap-2">
							<label className="text-sm font-medium">
								¿Confirmas tu asistencia?
							</label>
							<select
								className="w-full h-11 rounded-lg border border-[#6BAFC9]/40 focus:border-[#6BAFC9] focus:ring-2 focus:ring-[#6BAFC9]/20 outline-none text-sm transition-all duration-300"
								value={asistencia}
								onChange={(e) => setAsistencia(e.target.value)}
								required
							>
								<option value="">Selecciona una opción</option>
								<option value="Sí confirmo asistencia">
									✅ Sí confirmo asistencia
								</option>
								<option value="No puedo asistir">❌ No puedo asistir</option>
							</select>
						</div>

						{/* Mensaje */}
						<div className="flex flex-col gap-2">
							<label className="text-sm font-medium">
								Mensaje para los novios
							</label>
							<textarea
								placeholder="Tu mensaje..."
								className="p-3 w-full min-h-[90px] rounded-lg border border-[#6BAFC9]/40 focus:border-[#6BAFC9] focus:ring-2 focus:ring-[#6BAFC9]/20 outline-none transition-all duration-300 resize-none"
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
									className="text-sm text-red-500"
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
							className="w-full h-12 mt-2 rounded-full bg-[#6BAFC9] text-white font-medium shadow-md hover:bg-[#2E6D8A] transition-all duration-300 disabled:opacity-60"
							disabled={loading || !isFormValid}
						>
							{loading ? "Enviando..." : "Enviar Confirmación 💌"}
						</motion.button>
					</form>
				)}
			</motion.div>
		</div>
	);
};

export default AttendanceModal;
