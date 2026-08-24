/**
 * COMMON JS
 * Shared functionality, Hamburger Menu, and GSAP Animation Utilities
 */

document.addEventListener('DOMContentLoaded', () => {
  
  /* ==========================================================================
     HAMBURGER MENU LOGIC
     ========================================================================== */
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
  
  if (hamburgerBtn && mobileNavOverlay) {
    hamburgerBtn.addEventListener('click', () => {
      const isActive = hamburgerBtn.classList.contains('is-active');
      
      if (isActive) {
        // Close Menu
        hamburgerBtn.classList.remove('is-active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        mobileNavOverlay.classList.remove('is-open');
        document.body.style.overflow = ''; // Restore scrolling
      } else {
        // Open Menu
        hamburgerBtn.classList.add('is-active');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        mobileNavOverlay.classList.add('is-open');
        document.body.style.overflow = 'hidden'; // Prevent background scroll
      }
    });

    // Close menu when clicking a link
    const mobileLinks = mobileNavOverlay.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('is-active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        mobileNavOverlay.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ==========================================================================
     GSAP SETUP & REUSABLE ANIMATION UTILITIES
     ========================================================================== */
  
  // Register ScrollTrigger if available
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Namespace for our animation utilities so they are globally accessible on pages
  window.AppAnimations = {
    
    // Check if user prefers reduced motion
    prefersReducedMotion: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,

    /**
     * Fade In
     */
    fadeIn: (element, options = {}) => {
      if (AppAnimations.prefersReducedMotion()) return;
      return gsap.from(element, {
        opacity: 0,
        duration: options.duration || 0.6,
        ease: options.ease || "power2.out",
        delay: options.delay || 0,
        scrollTrigger: options.scrollTrigger || null
      });
    },

    /**
     * Fade Up
     */
    fadeUp: (element, options = {}) => {
      if (AppAnimations.prefersReducedMotion()) return;
      return gsap.from(element, {
        y: options.y || 40,
        opacity: 0,
        duration: options.duration || 0.8,
        ease: options.ease || "power3.out",
        delay: options.delay || 0,
        scrollTrigger: options.scrollTrigger || null
      });
    },

    /**
     * Fade Down
     */
    fadeDown: (element, options = {}) => {
      if (AppAnimations.prefersReducedMotion()) return;
      return gsap.from(element, {
        y: options.y || -40,
        opacity: 0,
        duration: options.duration || 0.8,
        ease: options.ease || "power3.out",
        delay: options.delay || 0,
        scrollTrigger: options.scrollTrigger || null
      });
    },

    /**
     * Slide From Left
     */
    slideFromLeft: (element, options = {}) => {
      if (AppAnimations.prefersReducedMotion()) return;
      return gsap.from(element, {
        x: options.x || -60,
        opacity: 0,
        duration: options.duration || 0.8,
        ease: options.ease || "power3.out",
        delay: options.delay || 0,
        scrollTrigger: options.scrollTrigger || null
      });
    },

    /**
     * Slide From Right
     */
    slideFromRight: (element, options = {}) => {
      if (AppAnimations.prefersReducedMotion()) return;
      return gsap.from(element, {
        x: options.x || 60,
        opacity: 0,
        duration: options.duration || 0.8,
        ease: options.ease || "power3.out",
        delay: options.delay || 0,
        scrollTrigger: options.scrollTrigger || null
      });
    },

    /**
     * Scale In
     */
    scaleIn: (element, options = {}) => {
      if (AppAnimations.prefersReducedMotion()) return;
      return gsap.from(element, {
        scale: options.scale || 0.9,
        opacity: 0,
        duration: options.duration || 0.8,
        ease: options.ease || "power3.out",
        delay: options.delay || 0,
        scrollTrigger: options.scrollTrigger || null
      });
    },

    /**
     * Stagger Reveal
     */
    staggerReveal: (elements, options = {}) => {
      if (AppAnimations.prefersReducedMotion()) return;
      return gsap.from(elements, {
        y: options.y || 30,
        opacity: 0,
        duration: options.duration || 0.6,
        stagger: options.stagger || 0.1,
        ease: options.ease || "power2.out",
        delay: options.delay || 0,
        scrollTrigger: options.scrollTrigger || null
      });
    },

    /**
     * Image Reveal (Mask effect)
     */
    imageReveal: (container, options = {}) => {
      if (AppAnimations.prefersReducedMotion()) return;
      const img = container.querySelector('img');
      if (!img) return;

      const tl = gsap.timeline({ scrollTrigger: options.scrollTrigger || null });
      tl.fromTo(container, 
        { clipPath: "inset(0 100% 0 0)" }, 
        { clipPath: "inset(0 0% 0 0)", duration: options.duration || 1, ease: "power4.out", delay: options.delay || 0 }
      );
      tl.fromTo(img, 
        { scale: 1.2 }, 
        { scale: 1, duration: options.duration || 1, ease: "power2.out" }, 
        "<"
      );
      return tl;
    },

    /**
     * Continuous Floating Animation
     */
    floatingAnimation: (element, options = {}) => {
      if (AppAnimations.prefersReducedMotion()) return;
      return gsap.to(element, {
        y: options.y || -10,
        duration: options.duration || 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: options.delay || 0
      });
    },

    /**
     * Initialize Hover Lift effect on interactive elements
     */
    initHoverLift: (selector = '.hover-lift') => {
      if (AppAnimations.prefersReducedMotion()) return;
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          gsap.to(el, { y: -4, duration: 0.2, ease: "power1.out" });
        });
        el.addEventListener('mouseleave', () => {
          gsap.to(el, { y: 0, duration: 0.3, ease: "power1.out" });
        });
      });
    },

    /**
     * Initialize Hover Border effect
     */
    initHoverBorder: (selector = '.hover-border') => {
      if (AppAnimations.prefersReducedMotion()) return;
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          gsap.to(el, { borderColor: 'var(--color-accent)', duration: 0.3 });
        });
        el.addEventListener('mouseleave', () => {
          gsap.to(el, { borderColor: 'var(--color-border)', duration: 0.3 });
        });
      });
    },
    
    /**
     * Standard Section Reveal Factory
     */
    createSectionReveal: (sectionSelector, triggerOptions = {}) => {
      if (AppAnimations.prefersReducedMotion()) return;
      const section = document.querySelector(sectionSelector);
      if (!section) return;

      return ScrollTrigger.create({
        trigger: section,
        start: triggerOptions.start || "top 85%",
        once: triggerOptions.once !== false,
        onEnter: () => {
          // Find standard elements inside and animate them
          const headings = section.querySelectorAll('h1, h2, h3');
          const paragraphs = section.querySelectorAll('p');
          const cards = section.querySelectorAll('.card');
          
          if(headings.length) AppAnimations.fadeUp(headings, { y: 20 });
          if(paragraphs.length) AppAnimations.fadeUp(paragraphs, { y: 20, delay: 0.1 });
          if(cards.length) AppAnimations.staggerReveal(cards, { delay: 0.2 });
        }
      });
    }
  };

});
