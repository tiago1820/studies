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

// gallery

document.addEventListener("DOMContentLoaded", function () {
    fetch("../data/amazonia.json")
        .then(response => response.json())
        .then(data => {
            const gallery = document.getElementById("dynamic-gallery");
            data.forEach(item => {
                const card = document.createElement("div");
                card.classList.add("card");

                const img = document.createElement("img");
                img.classList.add("card-img");
                img.src = item.image;
                img.alt = item.title;

                const title = document.createElement("h5");
                title.classList.add("card-title");
                title.textContent = item.title;
                const description = document.createElement("p");
                description.textContent = item.description;

                card.appendChild(img);
                card.appendChild(title);
                card.appendChild(description);
                gallery.appendChild(card);
            });
        })
        .catch(error => console.log("Error loading JSON:", error));
});














