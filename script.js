const navLinks = document.querySelectorAll('.sidebar nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

window.addEventListener('scroll', () => {
  const skillBars = document.querySelectorAll('.progress-bar span');
  skillBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if(rect.top < window.innerHeight && rect.bottom > 0){
      const width = bar.getAttribute('data-progress');
      bar.style.width = width;
    }
  });
});

const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  if(!name || !email || !subject || !message){
    feedback.textContent = 'Please fill out all fields.';
    feedback.style.color = 'red';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailPattern.test(email)){
    feedback.textContent = 'Please enter a valid email address.';
    feedback.style.color = 'red';
    return;
  }

  feedback.textContent = 'Message sent successfully!';
  feedback.style.color = 'green';
  form.reset();
});