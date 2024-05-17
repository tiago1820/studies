$(document).ready(function () {

    $(".action").click(function (e) {
        e.preventDefault();

        $(".slide").removeClass("active");
        let slide = $(this).closest(".slide");
        slide.addClass("active");
    });

});

checkWidth = function () {
    let windowSize = $(window).width();
    if (windowSize > 480) {
        let slideWidth = $(".active").width();
        $(".slide-content").css(
            {
                "width": slideWidth + "px"
            }
        )
    }
}

$(window).resize(function () {
    // onresize

    checkWidth();

    // finish resize
    clearTimeout(window.resizedFinished);
    windowSize.resizedFinished = setTimeout(checkWidth, 500)
});














