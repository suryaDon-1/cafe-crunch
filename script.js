  const hamburger = document.getElementById('hamburger');
  const navItems = document.getElementById('nav-item');

  hamburger.addEventListener('click', () => {
    navItems.classList.toggle('active');
  });