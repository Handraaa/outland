const navSlide = () => {
  const burger = document.querySelector('.burger');
  const navigation = document.querySelector('.navbar-content');
  const navLinks = document.querySelectorAll('.navbar-content li');

  burger.addEventListener('click', () => {
        navigation.classList.toggle('navigation-active');


        navLinks.forEach((link, index) => {
          if(link.style.animation) {
            link.style.animation = '';
          } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
          }
  });
      burger.classList.toggle('toggle');
  });
};

navSlide();