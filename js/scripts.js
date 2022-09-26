/*!
* Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    //this get the input of the switch language selector (true/false)
    const language = document.querySelector('input[id="language"]');;

    //function that display every block of class "en" or "fr"
    language.addEventListener('click', function(){
        const textFR = document.getElementsByClassName('fr');
        const textEN = document.getElementsByClassName('en');
        
        // if switch is switch on (english) then display english but not french
        if (language.checked) {
            for(i=0; i < textFR.length; i++) {
                textFR[i].style.display = 'none';
            }
            for(i=0; i < textEN.length; i++) {
                textEN[i].style.display = 'block';
            }
        }
        
        // same as above but with french
        if (!language.checked) {
            for(i=0; i<textFR.length; i++) {
                textFR[i].style.display = 'block';
            }
            for(i=0; i<textEN.length; i++) {
                textEN[i].style.display = 'none';
            }
        }

    });
    
});