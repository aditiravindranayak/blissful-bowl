import React, { useState } from 'react';
import axios from 'axios';

const ContactAddressArea = () => {
  return (
    <section className="contact-address-area">
      <div className="container">
        <div className="sec-title-style1 text-center max-width">
          <div className="title">Contact Us</div>
          <div className="text">
            <div className="decor-left"><span></span></div>
            <p>Quick Contact</p>
            <div className="decor-right"><span></span></div>
          </div>
          <div className="bottom-text">
            <p>For any inquiries or feedback, feel free to reach out to us:</p>
          </div>
        </div>
        <div className="contact-address-box row">
          {/* Single Contact Address Box 1 */}
          <div className="col-sm-4 single-contact-address-box text-center">
            <div className="icon-holder">
              <span className="icon-clock-1"></span>
            </div>
            <h3>Savor Simplicity</h3>
            <h2>Nourish Your Body, Delight Your Palate!</h2>
          </div>
          {/* Single Contact Address Box 2 */}
          <div className="col-sm-4 single-contact-address-box main-branch">
            <h3>Lorem Ipsum</h3>
            <div className="inner">
              <ul>
                <li>
                  <div className="title">
                    <h4>Address:</h4>
                  </div>
                  <div className="text">
                    <p>123 Foodie Street, Suite 101<br /> Cityville, State 12345</p>
                  </div>
                </li>
                <li>
                  <div className="title">
                    <h4>Ph & Fax:</h4>
                  </div>
                  <div className="text">
                    <p>+244-5333-7783 <br /> test@info.com</p>
                  </div>
                </li>
                <li>
                  <div className="title">
                    <h4>Office Hrs:</h4>
                  </div>
                  <div className="text">
                    <p>Mon-Fri: 9:30am - 6:30pm<br /> Sat-Sun: Closed</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Single Contact Address Box 3 */}
          <div className="col-sm-4 single-contact-address-box text-center">
            <div className="icon-holder">
              <span className="icon-question-2"></span>
            </div>
            <h3>Nutritious Bowls</h3>
            <h2>Healthy Eating Made Deliciously Easy!</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

const ContactInfoArea = () => {
  const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        website: '',
        subject: '',
        message: ''
      });
    
      const [responseMessage, setResponseMessage] = useState('');
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('/api/contact', formData);
          setResponseMessage(response.data.message);
          // Clear the form after successful submission
          setFormData({
            name: '',
            phone: '',
            email: '',
            website: '',
            subject: '',
            message: ''
          });
        } catch (error) {
          setResponseMessage('Failed to send message, please try again later.');
        }
      };

  return (
    <section className="contact-info-area">
      <div className="auto-container">
        <div className="sec-title">
          <h2>Contact Us</h2>
          <p>Have a question or want to share your experience with us? Use the form below to get in touch:</p>
        </div>
        <div className="inner-box">
          <form id="contact-form" name="contact_form" className="default-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-xl-6 col-lg-12">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="input-box">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder="Name"
                        onChange={handleChange}
                        required
                        style={{ width: '100%', height: '50px' }} // Maintain height and width
                      />
                    </div>
                    <div className="input-box">
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        placeholder="Phone"
                        onChange={handleChange}
                        style={{ width: '100%', height: '50px' }} // Maintain height and width
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="input-box">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Email"
                        onChange={handleChange}
                        required
                        style={{ width: '100%', height: '50px' }} // Maintain height and width
                      />
                    </div>
                    <div className="input-box">
                      <input
                        type="text"
                        name="website"
                        value={formData.website}
                        placeholder="Website"
                        onChange={handleChange}
                        style={{ width: '100%', height: '50px' }} // Maintain height and width
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="input-box">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        placeholder="Subject"
                        onChange={handleChange}
                        style={{ width: '100%', height: '50px' }} // Maintain height and width
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12">
                <div className="input-box">
                  <textarea
                    name="message"
                    value={formData.message}
                    placeholder="Your Message..."
                    onChange={handleChange}
                    required
                    style={{ width: '100%', height: '150px' }} // Maintain height and width
                  ></textarea>
                </div>
                <div className="button-box">
                  <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" value="" />
                  <button type="submit" data-loading-text="Please wait..." style={{ height: '50px' }}>
                    Send Message<span className="flaticon-next"></span>
                  </button>
                </div>
              </div>
            </div>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </div>
    </section>
  );
}

const Contact = () => {
  return (
    <div>
      <ContactAddressArea />
      <ContactInfoArea />
    </div>
  );
}

export default Contact;

