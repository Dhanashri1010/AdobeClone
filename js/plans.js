$(document).ready(function() {
    // ==========================================
    // DYNAMIC BILLING TOGGLE (MONTHLY VS ANNUAL)
    // ==========================================
    $("#billingToggle").on("change", function() {
        let isAnnual = $(this).is(":checked");
        
        if (isAnnual) {
            $("#monthlyLabel").removeClass("active");
            $("#annualLabel").addClass("active");
            
            // Set annual pricing text (discounted)
            $("#individualPrice").html("₹639 <span>/ mo</span>");
            $("#allAppsPrice").html("₹1,279 <span>/ mo</span>");
            $("#studentPrice").html("₹519 <span>/ mo</span>");
            
            // Set billing frequency sub-labels
            $("#individualSub").text("Billed annually. Save 20% compared to monthly.");
            $("#allAppsSub").text("Billed annually. Save 20% compared to monthly.");
            $("#studentSub").text("Billed annually. Save 20% compared to monthly.");
        } else {
            $("#monthlyLabel").addClass("active");
            $("#annualLabel").removeClass("active");
            
            // Set standard monthly pricing text
            $("#individualPrice").html("₹799 <span>/ mo</span>");
            $("#allAppsPrice").html("₹1,599 <span>/ mo</span>");
            $("#studentPrice").html("₹649 <span>/ mo</span>");
            
            // Set billing frequency sub-labels
            $("#individualSub").text("Billed monthly. Cancel subscription anytime.");
            $("#allAppsSub").text("Billed monthly. Cancel subscription anytime.");
            $("#studentSub").text("Billed monthly. Cancel subscription anytime.");
        }
    });
});