$(document).ready(function(){
    $( ".dark" ).on("click", function() {
        $(".navbar").css("background-color","#252d33");
        $(".navlinks-r").css("color","#fff");
        $(".pro").css("background-color","#fff");
        $(".pro").css("color","#222");
        $(".menubr span").css("color","#fff")
        $(".light").show();
        $(this).hide();
    });
    $( ".light" ).on("click", function() {
        $(".navbar").css("background-color","#fff");
        $(".navlinks-r").css("color","#222");
        $(".pro").css("background-color","#282A35")
        $(".pro").css("color","#fff")
        $(".menubr span").css("color","#222")
        $(".dark").show()
        $(this).hide();
    });

    //navigation bar> menu toggle for laptop

    $('.menubr span').click(function(){
        $('.menubr .navlinks-r').slideToggle(1000);
    });

    $('.menuphone span').click(function(){
        $('.menuphone .navlinks-r').slideToggle(1000);
    });
    
});



