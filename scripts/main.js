// Simple JS: add active class to nav links
document.addEventListener('DOMContentLoaded', function(){
  const links = document.querySelectorAll('.main-nav a');
  links.forEach(a => {
    if (a.href === location.href || a.getAttribute('href') === location.pathname.split('/').pop()) {
      a.classList.add('active');
    }
  });
});
