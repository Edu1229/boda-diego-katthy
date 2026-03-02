import React from "react";
import pareja from "../../assets/img/imagen_6.jpeg";

const UsSection: React.FC = () => {
	return (
		<section className="relative w-full overflow-hidden">
			{/* Degradado superior que fusiona con la sección anterior */}
			<div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#EBF4FA] to-transparent z-10" />

			<img
				src={pareja}
				alt="Diego y Katthy"
				className="w-full h-[70vh] sm:h-[80vh] object-cover object-top"
			/>

			{/* Degradado inferior */}
			<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#1a3a52] to-transparent z-10" />
		</section>
	);
};

export default UsSection;
