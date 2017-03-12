"use strict";

console.log("Fisol Cumana 2016 UP");

/*! Main */
$(document).ready(function($) {

    $( "#anclas" ).on( "click", "li" ,function(){        
        console.log(this.id); 
        
        
    });    

   //  navbar fixed saliendo del banner
    var navbar = $('#navbar-main'),
            distance = navbar.offset().top,
        $window = $(window);

    $window.scroll(function() {
        if ($window.scrollTop() >= distance) {
            navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-top');
            $("body").css("padding-top", "60px");
        } else {
            navbar.removeClass('navbar-fixed-top');
            $("body").css("padding-top", "0px");
        }
    });
});

