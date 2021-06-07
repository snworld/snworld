import React, { useState } from 'react'
import NavbarRu from '../../NavbarRu'
import LangLinkRu from '../../LangLinkRu'
import axios from 'axios'

const ContactRu = () => {

  const [message, setMessage] = useState({
    name: '',
    email: '',
    textMessage: ''
  })
  let [messageSent, setMessageSent] = useState(false)

  const messageSubmit = (e) => {
    e.preventDefault()
    setMessageSent(messageSent = !messageSent)

    if(messageSent) {
      setTimeout(() => {setMessageSent(messageSent = !messageSent)}, 5000)
    }

    axios.post('https://sn-portfolio-server.herokuapp.com/contact', message)

    setMessage({name: '', email: '', textMessage: ''})
  }

  return (
    <>
      <NavbarRu />
      <div className="container contact" style={{maxWidth: "800px"}}>
        <div className="row">
          <div className="col-md-6 text-center">
            <form method="post" onSubmit={messageSubmit}>
              <input 
                required
                type="text" 
                placeholder="Your Name"
                value={message.name}
                onChange={e => setMessage({ ...message, name: e.target.value })}
              />
              <input 
                required
                type="email" 
                placeholder="Your Email" 
                value={message.email} 
                onChange={e => setMessage({ ...message, email: e.target.value })}
              />
              <textarea 
                required
                placeholder="Your Message" 
                rows="3"
                value={message.textMessage} 
                onChange={e => setMessage({ ...message, textMessage: e.target.value })}
              ></textarea>
              <button type="submit" className="btn">Send</button>
            </form>
          </div>
          <div className="col-md-6 text-center">
            <iframe style={{filter: "invert(100%)"}} title="address" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93561.92088019359!2d74.52182116586918!3d42.87685370415718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x492ebaf57cdee27d!2sBishkek!5e0!3m2!1sen!2skg!4v1612128512084!5m2!1sen!2skg" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            <div className="d-flex justify-content-center contact-icons">
              <div className="contact-icon">
                <a target="_blank" rel="noreferrer" href="https://www.t.me/s_nurbekuulu" style={{background: "transparent"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="35" height="35" style={{msTransform: "rotate(360deg)", WebkitTransform: "rotate(360deg)", transform: "rotate(360deg)"}} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472c-.18 1.898-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345c-.48.33-.913.49-1.302.48c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789c.027-.216.325-.437.893-.663c3.498-1.524 5.83-2.529 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635z" fill="#0088cc"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>
                </a>
              </div>
              <div className="contact-icon">
                <a target="_blank" rel="noreferrer" href="https://instagram.com/s_nurbekuulu" style={{background: "transparent"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="35" height="35" style={{msTransform: "rotate(360deg)", WebkitTransform: "rotate(360deg)", transform: "rotate(360deg)"}} preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="#e92b84"><path d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599c.28.28.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598a2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233c0-2.136.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92c.28-.28.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334z"/></g><rect x="0" y="0" width="16" height="16" fill="rgba(0, 0, 0, 0)" /></svg>
                </a>
              </div>
              <div className="contact-icon">
                <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=996701373826" style={{background: "transparent"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="35" height="35" style={{msTransform: "rotate(360deg)", WebkitTransform: "rotate(360deg)", transform: "rotate(360deg)"}} preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="#25D366"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144l-2.494.654l.666-2.433l-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931a6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646c-.182-.065-.315-.099-.445.099c-.133.197-.513.646-.627.775c-.114.133-.232.148-.43.05c-.197-.1-.836-.308-1.592-.985c-.59-.525-.985-1.175-1.103-1.372c-.114-.198-.011-.304.088-.403c.087-.088.197-.232.296-.346c.1-.114.133-.198.198-.33c.065-.134.034-.248-.015-.347c-.05-.099-.445-1.076-.612-1.47c-.16-.389-.323-.335-.445-.34c-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654c0 .977.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992c.47.205.84.326 1.129.418c.475.152.904.129 1.246.08c.38-.058 1.171-.48 1.338-.943c.164-.464.164-.86.114-.943c-.049-.084-.182-.133-.38-.232z"/></g><rect x="0" y="0" width="16" height="16" fill="rgba(0, 0, 0, 0)" /></svg>
                </a>
              </div>
              <div className="contact-icon">
                <a href="mailto:sn.world00@gmail.com" style={{background: "transparent"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="35" height="35" style={{msTransform: "rotate(360deg)", WebkitTransform: "rotate(360deg)", transform: "rotate(360deg)"}} preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 193"><path d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455h40.727z" fill="#4285F4"/><path d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798v98.91z" fill="#34A853"/><path fill="#EA4335" d="M58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.67 34.992l-4.67 40.644L128 145.504z"/><path d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945l-16.292 12.218z" fill="#FBBC04"/><path d="M0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23v23.273z" fill="#C5221F"/><rect x="0" y="0" width="256" height="193" fill="rgba(0, 0, 0, 0)" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className={`form-modal text-center ${messageSent === true ? 'd-block active' : 'inactive'}`} >
          Email is sent successfully and we will<br /> try to respond as soon as possible
        </p>
      </div>
      <LangLinkRu />
    </>
  )
}

export default ContactRu
