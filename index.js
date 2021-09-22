jQuery(document).ready(function($){
var topofDiv= $(".hero-image").offset().top;

var height= $(".hero-image").outerHeight();

$(window).scroll(function(){

    if($(window).scrollTop()>(topofDiv+height)){
        $(".main-nav-wrapper").addClass("blue")
        }else
        {
            $(".main-nav-wrapper").removeClass("blue")
            }
        });
});
