import React from "react";
import pareja from "../../assets/img/pareja_3.png";

const UsSection: React.FC = () => {
	return (
		<section
			className="relative w-full min-h-screen flex flex-col justify-end items-center text-center overflow-hidden"
			style={{
				backgroundImage: `url(${pareja})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{/* Degradado inferior */}
			<div className="absolute -top-2 left-0 w-full h-[45%] bg-gradient-to-b from-white via-white/90 to-transparent" />
		</section>
	);
};

export default UsSection;
