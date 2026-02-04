import React, {useState} from "react";
import {FaMusic, FaPause} from "react-icons/fa";

const MusicControl: React.FC<{audioRef: React.RefObject<HTMLAudioElement>}> = ({
	audioRef,
}) => {
	const [playing, setPlaying] = useState(true);

	const toggleMusic = () => {
		if (!audioRef.current) return;
		if (playing) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setPlaying(!playing);
	};

	return (
		<button
			onClick={toggleMusic}
			className="fixed bottom-6 right-6 bg-[#AE7E68] hover:bg-[#7A695D] text-white p-3 rounded-full shadow-lg transition-colors duration-300 z-50"
			aria-label="Control de música"
		>
			{playing ? <FaPause /> : <FaMusic />}
		</button>
	);
};

export default MusicControl;
