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

// Services Page - Dynamic Content Generation

if ($("#service-list").length) {

    var services = [
        {
            name: "Strength Training",
            description: "Strength training helps build muscle, increase physical strength, and improve endurance. Through exercises using weights and resistance, you can develop better stability, support healthy bones, and work towards your personal fitness goals.",
            images: [
                { src: "../MEDIA/strength.push.png", alt: "Strength training exercise" },
                { src: "../MEDIA/strengthcurl.png", alt: "Bicep curl exercise" },
                { src: "../MEDIA/strenghtsquat.png", alt: "Squat exercise" },
                { src: "../MEDIA/strengthgirle.png", alt: "Strength training workout" },
                { src: "../MEDIA/strengthtrain.png", alt: "Gym strength training" }
            ]
        },
        {
            name: "Cardio",
            description: "Cardio exercises improve heart health, stamina, and overall endurance. Activities such as cycling, skipping, and group workouts help you stay active, burn energy, and build a stronger cardiovascular system while enjoying your fitness journey.",
            images: [
                { src: "../MEDIA/spinning.png", alt: "Indoor spinning workout" },
                { src: "../MEDIA/groupclass.png", alt: "Group fitness class" },
                { src: "../MEDIA/cardioworkout.png", alt: "Cardio workout" },
                { src: "../MEDIA/cardioskipping.png", alt: "Skipping exercise" }
            ]
        },
        {
            name: "Nutrition",
            description: "Good nutrition helps fuel your workouts, support recovery, and maintain overall well-being. Learning about balanced meals, healthy food choices, and proper hydration can help you build sustainable habits that complement your fitness goals.",
            images: [
                { src: "../MEDIA/nutrion.png", alt: "Healthy nutrition" },
                { src: "../MEDIA/nutriotionsmothie.png", alt: "Healthy smoothie" },
                { src: "../MEDIA/shakes.png", alt: "Nutritious shakes" },
                { src: "../MEDIA/nutritionfood.png", alt: "Healthy balanced meal" }
            ]
        },
        {
            name: "Swimming",
            description: "Swimming offers a full-body workout that develops endurance, coordination, and muscular strength while placing less impact on the joints. It can also be an enjoyable way to stay active, improve confidence in the water, and support your overall fitness.",
            images: [
                { src: "../MEDIA/swimming.png", alt: "Swimming pool" },
                { src: "../MEDIA/swimmingboy.png", alt: "Swimming practice" },
                { src: "../MEDIA/swimmingkids.png", alt: "Children swimming" },
                { src: "../MEDIA/swimmingtranie.png", alt: "Swimming training" }
            ]
        },
        {
            name: "Yoga",
            description: "Yoga combines movement, stretching, and controlled breathing to improve flexibility, balance, and body awareness. Regular practice can help release tension, encourage relaxation, and create a greater sense of physical and mental balance.",
            images: [
                { src: "../MEDIA/yoga.png", alt: "Peaceful yoga studio" },
                { src: "../MEDIA/yogaclass.png", alt: "Yoga class practice" },
                { src: "../MEDIA/yogagirls.png", alt: "Outdoor yoga session" },
                { src: "../MEDIA/yogagroup.png", alt: "Group yoga session" }
            ]
        },
        {
            name: "Meditation",
            description: "Meditation helps improve mental clarity, reduce stress, and create a sense of inner peace and balance. By focusing on the present moment and your breathing, you can develop greater awareness, improve concentration, and encourage relaxation. It provides a peaceful opportunity to reconnect with yourself and approach daily challenges with a calmer mindset.",
            images: [
                { src: "../MEDIA/madidate.png", alt: "Meditation practice" },
                { src: "../MEDIA/meditation.png", alt: "Peaceful meditation" },
                { src: "../MEDIA/meditationclasses.png", alt: "Group meditation class" },
                { src: "../MEDIA/meditationpeace.png", alt: "Peaceful meditation environment" }
            ]
        }
    ];

    var html = "";

    services.forEach(function (service) {

        var imagesHtml = "";

        service.images.forEach(function (image) {
            imagesHtml += '<img src="' + image.src + '" alt="' + image.alt + '" class="gallery-item">';
        });

        html += '<article class="service-card">' +
                    '<h4>' + service.name + '</h4>' +
                    '<div class="gallery-container">' +
                        '<div class="gallery-slider">' +
                            '<div class="gallery-list">' + imagesHtml + '</div>' +
                        '</div>' +
                    '</div>' +
                    '<p class="service-description">' + service.description + '</p>' +
                '</article>';
    });

    $("#service-list").html(html);
}

// Schedule Page - Dynamic Content Generation

if ($("#schedule-body").length) {

    var schedule = [
        { day: "Monday", className: "Strength Training", time: "08:00 - 09:00", trainer: "Neo", level: "All Levels" },
        { day: "Tuesday", className: "Yoga", time: "17:00 - 18:00", trainer: "Zimvo", level: "Beginner" },
        { day: "Wednesday", className: "Cardio", time: "08:00 - 09:00", trainer: "Alusizo", level: "All Levels" },
        { day: "Thursday", className: "Swimming", time: "17:30 - 18:30", trainer: "Ngcali", level: "All Levels" },
        { day: "Friday", className: "Strength Training", time: "16:00 - 17:00", trainer: "Liyema", level: "Intermediate" },
        { day: "Saturday", className: "Cardio", time: "09:00 - 10:00", trainer: "Thabo", level: "All Levels" },
        { day: "Sunday", className: "Yoga", time: "10:00 - 11:00", trainer: "Sarah", level: "Beginner" }
    ];

    function renderSchedule() {
        var dayChoice = $("#schedule-day").val();
        var classChoice = $("#schedule-class").val();

        var rows = schedule.filter(function (item) {
            var matchesDay = dayChoice === "all" || item.day === dayChoice;
            var matchesClass = classChoice === "all" || item.className === classChoice;
            return matchesDay && matchesClass;
        });

        var scheduleHtml = "";

        rows.forEach(function (item) {
            var levelClass = item.level.toLowerCase().replace(" ", "-");

            scheduleHtml += '<tr>' +
                '<td data-label="Day">' + item.day + '</td>' +
                '<td data-label="Class">' + item.className + '</td>' +
                '<td data-label="Time">' + item.time + '</td>' +
                '<td data-label="Trainer">' + item.trainer + '</td>' +
                '<td data-label="Level"><span class="level-badge ' + levelClass + '">' + item.level + '</span></td>' +
                '</tr>';
        });

        if (rows.length === 0) {
            scheduleHtml = '<tr><td colspan="5" class="no-classes">No classes match your selection.</td></tr>';
        }

        $("#schedule-body").html(scheduleHtml);
    }

    $("#schedule-day, #schedule-class").on("change", renderSchedule);

    renderSchedule();
}
});
    // Contact page: form messages 

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


    // Contact page: Leaflet map

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

