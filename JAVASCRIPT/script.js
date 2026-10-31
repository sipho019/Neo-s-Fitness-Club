$(document).ready(function(){
    $(".accordion-header").click(function(){
        const currentContent = $(this).next(".accordion-content");

        /* Toggle active state on click header */

    $(this).toggleClass(".active");

    // Toggle the indicator icon (+)
    if($(this).hasClass(".active")){
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
const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {

    // Select membership price and message elements
    
    const registrationMessage = document.getElementById("registrationMessage");
    
   




  
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
  const mainNav = document.getElementById('mainNav');
  if (mainNav) {
    window.addEventListener('scroll', function() {
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

  // --- 5. TABS ---
  const tabLinks = document.querySelectorAll('.tab-link');
  tabLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      document.querySelectorAll('.tab-link').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
      this.classList.add('active');
      const targetTab = document.getElementById(tabId);
      if (targetTab) targetTab.classList.add('active');
    });
  });

});