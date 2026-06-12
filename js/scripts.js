$(document).ready(function () {

    // ==========================================
    // MENU DATA FOR PRODUCTS MEGA MENU
    // ==========================================
    const productsData = {
        featured: [
            { title: "Creative Cloud All Apps", desc: "Get 20+ creative apps including Photoshop, Illustrator, and Premiere Pro.", link: "creative-cloud.html", icon: "🎨" },
            { title: "Adobe Firefly", desc: "Use generative AI to create beautiful images, text effects, and color vectors.", link: "firefly.html", icon: "🔥" },
            { title: "Photoshop", desc: "Edit, composite, and create beautiful images, graphics, and art.", link: "photoshop.html", icon: "🖼️" },
            { title: "Acrobat Pro", desc: "The complete PDF and e-signature solution for mobile and desktop.", link: "acrobat.html", icon: "📄" }
        ],
        content: [
            { title: "Adobe Firefly", desc: "Use generative AI to create beautiful images and vector illustrations.", link: "firefly.html", icon: "🔥" },
            { title: "Creative Cloud All Apps", desc: "Get Photoshop, Illustrator, Premiere Pro, and more in one suite.", link: "creative-cloud.html", icon: "🎨" },
            { title: "Photoshop", desc: "Professional image editing and design tool.", link: "photoshop.html", icon: "🖼️" }
        ],
        pdf: [
            { title: "Acrobat Pro", desc: "Full PDF editor with electronic signatures and security features.", link: "acrobat.html", icon: "📄" },
            { title: "Acrobat Reader", desc: "Free application to view, sign, and annotate PDF documents.", link: "acrobat.html", icon: "🔍" },
            { title: "Adobe Sign", desc: "Prepare, track, and get legal digital signatures instantly.", link: "acrobat.html", icon: "✍️" }
        ],
        photo: [
            { title: "Photoshop", desc: "Edit and composite images with professional features.", link: "photoshop.html", icon: "🖼️" },
            { title: "Lightroom", desc: "Cloud-based service for photo editing, organizing, and sharing.", link: "photoshop.html", icon: "☀️" },
            { title: "Lightroom Classic", desc: "Desktop-focused photo editing and organization.", link: "photoshop.html", icon: "💻" }
        ],
        video: [
            { title: "Premiere Pro", desc: "Industry-standard professional video and film editing.", link: "creative-cloud.html", icon: "🎬" },
            { title: "After Effects", desc: "Cinematic visual effects and motion graphics.", link: "creative-cloud.html", icon: "💥" },
            { title: "Adobe Audition", desc: "Audio recording, mixing, and restoration software.", link: "creative-cloud.html", icon: "🔊" }
        ],
        design: [
            { title: "Illustrator", desc: "Create vector graphics, logo designs, and illustrations.", link: "creative-cloud.html", icon: "✏️" },
            { title: "InDesign", desc: "Page design and layout for print and digital publishing.", link: "creative-cloud.html", icon: "📖" },
            { title: "Adobe Fonts", desc: "Thousands of beautiful fonts for your creative projects.", link: "creative-cloud.html", icon: "🔤" }
        ],
        marketing: [
            { title: "Experience Cloud", desc: "Enterprise solutions for marketing, analytics, and commerce.", link: "business.html", icon: "🏢" },
            { title: "Adobe GenStudio", desc: "Create, manage, and scale your brand content supply chain.", link: "business.html", icon: "🧠" },
            { title: "Adobe Analytics", desc: "Real-time data analysis and customer insights.", link: "business.html", icon: "📊" }
        ]
    };

    // Helper to dynamically load cards into Products mega-menu
    function loadProductsCards(category) {
        let html = "";
        if (productsData[category]) {
            productsData[category].forEach(item => {
                html += `
                <div class="product-card" onclick="window.location.href='${item.link}'">
                    <div>
                        <h4><span>${item.icon}</span> ${item.title}</h4>
                        <p>${item.desc}</p>
                    </div>
                </div>
                `;
            });
        }
        $(".cards-wrapper").html(html);
    }

    // Load initial featured category
    loadProductsCards("featured");

    // ==========================================
    // MENU VISIBILITY MANAGEMENT (MUTUALLY EXCLUSIVE)
    // ==========================================
    function closeAllMenus() {
        $(".products-mega-menu").removeClass("show");
        $(".usecases-menu").removeClass("show");
        $(".solutions-menu").removeClass("show");
        $(".quickactions-menu").removeClass("show");
        $(".learnsupport-menu").removeClass("show");
        $(".apps-popup").removeClass("show-popup");
    }

    // Toggles for individual menus
    $("#productsBtn").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        let isOpen = $(".products-mega-menu").hasClass("show");
        closeAllMenus();
        if (!isOpen) {
            $(".products-mega-menu").addClass("show");
        }
    });

    $("#useCasesBtn").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        let isOpen = $(".usecases-menu").hasClass("show");
        closeAllMenus();
        if (!isOpen) {
            $(".usecases-menu").addClass("show");
        }
    });

    $("#solutionsBtn").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        let isOpen = $(".solutions-menu").hasClass("show");
        closeAllMenus();
        if (!isOpen) {
            $(".solutions-menu").addClass("show");
        }
    });

    $("#quickActionsBtn").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        let isOpen = $(".quickactions-menu").hasClass("show");
        closeAllMenus();
        if (!isOpen) {
            $(".quickactions-menu").addClass("show");
        }
    });

    $("#learnSupportBtn").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        let isOpen = $(".learnsupport-menu").hasClass("show");
        closeAllMenus();
        if (!isOpen) {
            $(".learnsupport-menu").addClass("show");
        }
    });

    // Apps Popup launcher
    $(".apps-btn").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        let isOpen = $(".apps-popup").hasClass("show-popup");
        closeAllMenus();
        if (!isOpen) {
            $(".apps-popup").addClass("show-popup");
        }
    });

    // Menu left tab clicks
    $(".menu-tab").on("click", function (e) {
        e.stopPropagation();
        $(".menu-tab").removeClass("active");
        $(this).addClass("active");
        loadProductsCards($(this).data("target"));
    });

    // Close all menus when clicking outside
    $(document).on("click", function () {
        closeAllMenus();
    });

    // Prevent closing when clicking inside a menu
    $(".products-mega-menu, .usecases-menu, .solutions-menu, .quickactions-menu, .learnsupport-menu, .apps-popup").on("click", function (e) {
        e.stopPropagation();
    });

    // ==========================================
    // HERO CAROUSEL CONTROLS & TIMINGS
    // ==========================================
    // Sync indicator cards at the bottom with carousel slides
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

    // Keyboard arrows to switch slides
    $(document).keydown(function (e) {
        if (e.key === "ArrowLeft") {
            $("#heroSlider").carousel("prev");
        }
        if (e.key === "ArrowRight") {
            $("#heroSlider").carousel("next");
        }
    });

    // Pause carousel on hover, resume on leave
    $("#heroSlider").hover(
        function () {
            $("#heroSlider").carousel("pause");
        },
        function () {
            $("#heroSlider").carousel("cycle");
        }
    );

    // ==========================================
    // SCROLL ANIMATIONS (FADE UP EFFECTS)
    // ==========================================
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        let winHeight = $(window).height();

        $(".explore-card, .feature-card, .testimonial-card").each(function () {
            let top = $(this).offset().top;
            if (scroll > top - winHeight + 100) {
                if ($(this).hasClass("explore-card")) $(this).addClass("show-explore");
                if ($(this).hasClass("feature-card")) $(this).addClass("show-feature");
                if ($(this).hasClass("testimonial-card")) $(this).addClass("show-testimonial");
            }
        });
    });

    // Trigger scroll event on load to show elements already in view
    $(window).trigger("scroll");
});