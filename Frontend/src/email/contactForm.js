import React, { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { useHistory, useParams } from 'react-router-dom';

import { useHttpClient } from '../shared/hooks/http-hook';


import './contactForm.css';

export const ContactUs = () => {
  const { sendRequest } = useHttpClient();
  const [loadedEmail, setLoadedEmail] = useState();
  const history = useHistory();
  const form = useRef();

const emailId = useParams().eid;



useEffect(() => {
  const fetchEmail = async () => {
    try {
      const responseData = await sendRequest(
        `http://localhost:5000/api/intern/${emailId}`
      );
      setLoadedEmail(responseData.email);

    } catch (err) {}
  };
  fetchEmail();
}, [sendRequest, emailId]);



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t1uwgis', 'template_gvg0y1o', form.current, 'dHS4-Gb-en3GLiS6s')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      history.push('/emailsend');
  };

// console.log(loadedEmail && loadedEmail.title)

  return (
    <form ref={form} onSubmit={sendEmail} className="place-form" style={{'minHeight': '100vh'}}>
       <h1>Email to internship applicant</h1>

      {/* <h2>Name: {loadedEmail && loadedEmail.title}</h2> */}
      <input type="text" id="fname" name="to_name" value={loadedEmail && loadedEmail.title} />
      {/* <h2>Email: {loadedEmail && loadedEmail.email}</h2> */}
      <input id='lname' type="text" name="from_name" value={loadedEmail && loadedEmail.email}/>
      <br/>
      <label for="message">Message</label>
      <br/>
      <textarea id='message' name="message" rows={4} cols={68} style={{"padding": "14px 20px"}} placeholder="Your email ..."/>
      <br/>
      <input type="submit" value="Send" />
    </form>
  );
};


// <label for="fname">First Name</label>
//     <input type="text" id="fname" name="firstname" placeholder="Your name..">

//     <label for="lname">Last Name</label>
//     <input type="text" id="lname" name="lastname" placeholder="Your last name..">

//     <label for="country">Country</label>
//     <select id="country" name="country">
//       <option value="australia">Australia</option>
//       <option value="canada">Canada</option>
//       <option value="usa">USA</option>
//     </select>
  
//     <input type="submit" value="Submit"></input>