const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__links');
    const navLinks = document.querySelectorAll('.nav__links li');


    burger.addEventListener('click', () => {
        //Toggle navbar
        nav.classList.toggle('nav-active');

        
        //Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''            
            } else {
                link.style.animation = `navLinkFade 0.1s ease forwards ${index / 15}s`;
            }

        });

        //Burger animation
        burger.classList.toggle('toggle');
    });

    //prevent transitions from firing on page load
    $(document).ready(function() {
        $("body").removeClass("preload");
    });
}


navSlide();
