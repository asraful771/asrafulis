const hambarger = document.querySelector('.header .navbar .nav-list .hambarger');
const mobile = document.querySelector('.header .navbar .nav-list .menu');
hambarger.addEventListener('click', () => {
    hambarger.classList.toggle('active');
    mobile.classList.toggle('active');

});
