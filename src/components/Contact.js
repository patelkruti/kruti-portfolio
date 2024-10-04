import React, { useState } from 'react';
import './../styles.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert(`Message sent from ${name}`);
    };

    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Your Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Your Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <textarea 
                    placeholder="Your Message" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    required 
                />
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
