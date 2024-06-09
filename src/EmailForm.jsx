import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Correct the import path
import './assets/styles/emailform.css';

const EmailForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_ry3ypj1';
        const templateId = 'template_nuisw5a';
        const publicKey = 'Kf-pFJguzCzvMilVn';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Zandro',
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams,publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                alert('Zandro has received your message!');
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email: ', error);
            });
    };

    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit} className='emailForm'>
                <p style={{color:"#40916c",fontSize:"40px",fontWeight:"bold",textAlign:"center"}}>Send a email to Zandro!</p>
                <label htmlFor="name">Name : </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    
                    <label htmlFor="email">Email Address : </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    
                    <textarea
                        cols="20"
                        rows="10"
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button className="submit-button" type="submit">Send Email</button>
                    <button className="return-button" type="button" onClick={() => window.location.href = "/App"}>Return</button>
                </form>
            </div>
        </>
    );
};

export default EmailForm;
