$(document).ready(function(){
    $(".accordion-header").click(function(){
        const currentContent = $(this).next(".accordion-content");

        /* Toggle active state on click header */

    $(this).toggleClass(".active");

    // Toggle the indicator icon (+)
    if($(this).hasClass(".active")){
        $(this).find(".accordion-icon").text("-");
    }else{
        $(this).find(".accordion-icon").text("+");
    }

    // Slide Toggle for current panel
    currentContent.slideToggle(400);

    //close other panels
    $(".accordion-content").not(currentContent).slideUp(400);
    $(".accordion-header").not(this).removeClass("active").find(".accordion-icon").text("+");
    });
});