import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.14.0/dist/gsap.min.js";
import { ScrollTrigger } from "https://cdn.jsdelivr.net/npm/gsap@3.14.0/dist/ScrollTrigger.min.js";

gsap.registerPlugin(ScrollTrigger);

export function initAnimations(){
  gsap.from(".car-card", {
    opacity:0, y:100, stagger:0.2, duration:1,
    scrollTrigger:{trigger:"#cars", start:"top 80%"}
  });
  // Add more complex cinematic timelines here for each section
}
