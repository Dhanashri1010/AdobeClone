$(document).ready(function() {
    // ==========================================
    // MOCK AI GENERATOR SIMULATOR
    // ==========================================
    $("#generateBtn").on("click", function() {
        let promptVal = $("#aiPrompt").val().trim().toLowerCase();
        if (promptVal === "") {
            alert("Please describe what you want to generate first!");
            return;
        }

        // Hide old layout, show loader
        $(".display-placeholder").hide();
        $("#generatedImg").hide();
        $(".shimmer-loader").fadeIn();

        // 1.8s mock computing delay
        setTimeout(function() {
            // Default Abstract image
            let imgUrl = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80";

            // Keyword detection logic
            if (promptVal.includes("cyberpunk") || promptVal.includes("neon") || promptVal.includes("city") || promptVal.includes("rain")) {
                imgUrl = "https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?auto=format&fit=crop&w=800&q=80";
            } else if (promptVal.includes("cat") || promptVal.includes("animal") || promptVal.includes("kitten") || promptVal.includes("dog")) {
                imgUrl = "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80";
            } else if (promptVal.includes("space") || promptVal.includes("astronaut") || promptVal.includes("galaxy") || promptVal.includes("nebula")) {
                imgUrl = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80";
            } else if (promptVal.includes("nature") || promptVal.includes("forest") || promptVal.includes("mountain") || promptVal.includes("lake")) {
                imgUrl = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80";
            } else if (promptVal.includes("car") || promptVal.includes("cyber") || promptVal.includes("road") || promptVal.includes("speed")) {
                imgUrl = "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80";
            }

            // Set source and fade it in when downloaded
            $("#generatedImg").attr("src", imgUrl).on("load", function() {
                $(".shimmer-loader").fadeOut();
                $(this).fadeIn();
            });
        }, 1800);
    });

    // Handle enter key inside prompt input
    $("#aiPrompt").on("keypress", function(e) {
        if (e.which === 13) {
            $("#generateBtn").click();
        }
    });
});