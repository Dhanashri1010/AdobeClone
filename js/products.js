$(document).ready(function () {
    let activeCategory = 'all';
    let searchQuery = '';

    // Function to apply filters (Category + Search Query + Pagination)
    function applyFilters(revealAll = false) {
        let matchingCards = $(".product-card").filter(function () {
            let matchesCategory = (activeCategory === 'all') || ($(this).data("category") === activeCategory);
            let matchesSearch = $(this).text().toLowerCase().includes(searchQuery);
            return matchesCategory && matchesSearch;
        });

        // Hide all cards first
        $(".product-card").hide();

        if (searchQuery !== '' || activeCategory !== 'all') {
            // If filtering or searching, show all matches and hide show-more button
            matchingCards.show();
            $(".show-more-btn").hide();
        } else {
            // Default: Category "all" and no search query -> paginated display
            if (revealAll) {
                matchingCards.show();
                $(".show-more-btn").hide();
            } else {
                // Show first 4 matching, hide rest
                matchingCards.slice(0, 4).show();
                if (matchingCards.length > 4) {
                    $(".show-more-btn").show();
                } else {
                    $(".show-more-btn").hide();
                }
            }
        }
    }

    // Sidebar Category clicks
    $(".products-sidebar li").on("click", function () {
        $(".products-sidebar li").removeClass("active");
        $(this).addClass("active");

        activeCategory = $(this).data("category") || 'all';
        applyFilters(false); // Reset pagination on category change
    });

    // Search Input keyup
    $(".products-sidebar input").on("keyup", function () {
        searchQuery = $(this).val().toLowerCase();
        applyFilters(false);
    });

    // Show More button click
    $(".show-more-btn").on("click", function () {
        applyFilters(true); // Reveal all cards for the active filter (which is "all")
    });

    // Run filters on page load
    applyFilters(false);

    // ==========================
    // SMOOTH SCROLL
    // ==========================
    $('a[href^="#"]').on("click", function (e) {
        e.preventDefault();
        let target = $($(this).attr("href"));
        if (target.length) {
            $("html, body").animate({
                scrollTop: target.offset().top
            }, 600);
        }
    });

    // ==========================
    // NAVBAR SHADOW
    // ==========================
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

    // ==========================
    // FAQ ACCORDION ICON
    // ==========================
    $(".accordion-button").click(function () {
        $(this).toggleClass("faq-active");
    });
});