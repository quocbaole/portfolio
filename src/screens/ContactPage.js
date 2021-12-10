import React from 'react'
import { FaEnvelope, FaMapMarker, FaPhone, FaTimes, FaUserAlt } from 'react-icons/fa'
import contact from '../images/contact.png'

const ContactPage = (props) => {
  return (
    <div className='contact-page'>
      <div className='container'>
        <div className='title'>
          <h1>Let's get in touch</h1>
          <p>I'm open for any suggestion or just to have a chat.</p>
        </div>
        <div className='flex-block'>
          <div className='info'>
            <div className='info-flex-block'>

              <div className='item'>
                <div className='icon'>
                  <FaMapMarker />
                </div>
                <div className='content'>
                  <h5>Address</h5>
                  <p>118 Vo Van Hat, District 9, Thu Duc City</p>
                </div>
              </div>
              <div className='item'>
                <div className='icon'>
                  <FaPhone />
                </div>
                <div className='content'>
                  <h5>Phone</h5>
                  <p>0889 210 454</p>
                </div>
              </div>
              <div className='item'>
                <div className='icon'>
                  <FaEnvelope />
                </div>
                <div className='content'>
                  <h5>Email</h5>
                  <p>quocbaole5420@gmail.com</p>
                </div>
              </div>
            </div>
            <img src={contact} alt='contact' />
          </div>

          <div className='mail'>
            {/* <h3>Send Message</h3> */}
            <form>
              <div className='cus-input'>
                <FaUserAlt />
                <input placeholder='Full Name' />

              </div>
              <div className='cus-input'>
                <FaEnvelope />
                <input placeholder='Email' />
              </div>
              <div className='cus-input'>

                <textarea placeholder='Message' />
              </div>
              <button>Send message</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ContactPage
