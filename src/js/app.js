if (module.hot) {
  module.hot.accept();
}
require('./custom');

// this import is required for bootstrap
// import 'bootstrap';

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
