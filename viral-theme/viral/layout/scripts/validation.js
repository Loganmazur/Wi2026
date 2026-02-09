// ===== ContactForm Class =====
// A class is like a blueprint that organizes related code together
// This class handles everything about the contact form

class ContactForm {
    
    // ===== CONSTRUCTOR =====
    // The constructor runs automatically when you create a new ContactForm
    // It sets up all the initial values (properties) for the form
    constructor(formName) {
        // Get the form element by its name
        this.form = document.forms[formName];
        
        // Get all the input fields and store them as properties
        // 'this.' means "this object's property"
        this.messageTextarea = document.getElementById("message");
        this.charCount = document.getElementById("charCount");
        this.topicSelect = document.getElementById("topic");
        this.countrySelect = document.getElementById("countrySelect");
        this.submitBtn = this.form.querySelector('input[value="Submit Form"]');
        
        // Store validation patterns (regex) as properties
        this.emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        this.phonePattern = /^\d{10}$/;
        
        // Array of country names
        this.countries = [
            "United States",
            "Canada",
            "Mexico",
            "United Kingdom",
            "Germany",
            "France",
            "Japan",
            "Australia",
            "Poland"
        ];
        
        // Call the init method to set everything up
        this.init();
    }
    
    // ===== INIT METHOD =====
    // Initialize all the form functionality
    init() {
        this.populateCountries();       // Add countries to dropdown
        this.setupCharacterCounter();   // Set up character counter
        this.setupSubmitButton();       // Set up submit button
        this.setupSelectorCleanup();    // Set up dropdown cleanup
    }
    
    // ===== POPULATE COUNTRIES METHOD =====
    // Add all country options to the country dropdown
    populateCountries() {
        // We need to save 'this' because inside forEach, 'this' changes
        const self = this;
        
        // Loop through each country in the array
        this.countries.forEach(function(country) {
            // Create a new <option> element
            const option = document.createElement("option");
            
            // Set the value and text for the option
            option.value = country;
            option.textContent = country;
            
            // Add the option to the dropdown
            // We use 'self' instead of 'this' here
            self.countrySelect.appendChild(option);
        });
    }
    
    // ===== SETUP CHARACTER COUNTER METHOD =====
    // Updates the character count as user types in the message field
    setupCharacterCounter() {
        // Save 'this' so we can use it inside the event listener
        const self = this;
        
        // Add event listener for when user types
        this.messageTextarea.addEventListener("input", function() {
            // Update the display with current character count
            self.charCount.textContent = self.messageTextarea.value.length + " / 500";
        });
    }
    
    // ===== SETUP SUBMIT BUTTON METHOD =====
    // Add click handler to the submit button
    setupSubmitButton() {
        // Save 'this' for use inside the event listener
        const self = this;
        
        // When button is clicked, call the handleSubmit method
        this.submitBtn.addEventListener("click", function() {
            self.handleSubmit();
        });
    }
    
    // ===== SETUP SELECTOR CLEANUP METHOD =====
    // Hide the default "Select..." options after user makes a selection
    setupSelectorCleanup() {
        // Save 'this' for use inside event listeners
        const self = this;
        
        // Cleanup for topic dropdown
        this.topicSelect.addEventListener("change", function() {
            const defaultOption = self.topicSelect.options[0];
            
            if (self.topicSelect.value !== "") {
                defaultOption.disabled = true;  // Can't select it anymore
                defaultOption.hidden = true;    // Hide it from view
            }
        });
        
        // Cleanup for country dropdown (same logic)
        this.countrySelect.addEventListener("change", function() {
            const defaultOption = self.countrySelect.options[0];
            
            if (self.countrySelect.value !== "") {
                defaultOption.disabled = true;
                defaultOption.hidden = true;
            }
        });
    }
    
    // ===== GET FORM DATA METHOD =====
    // Collect all form values and return them as an object
    getFormData() {
        // .trim() removes extra spaces from the beginning and end
        return {
            name: this.form["name"].value.trim(),
            email: this.form["email"].value.trim(),
            phone: this.form["phone"].value.trim(),
            topic: this.topicSelect.value,
            country: this.countrySelect.value,
            message: this.messageTextarea.value.trim()
        };
    }
    
