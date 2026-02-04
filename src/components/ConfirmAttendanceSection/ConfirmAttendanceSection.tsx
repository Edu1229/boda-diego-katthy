import React, {useState} from "react";
import {motion} from "framer-motion";
import AttendanceModal from "../AttendanceModal/AttendanceModal";

const ConfirmAttendanceSection: React.FC = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<section className="text-center py-12 px-6 bg-[#725E50] text-white relative overflow-hidden">
			<motion.div
				initial={{opacity: 0, y: 30}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.8}}
			>
				<h3 className="font-serif text-2xl mb-6">¿Confirmas tu asistencia?</h3>
				<p className="max-w-md mx-auto mb-6 text-[#f1e8e4]">
					Tu confirmación nos ayudará a organizar todo con mucho amor.
				</p>
				<button
					onClick={() => setShowModal(true)}
					className="mt-4 bg-[#AE7E68] hover:bg-[#7A695D] transition-colors duration-300 text-white px-8 py-3 rounded-full font-semibold shadow-md"
				>
					Confirmar Asistencia
				</button>
			</motion.div>

			{showModal && <AttendanceModal onClose={() => setShowModal(false)} />}
		</section>
	);
};

export default ConfirmAttendanceSection;
