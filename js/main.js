$(document).ready(function(){

    $("#option-one").addClass("active");
    $("#content-one").show();
    $("#content-two").hide();
    $("#content-three").hide();

    $("#option-one").click(function(){
        $("#content-one").show();
        $("#content-two").hide();
        $("#content-three").hide();
        $("#option-one").addClass("active");
        $("#option-two").removeClass("active");
        $("#option-three").removeClass("active");
    });

    $("#option-two").click(function(){
        $("#content-one").hide();
        $("#content-two").show();
        $("#content-three").hide();
        $("#option-one").removeClass("active");
        $("#option-two").addClass("active");
        $("#option-three").removeClass("active");
    });

    $("#option-three").click(function(){
        $("#content-one").hide();
        $("#content-two").hide();
        $("#content-three").show();
        $("#option-one").removeClass("active");
        $("#option-two").removeClass("active");
        $("#option-three").addClass("active");
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });

});