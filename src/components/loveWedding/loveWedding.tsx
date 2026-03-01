// components/loveWedding/LoveWedding.tsx
import React, {useRef, useState, useCallback, useEffect} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {motion} from "framer-motion";

import pareja1 from "../../assets/img/imagen_1.jpeg";
import pareja2 from "../../assets/img/imagen_2.jpeg";
import pareja3 from "../../assets/img/imagen_3.jpeg";
import pareja4 from "../../assets/img/imagen_4.jpeg";

const slides = [pareja1, pareja2, pareja3, pareja4];

const LoveWedding: React.FC = () => {
const [selectedIndex, setSelectedIndex] = useState(0);

const autoplay = useRef(
Autoplay({delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true}),
);
const [emblaRef, emblaApi] = useEmblaCarousel(
{loop: true, align: "center", duration: 35},
[autoplay.current],
);

const onSelect = useCallback(() => {
if (!emblaApi) return;
setSelectedIndex(emblaApi.selectedScrollSnap());
}, [emblaApi]);

useEffect(() => {
if (!emblaApi) return;
emblaApi.on("select", onSelect);
onSelect();
}, [emblaApi, onSelect]);

const scrollTo = useCallback(
(index: number) => emblaApi && emblaApi.scrollTo(index),
[emblaApi],
);

return (
<motion.section
className="relative w-full overflow-hidden"
style={{background: "#EEF7FB"}}
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 1.4, ease: "easeOut"}}
viewport={{once: false, amount: 0.2}}
>
{/* Encabezado decorativo */}
<motion.div
className="relative z-10 flex flex-col items-center pt-10 pb-6 px-4"
initial={{opacity: 0, y: -20}}
whileInView={{opacity: 1, y: 0}}
transition={{duration: 1, delay: 0.1}}
viewport={{once: false, amount: 0.4}}
>
<div className="flex items-center gap-3 mb-3">
<div className="h-px w-16 sm:w-24" style={{background: "linear-gradient(to right, transparent, #8EC8E0)"}} />
<span style={{color: "#8EC8E0", fontSize: "1.1rem"}}>&#10022;</span>
<div className="h-px w-16 sm:w-24" style={{background: "linear-gradient(to left, transparent, #8EC8E0)"}} />
</div>

<motion.p
className="uppercase tracking-[0.3em] text-xs font-medium mb-1"
style={{color: "#6BAFC9"}}
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.8, delay: 0.3}}
viewport={{once: false}}
>
nuestra historia
</motion.p>

<motion.h2
className="font-[Dancing_Script] text-4xl sm:text-5xl"
style={{color: "#2E6D8A"}}
initial={{opacity: 0, scale: 0.95}}
whileInView={{opacity: 1, scale: 1}}
transition={{duration: 1, delay: 0.4}}
viewport={{once: false}}
>
Diego &amp; Katthy
</motion.h2>

<div className="flex items-center gap-2 mt-3">
<div className="h-px w-8" style={{background: "#B8DDEF"}} />
<span style={{color: "#B8DDEF", fontSize: "0.9rem"}}>&#9825;</span>
<div className="h-px w-8" style={{background: "#B8DDEF"}} />
</div>
</motion.div>

{/* Carrusel centrado con proporcion retrato */}
<div className="relative w-full flex justify-center px-4 sm:px-10 md:px-16">
<motion.div
className="relative w-full overflow-hidden rounded-2xl"
style={{
maxWidth: "440px",
aspectRatio: "3 / 4",
boxShadow: "0 8px 40px rgba(46,109,138,0.18), 0 2px 12px rgba(46,109,138,0.10)",
border: "1.5px solid #B8DDEF",
}}
initial={{opacity: 0, scale: 0.96, y: 20}}
whileInView={{opacity: 1, scale: 1, y: 0}}
transition={{duration: 1.1, delay: 0.15}}
viewport={{once: false, amount: 0.3}}
>
{/* Degradado superior en celeste */}
<div
className="absolute top-0 left-0 w-full h-[22%] z-10 pointer-events-none"
style={{background: "linear-gradient(to bottom, rgba(238,247,251,0.85) 0%, transparent 100%)"}}
/>

<div className="embla w-full h-full" ref={emblaRef}>
<div className="embla__container flex h-full">
{slides.map((src, index) => (
<motion.div
key={index}
className="embla__slide flex-[0_0_100%] relative overflow-hidden h-full"
animate={{scale: selectedIndex === index ? 1.04 : 1}}
transition={{duration: 7, ease: "easeInOut"}}
style={{height: "100%"}}
>
<img
src={src}
alt={"Foto " + (index + 1)}
className="w-full h-full object-cover"
style={{
objectPosition: "center 18%",
filter: "brightness(0.93) saturate(1.07)",
}}
/>
<div
className="absolute inset-0"
style={{background: "linear-gradient(to top, rgba(46,109,138,0.22) 0%, transparent 55%)"}}
/>
</motion.div>
))}
</div>
</div>

{/* Degradado inferior en celeste */}
<div
className="absolute bottom-0 left-0 w-full h-[28%] z-10 pointer-events-none"
style={{background: "linear-gradient(to top, rgba(238,247,251,0.88) 0%, transparent 100%)"}}
/>

{/* Puntos de navegacion */}
<div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2.5">
{slides.map((_, i) => (
<button
key={i}
onClick={() => scrollTo(i)}
className="transition-all duration-500 rounded-full"
style={{
width: selectedIndex === i ? "22px" : "8px",
height: "8px",
background: selectedIndex === i ? "#2E6D8A" : "#B8DDEF",
border: "none",
padding: 0,
cursor: "pointer",
}}
aria-label={"Ir a foto " + (i + 1)}
/>
))}
</div>
</motion.div>
</div>

{/* Cita romantica */}
<motion.div
className="relative z-10 flex flex-col items-center px-6 pt-7 pb-10"
initial={{opacity: 0, y: 18}}
whileInView={{opacity: 1, y: 0}}
transition={{duration: 1, delay: 0.2}}
viewport={{once: false, amount: 0.5}}
>
<span
className="font-[Dancing_Script] text-5xl leading-none mb-1 select-none"
style={{color: "#B8DDEF"}}
>
&#10077;
</span>

<motion.p
className="italic text-base sm:text-lg text-center max-w-xs sm:max-w-sm leading-relaxed"
style={{color: "#4A7A8F"}}
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 1, delay: 0.35}}
viewport={{once: false}}
>
Por tanto, lo que Dios unio, nadie lo separe.
</motion.p>

<motion.p
className="mt-2 text-xs sm:text-sm tracking-widest uppercase"
style={{color: "#8EC8E0"}}
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 0.8, delay: 0.55}}
viewport={{once: false}}
>
Mateo 19:6
</motion.p>

<div className="flex items-center gap-3 mt-5">
<div className="h-px w-12 sm:w-20" style={{background: "linear-gradient(to right, transparent, #8EC8E0)"}} />
<span style={{color: "#8EC8E0", fontSize: "1rem"}}>&#10022;</span>
<div className="h-px w-12 sm:w-20" style={{background: "linear-gradient(to left, transparent, #8EC8E0)"}} />
</div>
</motion.div>
</motion.section>
);
};

export default LoveWedding;
