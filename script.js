/* ===================== AÑO ACTUAL EN EL FOOTER   ===================== */


document.getElementById('year').textContent = new Date().getFullYear();


/* ===================== EFECTO TYPEWRITER ===================== */

const roles = [
  'Desarrollador Frontend',
  'Amante del CSS',
  'Constructor de interfaces',
  'Detallista por naturaleza'
];

let roleIndex = 0;
let charIndex  = 0;
let deleting   = false;

const typeEl = document.getElementById('typewriter');

function type() {
  const current = roles[roleIndex];
  const cursor  = '<span class="cursor"></span>';

  if (!deleting) {
    charIndex++;
    typeEl.innerHTML = current.slice(0, charIndex) + cursor;

    if (charIndex === current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    charIndex--;
    typeEl.innerHTML = current.slice(0, charIndex) + cursor;

    if (charIndex === 0) {
      deleting   = false;
      roleIndex  = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(type, deleting ? 45 : 80);
}

type();


/* ===================== SCROLL REVEAL ===================== */


const reveals  = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((el) => observer.observe(el));


/* ===================== FORMULARIO DE CONTACTO ===================== */


const contactForm = document.getElementById('contactForm');
const formMsg     = document.getElementById('formMsg');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  formMsg.style.display = 'block';
  this.reset();
  setTimeout(() => {
    formMsg.style.display = 'none';
  }, 4000);
});
