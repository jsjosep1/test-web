import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contactform.css'

export const ContactUs = () => {
  const [showNotification, setShowNotification] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vjr84ps', 'template_gmt2y7l', form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          console.log('SUCCESS!');
          setShowNotification(true);
          setTimeout(() => {
            setShowNotification(false);
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='form-container'>
      <h2>Feel free to contact us</h2>
      <form className='form' ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      {showNotification && <div className='notification'>Message sent successfully!</div>}
    </div>
  );
};