// ===== ContactForm Class =====
class ContactForm {
    
    // ===== CONSTRUCTOR =====
    constructor(formName) {
        this.form = document.forms[formName];
        this.messageTextarea = document.getElementById("message");
        this.charCount = document.getElementById("charCount");
        this.topicSelect = document.getElementById("topic");
        this.countrySelect = document.getElementById("countrySelect");
        this.submitBtn = this.form.querySelector('input[value="Submit Form"]');
        
        this.emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        this.phonePattern = /^\d{10}$/;
        
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
        
        this.init();
    }
    
    // ===== INIT METHOD =====
    init() {
        this.populateCountries();
        this.setupCharacterCounter();
        this.setupSubmitButton();
        this.setupSelectorCleanup();
    }
    
    // ===== POPULATE COUNTRIES METHOD =====
    populateCountries() {
        const self = this;
        
        this.countries.forEach(function(country) {
            const option = document.createElement("option");
            option.value = country;
            option.textContent = country;
            self.countrySelect.appendChild(option);
        });
    }
    
    // ===== SETUP CHARACTER COUNTER METHOD =====
    setupCharacterCounter() {
        const self = this;
        
        this.messageTextarea.addEventListener("input", function() {
            self.charCount.textContent = self.messageTextarea.value.length + " / 500";
        });
    }
    
    // ===== SETUP SUBMIT BUTTON METHOD =====
    setupSubmitButton() {
        const self = this;
        
        this.submitBtn.addEventListener("click", function() {
            self.handleSubmit();
        });
    }
    
    // ===== SETUP SELECTOR CLEANUP METHOD =====
    setupSelectorCleanup() {
        const self = this;
        
        this.topicSelect.addEventListener("change", function() {
            const defaultOption = self.topicSelect.options[0];
            
            if (self.topicSelect.value !== "") {
                defaultOption.disabled = true;
                defaultOption.hidden = true;
            }
        });
        
        this.countrySelect.addEventListener("change", function() {
            const defaultOption = self.countrySelect.options[0];
            
            if (self.countrySelect.value !== "") {
                defaultOption.disabled = true;
                defaultOption.hidden = true;
            }
        });
    }
    
    // ===== GET FORM DATA METHOD =====
    getFormData() {
        return {
            name: this.form["name"].value.trim(),
            email: this.form["email"].value.trim(),
            phone: this.form["phone"].value.trim(),
            country: this.countrySelect.value,
            topic: this.topicSelect.value,
            message: this.messageTextarea.value.trim()
        };
    }
    
    // ===== VALIDATION METHODS =====
    validateName(name) {
        if (name === "") {
            alert("Name is required.");
            return false;
        }
        return true;
    }
    
    validateEmail(email) {
        if (email === "") {
            alert("Email is required.");
            return false;
        }
        
        if (!this.emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }
        
        return true;
    }
    
    validatePhone(phone) {
        if (phone !== "" && !this.phonePattern.test(phone)) {
            alert("Phone number must be 10 digits.");
            return false;
        }
        return true;
    }
    
    validateCountry(country) {
        if (country === "") {
            alert("Country is required.");
            return false;
        }
        return true;
    }
    
    validateTopic(topic) {
        if (topic === "") {
            alert("Topic is required.");
            return false;
        }
        return true;
    }
    
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
    
    validateAllFields(formData) {
        return this.validateName(formData.name) &&
               this.validateEmail(formData.email) &&
               this.validatePhone(formData.phone) &&
               this.validateCountry(formData.country) &&
               this.validateTopic(formData.topic) &&
               this.validateMessage(formData.message);
    }
    
    // ===== DISPLAY METHODS =====
    displayTopicMessage(topic) {
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
    
    displaySubmissionSummary(formData) {
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
    handleSubmit() {
        const formData = this.getFormData();
        
        if (!this.validateAllFields(formData)) {
            return;
        }
        
        this.displayTopicMessage(formData.topic);
        this.displaySubmissionSummary(formData);
    }
}

// ===== INITIALIZE FORM =====
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = new ContactForm("contactForm");
    console.log(contactForm);
});