/*
* rloop: Dreamtime
* copyright 2016
*/

// handle scroll and window resize
var windowHeight = $(window).height();
var $logoWrapperFixedHidden = $("#rloop-logo-wrapper-fixed");
var $rloopLogoWrapper = $("#rloop-logo-wrapper");
var $rloopLogo = $("#rloop-logo");
var $header = $("header");

/*
* This code is used to show/hide the showhidesections used in the media section
*/
var $mediaSelection = $(".media-selection");
var $mediaShowHideSections = $("#media-display .showhidesection");

$mediaSelection.on("click", "a", function(obj){
    $mediaSelection.add("li").removeClass("active");
    var $clickedLink = $(obj.target);
    var sectionName = $clickedLink.data("showhidesection");
    $mediaShowHideSections.not('[data-showhidesection="'+sectionName+'"]').fadeOut(75);
    $mediaShowHideSections.filter('[data-showhidesection="'+sectionName+'"]').fadeIn(170);    
    $clickedLink.parent().addClass("active");
});

$(window).resize(function(){	
	windowHeight = $(window).height();

}).scroll(function (event) {
    
    
    // TODO: need some code here to update the nav bar


    /*
    * This code listens for the scroll position and updates the header bar 
    */
    var scroll = $(window).scrollTop();
    if(scroll > windowHeight) {
    	if(!$header.hasClass("header-fixed")) {
    		$header.addClass("header-fixed");
    	}

        if($logoWrapperFixedHidden.hasClass("logo-wrapper-fixed-hidden")) {
            $logoWrapperFixedHidden.removeClass("logo-wrapper-fixed-hidden");
        }

    } else {
        if($header.hasClass("header-fixed")) {
            $header.removeClass("header-fixed");
        }

        if(!$logoWrapperFixedHidden.hasClass("logo-wrapper-fixed-hidden")) {
            $logoWrapperFixedHidden.addClass("logo-wrapper-fixed-hidden");
        }
        
    }
});