document.addEventListener("DOMContentLoaded", () => {
  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Flip card animation
  gsap.utils.toArray(".gsap-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: i % 2 === 0 ? 50 : -50,
      x: i % 3 === 0 ? -50 : 50,
      duration: 1,
      ease: "power2.out"
    });
  });

  // Parallax scroll for images
  gsap.utils.toArray(".parallax").forEach(img => {
    gsap.to(img, {
      y: -40,
      ease: "none",
      scrollTrigger: {
        trigger: img,
        start: "top bottom",
        scrub: true
      }
    });
  });

  // Filter buttons with animation
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.querySelectorAll('.flip-card').forEach(card => {
        const category = card.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          gsap.fromTo(card,
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, duration: 0.5, display: 'block', ease: 'power2.out' }
          );
        } else {
          gsap.to(card, { autoAlpha: 0, duration: 0.5, display: 'none' });
        }
      });
    });
  });

  // Animate alternating visual sections
  document.querySelectorAll('.alt-section').forEach(section => {
    const img = section.querySelector(".animate-img");
    const text = section.querySelector(".animate-text");

    gsap.fromTo(img,
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );

    gsap.fromTo(text,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  });
});