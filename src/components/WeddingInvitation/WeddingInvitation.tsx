import React from "react";
import {motion} from "framer-motion";
import {GiDiamondRing} from "react-icons/gi";
import {LuCalendarHeart} from "react-icons/lu";
import pajaritos from "/pajaritos.mp4";

const WeddingInvitation: React.FC = () => {
return (
<section className="relative w-full overflow-hidden" style={{background: "linear-gradient(170deg, #EEF7FB 0%, #F5FBFE 55%, #EBF4FA 100%)"}}>

{/* Ornamento floral top-left SVG */}
<svg className="absolute top-0 left-0 pointer-events-none select-none" style={{width: "clamp(90px,22vw,180px)", opacity: 0.18}} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="60" cy="60" r="28" fill="#6BAFC9"/>
<circle cx="100" cy="35" r="20" fill="#8EC8E0"/>
<circle cx="35" cy="100" r="22" fill="#B8DDEF"/>
<ellipse cx="75" cy="90" rx="14" ry="22" fill="#6BAFC9" opacity="0.6"/>
<line x1="60" y1="60" x2="100" y2="35" stroke="#8EC8E0" strokeWidth="2"/>
<line x1="60" y1="60" x2="35" y2="100" stroke="#8EC8E0" strokeWidth="2"/>
</svg>
{/* Ornamento top-right */}
<svg className="absolute top-0 right-0 pointer-events-none select-none" style={{width: "clamp(80px,18vw,155px)", opacity: 0.14, transform: "scaleX(-1)"}} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="60" cy="60" r="28" fill="#6BAFC9"/>
<circle cx="100" cy="35" r="20" fill="#8EC8E0"/>
<circle cx="35" cy="100" r="22" fill="#B8DDEF"/>
<ellipse cx="75" cy="90" rx="14" ry="22" fill="#6BAFC9" opacity="0.6"/>
</svg>

<div className="relative z-10 flex flex-col items-center px-4 pt-10 pb-8">

{/*  Encabezado  */}
<motion.div
className="flex flex-col items-center mb-6"
initial={{opacity: 0, y: -18}}
animate={{opacity: 1, y: 0}}
transition={{duration: 1, ease: "easeOut"}}
>
<div className="flex items-center gap-3 mb-2">
<div className="h-px w-12 sm:w-20" style={{background: "linear-gradient(to right, transparent, #8EC8E0)"}}/>
<GiDiamondRing style={{color: "#6BAFC9", fontSize: "1.3rem"}}/>
<div className="h-px w-12 sm:w-20" style={{background: "linear-gradient(to left, transparent, #8EC8E0)"}}/>
</div>
<p className="uppercase tracking-[0.28em] text-[10px] sm:text-xs font-medium" style={{color: "#6BAFC9"}}>
con amor y alegria
</p>
</motion.div>

{/*  Video  */}
<motion.div
className="relative w-full max-w-md md:max-w-3xl lg:max-w-4xl"
initial={{opacity: 0, y: 30, scale: 0.97}}
animate={{opacity: 1, y: 0, scale: 1}}
transition={{duration: 1.3, delay: 0.15, ease: "easeOut"}}
>
<motion.video
autoPlay
loop
muted
playsInline
src={pajaritos}
className="w-full h-auto object-cover shadow-2xl md:aspect-video aspect-square"
style={{
filter: "drop-shadow(0 15px 35px rgba(46,109,138,0.22))",
clipPath:
"polygon(0% 3%, 3% 1%, 5% 4%, 8% 2%, 12% 5%, 15% 1%, 18% 3%, 22% 0%, 25% 4%, 28% 2%, 32% 5%, 35% 1%, 38% 3%, 42% 0%, 45% 4%, 48% 2%, 52% 5%, 55% 1%, 58% 4%, 62% 2%, 65% 5%, 68% 0%, 72% 3%, 75% 1%, 78% 4%, 82% 2%, 85% 5%, 88% 1%, 92% 4%, 95% 2%, 98% 5%, 100% 2%, 100% 5%, 99% 8%, 100% 12%, 98% 15%, 100% 18%, 99% 22%, 100% 25%, 98% 28%, 100% 32%, 99% 35%, 100% 38%, 98% 42%, 100% 45%, 99% 48%, 100% 52%, 98% 55%, 100% 58%, 99% 62%, 100% 65%, 98% 68%, 100% 72%, 99% 75%, 100% 78%, 98% 82%, 100% 85%, 99% 88%, 100% 92%, 98% 95%, 100% 97%, 98% 98%, 95% 100%, 92% 98%, 88% 100%, 85% 97%, 82% 100%, 78% 98%, 75% 100%, 72% 97%, 68% 100%, 65% 98%, 62% 100%, 58% 97%, 55% 100%, 52% 98%, 48% 100%, 45% 97%, 42% 100%, 38% 98%, 35% 100%, 32% 97%, 28% 100%, 25% 98%, 22% 100%, 18% 97%, 15% 100%, 12% 98%, 8% 100%, 5% 97%, 3% 100%, 0% 98%, 0% 95%, 2% 92%, 0% 88%, 1% 85%, 0% 82%, 2% 78%, 0% 75%, 1% 72%, 0% 68%, 2% 65%, 0% 62%, 1% 58%, 0% 55%, 2% 52%, 0% 48%, 1% 45%, 0% 42%, 2% 38%, 0% 35%, 1% 32%, 0% 28%, 2% 25%, 0% 22%, 1% 18%, 0% 15%, 2% 12%, 0% 8%, 1% 5%)",
}}
/>
</motion.div>

{/*  Nombres  */}
<motion.div
className="flex flex-col items-center mt-8"
initial={{opacity: 0, y: 20}}
animate={{opacity: 1, y: 0}}
transition={{duration: 1.1, delay: 0.5}}
>
<motion.h2
className="font-[Caveat] font-bold leading-none text-center"
style={{color: "#2E6D8A", fontSize: "clamp(3.2rem, 12vw, 6rem)"}}
initial={{opacity: 0, x: -20}}
animate={{opacity: 1, x: 0}}
transition={{duration: 0.9, delay: 0.6}}
>
Diego
</motion.h2>

<motion.div
className="flex items-center gap-3 my-1"
initial={{opacity: 0, scale: 0.7}}
animate={{opacity: 1, scale: 1}}
transition={{duration: 0.7, delay: 0.8, type: "spring", stiffness: 180}}
>
<div className="h-px w-8" style={{background: "#B8DDEF"}}/>
<span className="font-[Dancing_Script]" style={{color: "#6BAFC9", fontSize: "clamp(1.8rem,6vw,3rem)"}}>
&amp;
</span>
<div className="h-px w-8" style={{background: "#B8DDEF"}}/>
</motion.div>

<motion.h2
className="font-[Caveat] font-bold leading-none text-center"
style={{color: "#2E6D8A", fontSize: "clamp(3.2rem, 12vw, 6rem)"}}
initial={{opacity: 0, x: 20}}
animate={{opacity: 1, x: 0}}
transition={{duration: 0.9, delay: 0.7}}
>
Kattherine
</motion.h2>

{/* Línea decorativa animada */}
<motion.div
className="mt-3 h-[2px] rounded-full"
style={{background: "linear-gradient(90deg, transparent, #6BAFC9, #8EC8E0, transparent)"}}
initial={{width: 0, opacity: 0}}
animate={{width: "min(200px, 60vw)", opacity: 1}}
transition={{duration: 1.4, delay: 1.0, ease: "easeOut"}}
/>
</motion.div>

{/*  Fecha  */}
<motion.div
className="flex flex-col items-center mt-5 gap-2"
initial={{opacity: 0, y: 12}}
animate={{opacity: 1, y: 0}}
transition={{duration: 0.9, delay: 1.1}}
>
<div className="flex items-center gap-2 px-5 py-2 rounded-full" style={{background: "rgba(184,221,239,0.22)", border: "1px solid #B8DDEF"}}>
<LuCalendarHeart style={{color: "#6BAFC9", fontSize: "1rem"}}/>
<span className="uppercase tracking-[0.2em] text-[11px] sm:text-xs font-medium" style={{color: "#4A7A8F"}}>
21 de Marzo &middot; 2026
</span>
</div>

<motion.p
className="text-xs tracking-widest uppercase"
style={{color: "#8EC8E0"}}
initial={{opacity: 0}}
animate={{opacity: 1}}
transition={{duration: 0.8, delay: 1.3}}
>
Piura, Peru
</motion.p>
</motion.div>

{/*  Scroll hint  */}
<motion.div
className="flex flex-col items-center mt-7 gap-1"
initial={{opacity: 0}}
animate={{opacity: 1}}
transition={{duration: 1, delay: 1.6}}
>
<p className="text-[10px] uppercase tracking-[0.25em]" style={{color: "#8EC8E0"}}>desliza</p>
<motion.div
animate={{y: [0, 7, 0]}}
transition={{duration: 1.6, repeat: Infinity, ease: "easeInOut"}}
>
<svg width="18" height="24" viewBox="0 0 18 24" fill="none">
<path d="M9 4 L9 20 M4 15 L9 20 L14 15" stroke="#8EC8E0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</motion.div>
</motion.div>

</div>
</section>
);
};

export default WeddingInvitation;
