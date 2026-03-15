import React, { useState, useEffect, useRef } from 'react';
import Breadcrumb from './Breadcrumb';
import PageTitle from './PageTitle';
import FormInput from './FormInput';
import FormConfirmation from './FormConfirmation';

function Contact() {
  const [charCount, setCharCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    topic: '',
    message: ''
  });

  const confirmationRef = useRef(null);

  useEffect(() => {
    if (submitted && confirmationRef.current) {
      confirmationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [submitted]);

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

    setSubmitted(true);
  }

  return (
    <div>
      {/* ===== BREADCRUMB BANNER ===== */}
      <PageTitle title="Viral | Pages | Contact" />
      <Breadcrumb title="Contact Us" />

      {/* ===== CONTACT FORM SECTION ===== */}
      <div className="wrapper row3">
        <main className="container clear">
          <div className="content">
            <p>Feel free to ask a question or send us a suggestion. We look forward to hearing from you!</p>
            <h2>Write a Comment</h2>
            <form name="contactForm" onSubmit={handleSubmit}>
              <div className="one_third first">
                <FormInput
                  label="Name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="one_third">
                <FormInput
                  label="Email"
                  name="email"
                  type="text"
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="one_third">
                <FormInput
                  label="Phone"
                  name="phone"
                  type="text"
                  onChange={handleChange}
                  required={false}
                />
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

            {/* ===== CONFIRMATION - SHOWS AFTER SUBMIT ===== */}
            {submitted && (
              <div ref={confirmationRef}>
                <FormConfirmation formData={formData} />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Contact;