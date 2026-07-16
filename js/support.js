$(document).ready(function() 
{
    $("#faqSearch").on("keyup", function() 
    {
        let value = $(this).val().toLowerCase();
        
        $(".accordion-item").filter(function() 
        {
            let titleText = $(this).find(".accordion-button").text().toLowerCase();
            let bodyText = $(this).find(".accordion-body").text().toLowerCase();
            
            
            $(this).toggle(
                titleText.indexOf(value) > -1 || bodyText.indexOf(value) > -1
            );
        });
    });
});