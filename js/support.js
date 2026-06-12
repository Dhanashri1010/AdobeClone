$(document).ready(function() {
    // ==========================================
    // LIVE FAQ SEARCH FILTER
    // ==========================================
    $("#faqSearch").on("keyup", function() {
        let value = $(this).val().toLowerCase();
        
        $(".accordion-item").filter(function() {
            let titleText = $(this).find(".accordion-button").text().toLowerCase();
            let bodyText = $(this).find(".accordion-body").text().toLowerCase();
            
            // Show item if value is found in title or description body
            $(this).toggle(
                titleText.indexOf(value) > -1 || bodyText.indexOf(value) > -1
            );
        });
    });
});