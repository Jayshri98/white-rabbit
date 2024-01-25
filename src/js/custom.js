$('.bannerslider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false, 
  nextArrow: false, 
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000 
  });

  function changeBg() {
    var navBar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
  
    if (scrollValue < 650) {
      navBar.classList.remove('bgcolor');
    } else {
      navBar.classList.add('bgcolor');
    }
  }
  
  window.addEventListener('scroll', changeBg);
