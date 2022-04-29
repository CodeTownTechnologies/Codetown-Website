import React from 'react'
import { Card, Container } from 'react-bootstrap'
import "../contact/contact.css"

const Contact = () => {
  return (
    <>
      <div className="contact-box">
        <p style={{ marginBottom: 0 }}>Like What you see?</p>
        <div style={{ textAlign: 'left', marginTop: 0, paddingTop: 0, justifyContent: 'left' }}>
          <h1 style={{ textAlign: 'left', marginTop: 0, paddingTop: 0 }}>Say Hello !</h1>
          <hr style={{ textAlign: 'left', justifyContent: 'left', float: 'left', marginTop: 0, paddingTop: 0, }} width="175px" color="orangered" />
        </div>
      </div>
    </>
  )
}

export default Contact