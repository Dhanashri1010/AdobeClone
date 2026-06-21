$(document).ready(function () {

    // ===================================================
    // HERO CAROUSEL INDICATOR SYNC
    // ===================================================
    
    // Click event for the custom bottom cards on the homepage hero section
    $(".slide-card").on("click", function () {
        // Get the slide index from data-slide attribute
        let slideIndex = parseInt($(this).data("slide"));
        
        // Tell Bootstrap Carousel to slide to that index
        $("#heroSlider").carousel(slideIndex);
        
        // Update active class on cards
        $(".slide-card").removeClass("active-card");
        $(this).addClass("active-card");
    });

    // Listen to Bootstrap's built-in slide transition completion event
    const heroSlider = document.querySelector("#heroSlider");
    if (heroSlider) {
        heroSlider.addEventListener("slid.bs.carousel", function (event) {
            let currentIndex = event.to;
            
            // Sync active state of the bottom indicator cards
            $(".slide-card").removeClass("active-card");
            $('.slide-card[data-slide="' + currentIndex + '"]').addClass("active-card");
        });
    }

});