    // ===== VALIDATE NAME METHOD =====
    // Check if name field is filled in
    validateName(name) {
        if (name === "") {
            alert("Name is required.");
            return false;  // Validation failed
        }
        return true;  // Validation passed
    }
    
    // ===== VALIDATE EMAIL METHOD =====
    // Check if email is filled in and has correct format
    validateEmail(email) {
        // Check if empty
        if (email === "") {
            alert("Email is required.");
            return false;
        }
        
        // Check if it matches the email pattern
        // .test() checks if the string matches the regex pattern
        if (!this.emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }
        
        return true;
    }
    
    // ===== VALIDATE PHONE METHOD =====
    // Phone is optional, but if provided must be 10 digits
    validatePhone(phone) {
        // Only check if user entered something
        if (phone !== "" && !this.phonePattern.test(phone)) {
            alert("Phone number must be 10 digits.");
            return false;
        }
        return true;
    }
    
    // ===== VALIDATE TOPIC METHOD =====
    // Check if a topic was selected
    validateTopic(topic) {
        if (topic === "") {
            alert("Topic is required.");
            return false;
        }
        return true;
    }
    
    // ===== VALIDATE COUNTRY METHOD =====
    // Check if a country was selected
    validateCountry(country) {
        if (country === "") {
            alert("Country is required.");
            return false;
        }
        return true;
    }
    
    // ===== VALIDATE MESSAGE METHOD =====
    // Check if message is filled in and not too long
    validateMessage(message) {
        if (message === "") {
            alert("Message is required.");
            return false;
        }
        
        if (message.length > 500) {
            alert("Message cannot exceed 500 characters.");
            return false;
        }
        
        return true;
    }
    
    // ===== VALIDATE ALL FIELDS METHOD =====
    // Run all validation methods
    // If any return false, the whole method returns false
    validateAllFields(formData) {
        // The && operator means "and" - all must be true
        return this.validateName(formData.name) &&
               this.validateEmail(formData.email) &&
               this.validatePhone(formData.phone) &&
               this.validateTopic(formData.topic) &&
               this.validateCountry(formData.country) &&
               this.validateMessage(formData.message);
    }
    
    // ===== DISPLAY TOPIC MESSAGE METHOD =====
    // Show a message based on which topic was selected
    displayTopicMessage(topic) {
        // BRANCHING LOGIC - different message for each topic
        if (topic === "general") {
            alert("Thank you! Your general inquiry has been received and will be routed to our General team.");
        } else if (topic === "sales") {
            alert("Thank you! Your sales inquiry has been received and will be routed to our Sales team.");
        } else if (topic === "support") {
            alert("Thank you! Your support request has been received and will be routed to our Support team.");
        } else if (topic === "feedback") {
            alert("Thank you! Your feedback has been received and will be routed to our Feedback team.");
        }
    }
    
    // ===== DISPLAY SUBMISSION SUMMARY METHOD =====
    // Show all the submitted data back to the user
    displaySubmissionSummary(formData) {
        // \n means "new line"
        // || means "or" - if phone is empty, show "Not provided"
        alert(
            "Form Submitted Successfully!\n\n" +
            "Name: " + formData.name + "\n" +
            "Email: " + formData.email + "\n" +
            "Phone: " + (formData.phone || "Not provided") + "\n" +
            "Country: " + formData.country + "\n" +
            "Topic: " + formData.topic + "\n" +
            "Message: " + formData.message
        );
    }
    
    // ===== HANDLE SUBMIT METHOD =====
    // This is the main method that runs when user clicks submit
    handleSubmit() {
        // Step 1: Collect all the form data
        const formData = this.getFormData();
        
        // Step 2: Validate all the data
        // If validation fails, stop here (return exits the method)
        if (!this.validateAllFields(formData)) {
            return;
        }
        
        // Step 3: Show topic-specific message
        this.displayTopicMessage(formData.topic);
        
        // Step 4: Show complete submission summary
        this.displaySubmissionSummary(formData);
    }
}

// ===== START THE FORM =====
// Wait for the page to fully load before creating the form
document.addEventListener("DOMContentLoaded", function() {
    // Create a new ContactForm object
    // This automatically runs the constructor and sets everything up
    const contactForm = new ContactForm("contactForm");
    console.log(contactForm);
});