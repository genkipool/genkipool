

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


$.getJSON("js/lang.json", function(json){
  //Lenguaje por defecto de la página sessionStorage.setItem("lang", "idioma")"
  if(!localStorage.getItem("lang")){
    localStorage.setItem("lang", "en");
  }
  var lang = localStorage.getItem("lang");
  var doc = json;
  $('.lang').each(function(index, element){
    $(this).text(doc[lang][$(this).attr('key')]);
  });//Each

  $('.translate').click(function(){
    localStorage.setItem("lang", $(this).attr('id')) ;
    var lang = $(this).attr('id');
    var doc = json;
      $('.lang').each(function(index, element){
        $(this).text(doc[lang][$(this).attr('key')]);
      }); //Each
  }); //Funcion click
});//Get json AJAX

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
    Opt1.setAttribute('class', 'lang');
    Opt1.setAttribute('id', 'en');
	Opt1.setAttribute('value', 'English');
   	Opt1.setAttribute('selected', 'English');
   	Opt2.setAttribute('class', 'lang');
   	Opt2.setAttribute('id', 'es');
   	Opt2.setAttribute('value', 'Español');

	Opt1.appendChild( document.createTextNode( 'English' ));
	Opt2.appendChild( document.createTextNode( 'Español' ));

	var beforeElement = document.getElementsByTagName("li")[5]; 
	var elementParent = beforeElement.parentNode;
	elementParent.insertBefore(Li, beforeElement.nextSibling);

	//var beforeElement = document.getElementById('recuerdame'); // Indica el luegar donde queremos añadir el elemento div
	
	
	// Añade el elemento div
	
	//document.body.appendChild(li); // Añade el elemento script
	//document.body.appendChild(link); // Añade el elemento script
	//document.body.appendChild(opt1); // Añade el elemento script
	//document.body.appendChild(opt2); // Añade el elemento script
	

	//var beforeElement = document.getElementsByTagName("a[href='#contact']"); // Indica el luegar donde queremos añadir el elemento div
	//var elementParent = beforeElement.parentNode;
	
	// Añade el elemento div
	//elementParent.insertBefore(opt1, beforeElement.nextSibling);
	//elementParent.insertBefore(opt2, beforeElement.nextSibling);
	//document.getElementsById('login').appendChild(addDiv);




	//document.getElementById('select').appendChild(Li);

}