import { useState } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';

const CONTACT_EMAIL = 'primevaldigitals@gmail.com';
const WHATSAPP_LINK = 'https://wa.me/263789880071';

const socialLinks = [
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/Primegotit' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/promise-siafwiyo' },
    { icon: FaWhatsapp, label: 'WhatsApp', href: WHATSAPP_LINK },
    { icon: FaYoutube, label: 'YouTube', href: 'https://youtube.com/@blaunx' },
];

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        const { name, email, subject, message } = formData;
        const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
            subject || `Portfolio message from ${name}`
        )}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\n${message}`
        )}`;

        window.location.href = mailtoLink;
    }

    return (
        <>
            <div id="contact">
                <div id="contact-page-container">
                    <h3 id="contact-heading">Contact</h3>

                    <div id="contact-content">
                        <div id="contact-info">
                            <p id="contact-intro">
                                Have a project in mind or want to collaborate? Send me a message and
                                I&apos;ll get back to you as soon as possible.
                            </p>

                            <div id="contact-social">
                                <p id="contact-social-label">Connect with me</p>
                                <div id="contact-social-links">
                                    {socialLinks.map(({ icon: Icon, label, href }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="contact-social-link"
                                            aria-label={label}
                                        >
                                            <Icon />
                                            <span>{label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <form id="contact-form" onSubmit={handleSubmit}>
                            <div className="contact-field">
                                <label htmlFor="contact-name">Name</label>
                                <input
                                    type="text"
                                    id="contact-name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact-email">Email</label>
                                <input
                                    type="email"
                                    id="contact-email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact-subject">Subject</label>
                                <input
                                    type="text"
                                    id="contact-subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="What's this about?"
                                    required
                                />
                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact-message">Message</label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project or idea..."
                                    rows={5}
                                    required
                                />
                            </div>

                            <button type="submit" id="contact-submit-btn">
                                Send Message
                                <IoSend id="contact-submit-icon" />
                            </button>
                        </form>
                    </div>

                    <div id="contact-horizontal-line" />
                </div>
            </div>
        </>
    );
}

export default Contact;
