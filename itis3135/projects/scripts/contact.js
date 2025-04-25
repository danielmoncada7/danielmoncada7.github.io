// Client-side form validation for contact.html

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');
  
    form.addEventListener('submit', e => {
      e.preventDefault();
  
      const name    = form.name.value.trim();
      const email   = form.email.value.trim();
      const phone   = form.phone.value.trim();
      const message = form.message.value.trim();
  
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phonePattern = /^[0-9\-\(\)\s]+$/;
  
      if (!name || !email || !phone || !message) {
        feedback.style.color = 'red';
        feedback.textContent = 'Please fill out all fields.';
        return;
      }
      if (!emailPattern.test(email)) {
        feedback.style.color = 'red';
        feedback.textContent = 'Please enter a valid email address.';
        return;
      }
      if (!phonePattern.test(phone)) {
        feedback.style.color = 'red';
        feedback.textContent = 'Please enter a valid phone number.';
        return;
      }
  
      feedback.style.color = 'green';
      feedback.textContent = 'Message sent! We’ll get back to you shortly.';
      form.reset();
    });
  });
  