import { tsParticles } from "https://cdn.jsdelivr.net/npm/tsparticles@3.6.0/tsparticles.bundle.min.js";

export function initParticles(){
  tsParticles.load("threejs-container", {
    particles: {
      number:{value:100},
      color:{value:"#00ffe0"},
      shape:{type:"circle"},
      size:{value:{min:1,max:4}},
      move:{enable:true, speed:2, outModes:"out"}
    },
    detectRetina:true
  });
}
