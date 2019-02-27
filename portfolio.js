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

    $(document.body).on('click', '#about-me', function() {
        clicked = true;

        if (clicked && window.innerWidth >= 320 && window.innerWidth < 400 && ($(".about-me").attr("style") === "display: none;" || $(".about-me").attr("style") === undefined)) {
            moveMainUp();
            $(".portfolio").fadeOut();
            $(".contact").fadeOut();
            $(".about-me").fadeIn();
        } else if (clicked && window.innerWidth >= 400 && window.innerWidth < 740 && ($(".about-me").attr("style") === "display: none;" || $(".about-me").attr("style") === undefined)) {
            moveMainUp();
            $(".portfolio").fadeOut();
            $(".contact").fadeOut();
            $(".about-me").fadeIn();
        } else if (clicked && window.innerWidth >= 740 && window.innerWidth < 920 && ($(".about-me").attr("style") === "display: none;" || $(".about-me").attr("style") === undefined)) {
            moveMainUp();
            $(".portfolio").fadeOut();
            $(".contact").fadeOut();
            $(".about-me").fadeIn();
        } else if (clicked && window.innerWidth >= 920 && ($(".about-me").attr("style") === "display: none;" || $(".about-me").attr("style") === undefined)) {
            $(".header").html("<p>" + "Nav" + "</p>");        
            $(".portfolio").fadeOut();
            $(".contact").fadeOut();
            $(".about-me").fadeIn();
        } else if ($(".about-me").attr("style") === "display: block;" && window.innerWidth < 920) {
            moveMainDown();
            $(".about-me").fadeOut();
        } else if ($(".about-me").attr("style") === "display: block;" && window.innerWidth >= 920) {
            resetMainText()
            $(".about-me").fadeOut();
        }

    });

    $(document.body).on('click', '#portfolio', function () {
        clicked = true;
    
        if (clicked && window.innerWidth >= 320 && window.innerWidth < 400 && ($(".portfolio").attr("style") === "display: none;" || $(".portfolio").attr("style") === undefined)) {
            moveMainUp();
            $(".about-me").fadeOut();
            $(".contact").fadeOut();
            $(".portfolio").fadeIn();
        } else if (clicked && window.innerWidth >= 400 && window.innerWidth < 740 && ($(".portfolio").attr("style") === "display: none;" || $(".portfolio").attr("style") === undefined)) {
            moveMainUp();
            $(".about-me").fadeOut();
            $(".contact").fadeOut();
            $(".portfolio").fadeIn();
        } else if (clicked && window.innerWidth >= 740 && window.innerWidth < 920 && ($(".portfolio").attr("style") === "display: none;" || $(".portfolio").attr("style") === undefined)) {
            moveMainUp();
            $(".about-me").fadeOut();
            $(".contact").fadeOut();
            $(".portfolio").fadeIn();
        } else if (clicked && window.innerWidth > 920 && ($(".portfolio").attr("style") === "display: none;" || $(".portfolio").attr("style") === undefined)) {
            $(".header").html("<p>" + "Nav" + "</p>");
            $(".about-me").fadeOut();
            $(".contact").fadeOut();
            $(".portfolio").fadeIn();
        } else if ($(".portfolio").attr("style") === "display: block;" && window.innerWidth < 920) {
            moveMainDown();
            $(".portfolio").fadeOut();
        } else if ($(".portfolio").attr("style") === "display: block;" && window.innerWidth >= 920) {
            resetMainText()
            $(".portfolio").fadeOut();
        } 
    });


    $(document.body).on('click', '#contact', function () {
        clicked = true;

        if (clicked && window.innerWidth >= 320 && window.innerWidth < 400 && ($(".contact").attr("style") === "display: none;" || $(".contact").attr("style") === undefined)) {
            moveMainUp();
            $(".portfolio").fadeOut();
            $(".about-me").fadeOut();
            $(".contact").fadeIn();
        } else if (clicked && window.innerWidth >= 400 && window.innerWidth < 740 && ($(".contact").attr("style") === "display: none;" || $(".contact").attr("style") === undefined)) {
            moveMainUp();
            $(".portfolio").fadeOut();
            $(".about-me").fadeOut();
            $(".contact").fadeIn();
        } else if (clicked && window.innerWidth >= 740 && window.innerWidth < 920 && ($(".contact").attr("style") === "display: none;" || $(".contact").attr("style") === undefined)) {
            moveMainUp();
            $(".portfolio").fadeOut();
            $(".about-me").fadeOut();
            $(".contact").fadeIn();
        } else if (clicked && window.innerWidth >= 920 && ($(".contact").attr("style") === "display: none;" || $(".contact").attr("style") === undefined)) {
            $(".header").html("<p>" + "Nav" + "</p>");
            $(".portfolio").fadeOut();
            $(".about-me").fadeOut();
            $(".contact").fadeIn();
        } else if ($(".contact").attr("style") === "display: block;" && window.innerWidth < 920) {
            moveMainDown();
            $(".contact").fadeOut();
        } else if ($(".contact").attr("style") === "display: block;" && window.innerWidth >= 920) {
            resetMainText()
            $(".contact").fadeOut();
        } 

    });

    $(document.body).on("click", ".dark-mode-div", function() {
        
        if ($("#dark-mode-icon").css("color") === "rgb(0, 0, 0)") {
            $("#dark-mode-icon").css("color", "rgb(255, 255, 255)");
        } else {
            $("#dark-mode-icon").css("color", "rgb(0, 0, 0)");
        }

        if ($(".tooltip").css("color") === "rgb(116, 127, 224)") {
            $(".tooltip").css("color", "rgb(170, 170, 170)");
        } else {
            $(".tooltip").css("color", "rgb(116, 127, 224)");
        }

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
        

});



