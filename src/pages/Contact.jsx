import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="contact contact--success">
        <h2>Successfully Submitted</h2>
        <p>
          Thank you, <strong>{formData.name}</strong>, your message has been
          successfully submitted.
        </p>
        <Link to="/">Go Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="contact">
      <form onSubmit={handleSubmit} className="contact__form">
        <h2>Contact Us</h2>

        <div className="contact__field">
          <label>
            Name<span>*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <small className="contact__error">{errors.name}</small>
          )}
        </div>

        <div className="contact__field">
          <label>
            Email<span>*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <small className="contact__error">{errors.email}</small>
          )}
        </div>

        <div className="contact__field">
          <label>
            Message<span>*</span>
          </label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <small className="contact__error">{errors.message}</small>
          )}
        </div>

        <button type="submit" className="contact__submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
