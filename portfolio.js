$(document).ready(function() { 

    let clicked = false;

    function resetMainText() {
        $(".header").html("<p id='test'>" + "Hi. I'm Rahul." + "</p>");
        $(".header").append("<p>" + "I build " + "<span>" + "web apps." + "</span>" + "</p>");
    }

    function moveMainUp () {
        $(".header").html("<p>" + "Nav" + "</p>");
        $(".main-div").css("margin-top", "0px");
        $(".main-div").animate({top: 0});
    }

    function moveMainDown() {
        $(".header").html("<p id='test'>" + "Hi. I'm Rahul." + "</p>");
        $(".header").append("<p>" + "I build " + "<span>" + "web apps." + "</span>" + "</p>");
        $(".main-div").css("margin-top", "-95px");
        $(".main-div").animate({top: "50%"});

    }

    // dynamic styling for "about-me" section

    $(document.body).on('click', '#about-me', function() {
        clicked = true;

        if (clicked && window.innerWidth >= 320 && window.innerWidth < 400 && ($(".about-me").hasClass("hidden") || !$(".about-me").hasClass("hidden"))) {
            moveMainUp();
            if (!$(".portfolio").hasClass("hidden")) {
                $(".portfolio").addClass("hidden");
            }
            if (!$(".contact").hasClass("hidden")) {
                $(".contact").addClass("hidden");
            }
            $(".about-me").removeClass("hidden");
        } else if (clicked && window.innerWidth >= 400 && window.innerWidth < 740 && ($(".about-me").hasClass("hidden"))) {
            moveMainUp();
            if (!$(".portfolio").hasClass("hidden")) {
                $(".portfolio").addClass("hidden");
            }
            if (!$(".contact").hasClass("hidden")) {
                $(".contact").addClass("hidden");
            }
            $(".about-me").removeClass("hidden");
        } else if (clicked && window.innerWidth >= 740 && window.innerWidth < 920 && ($(".about-me").hasClass("hidden"))) {
            moveMainUp();
            if (!$(".portfolio").hasClass("hidden")) {
                $(".portfolio").addClass("hidden");
            }
            if (!$(".contact").hasClass("hidden")) {
                $(".contact").addClass("hidden");
            }
            $(".about-me").removeClass("hidden");
        } else if (clicked && window.innerWidth >= 920 && $(".about-me").hasClass("hidden")) {
            $(".header").html("<p>" + "Nav" + "</p>");
            if (!$(".portfolio").hasClass("hidden")) {
                $(".portfolio").addClass("hidden");
            }
            if (!$(".contact").hasClass("hidden")) {
                $(".contact").addClass("hidden");
            }
            $(".about-me").removeClass("hidden");
        } else if (!$(".about-me").hasClass("hidden") && window.innerWidth < 920) {
            moveMainDown();
            $(".about-me").addClass("hidden");
        } else if (!$(".about-me").hasClass("hidden") && window.innerWidth >= 920) {
            resetMainText();
            $(".about-me").addClass("hidden");
        }
    });

    //dynamic styling for "portfolio" section

    $(document.body).on('click', '#portfolio', function () {
        clicked = true;
    
        if (clicked && window.innerWidth >= 320 && window.innerWidth < 400 && $(".portfolio").hasClass("hidden")) {
            moveMainUp();
            if (!$(".about-me").hasClass("hidden")) {
                $(".about-me").addClass("hidden");
            }
            if (!$(".contact").hasClass("hidden")) {
                $(".contact").addClass("hidden");
            }
            $(".portfolio").removeClass("hidden");
        } else if (clicked && window.innerWidth >= 400 && window.innerWidth < 740 && $(".portfolio").hasClass("hidden")) {
            moveMainUp();
            if (!$(".about-me").hasClass("hidden")) {
                $(".about-me").addClass("hidden");
            }
            if (!$(".contact").hasClass("hidden")) {
                $(".contact").addClass("hidden");
            }
            $(".portfolio").removeClass("hidden");
        } else if (clicked && window.innerWidth >= 740 && window.innerWidth < 920 && $(".portfolio").hasClass("hidden")) {
            moveMainUp();
            if (!$(".about-me").hasClass("hidden")) {
                $(".about-me").addClass("hidden");
            }
            if (!$(".contact").hasClass("hidden")) {
                $(".contact").addClass("hidden");
            }
            $(".portfolio").removeClass("hidden");
        } else if (clicked && window.innerWidth > 920 && $(".portfolio").hasClass("hidden")) {
            $(".header").html("<p>" + "Nav" + "</p>");
            if (!$(".about-me").hasClass("hidden")) {
                $(".about-me").addClass("hidden");
            }
            if (!$(".contact").hasClass("hidden")) {
                $(".contact").addClass("hidden");
            }
            $(".portfolio").removeClass("hidden");
        } else if (!$(".portfolio").hasClass("hidden") && window.innerWidth < 920) {
            moveMainDown();
            $(".portfolio").addClass("hidden");
        } else if (!$(".portfolio").hasClass("hidden") && window.innerWidth > 920) {
            resetMainText();
            $(".portfolio").addClass("hidden");
        } 
    });

    // dynamic styling for "contact" section styling

    $(document.body).on('click', '#contact', function () {
        clicked = true;
    
        if (clicked && window.innerWidth >= 320 && window.innerWidth < 400 && $(".contact").hasClass("hidden")) {
            moveMainUp();
            if (!$(".about-me").hasClass("hidden")) {
                $(".about-me").addClass("hidden");
            }
            if (!$(".portfolio").hasClass("hidden")) {
                $(".portfolio").addClass("hidden");
            }
            $(".contact").removeClass("hidden");
        } else if (clicked && window.innerWidth >= 400 && window.innerWidth < 740 && $(".contact").hasClass("hidden")) {
            moveMainUp();
            if (!$(".about-me").hasClass("hidden")) {
                $(".about-me").addClass("hidden");
            }
            if (!$(".portfolio").hasClass("hidden")) {
                $(".portfolio").addClass("hidden");
            }
            $(".contact").removeClass("hidden");
        } else if (clicked && window.innerWidth >= 740 && window.innerWidth < 920 && $(".contact").hasClass("hidden")) {
            moveMainUp();
            if (!$(".about-me").hasClass("hidden")) {
                $(".about-me").addClass("hidden");
            }
            if (!$(".portfolio").hasClass("hidden")) {
                $(".portfolio").addClass("hidden");
            }
            $(".contact").removeClass("hidden");
        } else if (clicked && window.innerWidth > 920 && $(".contact").hasClass("hidden")) {
            $(".header").html("<p>" + "Nav" + "</p>");
            if (!$(".about-me").hasClass("hidden")) {
                $(".about-me").addClass("hidden");
            }
            if (!$(".portfolio").hasClass("hidden")) {
                $(".portfolio").addClass("hidden");
            }
            $(".contact").removeClass("hidden");
        } else if (!$(".contact").hasClass("hidden") && window.innerWidth < 920) {
            moveMainDown();
            $(".contact").addClass("hidden");
        } else if (!$(".contact").hasClass("hidden") && window.innerWidth > 920) {
            resetMainText()
            $(".contact").addClass("hidden");
        } 
    });

    // all dark-mode styling

    $(document.body).on("click", ".dark-mode-div", function() {

        //changing font 

        $("body").toggleClass("dark-mode-font");

        //changing font-awesome icon
        
        if ($("#dark-mode-icon").css("color") === "rgb(0, 0, 0)") {
            $("#dark-mode-icon").css("color", "rgb(255, 255, 255)");
        } else {
            $("#dark-mode-icon").css("color", "rgb(0, 0, 0)");
        }

        //changing tooltip colors

        if ($(".tooltip").css("color") === "rgb(116, 127, 224)") {
            $(".tooltip").css("color", "rgb(170, 170, 170)");
        } else {
            $(".tooltip").css("color", "rgb(116, 127, 224)");
        }

        //changing all portfolio-item properties
        if ($(".portfolio-item").css("background-color") === "rgb(246, 249, 252)") {
            $(".portfolio-item").css("background-color", "rgb(0, 0, 0)");
            $(".portfolio-item").css("border", "1px solid #fff");
            $(".tech-stack").css("background-color", "rgb(170, 170, 170)");
            $(".tech-stack").css("border", "none");
            $(".github-go").css("color", "#fff");
            $(".github-go").css("border", "1px solid #fff");
        } else {
            $(".portfolio-item").css("background-color", "rgb(246, 249, 252)");
            $(".portfolio-item").css("border", "none");
            $(".tech-stack").css("background-color", "rgb(255, 255, 255)");
            $(".tech-stack").css("border", "2px solid #92eac0");
            $(".github-go").css("color", "#111");
            $(".github-go").css("border", "1px solid #111");
        }

        $("body").toggleClass("dark-mode-body");
        $(".header").toggleClass("dark-mode-text");
        $("hr").toggleClass("dark-mode-hr");
        $(".svg").toggleClass("dark-mode-text");
        $(".para-text").toggleClass("dark-mode-text");
        $(".section-title").toggleClass("dark-mode-text");

    });

    // styling to account for javascript dynamic content

    $(window).resize(function() {
        if (window.innerWidth >= 320 && window.innerWidth < 920 && (!$(".about-me").hasClass("hidden") || !$(".portfolio").hasClass("hidden") || !$(".contact").hasClass("hidden"))) {
            $(".header").html("<p>" + "Nav" + "</p>");
            $(".main-div").css("margin-top", "0px");
            $(".main-div").css({top: 0});
        } else if (window.innerWidth >= 920 && (!$(".about-me").hasClass("hidden") || !$(".portfolio").hasClass("hidden") || !$(".contact").hasClass("hidden"))) {
            $(".header").html("<p>" + "Nav" + "</p>");
            $(".main-div").css("margin-top", "-95px");
            $(".main-div").css({top: "50%"});
        }
    });
});



