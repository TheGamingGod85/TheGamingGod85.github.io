$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Multimedia Editor", "Developer", "Freelancer", "Gamer", "Programmer", "Tech Enthusiast", "Car Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Multimedia Editor", "Developer", "Freelancer", "Gamer", "Programmer", "Tech Enthusiast", "Car Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    const data = {
        name: 'John',
        email: 'john@domain.com',
        subject: 'Contact form submission',
        message: 'Receiving forms is easy and simple now!',
        gCaptchaResponse: 'RECAPTCHA_RESPONSE_TOKEN' // Replace with actual response token
      };
      
      const url = 'https://script.google.com/macros/s/AKfycbyb0HJBBUpNUufsceycVgRoiG9bl2u8tgO_N22R5izP6k8SEtUrqi8ULS75nQVpdUKg/exec';
      
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
            console.log('data', data);
            // handle successful form submission here, e.g. show success message to user
        })
        .catch((err) => {
            console.log('err', err);
            // handle error here, e.g. show error message to user
        });   
});