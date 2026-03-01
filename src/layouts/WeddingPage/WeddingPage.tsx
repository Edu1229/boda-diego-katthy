import React, {useState, useRef} from "react";
import {motion, AnimatePresence} from "framer-motion";
import DressCode from "../../components/DressCode/DressCode";
import EventLocations from "../../components/EventLocations/EventLocations";
import MusicControl from "../../components/MusicControl/MusicControl";
import ParentsSection from "../../components/Parents/ParentsSection";
import SponsorsSection from "../../components/SponsorsSection/SponsorsSection";
import WeddingCountdown from "../../components/WeddingCountdown/WeddingCountdown";
import WeddingDate from "../../components/WeddingDate/WeddingDate";
import WeddingInvitation from "../../components/WeddingInvitation/WeddingInvitation";
import OverlayInicial from "../OverlayInicial/OverlayInicial";
import LoveWedding from "../../components/loveWedding/loveWedding";
import UsSection from "../../components/UsSection/UsSection";
import GiftsAndConfirmation from "../../components/GiftsAndConfirmation/GiftsAndConfirmation";
import PassesSection from "../../components/Passes/PassesSection";

const WeddingPage: React.FC = () => {
	const [showOverlay, setShowOverlay] = useState(true);
	const audioRef = useRef<HTMLAudioElement>(null!);

	const handleEnter = () => {
		if (audioRef.current) {
			audioRef.current.currentTime = 0;
			audioRef.current.play().catch(() => {
				console.log("El navegador bloqueó el autoplay incluso con click.");
			});
		}
		setShowOverlay(false);
	};

	return (
		<>
			{/* 🎵 Audio global controlado por MusicControl */}
			<audio ref={audioRef} src="/music.mp3" loop preload="auto" />

			<AnimatePresence mode="wait">
				{showOverlay ? (
					<motion.div
						key="overlay"
						initial={{opacity: 1}}
						exit={{opacity: 0}}
						transition={{duration: 1.2, ease: "easeInOut"}}
					>
						<OverlayInicial onEnter={handleEnter} audioRef={audioRef} />
					</motion.div>
				) : (
					<motion.div
						key="page"
						initial={{opacity: 0, scale: 0.98, y: 30}}
						animate={{opacity: 1, scale: 1, y: 0}}
						exit={{opacity: 0}}
						transition={{duration: 1.2, ease: "easeOut"}}
						className="w-full p-0 m-0"
						style={{
							background: "linear-gradient(180deg, #EEF7FB 0%, #F5FBFE 100%)",
						}}
					>
						{/* ✨ Contenido de la invitación */}
						<WeddingInvitation />
						<WeddingCountdown />
						<WeddingDate />
						<PassesSection />
						<ParentsSection />
						<SponsorsSection />
						<LoveWedding />
						<EventLocations />
						<DressCode />
						<GiftsAndConfirmation />
						<UsSection />
						<MusicControl audioRef={audioRef} />
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default WeddingPage;
