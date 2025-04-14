document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate visible sections
  gsap.utils.toArray(".animate-section").forEach(section => {
    const content = section.querySelector(".animate-text");
    gsap.fromTo(content,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  });

  // Accordion logic
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isVisible = content.style.display === 'block';

      // Collapse all
      document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');

      // Expand clicked one
      if (!isVisible) {
        content.style.display = 'block';
        setTimeout(() => ScrollTrigger.refresh(), 300); // Allow time for DOM to update
      }
    });
  });
});