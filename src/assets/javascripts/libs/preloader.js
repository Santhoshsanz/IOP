// Preloader 
jQuery(document).ready(function($) {
	$(window).load(function() {
			    // will first fade out the loading animation
	    $("#status").fadeOut();
	    // will fade out the whole DIV that covers the website.
	    $("#preloader").delay(1000).fadeOut(1000);

	    setTimeout(function(){
	        $('body').removeClass('preloader-running');
	    }, 1000);

	    $('body').addClass('preloader-done');
	    $("#mastwrap").css('visibility','visible');
	});
});