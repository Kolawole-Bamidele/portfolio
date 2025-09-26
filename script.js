// ===== Menu toggle (accessible) =====
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', !expanded);
  // toggle visual nav (we use aria-hidden to control CSS display)
  if (!expanded) {
    mainNav.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-label', 'Close navigation');
  } else {
    mainNav.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  }
});

// Close mobile nav on link click (good for UX)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 760) {
      menuToggle.setAttribute('aria-expanded', false);
      mainNav.setAttribute('aria-hidden', 'true');
    }
  });
});

// ===== Smooth scrolling for internal links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.length > 1 && document.querySelector(targetId)) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


// ===== Typing effect for bio =====
const bioText = `Hi, I'm Bamidele Kolawole — a Fullstack Developer with 2 years of experience.
I specialize in building responsive, user-friendly websites using HTML, CSS, JavaScript and PHP.
I'm passionate about clean design, problem solving, and growing as a developer.
I'm a cyber security student, currently in my 200 Level, looking forward to becoming a 
cyber security personnel after completing my 5 years course.`;

let i = 0;
function typeWriter() {
  if (i < bioText.length) {
    document.getElementById("bio").innerHTML += bioText.charAt(i);
    i++;
    setTimeout(typeWriter, 100); // typing speed (ms per char)
  }
}
window.addEventListener("load", typeWriter);

// Reveal timeline items on scroll
  const timelineItems = document.querySelectorAll('.timeline-item');

  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.8;
    
    timelineItems.forEach(item => {
      const boxTop = item.getBoundingClientRect().top;
      
      if (boxTop < triggerBottom) {
        item.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  // Run on page load too
  revealOnScroll();