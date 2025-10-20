document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const sendButton = document.getElementById('send-btn');
  sendButton.disabled = true;
  sendButton.innerHTML = '⏳ Sending...'; // show loading state

  const templateParams = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };

  emailjs.send('service_tlcp9qf', 'template_vvmnygg', templateParams)
    .then(function(response) {
      console.log('SUCCESS', response.status, response.text);
      sendButton.innerHTML = '✅ Message Sent!';
      document.getElementById('contact-form').reset();

      setTimeout(() => {
        sendButton.innerHTML = 'Send Message';
        sendButton.disabled = false;
      }, 2500); // reset after 2.5 seconds
    }, function(error) {
      console.error('FAILED', error);
      sendButton.innerHTML = '❌ Failed! Try Again';
      setTimeout(() => {
        sendButton.innerHTML = 'Send Message';
        sendButton.disabled = false;
      }, 2000);
    });
});



// Scroll-to-top button
const scrollTopBtn = document.getElementById('scrollTop');
window.onscroll = () => {
  scrollTopBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
};
scrollTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Scroll animations
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) sec.classList.add('visible');
  });
});

window.addEventListener("load",
  () => {
const hamburger =
document.getElementById('hamburger');
const navlinks =
document.getElementById('navlinks');

if (hamburger && navlinks) {
  console.log(" Hamburger js connected and running!");
hamburger.addEventListener('click', () => {
  navlinks.classList.toggle('active');
});
} else {
  console.log(" Hamburger or navlinks not found on this page");
}
});