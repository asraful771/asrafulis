//  menu  
const hambarger = document.querySelector('.header .navbar .nav-list .hambarger');
const mobile = document.querySelector('.header .navbar .nav-list .menu');
hambarger.addEventListener('click', () => {
    hambarger.classList.toggle('active');
    mobile.classList.toggle('active');

});
// menu end

// owl carousal start
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    mouseDrag:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
// owl carousal end
