const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  // toggle nav

  burger.addEventListener('click',() => {
    nav.classList.toggle('nav-active');

    // animate navLinks
    navLinks.forEach((x, index) => {
      if(x.style.animation) {
        x.style.animation = '';
      }
      else {
        x.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
      }
    });

    // Burger animation
    burger.classList.toggle('toggle');
  });

}

navSlide();
