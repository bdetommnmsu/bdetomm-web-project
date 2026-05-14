// =============================================
//  GreenTech Solutions - script.js
//  File: javascript/script.js
//  Handles:
//    1. Mobile nav toggle (hamburger menu)
//    2. Product & blog category filter
//    3. Product search bar
//    4. Contact form validation
//    5. Newsletter signup
//    6. High contrast accessibility toggle
// =============================================


// ─────────────────────────────────────────────
// 1. MOBILE NAV TOGGLE
// ─────────────────────────────────────────────
(function initNav() {
   var toggle = document.getElementById("navToggle");
   var links  = document.getElementById("navLinks");

   if (!toggle || !links) return;

   toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
   });

   // Close menu when any nav link is clicked (mobile UX)
   var navAnchors = links.querySelectorAll("a");
   navAnchors.forEach(function (anchor) {
      anchor.addEventListener("click", function () {
         links.classList.remove("open");
         toggle.setAttribute("aria-expanded", "false");
      });
   });

   // Close menu when clicking outside nav
   document.addEventListener("click", function (e) {
      if (!toggle.contains(e.target) && !links.contains(e.target)) {
         links.classList.remove("open");
         toggle.setAttribute("aria-expanded", "false");
      }
   });
}());


// ─────────────────────────────────────────────
// 2. CATEGORY FILTER (Products & Blog pages)
// ─────────────────────────────────────────────
(function initFilter() {
   var filterBtns = document.querySelectorAll(".filter-btn");
   if (filterBtns.length === 0) return;

   filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
         var category = btn.getAttribute("data-filter");

         // Update active button state
         filterBtns.forEach(function (b) {
            b.classList.remove("active");
            b.setAttribute("aria-pressed", "false");
         });
         btn.classList.add("active");
         btn.setAttribute("aria-pressed", "true");

         // Show/hide cards based on category
         var cards = document.querySelectorAll(".product-card");
         var visible = 0;

         cards.forEach(function (card) {
            if (category === "all" || card.getAttribute("data-category") === category) {
               card.classList.remove("hidden-card");
               visible++;
            } else {
               card.classList.add("hidden-card");
            }
         });

         // Show "no results" message if needed
         updateNoResults(visible);
      });
   });
}());


// ─────────────────────────────────────────────
// 3. PRODUCT SEARCH BAR (Products page only)
// ─────────────────────────────────────────────
(function initSearch() {
   var searchInput = document.getElementById("productSearch");
   if (!searchInput) return;

   searchInput.addEventListener("input", function () {
      var query = searchInput.value.trim().toLowerCase();

      // Reset filter buttons to "All" when searching
      var filterBtns = document.querySelectorAll(".filter-btn");
      filterBtns.forEach(function (b) {
         b.classList.remove("active");
         b.setAttribute("aria-pressed", "false");
      });
      var allBtn = document.querySelector(".filter-btn[data-filter='all']");
      if (allBtn) {
         allBtn.classList.add("active");
         allBtn.setAttribute("aria-pressed", "true");
      }

      var cards = document.querySelectorAll(".product-card");
      var visible = 0;

      cards.forEach(function (card) {
         var name     = card.getAttribute("data-name") || "";
         var bodyText = card.textContent.toLowerCase();

         if (query === "" || bodyText.includes(query) || name.includes(query)) {
            card.classList.remove("hidden-card");
            visible++;
         } else {
            card.classList.add("hidden-card");
         }
      });

      updateNoResults(visible);
   });
}());


// Helper: show/hide "no results" message
function updateNoResults(visibleCount) {
   var noResults = document.getElementById("noResults");
   if (!noResults) return;
   noResults.style.display = visibleCount === 0 ? "block" : "none";
}


