$(document).ready(function(){
    $(".accordion-header").click(function(){
        const currentContent = $(this).next(".accordion-content");

        /* Toggle active state on click header */

    $(this).toggleClass("active");

    // Toggle the indicator icon (+)
    if($(this).hasClass("active")){
        $(this).find(".accordion-icon").text("-");
    }else{
        $(this).find(".accordion-icon").text("+");
    }

    // Slide Toggle for current panel
    currentContent.slideToggle(400);

    //close other panels
    $(".accordion-content").not(currentContent).slideUp(400);
    $(".accordion-header").not(this).removeClass("active").find(".accordion-icon").text("+");
    });
    });




// Select the registration form
const registrationForm = document.getElementById("registration-form");

if (registrationForm) {

    // Select membership price and message elements
    
    const registrationMessage = document.getElementById("registration-msg");
  
    // FORM SUBMISSION
    

    registrationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get user information
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const dob = document.getElementById("dob").value;
        const fitnessLevel = document.getElementById("fitnessLevel").value;

        // Get selected membership
        const selectedPlan = document.querySelector(
            'input[name="plan"]:checked'
        );


        // Check membership selection
        if (!selectedPlan) {

            registrationMessage.textContent =
                "Please select a membership plan.";

            registrationMessage.style.color = "red";
            return;
        }


        // Check names
        if (firstName === "" || lastName === "") {

            registrationMessage.textContent =
                "Please enter your first and last name.";

            registrationMessage.style.color = "red";
            return;
        }


        // Check phone number
        if (!/^[0-9+()\s-]{7,20}$/.test(phone)) {

            registrationMessage.textContent =
                "Please enter a valid phone number.";

            registrationMessage.style.color = "red";
            return;
        }


        // Check date of birth
        const today = new Date();

        const currentDate = today.getFullYear() + "-" +
            String(today.getMonth() + 1).padStart(2, "0") + "-" +
            String(today.getDate()).padStart(2, "0");

        if (dob === "" || dob >= currentDate) {

            registrationMessage.textContent =
                "Please enter a valid date of birth.";

            registrationMessage.style.color = "red";
            return;
        }


        // Calculate selected membership price
        const price = Number(selectedPlan.value);

        // Display successful registration

        registrationMessage.textContent =
            "Thank you, " + firstName +
            "! Your registration has been received. " +
            "Your membership fee is R" + price + " per month.";

        registrationMessage.style.color = "green";


        // Display registration information in console
        console.log("REGISTRATION DETAILS");
        console.log("Name: " + firstName + " " + lastName);
        console.log("Email: " + email);
        console.log("Phone: " + phone);
        console.log("Date of Birth: " + dob);
        console.log("Fitness Level: " + fitnessLevel);
        console.log("Membership Price: R" + price);
    });
    }
    
// MEMBERSHIP PRICE
const membershipPrice = document.getElementById("membershipPrice");

$(document).ready(function (){
    $('input[name="plan"]').on("change", function(){

        const selectedPrice = $(this).val();
        console.log("Selected:" , selectedPrice);

        $("#membershipPrice").text("selected membership: R" + selectedPrice + "per month");
    });
});

