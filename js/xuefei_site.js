$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({target: '.navbar-custom',offset:80})

 $('[data-toggle="tooltip"]').tooltip();


 $('body').on("click", function (ev) {
     if( $(ev.target).hasClass('hover') ) {
         //you clicked on .dropdown element, do something
     }
     else {
         document.getElementById('xuefei').removeClass('hover');
     }
 });
