$(document).ready(function () {
    let activeCategory = 'all';
    let searchQuery = '';

    
    function applyFilters(revealAll = false) {
        let matchingCards = $(".product-card").filter(function () {
            let matchesCategory = (activeCategory === 'all') || ($(this).data("category") === activeCategory);
            let matchesSearch = $(this).text().toLowerCase().includes(searchQuery);
            return matchesCategory && matchesSearch;
        });

        // Hide all cards first
        $(".product-card").hide();

        if (searchQuery !== '' || activeCategory !== 'all') {
            
            matchingCards.show();
            $(".show-more-btn").hide();
        } else {
            
            if (revealAll) {
                matchingCards.show();
                $(".show-more-btn").hide();
            } else {
                
                matchingCards.slice(0, 4).show();
                if (matchingCards.length > 4) {
                    $(".show-more-btn").show();
                } else {
                    $(".show-more-btn").hide();
                }
            }
        }
    }

    
    $(".products-sidebar li").on("click", function () {
        $(".products-sidebar li").removeClass("active");
        $(this).addClass("active");

        activeCategory = $(this).data("category") || 'all';
        applyFilters(false); 
    });

    
    $(".products-sidebar input").on("keyup", function () {
        searchQuery = $(this).val().toLowerCase();
        applyFilters(false);
    });

    
    $(".show-more-btn").on("click", function () {
        applyFilters(true); 
    });

    
    applyFilters(false);

    

    $('a[href^="#"]').on("click", function (e) {
        e.preventDefault();
        let target = $($(this).attr("href"));
        if (target.length) {
            $("html, body").animate({
                scrollTop: target.offset().top
            }, 600);
        }
    });

    

    $(window).scroll(function () {
        if ($(window).scrollTop() > 20) {
            $(".adobe-navbar").css({
                boxShadow: "0 4px 15px rgba(0,0,0,.08)"
            });
        } else {
            $(".adobe-navbar").css({
                boxShadow: "none"
            });
        }
    });

    
    
    $(".accordion-button").click(function () {
        $(this).toggleClass("faq-active");
    });
});