const $ = (Object) => document.querySelector(Object)
const $$ = (Object) => document.querySelectorAll(Object)
const h = (Object) => document.getElementById(Object)

var swiper = new Swiper('.mySwiper-1' , {
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:'.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    }
});


// PRODUCTOS
var swiper = new Swiper('.mySwiper-3' , {
    slidesPerView:3,
    spaceBetween: 20,
    loop:true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },

    breakpoints : {
        0: {
            slidesPerView:1,
        },
        520 : {
            slidesPerView:2,
        },
        950 : {
            slidesPerView:3,
        }
    }
});

// TABS DE PRODUCTOS

const arrowMenuHamburger = $('.arrow-next-1')


// const tabInputs = $$('.tabInput')

// tabInputs.forEach(function(input) {

//     input.addEventListener('change', function() {
//         let id = input.ariaValueMax ;
//         let thisSwiper = h('swiper' + id);
//         thisSwiper.swiper.update()
//     })
// })