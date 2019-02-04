$("#about-me").on("click", function() {
    if ($(".main-div").css("top") === "150px") {
        $(".header").text("Nav");
        $(".main-div").animate({top: "0px"});
        $(".content").removeClass("hidden");
        $(".about-me").fadeIn();
    } else {
        $(".header").html("<p>" + "Hi. I'm Rahul." + "</p>");
        $(".header").append("<p>" + "I build <span>web apps.</span>" + "</p>");
        $(".main-div").animate({top: "150px"});
        $(".about-me").fadeOut();
        $(".content").addClass("hidden");
    }
    
});

$("#portfolio").on("click", function() {
    if ($(".main-div").css("top") === "150px") {
        $(".header").text("Nav");
        $(".main-div").animate({top: "0px"});
        $(".content").removeClass("hidden");
        $(".portfolio").fadeIn();
    } else {
        $(".header").html("<p>" + "Hi. I'm Rahul." + "</p>");
        $(".header").append("<p>" + "I build <span>web apps.</span>" + "</p>");
        $(".main-div").animate({top: "150px"});
        $(".portfolio").fadeOut();
        $(".content").addClass("hidden");
    }
});

$("#resume").on("click", function() {
    if ($(".main-div").css("top") === "150px") {
        $(".header").text("Nav");
        $(".main-div").animate({top: "0px"});
        $(".content").removeClass("hidden");
        $(".resume").fadeIn();
    } else {
        $(".header").html("<p>" + "Hi. I'm Rahul." + "</p>");
        $(".header").append("<p>" + "I build <span>web apps.</span>" + "</p>");
        $(".main-div").animate({top: "150px"});
        $(".resume").fadeOut();
        $(".content").addClass("hidden");
    }
});

$("#contact").on("click", function() {
    if ($(".main-div").css("top") === "150px") {
        $(".header").text("Nav");
        $(".main-div").animate({top: "0px"});
        $(".content").removeClass("hidden");
        $(".contact").fadeIn();
    } else {
        $(".header").html("<p>" + "Hi. I'm Rahul." + "</p>");
        $(".header").append("<p>" + "I build <span>web apps.</span>" + "</p>");
        $(".main-div").animate({top: "150px"});
        $(".contact").fadeOut();
        $(".content").addClass("hidden");
    }
});



