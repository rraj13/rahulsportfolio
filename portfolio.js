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

$("#about-me").on("click", function(){
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

$("#portfolio").on("click", function() {
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


$("#contact").on("click", function(){
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