// ─────────────────────────────────────────────
// 4. CONTACT FORM VALIDATION
// ─────────────────────────────────────────────
(function initContactForm() {
   var form = document.getElementById("contactForm");
   if (!form) return;

   // Helper: mark a field as valid
   function setValid(input, errorEl) {
      input.classList.remove("invalid");
      input.classList.add("valid");
      if (errorEl) errorEl.classList.remove("visible");
   }

   // Helper: mark a field as invalid
   function setInvalid(input, errorEl) {
      input.classList.remove("valid");
      input.classList.add("invalid");
      if (errorEl) errorEl.classList.add("visible");
   }

   // Helper: clear validation state
   function clearState(input, errorEl) {
      input.classList.remove("valid", "invalid");
      if (errorEl) errorEl.classList.remove("visible");
   }

   var firstName = document.getElementById("firstName");
   var lastName  = document.getElementById("lastName");
   var email     = document.getElementById("email");
   var phone     = document.getElementById("phone");
   var interest  = document.getElementById("interest");
   var message   = document.getElementById("message");

   // Real-time validation on blur
   if (firstName) {
      firstName.addEventListener("blur", function () {
         var err = document.getElementById("firstNameError");
         firstName.value.trim().length > 0
            ? setValid(firstName, err)
            : setInvalid(firstName, err);
      });
   }

   if (lastName) {
      lastName.addEventListener("blur", function () {
         var err = document.getElementById("lastNameError");
         lastName.value.trim().length > 0
            ? setValid(lastName, err)
            : setInvalid(lastName, err);
      });
   }

   if (email) {
      email.addEventListener("blur", function () {
         var err = document.getElementById("emailError");
         var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         emailRegex.test(email.value.trim())
            ? setValid(email, err)
            : setInvalid(email, err);
      });
   }

   if (phone) {
      phone.addEventListener("blur", function () {
         var err = document.getElementById("phoneError");
         var digits = phone.value.replace(/\D/g, "");
         if (phone.value.trim() === "") {
            clearState(phone, err);
         } else if (digits.length >= 10) {
            setValid(phone, err);
         } else {
            setInvalid(phone, err);
         }
      });
   }

   if (interest) {
      interest.addEventListener("change", function () {
         var err = document.getElementById("interestError");
         interest.value !== ""
            ? setValid(interest, err)
            : setInvalid(interest, err);
      });
   }

   if (message) {
      message.addEventListener("blur", function () {
         var err = document.getElementById("messageError");
         message.value.trim().length >= 20
            ? setValid(message, err)
            : setInvalid(message, err);
      });
   }

   // Full validation on submit
   form.addEventListener("submit", function (e) {
      e.preventDefault();

      var isValid    = true;
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // First name
      var fnErr = document.getElementById("firstNameError");
      if (!firstName || firstName.value.trim().length === 0) {
         setInvalid(firstName, fnErr); isValid = false;
      } else { setValid(firstName, fnErr); }

      // Last name
      var lnErr = document.getElementById("lastNameError");
      if (!lastName || lastName.value.trim().length === 0) {
         setInvalid(lastName, lnErr); isValid = false;
      } else { setValid(lastName, lnErr); }

      // Email
      var emErr = document.getElementById("emailError");
      if (!email || !emailRegex.test(email.value.trim())) {
         setInvalid(email, emErr); isValid = false;
      } else { setValid(email, emErr); }

      // Phone (optional)
      var phErr = document.getElementById("phoneError");
      if (phone && phone.value.trim() !== "") {
         var digits = phone.value.replace(/\D/g, "");
         if (digits.length < 10) {
            setInvalid(phone, phErr); isValid = false;
         } else { setValid(phone, phErr); }
      }

      // Interest dropdown
      var inErr = document.getElementById("interestError");
      if (!interest || interest.value === "") {
         setInvalid(interest, inErr); isValid = false;
      } else { setValid(interest, inErr); }

      // Message
      var msErr = document.getElementById("messageError");
      if (!message || message.value.trim().length < 20) {
         setInvalid(message, msErr); isValid = false;
      } else { setValid(message, msErr); }

      if (isValid) {
         // Show success, hide button
         var successMsg = document.getElementById("formSuccess");
         var submitBtn  = document.getElementById("submitBtn");
         if (successMsg) successMsg.classList.add("visible");
         if (submitBtn)  submitBtn.style.display = "none";
         if (successMsg) {
            successMsg.scrollIntoView({ behavior: "smooth", block: "center" });
         }

         // Reset form fields after short delay
         setTimeout(function () {
            form.reset();
            var allInputs = form.querySelectorAll("input, textarea, select");
            allInputs.forEach(function (input) {
               input.classList.remove("valid", "invalid");
            });
         }, 500);

      } else {
         // Scroll to and focus first invalid field
         var firstInvalid = form.querySelector(".invalid");
         if (firstInvalid) {
            firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
            firstInvalid.focus();
         }
      }
   });
}());


// ─────────────────────────────────────────────
// 5. NEWSLETTER SIGNUP (Homepage)
// ─────────────────────────────────────────────
(function initNewsletter() {
   var newsletterForm = document.getElementById("newsletterForm");
   if (!newsletterForm) return;

   newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var emailInput = document.getElementById("newsletterEmail");
      var msgEl      = document.getElementById("newsletterMsg");
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailInput) return;

      if (emailRegex.test(emailInput.value.trim())) {
         if (msgEl) {
            msgEl.textContent    = "✅ You're subscribed! Welcome to the GreenTech community.";
            msgEl.style.display  = "block";
            msgEl.style.color    = "var(--green-dark)";
         }
         emailInput.value             = "";
         emailInput.style.borderColor = "var(--success)";
      } else {
         if (msgEl) {
            msgEl.textContent    = "❌ Please enter a valid email address.";
            msgEl.style.display  = "block";
            msgEl.style.color    = "var(--error)";
         }
         emailInput.style.borderColor = "var(--error)";
         emailInput.focus();
      }
   });
}());


// ─────────────────────────────────────────────
// 6. HIGH CONTRAST ACCESSIBILITY TOGGLE
// ─────────────────────────────────────────────
(function initContrastToggle() {
   var btn = document.getElementById("contrastToggle");
   if (!btn) return;

   // Restore saved preference
   try {
      if (localStorage.getItem("highContrast") === "true") {
         document.body.classList.add("high-contrast");
         btn.textContent = "◑ Standard";
      }
   } catch (e) { /* localStorage unavailable */ }

   btn.addEventListener("click", function () {
      var isContrast  = document.body.classList.toggle("high-contrast");
      btn.textContent = isContrast ? "◑ Standard" : "☀ High Contrast";

      try {
         localStorage.setItem("highContrast", isContrast ? "true" : "false");
      } catch (e) { /* localStorage unavailable */ }
   });
}());