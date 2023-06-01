// https://naturecircle.myshopify.com/#

// var mixer = mixitup('.featured-products-main-main');


$(window).scroll(function(){
    var scrolling = $(this).scrollTop()
    if(scrolling > 50){
        $("nav").addClass("navBG")
    }
    else {
        $("nav").removeClass("navBG")
    }

    if(scrolling > 50){
        $(".dropdown-menu").addClass("navBG")
    }
    else {
        $(".dropdown-menu").removeClass("navBG")
    }

    if(scrolling > 50){
        $(".back2Top").fadeIn(500)
    }
    else {
        $(".back2Top").fadeOut(500)
    }
})

$(".back2Top").click(function(){
    $("body, html").animate({
        scrollTop: 0
    })
})




$(document).ready(function() {
    $('.featured-products-btn button').on('click', function() {
      $('.featured-products-btn button').removeClass('active'); // Remove active class from all buttons
      $(this).addClass('active'); // Add active class to the clicked button
    });
});


$(document).ready(function() {
    $('.right-nav-products-btn button').on('click', function() {
      $('.right-nav-products-btn button').removeClass('active'); // Remove active class from all buttons
      $(this).addClass('active'); // Add active class to the clicked button
    });
});


$('.banner-bg').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false
});
$(".prev-btn").on("click", function(){
    $(".banner-bg").slick("slickPrev")
})
$(".next-btn").on("click", function(){
    $(".banner-bg").slick("slickNext")
})




$('.dealOfTheDays-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
              centerMode: false,
              slidesToShow: 2,
              slidesToScroll: 1,
            }
        },
    ]
});
$(".dealOfTheDays-prev-btn").on("click", function(){
    $(".dealOfTheDays-main").slick("slickPrev")
})
$(".dealOfTheDays-next-btn").on("click", function(){
    $(".dealOfTheDays-main").slick("slickNext")
})




$('.feedback-profile').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    asNavFor: '.feedback-text-box',
});
$('.feedback-text-box').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.feedback-profile',
    arrows: false,
  });
$(".feedback-prev").on("click", function(){
    $(".feedback-text-box").slick("slickPrev")
    console.log("hello")
})
$(".feadback-next").on("click", function(){
    $(".feedback-text-box").slick("slickNext")
})





$('.blog-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
        },
        
    ]
});
$(".blog-prev").on("click", function(){
    $(".blog-main").slick("slickPrev")
})
$(".blog-next").on("click", function(){
    $(".blog-main").slick("slickNext")
})



// another products start
$('.another-products-main').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
    ]
});
$(".another-products-prev-btn").on("click", function(){
    $(".another-products-main").slick("slickPrev")
})
$(".another-products-next-btn").on("click", function(){
    $(".another-products-main").slick("slickNext")
})
// another products end



const searchIcon = document.querySelector(".search-icon")
searchIcon.addEventListener("click", function(){
    var search = document.querySelector(".search-box")
    search.classList.toggle("search-box-show")
})




var productBox = document.querySelectorAll(".products-view")
const btn = document.querySelectorAll(".product-show")
const productHide = document.querySelectorAll(".product-close")

btn[0].addEventListener("click", function (){
    productBox[0].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[0].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[0].innerHTML = sum
        }
    })
    plus[0].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[0].innerHTML = sum
    })
    console.log('111')
})
productHide[0].addEventListener("click", function() {
    productBox[0].style.visibility = "hidden"
})

btn[1].addEventListener("click", function (){
    productBox[1].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[1].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[1].innerHTML = sum
        }
    })
    plus[1].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[1].innerHTML = sum
    })
})
productHide[1].addEventListener("click", function() {
    productBox[1].style.visibility = "hidden"
})

btn[2].addEventListener("click", function (){
    productBox[2].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[2].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[2].innerHTML = sum
        }
    })
    plus[2].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[2].innerHTML = sum
    })
})
productHide[2].addEventListener("click", function() {
    productBox[2].style.visibility = "hidden"
})

btn[3].addEventListener("click", function (){
    productBox[3].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[3].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[3].innerHTML = sum
        }
    })
    plus[3].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[3].innerHTML = sum
    })
})
productHide[3].addEventListener("click", function() {
    productBox[3].style.visibility = "hidden"
})

btn[4].addEventListener("click", function (){
    productBox[4].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[4].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[4].innerHTML = sum
        }
    })
    plus[4].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[4].innerHTML = sum
    })
})
productHide[4].addEventListener("click", function() {
    productBox[4].style.visibility = "hidden"
})

btn[5].addEventListener("click", function (){
    productBox[5].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[5].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[5].innerHTML = sum
        }
    })
    plus[5].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[5].innerHTML = sum
    })
})
productHide[5].addEventListener("click", function() {
    productBox[5].style.visibility = "hidden"
})

btn[6].addEventListener("click", function (){
    productBox[6].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[6].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[6].innerHTML = sum
        }
    })
    plus[6].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[6].innerHTML = sum
    })
})
productHide[6].addEventListener("click", function() {
    productBox[6].style.visibility = "hidden"
})

