$(document).ready(function() {

    // ==========================================
    // PRE-POPULATE REMEMBERED EMAIL
    // ==========================================
    let rememberedEmail = localStorage.getItem("rememberedAdobeEmail");
    if (rememberedEmail) {
        $("#email").val(rememberedEmail);
        $("#rememberMe").prop("checked", true);
    }

    // ==========================================
    // VISIBILITY TOGGLE FOR PASSWORD FIELD
    // ==========================================
    $("#togglePassword").on("click", function() {
        let passwordInput = $("#password");
        let icon = $(this).find("i");
        
        if (passwordInput.attr("type") === "password") {
            passwordInput.attr("type", "text");
            icon.removeClass("bi-eye").addClass("bi-eye-slash");
        } else {
            passwordInput.attr("type", "password");
            icon.removeClass("bi-eye-slash").addClass("bi-eye");
        }
    });

    // ==========================================
    // FORM VALIDATION HELPER FUNCTIONS
    // ==========================================
    function showError(input, errorDiv, message) {
        input.addClass("is-invalid").removeClass("is-valid");
        errorDiv.text(message).fadeIn(200);
    }

    function showSuccess(input, errorDiv) {
        input.addClass("is-valid").removeClass("is-invalid");
        errorDiv.fadeOut(150);
    }

    function validateEmail() {
        let emailInput = $("#email");
        let emailVal = emailInput.val().trim();
        let emailError = $("#email-error");
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailVal === "") {
            showError(emailInput, emailError, "Email address is required.");
            return false;
        } else if (!emailRegex.test(emailVal)) {
            showError(emailInput, emailError, "Please enter a valid email address (e.g., name@example.com).");
            return false;
        } else {
            showSuccess(emailInput, emailError);
            return true;
        }
    }

    function validatePassword() {
        let passwordInput = $("#password");
        let passwordVal = passwordInput.val();
        let passwordError = $("#password-error");

        if (passwordVal === "") {
            showError(passwordInput, passwordError, "Password is required.");
            return false;
        } else if (passwordVal.length < 8) {
            showError(passwordInput, passwordError, "Password must be at least 8 characters long.");
            return false;
        } else if (!/[a-zA-Z]/.test(passwordVal) || !/[0-9]/.test(passwordVal)) {
            showError(passwordInput, passwordError, "Password must contain at least one letter and one number.");
            return false;
        } else {
            showSuccess(passwordInput, passwordError);
            return true;
        }
    }

    // ==========================================
    // REAL-TIME INPUT VALIDATION EVENTS
    // ==========================================
    $("#email").on("blur", function() {
        validateEmail();
    });

    $("#email").on("input", function() {
        if ($(this).hasClass("is-invalid") || $(this).val().trim() !== "") {
            validateEmail();
        }
    });

    $("#password").on("blur", function() {
        validatePassword();
    });

    $("#password").on("input", function() {
        if ($(this).hasClass("is-invalid") || $(this).val() !== "") {
            validatePassword();
        }
    });

    // ==========================================
    // FORM SUBMISSION HANDLER
    // ==========================================
    $("#signinForm").submit(function(e) {
        e.preventDefault();

        // Perform validations
        let isEmailValid = validateEmail();
        let isPasswordValid = validatePassword();

        if (!isEmailValid || !isPasswordValid) {
            // Focus on first invalid element
            if (!isEmailValid) {
                $("#email").focus();
            } else {
                $("#password").focus();
            }
            return;
        }

        // Disable input elements and show loading spinner
        let submitBtn = $("#submitBtn");
        let btnText = submitBtn.find(".btn-text");
        let btnSpinner = submitBtn.find(".btn-spinner");
        let emailVal = $("#email").val().trim();
        let rememberMe = $("#rememberMe").is(":checked");

        $("#email, #password, #rememberMe, #submitBtn").prop("disabled", true);
        btnText.text("Signing In...");
        btnSpinner.show();

        // Simulate secure login process
        setTimeout(function() {
            // Save email configuration to localStorage
            if (rememberMe) {
                localStorage.setItem("rememberedAdobeEmail", emailVal);
            } else {
                localStorage.removeItem("rememberedAdobeEmail");
            }

            // Animate transition to workspace
            showSuccessMessage();
        }, 1500);
    });

    // ==========================================
    // AUTH SUCCESS SPLASH SCREEN
    // ==========================================
    function showSuccessMessage() {
        $("#signinForm").fadeOut(400, function() {
            let successHtml = `
                <div class="success-container text-center py-4" style="display: none;">
                    <div class="success-icon mb-3" style="font-size: 55px; color: #2ecc71; text-shadow: 0 0 15px rgba(46, 204, 113, 0.4);">
                        <i class="bi bi-check-circle-fill"></i>
                    </div>
                    <h3 class="mb-3" style="font-weight: 700;">Welcome Back!</h3>
                    <p class="text-white-50 mb-4" style="font-size: 15px;">Successfully authenticated with Adobe Cloud.</p>
                    <div class="spinner-border text-primary" role="status" style="width: 2.5rem; height: 2.5rem; border-width: 0.25em;">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <p class="mt-3 text-white-50" style="font-size: 12px; opacity: 0.7;">Redirecting you to the workspace...</p>
                </div>
            `;
            $(".signin-container").append(successHtml);
            $(".success-container").fadeIn(500);
            
            setTimeout(function() {
                window.location.href = "index.html";
            }, 2000);
        });
    }

});