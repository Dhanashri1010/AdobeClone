$(document).ready(function() {
    // ==========================================
    // BEFORE/AFTER SLIDER INTERACTION
    // ==========================================
    $(".slider-bar").on("input change", function() {
        let sliderVal = $(this).val();
        $(".image-overlay").css("width", sliderVal + "%");
        $(".slider-button").css("left", sliderVal + "%");
    });
});