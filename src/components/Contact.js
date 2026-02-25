import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function Contact() {
  const [charCount, setCharCount] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    topic: '',
    message: ''
  });
  useEffect(() => {
    document.title = 'Contact';
  }, []);

  const countries = [
    "United States", "Canada", "Mexico", "United Kingdom",
    "Germany", "France", "Japan", "Australia", "Poland"
  ];

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\d{10}$/;

  // ===== HANDLE INPUT CHANGES =====
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'message') setCharCount(value.length);
  }

  // ===== VALIDATION METHODS =====
  function validateName(name) {
    if (name === '') { alert('Name is required.'); return false; }
    return true;
  }

  function validateEmail(email) {
    if (email === '') { alert('Email is required.'); return false; }
    if (!emailPattern.test(email)) { alert('Please enter a valid email address.'); return false; }
    return true;
  }

  function validatePhone(phone) {
    if (phone !== '' && !phonePattern.test(phone)) { alert('Phone number must be 10 digits.'); return false; }
    return true;
  }

  function validateCountry(country) {
    if (country === '') { alert('Country is required.'); return false; }
    return true;
  }

  function validateTopic(topic) {
    if (topic === '') { alert('Topic is required.'); return false; }
    return true;
  }

  function validateMessage(message) {
    if (message === '') { alert('Message is required.'); return false; }
    if (message.length > 500) { alert('Message cannot exceed 500 characters.'); return false; }
    return true;
  }

  // ===== DISPLAY METHODS =====
  function displayTopicMessage(topic) {
    const messages = {
      general: 'Thank you! Your general inquiry has been received.',
      sales: 'Thank you! Your sales inquiry has been received.',
      support: 'Thank you! Your support request has been received.',
      feedback: 'Thank you! Your feedback has been received.'
    };
    alert(messages[topic]);
  }

  function displaySubmissionSummary(data) {
    alert(
      'Form Submitted Successfully!\n\n' +
      'Name: ' + data.name + '\n' +
      'Email: ' + data.email + '\n' +
      'Phone: ' + (data.phone || 'Not provided') + '\n' +
      'Country: ' + data.country + '\n' +
      'Topic: ' + data.topic + '\n' +
      'Message: ' + data.message
    );
  }

  // ===== HANDLE SUBMIT =====
  function handleSubmit(e) {
    e.preventDefault();

    const isValid =
      validateName(formData.name) &&
      validateEmail(formData.email) &&
      validatePhone(formData.phone) &&
      validateCountry(formData.country) &&
      validateTopic(formData.topic) &&
      validateMessage(formData.message);

    if (!isValid) return;

    displayTopicMessage(formData.topic);
    displaySubmissionSummary(formData);
  }

return (
    <div>
      {/* ===== BREADCRUMB BANNER WITH BACKGROUND IMAGE ===== */}
      <div className="wrapper row2 bgded" style={{ backgroundImage: "url('/layout/images/demo/backgrounds/01.png')" }}>
        <div className="overlay">
          <div id="breadcrumb" className="clear">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Ipsum</a></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== CONTACT FORM SECTION ===== */}
      <div className="wrapper row3">
        <main className="container clear">
          <div className="content">
            <p>Feel free to ask a question or send us a suggestion. We look forward to hearing from you!</p>
            <h2>Write a Comment</h2>
            <form name="contactForm" onSubmit={handleSubmit}>
              <div className="one_third first">
                <label htmlFor="name">Name <span>*</span></label>
                <input type="text" name="name" id="name" onChange={handleChange} />
              </div>
              <div className="one_third">
                <label htmlFor="email">Email <span>*</span></label>
                <input type="text" name="email" id="email" onChange={handleChange} />
              </div>
              <div className="one_third">
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" id="phone" onChange={handleChange} />
              </div>
              <div className="block">
                <label htmlFor="country">Country <span>*</span></label>
                <select id="country" name="country" onChange={handleChange} value={formData.country}>
                  <option value="" disabled={formData.country !== ''} hidden={formData.country !== ''}>
                    Select a country
                  </option>
                  {countries.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              <div className="block">
                <label htmlFor="topic">Topic <span>*</span></label>
                <select id="topic" name="topic" onChange={handleChange} value={formData.topic}>
                  <option value="" disabled={formData.topic !== ''} hidden={formData.topic !== ''}>
                    -- Please Select --
                  </option>
                  <option value="general">General</option>
                  <option value="sales">Sales</option>
                  <option value="support">Support</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div className="block clear">
                <label htmlFor="message">Message <span>*</span></label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  maxLength="500"
                  onChange={handleChange}
                ></textarea>
                <p>{charCount} / 500</p>
              </div>

              <div>
                <input type="submit" value="Submit Form" />
                <input type="reset" value="Reset Form" />
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Contact;