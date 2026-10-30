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



registrationForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const firstName = document.getElementById("firstName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const dob = document.getElementById("dob").value;
            const fitnessLevel = document.getElementById("fitnessLevel").value;

            const selectedPlan = document.querySelector('input[name="plan"]:checked');


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


// MEMBERSHIP PRICE USING JQUERY

$('input[name="plan"]').on('change', function () {

    // Get the selected membership price
    const price = Number($(this).val());

    // Display the selected price
    $('#membershipPrice').text(
        'Selected membership: R' + price + ' per month'
    );

});


            // Display registration information in the console
            console.log("REGISTRATION DETAILS");
            console.log("Name: " + firstName + " " + lastName);
            console.log("Email: " + email);
            console.log("Phone: " + phone);
            console.log("Date of Birth: " + dob);
            console.log("Fitness Level: " + fitnessLevel);
            console.log("Membership Price: R" + price);

        });
    });