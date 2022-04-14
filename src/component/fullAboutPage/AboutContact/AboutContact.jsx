import React from "react";
import "../AboutContact/AboutContact.scss";
import {  EmailOutlined} from '@material-ui/icons';

const AboutContact = () => {
  return (
    <div className="main-container12">
      <div className="container12">
        <h1 className="brand">
          <span></span> Contact Us
          {/* <hr width="29px" /> */}
        </h1>

        <div className="wrapper animated bounceInLeft">
          <div className="company-info">
            <h3>Time to break the ice ?</h3>            
            <ul>
              <li>
                <i className="fa fa-road"></i> We Would love to hear from you.
              </li>
              <br />
              <li>
                <i className="fa fa-phone"></i> Please fill the form or send us an email
              </li>
              <li>
                <i ></i>sales@codetown.com
              </li>
            </ul>
          </div>
          <div className="contact">
            <h3>Email Us</h3>
            <form>
              <p>
                <label>Name</label>
                <input type="text" name="name" />
              </p>

              <p>
                <label>Company</label>
                <input type="text" name="company" />
              </p>

              <p>
                <label>Email Adress</label>
                <input type="email" name="email" />
              </p>

              <p>
                <label>Phone Number</label>
                <input type="text" name="phone" />
              </p>

              <p className="full">
                <label>Message</label>
                <textarea name="message" rows="5"></textarea>
              </p>

              <p className="full">
                <button>Submit</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContact;
