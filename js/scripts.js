$(document).ready(function () {

    // ==========================================
    // PAGE LOADER SCREEN FADE-OUT
    // ==========================================
    $(window).on("load", function() {
        $("#loader-wrapper").fadeOut("slow", function() {
            $(this).remove();
        });
    });
    // Fallback if loading takes too long
    setTimeout(function() {
        if ($("#loader-wrapper").length) {
            $("#loader-wrapper").fadeOut("slow");
        }
    }, 2500);

    // ==========================================
    // STICKY NAVBAR SHRINK & SCROLL PROGRESS BAR
    // ==========================================
    $(window).on("scroll", function() {
        // Sticky Navbar shrink
        if ($(window).scrollTop() > 50) {
            $(".adobe-navbar").addClass("navbar-shrink");
        } else {
            $(".adobe-navbar").removeClass("navbar-shrink");
        }

        // Scroll Progress Bar
        let winScroll = $(window).scrollTop();
        let height = $(document).height() - $(window).height();
        let scrolled = height > 0 ? (winScroll / height) * 100 : 0;
        $("#scroll-progress").css("width", scrolled + "%");
    });

    // ==========================================
    // BACK TO TOP BUTTON VISIBILITY & SMOOTH SCROLL
    // ==========================================
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 300) {
            $("#back-to-top").addClass("show");
        } else {
            $("#back-to-top").removeClass("show");
        }
    });

    $("#back-to-top").on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    // ==========================================
    // NAVBAR DROPDOWN ANIMATION USING JQUERY
    // ==========================================
    $('.dropdown').on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(250);
    });
    $('.dropdown').on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
    });

    // ==========================================
    // ACTIVE NAVIGATION LINK HIGHLIGHTING
    // ==========================================
    let currentPath = window.location.pathname.split("/").pop();
    if (currentPath === "" || currentPath === "/") {
        currentPath = "index.html";
    }
    
    $(".navbar-nav .nav-link, .dropdown-menu .dropdown-item").each(function() {
        let href = $(this).attr("href");
        if (href === currentPath) {
            $(this).addClass("active-nav");
            // If it's a dropdown item, also highlight the parent nav-link dropdown toggle
            $(this).closest(".dropdown").find(".dropdown-toggle").addClass("active-nav");
        }
    });

    // ==========================================
    // HERO CAROUSEL CARD NAVIGATION
    // ==========================================
    $(".slide-card").on("click", function () {
        let slideIndex = parseInt($(this).data("slide"));
        $("#heroSlider").carousel(slideIndex);
        $(".slide-card").removeClass("active-card");
        $(this).addClass("active-card");
    });

    const heroSlider = document.querySelector("#heroSlider");
    if (heroSlider) {
        heroSlider.addEventListener("slid.bs.carousel", function (event) {
            let currentIndex = event.to;
            $(".slide-card").removeClass("active-card");
            $('.slide-card[data-slide="' + currentIndex + '"]').addClass("active-card");
        });
    }

    // ==========================================
    // SCROLL-TRIGGERED VIEWPORT ANIMATIONS
    // ==========================================
    if ('IntersectionObserver' in window) {
        const animObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    $(entry.target).addClass("anim-active");
                }
            });
        }, { threshold: 0.08 });

        $("[data-anim]").each(function() {
            animObserver.observe(this);
        });
    } else {
        // Fallback for older browsers
        $(window).on("scroll", function() {
            $("[data-anim]").each(function() {
                let elementTop = $(this).offset().top;
                let viewportBottom = $(window).scrollTop() + $(window).height();
                if (elementTop < viewportBottom - 40) {
                    $(this).addClass("anim-active");
                }
            });
        });
        $(window).trigger("scroll");
    }

    // ==========================================
    // ANIMATED COUNTERS LOGIC
    // ==========================================
    function startCounters() {
        $(".counter-value").each(function() {
            let $this = $(this);
            if ($this.hasClass("counted")) return;
            let countTo = parseInt($this.attr("data-count"), 10);
            if (isNaN(countTo)) return;
            $this.addClass("counted");
            $({ countNum: 0 }).animate({
                countNum: countTo
            }, {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum).toLocaleString());
                },
                complete: function() {
                    $this.text(this.countNum.toLocaleString() + ($this.attr("data-append") || ""));
                }
            });
        });
    }

    if ('IntersectionObserver' in window) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounters();
                }
            });
        }, { threshold: 0.1 });

        $(".counter-section").each(function() {
            counterObserver.observe(this);
        });
    } else {
        $(window).on("scroll", function() {
            $(".counter-section").each(function() {
                let elementTop = $(this).offset().top;
                let viewportBottom = $(window).scrollTop() + $(window).height();
                if (elementTop < viewportBottom - 50) {
                    startCounters();
                }
            });
        });
    }

    // ==========================================
    // PREMIUM BUTTON RIPPLE CLICK EFFECT
    // ==========================================
    $(document).on("click", ".btn-ripple", function(e) {
        let $btn = $(this);
        let x = e.pageX - $btn.offset().left;
        let y = e.pageY - $btn.offset().top;
        
        let $ripple = $('<span class="ripple"></span>');
        $ripple.css({
            top: y + 'px',
            left: x + 'px'
        });
        
        $btn.append($ripple);
        
        setTimeout(function() {
            $ripple.remove();
        }, 600);
    });

    // Lazy load local image trigger (smooth fade-in effect) + Error fallback handler
    $("img").on("load", function() {
        $(this).css("opacity", 1);
    }).on("error", function() {
        let placeholderUrl = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80";
        if ($(this).attr("src") !== placeholderUrl) {
            $(this).attr("src", placeholderUrl).css("opacity", 1);
        }
    });

});