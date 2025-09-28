import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.14.0/dist/gsap.min.js";
import { ScrollTrigger } from "https://cdn.jsdelivr.net/npm/gsap@3.14.0/dist/ScrollTrigger.min.js";

gsap.registerPlugin(ScrollTrigger);

export function initParallax(){
  gsap.to("header", { yPercent: -20, scrollTrigger:{ trigger:"header", start:"top top", end:"bottom top", scrub:true } });
  // Add more parallax layers for sections and backgrounds
}
