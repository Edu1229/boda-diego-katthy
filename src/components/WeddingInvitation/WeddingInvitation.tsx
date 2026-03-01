import React from "react";
import {motion} from "framer-motion";
import pajaritos from "/pajaritos.mp4";

const WeddingInvitation: React.FC = () => {
	return (
		<section className="relative w-full min-h-[72vh] flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-b from-[#F0F8FD] to-[#EEF7FB]">
			{/* 📸 Video con efecto de papel rasgado */}
			<motion.div
				className="relative w-full max-w-md md:max-w-3xl lg:max-w-4xl"
				initial={{opacity: 0, y: 30}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 1.2, ease: "easeOut"}}
			>
				{/* Contenedor de video con bordes rasgados */}
				<div className="relative">
					<motion.video
						autoPlay
						loop
						muted
						playsInline
						src={pajaritos}
						className="w-full h-auto object-cover shadow-2xl md:aspect-video aspect-square"
						style={{
							filter: "drop-shadow(0 15px 35px rgba(0, 0, 0, 0.25))",
							clipPath:
								"polygon(0% 3%, 3% 1%, 5% 4%, 8% 2%, 12% 5%, 15% 1%, 18% 3%, 22% 0%, 25% 4%, 28% 2%, 32% 5%, 35% 1%, 38% 3%, 42% 0%, 45% 4%, 48% 2%, 52% 5%, 55% 1%, 58% 4%, 62% 2%, 65% 5%, 68% 0%, 72% 3%, 75% 1%, 78% 4%, 82% 2%, 85% 5%, 88% 1%, 92% 4%, 95% 2%, 98% 5%, 100% 2%, 100% 5%, 99% 8%, 100% 12%, 98% 15%, 100% 18%, 99% 22%, 100% 25%, 98% 28%, 100% 32%, 99% 35%, 100% 38%, 98% 42%, 100% 45%, 99% 48%, 100% 52%, 98% 55%, 100% 58%, 99% 62%, 100% 65%, 98% 68%, 100% 72%, 99% 75%, 100% 78%, 98% 82%, 100% 85%, 99% 88%, 100% 92%, 98% 95%, 100% 97%, 98% 98%, 95% 100%, 92% 98%, 88% 100%, 85% 97%, 82% 100%, 78% 98%, 75% 100%, 72% 97%, 68% 100%, 65% 98%, 62% 100%, 58% 97%, 55% 100%, 52% 98%, 48% 100%, 45% 97%, 42% 100%, 38% 98%, 35% 100%, 32% 97%, 28% 100%, 25% 98%, 22% 100%, 18% 97%, 15% 100%, 12% 98%, 8% 100%, 5% 97%, 3% 100%, 0% 98%, 0% 95%, 2% 92%, 0% 88%, 1% 85%, 0% 82%, 2% 78%, 0% 75%, 1% 72%, 0% 68%, 2% 65%, 0% 62%, 1% 58%, 0% 55%, 2% 52%, 0% 48%, 1% 45%, 0% 42%, 2% 38%, 0% 35%, 1% 32%, 0% 28%, 2% 25%, 0% 22%, 1% 18%, 0% 15%, 2% 12%, 0% 8%, 1% 5%)",
						}}
						initial={{scale: 1}}
						animate={{scale: 1}}
						transition={{duration: 2, ease: "easeOut"}}
					/>

					{/* Decoración de hojas */}
					<motion.div
						className="absolute -bottom-6 -left-8 w-24 h-24 opacity-50"
						initial={{opacity: 0, x: -20, rotate: -10}}
						animate={{opacity: 0.5, x: 0, rotate: 0}}
						transition={{duration: 1.2, delay: 0.8}}
					>
						<svg viewBox="0 0 120 120" className="text-green-700/30">
							<path
								d="M30,60 Q25,35 45,20 Q40,40 40,60 Q40,80 45,100 Q25,85 30,60 M45,20 Q65,30 65,60 Q65,90 45,100"
								fill="currentColor"
							/>
							<path
								d="M50,60 Q48,40 60,28 Q55,50 55,60 Q55,75 60,92 Q48,80 50,60"
								fill="currentColor"
								opacity="0.6"
							/>
						</svg>
					</motion.div>
				</div>
			</motion.div>

			{/* 💬 Texto con animación */}
			<motion.div
				className="relative z-10 text-center px-6 mt-8"
				initial={{opacity: 0, y: 20}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 1.2, delay: 0.6}}
			>
				<div
					className="flex flex-col items-center"
					style={{fontFamily: "'Caveat', cursive"}}
				>
					<h2 className="text-[#2E6D8A] text-4xl sm:text-6xl md:text-6xl font-medium">
						Diego
					</h2>
					<span className="text-[#6BAFC9] text-3xl sm:text-4xl md:text-5xl -my-2">
						&
					</span>
					<h2 className="text-[#2E6D8A] text-4xl sm:text-6xl md:text-6xl font-bold">
						Kattherine
					</h2>
				</div>

				{/* 🌷 Línea decorativa */}
				<motion.div
					className="mx-auto mt-3 w-32 h-[2px] bg-[#8EC8E0] rounded-full"
					initial={{width: 0, opacity: 0}}
					animate={{width: 128, opacity: 1}}
					transition={{duration: 1.5, delay: 1, ease: "easeOut"}}
				/>
			</motion.div>
		</section>
	);
};

export default WeddingInvitation;