btn[7].addEventListener("click", function (){
    productBox[7].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[7].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[7].innerHTML = sum
        }
    })
    plus[7].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[7].innerHTML = sum
    })
})
productHide[7].addEventListener("click", function() {
    productBox[7].style.visibility = "hidden"
})


btn[8].addEventListener("click", function (){
    productBox[8].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[8].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[8].innerHTML = sum
        }
    })
    plus[8].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[8].innerHTML = sum
    })
})
productHide[8].addEventListener("click", function() {
    productBox[8].style.visibility = "hidden"
})


btn[9].addEventListener("click", function (){
    productBox[9].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[9].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[9].innerHTML = sum
        }
    })
    plus[9].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[9].innerHTML = sum
    })
})
productHide[9].addEventListener("click", function() {
    productBox[9].style.visibility = "hidden"
})


btn[10].addEventListener("click", function (){
    productBox[10].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[10].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[10].innerHTML = sum
        }
    })
    plus[10].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[10].innerHTML = sum
    })
})
productHide[10].addEventListener("click", function() {
    productBox[10].style.visibility = "hidden"
})


btn[11].addEventListener("click", function (){
    productBox[11].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[11].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[11].innerHTML = sum
        }
    })
    plus[11].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[11].innerHTML = sum
    })
})
productHide[11].addEventListener("click", function() {
    productBox[11].style.visibility = "hidden"
})

btn[12].addEventListener("click", function (){
    productBox[12].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[12].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[12].innerHTML = sum
        }
    })
    plus[12].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[12].innerHTML = sum
    })
})
productHide[12].addEventListener("click", function() {
    productBox[12].style.visibility = "hidden"
})

btn[13].addEventListener("click", function (){
    productBox[13].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[13].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[13].innerHTML = sum
        }
    })
    plus[13].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[13].innerHTML = sum
    })
})
productHide[13].addEventListener("click", function() {
    productBox[13].style.visibility = "hidden"
})

btn[14].addEventListener("click", function (){
    productBox[14].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[14].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[14].innerHTML = sum
        }
    })
    plus[14].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[14].innerHTML = sum
    })
})
productHide[14].addEventListener("click", function() {
    productBox[14].style.visibility = "hidden"
})

btn[15].addEventListener("click", function (){
    productBox[15].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[15].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[15].innerHTML = sum
        }
    })
    plus[15].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[15].innerHTML = sum
    })
})
productHide[15].addEventListener("click", function() {
    productBox[15].style.visibility = "hidden"
})

btn[16].addEventListener("click", function (){
    productBox[16].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[16].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[16].innerHTML = sum
        }
    })
    plus[16].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[16].innerHTML = sum
    })
})
productHide[16].addEventListener("click", function() {
    productBox[16].style.visibility = "hidden"
})

btn[17].addEventListener("click", function (){
    productBox[17].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[17].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[17].innerHTML = sum
        }
    })
    plus[17].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[17].innerHTML = sum
    })
})
productHide[17].addEventListener("click", function() {
    productBox[17].style.visibility = "hidden"
})

btn[18].addEventListener("click", function (){
    productBox[18].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[18].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[18].innerHTML = sum
        }
    })
    plus[18].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[18].innerHTML = sum
    })
})
productHide[18].addEventListener("click", function() {
    productBox[18].style.visibility = "hidden"
})

btn[19].addEventListener("click", function (){
    productBox[19].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[19].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[19].innerHTML = sum
        }
    })
    plus[19].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[19].innerHTML = sum
    })
})
productHide[19].addEventListener("click", function() {
    productBox[19].style.visibility = "hidden"
})

btn[20].addEventListener("click", function (){
    productBox[20].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[20].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[20].innerHTML = sum
        }
    })
    plus[20].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[20].innerHTML = sum
    })
})
productHide[20].addEventListener("click", function() {
    productBox[20].style.visibility = "hidden"
})

btn[21].addEventListener("click", function (){
    productBox[21].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[21].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[21].innerHTML = sum
        }
    })
    plus[21].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[21].innerHTML = sum
    })
})
productHide[21].addEventListener("click", function() {
    productBox[21].style.visibility = "hidden"
})

btn[22].addEventListener("click", function (){
    productBox[22].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[22].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[22].innerHTML = sum
        }
    })
    plus[22].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[22].innerHTML = sum
    })
})
productHide[22].addEventListener("click", function() {
    productBox[22].style.visibility = "hidden"
})

btn[23].addEventListener("click", function (){
    productBox[23].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[23].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[23].innerHTML = sum
        }
    })
    plus[23].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[23].innerHTML = sum
    })
})
productHide[23].addEventListener("click", function() {
    productBox[23].style.visibility = "hidden"
})

btn[24].addEventListener("click", function (){
    productBox[24].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[24].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[24].innerHTML = sum
        }
    })
    plus[24].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[24].innerHTML = sum
    })
})
productHide[24].addEventListener("click", function() {
    productBox[24].style.visibility = "hidden"
})

