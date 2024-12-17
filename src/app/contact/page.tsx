import React from 'react'

function Contact() {
  return (
    <section className="contact-form">
     <h2 className="fade-in">Contact Us</h2>
     <form>
      <input type="email" placeholder='Full Name' required/>
      <input type="text" placeholder='Email Address'required/>
      <input type="text" placeholder='Phone Number'/>
      <textarea placeholder='Your Massage' rows={5} required></textarea>
      <button type="submit">Send Massage</button>

     </form>
    </section>
  )
}

export default Contact