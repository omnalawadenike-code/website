import { carData } from './cars.js';
import { initAnimations } from './animations.js';
import { initParticles } from './particles.js';
import { initParallax } from './parallax.js';
import { initModals } from './modal.js';
import { initThreeJS } from './threejs.js';

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  initThreeJS();
  initParticles();
  initAnimations();
  initParallax();
  initModals(carData);
});