btn[25].addEventListener("click", function (){
    productBox[25].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[25].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[25].innerHTML = sum
        }
    })
    plus[25].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[25].innerHTML = sum
    })
})
productHide[25].addEventListener("click", function() {
    productBox[25].style.visibility = "hidden"
})

btn[26].addEventListener("click", function (){
    productBox[26].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[26].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[26].innerHTML = sum
        }
    })
    plus[26].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[26].innerHTML = sum
    })
})
productHide[26].addEventListener("click", function() {
    productBox[26].style.visibility = "hidden"
})

btn[27].addEventListener("click", function (){
    productBox[27].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[27].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[27].innerHTML = sum
        }
    })
    plus[27].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[27].innerHTML = sum
    })
})
productHide[27].addEventListener("click", function() {
    productBox[27].style.visibility = "hidden"
})

btn[28].addEventListener("click", function (){
    productBox[28].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[28].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[28].innerHTML = sum
        }
    })
    plus[28].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[28].innerHTML = sum
    })
})
productHide[28].addEventListener("click", function() {
    productBox[28].style.visibility = "hidden"
})

btn[29].addEventListener("click", function (){
    productBox[29].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[29].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[29].innerHTML = sum
        }
    })
    plus[29].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[29].innerHTML = sum
    })
})
productHide[29].addEventListener("click", function() {
    productBox[29].style.visibility = "hidden"
})

btn[30].addEventListener("click", function (){
    productBox[30].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[30].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[30].innerHTML = sum
        }
    })
    plus[30].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[30].innerHTML = sum
    })
})
productHide[30].addEventListener("click", function() {
    productBox[30].style.visibility = "hidden"
})

btn[31].addEventListener("click", function (){
    productBox[31].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[31].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[31].innerHTML = sum
        }
    })
    plus[31].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[31].innerHTML = sum
    })
})
productHide[31].addEventListener("click", function() {
    productBox[31].style.visibility = "hidden"
})

btn[32].addEventListener("click", function (){
    productBox[32].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[32].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[32].innerHTML = sum
        }
    })
    plus[32].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[32].innerHTML = sum
    })
})
productHide[32].addEventListener("click", function() {
    productBox[32].style.visibility = "hidden"
})

btn[33].addEventListener("click", function (){
    productBox[33].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[33].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[33].innerHTML = sum
        }
    })
    plus[33].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[33].innerHTML = sum
    })
})
productHide[33].addEventListener("click", function() {
    productBox[33].style.visibility = "hidden"
})

btn[34].addEventListener("click", function (){
    productBox[34].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[34].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[34].innerHTML = sum
        }
    })
    plus[34].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[34].innerHTML = sum
    })
})
productHide[34].addEventListener("click", function() {
    productBox[34].style.visibility = "hidden"
})

btn[35].addEventListener("click", function (){
    productBox[35].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[35].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[35].innerHTML = sum
        }
    })
    plus[35].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[35].innerHTML = sum
    })
})
productHide[35].addEventListener("click", function() {
    productBox[35].style.visibility = "hidden"
})

btn[36].addEventListener("click", function (){
    productBox[36].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[36].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[36].innerHTML = sum
        }
    })
    plus[36].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[36].innerHTML = sum
    })
})
productHide[36].addEventListener("click", function() {
    productBox[36].style.visibility = "hidden"
})

btn[37].addEventListener("click", function (){
    productBox[37].style.visibility = "visible"
    const minus = document.querySelectorAll(".minus")
    const plus = document.querySelectorAll(".plus")
    var sum = 0
    minus[37].addEventListener("click", function(){
        if(sum > 0){
            sum--
            document.querySelectorAll(".number")[37].innerHTML = sum
        }
    })
    plus[37].addEventListener("click", function() {
        sum++
        document.querySelectorAll(".number")[37].innerHTML = sum
    })
})
productHide[37].addEventListener("click", function() {
    productBox[37].style.visibility = "hidden"
})




var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var test1 = document.querySelectorAll(".days")[3]
  var test2 = document.querySelectorAll(".hours")[3]
  var test3 = document.querySelectorAll(".mins")[3]
  var test4 = document.querySelectorAll(".secs")[3]
  test1.innerHTML = days 
  test2.innerHTML = hours 
  test3.innerHTML = minutes 
  test4.innerHTML = seconds
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var test1 = document.querySelectorAll(".days")[4]
  var test2 = document.querySelectorAll(".hours")[4]
  var test3 = document.querySelectorAll(".mins")[4]
  var test4 = document.querySelectorAll(".secs")[4]
  test1.innerHTML = days 
  test2.innerHTML = hours 
  test3.innerHTML = minutes 
  test4.innerHTML = seconds
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var test1 = document.querySelectorAll(".days")[5]
  var test2 = document.querySelectorAll(".hours")[5]
  var test3 = document.querySelectorAll(".mins")[5]
  var test4 = document.querySelectorAll(".secs")[5]
  test1.innerHTML = days 
  test2.innerHTML = hours 
  test3.innerHTML = minutes 
  test4.innerHTML = seconds
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);