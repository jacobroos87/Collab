$(document).ready(function(){

    // Back to top button function

    const backToTopBtn = document.querySelector("#back-to-top");
    const windowSize = $(window).width();


    // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").style.padding = "15px 10px";
            document.getElementById("logo").style.width = "80px";
            $(backToTopBtn).fadeIn("slow");
        } else {
            document.getElementById("navbar").style.padding = "30px 10px";
            document.getElementById("logo").style.width = "200px";
            $(backToTopBtn).fadeOut("slow");
        }
    }


        // Slide in home elements

    $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

    $(window).scroll(function(event) {
  
        $(".info").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(
                    function() 
                    {
                        el.addClass("come-in"); 
                    }, 1000);
            }
        });


        $("#portfolio-item-2").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(
                    function() 
                    {
                        el.addClass("come-up");
                    }, 900);
                
            } 
        });

        $("#portfolio-item-3").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                 setTimeout(
                    function() 
                    {
                        el.addClass("come-in-right");
                    }, 1000);
            } 
        });

        $("#portfolio-item-1").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                 setTimeout(
                    function() 
                    {
                        el.addClass("come-in-left");
                    }, 800);
            } 
        });
  
    });


    // remove home navlink bottom border if #what_we_do is active 

    var current = document.URL.split('#')[1];

    $("#what-we-do-link").click(function() {
        $(this).css("border-bottom", "5px solid white");
        $("#home-link").css("border-bottom", "unset");
        $("#contact-us-link").css("border-bottom", "unset");
        $("#portfolio-link").css("border-bottom", "unset");
    });


    $("#portfolio-link").click(function() {
        $(this).css("border-bottom", "5px solid white");
        $("#home-link").css("border-bottom", "unset");
        $("#contact-us-link").css("border-bottom", "unset");
        $("#what-we-do-link").css("border-bottom", "unset");
    });


    $("#contact-us-link").click(function() {
        $(this).css("border-bottom", "5px solid white");
        $("#home-link").css("border-bottom", "unset");
        $("#what-we-do-link").css("border-bottom", "unset");
        $("#portfolio-link").css("border-bottom", "unset");
    });


});

