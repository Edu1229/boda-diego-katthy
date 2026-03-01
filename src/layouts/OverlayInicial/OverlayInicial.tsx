import {motion, AnimatePresence} from "framer-motion";
import React, {useState} from "react";
import type {RefObject} from "react";
import flor from "../../assets/img/image.png";
import flor2 from "../../assets/img/flor2.png";

interface Props {
onEnter: () => void;
audioRef: RefObject<HTMLAudioElement>;
}

const OverlayInicial: React.FC<Props> = ({onEnter, audioRef}) => {
const [opening, setOpening] = useState(false);

const handleClick = () => {
setOpening(true);
audioRef.current?.play().catch(() => {});
setTimeout(() => onEnter(), 1000);
};

return (
<AnimatePresence>
{!opening && (
<motion.div
key="overlay"
className="fixed inset-0 z-[100] flex items-center justify-center"
style={{background: "linear-gradient(160deg, #D6EEF8 0%, #EEF7FB 50%, #C8E8F5 100%)"}}
exit={{opacity: 0, scale: 1.04, transition: {duration: 0.85, ease: "easeInOut"}}}
>
{/* Flores decorativas de fondo */}
<motion.img
src={flor}
alt=""
className="absolute top-0 left-0 pointer-events-none select-none"
style={{width: "clamp(120px, 28vw, 220px)", opacity: 0.28, transform: "rotate(180deg) translate(10px, -8px)"}}
initial={{opacity: 0, x: -30, y: -30}}
animate={{opacity: 0.28, x: 0, y: 0}}
transition={{duration: 1.4, ease: "easeOut"}}
/>
<motion.img
src={flor2}
alt=""
className="absolute bottom-0 right-0 pointer-events-none select-none"
style={{width: "clamp(100px, 24vw, 200px)", opacity: 0.22, transform: "translate(8px, 8px) rotate(10deg)"}}
initial={{opacity: 0, x: 30, y: 30}}
animate={{opacity: 0.22, x: 0, y: 0}}
transition={{duration: 1.4, delay: 0.2, ease: "easeOut"}}
/>
<motion.img
src={flor}
alt=""
className="absolute bottom-8 left-0 pointer-events-none select-none"
style={{width: "clamp(80px, 18vw, 150px)", opacity: 0.18, transform: "rotate(30deg) translateX(-10px)"}}
initial={{opacity: 0}}
animate={{opacity: 0.18}}
transition={{duration: 1.6, delay: 0.4}}
/>

{/* Carta / Sobre */}
<motion.div
className="relative flex flex-col items-center"
style={{width: "clamp(300px, 88vw, 420px)"}}
initial={{opacity: 0, y: 40, scale: 0.94}}
animate={{opacity: 1, y: 0, scale: 1}}
transition={{duration: 1.1, delay: 0.3, ease: "easeOut"}}
>
{/* Solapa superior del sobre (triangulo SVG) */}
<div className="relative w-full" style={{zIndex: 2}}>
<svg
viewBox="0 0 420 160"
xmlns="http://www.w3.org/2000/svg"
className="w-full h-auto block"
preserveAspectRatio="none"
style={{filter: "drop-shadow(0 -2px 6px rgba(46,109,138,0.10))"}}
>
{/* Solapa abierta hacia arriba */}
<path d="M0,0 L210,145 L420,0 Z" fill="#D6EEF8" />
{/* Borde interior de la solapa */}
<path d="M0,0 L210,145 L420,0" fill="none" stroke="#B8DDEF" strokeWidth="1.5" />
</svg>
{/* Sello de cera decorativo */}
<motion.div
className="absolute left-1/2 -translate-x-1/2"
style={{
bottom: "-28px",
width: "58px",
height: "58px",
borderRadius: "50%",
background: "linear-gradient(135deg, #6BAFC9 0%, #2E6D8A 100%)",
border: "3px solid #EEF7FB",
boxShadow: "0 4px 14px rgba(46,109,138,0.30)",
display: "flex",
alignItems: "center",
justifyContent: "center",
zIndex: 10,
}}
initial={{scale: 0, rotate: -20}}
animate={{scale: 1, rotate: 0}}
transition={{duration: 0.7, delay: 1.0, type: "spring", stiffness: 200}}
>
<span
className="font-[Dancing_Script] text-white select-none"
style={{fontSize: "1.05rem", lineHeight: 1, marginTop: "2px"}}
>
D&amp;K
</span>
</motion.div>
</div>

{/* Cuerpo de la carta */}
<div
className="relative w-full flex flex-col items-center"
style={{
background: "linear-gradient(180deg, #F5FBFE 0%, #FBFEFF 100%)",
border: "1.5px solid #B8DDEF",
borderTop: "none",
borderRadius: "0 0 20px 20px",
paddingTop: "44px",
paddingBottom: "36px",
paddingLeft: "28px",
paddingRight: "28px",
boxShadow: "0 8px 40px rgba(46,109,138,0.14), 0 2px 10px rgba(46,109,138,0.08)",
}}
>
{/* Lineas decorativas internas */}
<div
className="absolute top-0 left-0 right-0"
style={{
height: "6px",
background: "linear-gradient(90deg, transparent, #8EC8E0 40%, #6BAFC9 60%, transparent)",
opacity: 0.5,
}}
/>

{/* Ornamento superior */}
<motion.div
className="flex items-center gap-2 mb-4"
initial={{opacity: 0, y: 8}}
animate={{opacity: 1, y: 0}}
transition={{duration: 0.8, delay: 0.7}}
>
<div className="h-px w-10" style={{background: "linear-gradient(to right, transparent, #8EC8E0)"}} />
<span style={{color: "#8EC8E0", fontSize: "0.75rem", letterSpacing: "0.25em"}}>&#10022;</span>
<span style={{color: "#B8DDEF", fontSize: "0.65rem", letterSpacing: "0.2em"}}>&#9825;</span>
<span style={{color: "#8EC8E0", fontSize: "0.75rem", letterSpacing: "0.25em"}}>&#10022;</span>
<div className="h-px w-10" style={{background: "linear-gradient(to left, transparent, #8EC8E0)"}} />
</motion.div>

{/* Texto "Te invitamos a nuestra" */}
<motion.p
className="uppercase tracking-[0.25em] text-[10px] sm:text-xs mb-1 text-center"
style={{color: "#6BAFC9"}}
initial={{opacity: 0}}
animate={{opacity: 1}}
transition={{duration: 0.8, delay: 0.8}}
>
te invitamos a nuestra
</motion.p>

{/* Titulo BODA */}
<motion.h1
className="font-[Dancing_Script] text-center mb-1"
style={{color: "#2E6D8A", fontSize: "clamp(2.4rem, 7vw, 3.2rem)", lineHeight: 1.1}}
initial={{opacity: 0, scale: 0.92}}
animate={{opacity: 1, scale: 1}}
transition={{duration: 1, delay: 0.9}}
>
Boda
</motion.h1>

{/* Separador con corazon */}
<motion.div
className="flex items-center gap-2 my-2"
initial={{opacity: 0}}
animate={{opacity: 1}}
transition={{duration: 0.7, delay: 1.0}}
>
<div className="h-px w-8" style={{background: "#B8DDEF"}} />
<span style={{color: "#6BAFC9", fontSize: "0.8rem"}}>&#9825;</span>
<div className="h-px w-8" style={{background: "#B8DDEF"}} />
</motion.div>

{/* Nombres */}
<motion.h2
className="font-[Dancing_Script] text-center mb-3"
style={{color: "#2E6D8A", fontSize: "clamp(1.8rem, 6vw, 2.6rem)", lineHeight: 1.2}}
initial={{opacity: 0, y: 10}}
animate={{opacity: 1, y: 0}}
transition={{duration: 1, delay: 1.05}}
>
Diego &amp; Katthy
</motion.h2>

{/* Linea ornamental */}
<motion.div
className="flex items-center gap-2 mb-4"
initial={{opacity: 0, scaleX: 0}}
animate={{opacity: 1, scaleX: 1}}
transition={{duration: 0.7, delay: 1.1}}
>
<div className="h-px w-16 sm:w-20" style={{background: "linear-gradient(to right, transparent, #8EC8E0)"}} />
<span style={{color: "#8EC8E0", fontSize: "0.7rem"}}>&#10022;</span>
<div className="h-px w-16 sm:w-20" style={{background: "linear-gradient(to left, transparent, #8EC8E0)"}} />
</motion.div>

{/* Fecha */}
<motion.div
className="flex flex-col items-center mb-5"
initial={{opacity: 0, y: 8}}
animate={{opacity: 1, y: 0}}
transition={{duration: 0.8, delay: 1.15}}
>
<p
className="uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-1"
style={{color: "#6BAFC9"}}
>
21 &middot; marzo &middot; 2026
</p>
<p
className="text-xs"
style={{color: "#8EC8E0", letterSpacing: "0.15em"}}
>
Piura, Peru
</p>
</motion.div>

{/* Boton principal */}
<motion.button
onClick={handleClick}
initial={{opacity: 0, y: 10}}
animate={{opacity: 1, y: 0}}
transition={{duration: 0.8, delay: 1.25}}
whileHover={{scale: 1.05, boxShadow: "0 6px 22px rgba(46,109,138,0.30)"}}
whileTap={{scale: 0.96}}
className="relative z-10 text-white font-medium tracking-wide transition-all"
style={{
background: "linear-gradient(135deg, #6BAFC9 0%, #2E6D8A 100%)",
padding: "12px 38px",
borderRadius: "50px",
fontSize: "0.95rem",
border: "none",
cursor: "pointer",
boxShadow: "0 4px 16px rgba(46,109,138,0.25)",
letterSpacing: "0.08em",
}}
>
Abrir invitacion &#9825;
</motion.button>

{/* Mini nota al pie */}
<motion.p
className="mt-4 text-center"
style={{color: "#B8DDEF", fontSize: "0.68rem", letterSpacing: "0.1em"}}
initial={{opacity: 0}}
animate={{opacity: 1}}
transition={{duration: 0.8, delay: 1.4}}
>
Con amor &mdash; familia Mogollon &middot; Mendoza
</motion.p>
</div>

{/* Solapa inferior del sobre */}
<div className="w-full" style={{zIndex: 1, marginTop: "-1px"}}>
<svg
viewBox="0 0 420 60"
xmlns="http://www.w3.org/2000/svg"
className="w-full h-auto block"
preserveAspectRatio="none"
>
<path d="M0,0 L210,60 L420,0 Z" fill="#D6EEF8" />
<path d="M0,0 L210,60 L420,0" fill="none" stroke="#B8DDEF" strokeWidth="1.5" />
</svg>
</div>
</motion.div>
</motion.div>
)}
</AnimatePresence>
);
};

export default OverlayInicial;