document.addEventListener('DOMContentLoaded', function() {

  // --- 1. STICKY NAV ---
  const mainNav = document.getElementById("main-nav");
  if (mainNav) {
    window.addEventListener("scroll", function() {
      if (window.scrollY > 50) {
        mainNav.classList.add('scrolled');
      } else {
        mainNav.classList.remove('scrolled');
      }
    });
  }

  // --- 2. IMAGE SLIDER INSIDE GREEN CARD ---
  const imageList = document.getElementById('imageList');
  if (imageList) {
    let currentIndex = 0;
    const totalImages = 4;

    function showSlide(index) {
      imageList.style.transform = `translateX(-${index * 25}%)`;
    }

    setInterval(function() {
      currentIndex = (currentIndex + 1) % totalImages;
      showSlide(currentIndex);
    }, 2500);
  }


  // --- 4. MEMBERSHIP PRICE SELECT ---
  const planInputs = document.querySelectorAll('input[name="plan"]');
  const priceDisplay = document.getElementById('membershipPrice');
  const modalPrice = document.getElementById('modalPrice');
  const successModal = document.getElementById('successModal');

  planInputs.forEach(function(input) {
    input.addEventListener('change', function() {
      const price = this.value;
      if (priceDisplay) {
        priceDisplay.textContent = `selected membership: R ${price}`;
      }
      if (modalPrice) {
        modalPrice.textContent = `You selected R ${price} /month`;
      }
      if (successModal) {
        successModal.style.display = 'block';      
  }
});
});
// HAMBURGER MENU

const menuToggle = document.querySelector("#menu-toggle");
const hamburgerMenu = document.querySelector("#hamburger-menu");

menuToggle.addEventListener("click", function () {
    if (hamburgerMenu.classList.contains("hamburger-menu-inactive")) {
        
        hamburgerMenu.classList.remove("hamburger-menu-inactive");
        hamburgerMenu.classList.add("hamburger-menu-active");
    } else {
        hamburgerMenu.classList.remove("hamburger-menu-active");
        hamburgerMenu.classList.add("hamburger-menu-inactive");
    }
});

// Gallery Lightbox - SERVICES PAGE

$(document).ready(function () {

    var currentGallery = [];
    var currentIndex = 0;

    function showImage(index) {
        currentIndex = index;
        var $img = currentGallery.eq(index);
        $("#lightbox-image")
            .attr("src", $img.attr("src"))
            .attr("alt", $img.attr("alt"));
    }

    function closeLightbox() {
        $("#lightbox").removeClass("open");
    }

    $(".gallery-item").on("click", function () {
        currentGallery = $(this).closest(".gallery-list").find(".gallery-item");
        showImage(currentGallery.index(this));
        $("#lightbox").addClass("open");
    });

    $("#lightbox-close").on("click", closeLightbox);

    $("#lightbox").on("click", function (e) {
        if (e.target === this) {
            closeLightbox();
        }
    });

    $("#lightbox-next").on("click", function () {
        showImage((currentIndex + 1) % currentGallery.length);
    });

    $("#lightbox-prev").on("click", function () {
        showImage((currentIndex - 1 + currentGallery.length) % currentGallery.length);
    });

    $(document).on("keydown", function (e) {
        if (e.key === "Escape") {
            closeLightbox();
        }
    });

});
});
    /* ===== 3. Contact page: form messages ===== */
    if ($("#contact-form").length) {

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        function showMessage(text, type) {
            $("#form-message")
                .removeClass("success error")
                .addClass(type)
                .text(text);
        }

        $("#contact-form").on("submit", function (e) {
            e.preventDefault();

            var name = $("#name").val().trim();
            var email = $("#email").val().trim();
            var message = $("#message").val().trim();

            if (name === "") {
                showMessage("Please enter your name.", "error");
                $("#name").focus();
                return;
            }

            if (!emailPattern.test(email)) {
                showMessage("Please enter a valid email address.", "error");
                $("#email").focus();
                return;
            }

            if (message.length < 10) {
                showMessage("Your message must be at least 10 characters long.", "error");
                $("#message").focus();
                return;
            }

            showMessage("Thank you, " + name + "! Your message has been sent. We will get back to you soon.", "success");
            this.reset();
        });
    }


    /* ===== 4. Contact page: Leaflet map ===== */
    if ($("#map").length) {

        var gymLat = -33.9249;
        var gymLng = 18.4241;

        var map = L.map("map").setView([gymLat, gymLng], 15);

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: "&copy; OpenStreetMap contributors"
        }).addTo(map);

        L.marker([gymLat, gymLng])
            .addTo(map)
            .bindPopup("<b>Neo's Fitness Club</b><br>Come train with us!")
            .openPopup();
    }

