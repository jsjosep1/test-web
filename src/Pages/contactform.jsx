import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contactform.css'

export const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);

    emailjs
      .sendForm('service_vjr84ps', 'template_gmt2y7l', form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitting(false);
          setIsSubmitted(true);

          // Hide the confirmation message after 3 seconds
          setTimeout(() => {
            setIsSubmitted(false);
          }, 3000);
          
          // Optionally reset form fields
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className='form-container' data-aos = "fade-up">
      <h2>Feel free to contact us</h2>
      <form className='form' ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <div className="spinner"></div> : 'Send'}
        </button>
      </form>
      {isSubmitted && <p className='confirmation-message'>Thank you! Your message has been sent successfully.</p>}
    </div>
  );
};