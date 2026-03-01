import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {GiDiamondRing} from "react-icons/gi";
import {LuHourglass} from "react-icons/lu";
import flecha from "../../assets/img/flecha.svg";

const units = [
{key: "days",    label: "Dias"},
{key: "hours",   label: "Horas"},
{key: "minutes", label: "Min"},
{key: "seconds", label: "Seg"},
];

const WeddingCountdown = () => {
const calculateTimeLeft = () => {
const targetDate = new Date("2026-03-21T14:00:00");
const now = new Date();
const difference = targetDate.getTime() - now.getTime();
if (difference <= 0) return {days: 0, hours: 0, minutes: 0, seconds: 0};
return {
days:    Math.floor(difference / (1000 * 60 * 60 * 24)),
hours:   Math.floor((difference / (1000 * 60 * 60)) % 24),
minutes: Math.floor((difference / 1000 / 60) % 60),
seconds: Math.floor((difference / 1000) % 60),
};
};

const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);
useEffect(() => {
const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
return () => clearInterval(timer);
}, []);

return (
<section
className="relative w-full flex flex-col items-center py-8 px-4 overflow-hidden"
style={{background: "linear-gradient(170deg, #EEF7FB 0%, #F5FBFE 55%, #EBF4FA 100%)"}}
>
{/* Flecha decorativa superior */}
<motion.img
src={flecha}
alt=""
className="w-[280px] sm:w-[55%] md:w-[45%] max-w-lg mb-4"
initial={{opacity: 0, y: -12}}
whileInView={{opacity: 1, y: 0}}
transition={{duration: 0.9}}
viewport={{once: false}}
style={{filter: "hue-rotate(190deg) saturate(0.7) brightness(1.2)"}}
/>

{/* Titulo de seccion */}
<motion.div
className="flex flex-col items-center mb-7"
initial={{opacity: 0, y: 10}}
whileInView={{opacity: 1, y: 0}}
transition={{duration: 0.9, delay: 0.1}}
viewport={{once: false, amount: 0.5}}
>
<div className="flex items-center gap-2 mb-2">
<LuHourglass style={{color: "#6BAFC9", fontSize: "1rem"}}/>
<p className="uppercase tracking-[0.28em] text-[10px] sm:text-xs font-medium" style={{color: "#6BAFC9"}}>
el gran dia se acerca
</p>
<LuHourglass style={{color: "#6BAFC9", fontSize: "1rem"}}/>
</div>
<div className="flex items-center gap-3">
<div className="h-px w-10 sm:w-16" style={{background: "linear-gradient(to right, transparent, #8EC8E0)"}}/>
<GiDiamondRing style={{color: "#8EC8E0", fontSize: "1.1rem"}}/>
<div className="h-px w-10 sm:w-16" style={{background: "linear-gradient(to left, transparent, #8EC8E0)"}}/>
</div>
</motion.div>

{/* Cards del contador */}
<motion.div
className="flex items-center justify-center gap-3 sm:gap-5"
initial={{opacity: 0, y: 16}}
whileInView={{opacity: 1, y: 0}}
transition={{duration: 0.9, delay: 0.2}}
viewport={{once: false, amount: 0.3}}
>
{units.map(({key, label}, index) => (
<motion.div
key={key}
className="flex flex-col items-center"
initial={{opacity: 0, scale: 0.85, y: 12}}
whileInView={{opacity: 1, scale: 1, y: 0}}
transition={{duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 200}}
viewport={{once: false, amount: 0.3}}
>
{/* Card */}
<motion.div
className="flex items-center justify-center rounded-2xl"
style={{
width: "clamp(58px, 16vw, 82px)",
height: "clamp(64px, 18vw, 90px)",
background: "linear-gradient(160deg, #F5FBFE 0%, #EBF4FA 100%)",
border: "1.5px solid #B8DDEF",
boxShadow: "0 4px 18px rgba(46,109,138,0.10), inset 0 1px 0 rgba(255,255,255,0.8)",
}}
animate={key === "seconds" ? {
borderColor: ["#B8DDEF", "#6BAFC9", "#B8DDEF"],
boxShadow: [
"0 4px 18px rgba(46,109,138,0.10)",
"0 4px 22px rgba(107,175,201,0.25)",
"0 4px 18px rgba(46,109,138,0.10)",
],
} : {}}
transition={key === "seconds" ? {duration: 1, repeat: Infinity} : {}}
>
<span
className="font-bold tabular-nums leading-none"
style={{
color: "#2E6D8A",
fontSize: "clamp(1.7rem, 5.5vw, 2.6rem)",
fontFamily: "'Playfair Display', serif",
}}
>
{String((timeLeft as Record<string, number>)[key]).padStart(2, "0")}
</span>
</motion.div>

{/* Label debajo de cada card */}
<p
className="mt-2 uppercase font-medium tracking-widest"
style={{color: "#8EC8E0", fontSize: "clamp(0.55rem, 1.8vw, 0.7rem)"}}
>
{label}
</p>
</motion.div>
))}
</motion.div>

{/* Subtexto fecha  separado correctamente */}
<motion.p
className="mt-6 uppercase tracking-[0.22em] text-[10px] sm:text-xs"
style={{color: "#6BAFC9"}}
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.8, delay: 0.5}}
viewport={{once: false}}
>
21 &middot; Marzo &middot; 2026
</motion.p>

{/* Flecha decorativa inferior */}
<motion.img
src={flecha}
alt=""
className="w-[280px] sm:w-[55%] md:w-[45%] max-w-lg mt-5"
initial={{opacity: 0, y: 12}}
whileInView={{opacity: 1, y: 0}}
transition={{duration: 0.9, delay: 0.4}}
viewport={{once: false}}
style={{transform: "scaleY(-1)", filter: "hue-rotate(190deg) saturate(0.7) brightness(1.2)"}}
/>
</section>
);
};

export default WeddingCountdown;