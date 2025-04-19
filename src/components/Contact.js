import React, { useEffect, useState } from 'react';
import instagramIcon from '../assets/images/socialmedia/instagram.png';
import facebookIcon from '../assets/images/socialmedia/facebook.png';
import contactVideo from '../assets/images/contact2/contact2.mp4'
import ScrollArrow from './ScrollArrow';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');
  useEffect(() => {
    document.title = "Contact - Page | TravelEasy | Travel Guide";
  }, []);
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  const sendToWhatsApp = () => {
    if (!name || !phone) {
      alert("Name and Phone Number are required!");
      return;
    }
    const whatsappNumber = "6385118083";
    const message = `Hello!%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AComments: ${encodeURIComponent(comments)}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
    setName('');
    setPhone('');
    setComments('');
  };

  return (
    <>
      <section className="contact-section mt5">
        <div className="container-fluid">
          <h1 className="call1">Contact Us</h1>
          <p className="call2">If you have any questions or want to start a project, feel free to contact us.</p>
          <div className="contact-grid mt-5">
            <div className="contact-form">
              <label htmlFor="firstname">Full Name:</label>
              <input
                type="text"
                id="firstname"
                name="name"
                placeholder="Your FirstName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="lastname">Last Name:</label>
              <input
                type="text"
                id="lastname"
                name="lname"
                placeholder="Your LastName"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <label htmlFor="msg">Message:</label>
              <textarea
                id="msg"
                name="message"
                placeholder="Your Message"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                required
              />
              <button type="button" className="submit-btn" onClick={sendToWhatsApp}>Send Message</button>
            </div>
            <div className="contact-info block">
              <h2 className="heading2">We are here to help</h2>
              <div className="d-flex">
                <a href="https://www.instagram.com/_travel___easy_/profilecard/?igsh=cDg2d243aXFzbWc4" target="_blank" rel="noopener noreferrer">
                  <img src={instagramIcon} alt="Instagram" width="40px" height="40px" id="wts1" />
                </a>
                <a href="https://www.facebook.com/share/15t1iZyeT6/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '20px' }}>
                  <img src={facebookIcon} alt="Facebook" loading="lazy" width="40px" height="40px" />
                </a>
              </div>
              <p className="custom">We’d love to hear from you! Feel free to reach out with any questions or project inquiries. Our team will get back to you as soon as possible.</p>
              <video autoPlay muted loop id="myVideo" width="100%" className="vlog">
                <source src={contactVideo} type="video/ogg" />
              </video>
              <p className="thank">Thank you for interest in Travel Easy! If you have any questions about the service, contact us. We'd like to solve the Questions.</p>
            </div>
          </div>
        </div>
      </section>
      <ScrollArrow />
    </>
  )
}
