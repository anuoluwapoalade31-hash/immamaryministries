const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

document.querySelector('.profile-toggle')?.addEventListener('click', event => {
  const button = event.currentTarget;
  const details = document.getElementById('founder-details');
  const expanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!expanded));
  details.hidden = expanded;
  button.innerHTML = expanded ? 'Read full profile <span>＋</span>' : 'Close full profile <span>−</span>';
});

document.getElementById('contact-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const subject = `Website enquiry: ${data.get('interest')}`;
  const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nArea of interest: ${data.get('interest')}\n\nMessage:\n${data.get('message')}`;
  const mailto = `mailto:Immamaryngo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById('form-feedback').textContent = 'Opening your email application with your enquiry. Please send the prepared email to complete your message.';
  window.location.href = mailto;
});

document.getElementById('year').textContent = new Date().getFullYear();
