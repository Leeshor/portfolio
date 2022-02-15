import React, {useState} from 'react'
import "./ContactSection.css"
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function ContactForm() {

  const [sent, setSent] = useState(false)
  const [textName, setTextName] = useState("")
  const [textEmail, setTextEmail] = useState("")
  const [textMessage, setTextMessage] = useState("")

  const handleSend = async(e) => {
    setSent(true)
    e.preventDefault();
    setTextName("");
    setTextEmail("");
    setTextMessage("");
    try {
       await axios.post("http://localhost:4000/send_mail", {
         textName, textEmail, textMessage
       })
    } catch (error) {
       console.log(error)
    }
    
  }

  return (
  
      <div className="contact_me_section">
      <div className="contact_me_form_section">
      <div className="contact_me_form_section_text">
        <h1>Lets connect</h1>
        <h3>If you would like to connect, please click on the preferable icon below. Alternatively, you can send me a message directly from the contact form.
        Will look forward to hearing from you.</h3>
      <div className="contact_me_form_section_icons">
      <a href="http://linkedin.com/in/lee-shortland-7394a41b0">
      <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" color="#0a66c2"/> </a>
      <a href="https://github.com/Leeshor">
      <FontAwesomeIcon icon={['fab', 'github']} size="3x" color="#040f27"/> </a>
      </div>
      </div>
      <div data-aos="fade-up" className="contact_me_form_container">
        {!sent ? <h1>Send me a message</h1>:<h1>Message sent. Thank you</h1>}
      <form className="contact_me_form" onSubmit={handleSend}>
        <label>Name</label>
        <input type="text" value={textName} onChange={(e) => setTextName(e.target.value)} required/>
        <label>Email</label>
        <input type="email" value={textEmail} onChange={(e) => setTextEmail(e.target.value)} required/>
        <label>Message</label>
        <textarea type="text" cols="2" rows="5" value={textMessage} onChange={(e) => setTextMessage(e.target.value)} required/>
        <div className="contact_me_form_button_position">
        <button className="contact_me_form_submit_button" type="submit"> Send</button>
        </div>
      </form>
      </div>
      </div>
      </div>
  
  )
}

export default ContactForm

