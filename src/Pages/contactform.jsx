import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contactform.css';

export const ContactUs = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState({
    user_name: '',
    user_email: '',
    user_num: '',
    message: '',
    callback: false,
  });

  const validate = () => {
    const errors = {};
    if (!formValues.user_name.trim()) {
      errors.user_name = 'Name is required';
    }
    if (!formValues.user_email) {
      errors.user_email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.user_email)) {
      errors.user_email = 'Email is invalid';
    }
    if (formValues.callback && !formValues.user_num.trim()) {
      errors.user_num = 'Phone number is required if requesting a callback';
    }
    if (!formValues.message.trim()) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(form.current);
    if (formValues.callback) {
      formData.set('callback', 'Yes');
    } else {
      formData.set('callback','No')
    }

    emailjs.sendForm('service_vjr84ps', 'template_gmt2y7l', form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        setFormValues({
          user_name: '',
          user_email: '',
          user_num: '',
          message: '',
          callback: false,
        });
        setFormErrors({});
      })
      .catch(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className='form-container' data-aos="fade-up">
      <h2>Feel free to leave us a message or request a call back</h2>
      <form className='form' ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          value={formValues.user_name}
          onChange={handleChange}
        />
        {formErrors.user_name && <p className='error-message'>{formErrors.user_name}</p>}

        <label>Email</label>
        <input
          type="email"
          name="user_email"
          value={formValues.user_email}
          onChange={handleChange}
        />
        {formErrors.user_email && <p className='error-message'>{formErrors.user_email}</p>}

        <label>Phone</label>
        <input
          type="tel"
          name="user_num"
          value={formValues.user_num}
          onChange={handleChange}
        />
        {formErrors.user_num && <p className='error-message'>{formErrors.user_num}</p>}

        <label>Message</label>
        <textarea
          name="message"
          value={formValues.message}
          onChange={handleChange}
        />
        {formErrors.message && <p className='error-message'>{formErrors.message}</p>}

        <label>
          <input
            type="checkbox"
            name="callback"
            checked={formValues.callback}
            onChange={handleChange}
          />
          Request a callback
        </label>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <div className="spinner"></div> : 'Send'}
        </button>
      </form>
      {isSubmitted && <p className='confirmation-message'>Thank you! Your message has been sent successfully.</p>}
    </div>
  );
};

export default ContactUs;

