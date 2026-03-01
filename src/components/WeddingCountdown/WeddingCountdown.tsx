import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import flecha from "../../assets/img/flecha.svg";

const WeddingCountdown = () => {
	const calculateTimeLeft = () => {
		const targetDate = new Date("2026-03-21T14:00:00");
		const now = new Date();
		const difference = targetDate.getTime() - now.getTime();

		let timeLeft = {days: 0, hours: 0, minutes: 0, seconds: 0};
		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}
		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
	useEffect(() => {
		const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<section className="flex flex-col items-center justify-center mt-16 overflow-hidden">
			<motion.img
				src={flecha}
				alt="Decoración flecha superior"
				className="mx-8 w-[300px] sm:w-[60%] md:w-[55%] lg:w-[50%]"
				initial={{opacity: 0, y: -20}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 1}}
				viewport={{once: false}}
			/>

			{/* Contador */}
			<motion.div
				className="flex items-center justify-center gap-6 sm:gap-10 text-brown-700 text-xl font-serif"
				initial={{opacity: 0, y: 20}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 1, delay: 0.2}}
				viewport={{once: false, amount: 0.3}}
			>
				{Object.entries(timeLeft).map(([key, value], index) => (
					<motion.div
						key={key}
						className="flex flex-col items-center"
						animate={{scale: [1, 1.08, 1]}}
						transition={{duration: 1.2, repeat: Infinity, delay: index * 0.2}}
					>
						<span className="text-5xl md:text-5xl text-[#2E6D8A] font-bold">
							{value}
						</span>
						<span className="text-sm md:text-2xl text-[#8EC8E0]">
							{key === "days"
								? "Días"
								: key === "hours"
									? "Horas"
									: key === "minutes"
										? "Min."
										: "Seg."}
						</span>
					</motion.div>
				))}
			</motion.div>

			<motion.img
				src={flecha}
				alt="Decoración flecha inferior"
				className="mx-8 w-[300px] sm:w-[60%] md:w-[55%] lg:w-[50%]"
				initial={{opacity: 0, y: 20}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 1, delay: 0.4}}
				viewport={{once: false}}
			/>
		</section>
	);
};

export default WeddingCountdown;
