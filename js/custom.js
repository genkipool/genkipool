

/* navigation menu animation with way points */


$('.nav-animate').waypoint(function(direction) {
    $('.secondary-menu').toggleClass('hide', direction === "down");
    $('.navbar').toggleClass('comeup', direction === "down");
}, {
    offset: '10%'
});

// Block scrolling
    
$('.nav li a').bind('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1200);
        if($(window).width() < 768){
            var $navMain = $(".navbar-collapse");
            $navMain.collapse('hide');
        }
        e.preventDefault();
});

 
/* *************************************** */
// One page navigation 
/* *************************************** */

$('.nav').onePageNav({
    currentClass: 'active',
    changeHash: true,
    scrollSpeed: 1000,
    scrollThreshold: 0.1
});

// Block scrolling
    
$('.nav a').bind('click', function(e){
        if($(window).width() < 768){
            var $navMain = $(".navbar-collapse");
            $navMain.collapse('hide');
        }
        e.preventDefault();
});

/* Owl-Carousel Client Slider */
 
$(document).ready(function() {
  $("#portfolioOwl").owlCarousel({
        autoPlay: 3000,
        slideSpeed: 1200,
      paginationSpeed : 500,
      stopOnHover: true,
    items : 4,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [991,3],
    itemsTabletSmall : [767,2]
  }); 
});

/* tool-tip initialize */

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});


/* Scroll to Top */  

$(".totop").hide();
$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()>300)
        {
            $('.totop').fadeIn();
        } 
        else
        {
            $('.totop').fadeOut();
        }
    });

    $('.totop a').click(function (e) {
        e.preventDefault();
        $('body,html').animate({scrollTop: 0}, 1200);
    });

});


if (typeof window.orientation !== 'undefined') {


    var Li = document.createElement('li'); // Crea un elemento sctipt
    var Link = document.createElement('a');
    var Select = document.createElement('SELECT');
    var Opt1 = document.createElement('OPTION');
    var Opt2 = document.createElement('OPTION');

    Li.appendChild(Link);
    Link.appendChild(Select);
    Select.appendChild(Opt1);
    Select.appendChild(Opt2);


    Select.setAttribute('id', 'select');
    Opt1.setAttribute('class', 'translate');
    Opt1.setAttribute('id', 'en');
    Opt1.setAttribute('value', 'English');
    Opt1.setAttribute('selected', 'English');
    Opt2.setAttribute('class', 'translate');
    Opt2.setAttribute('id', 'es');
    Opt2.setAttribute('value', 'Español');

    Opt1.appendChild( document.createTextNode( 'English' ));
    Opt2.appendChild( document.createTextNode( 'Español' ));

    var beforeElement = document.getElementsByTagName("li")[5]; 
    var elementParent = beforeElement.parentNode;
    elementParent.insertBefore(Li, beforeElement.nextSibling);

}