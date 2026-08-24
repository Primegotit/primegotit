import { useState } from 'react';
import './Footer.css';
import { 
    FaGithub, 
    FaLinkedin, 
    FaWhatsapp, 
    FaYoutube, 
    FaEnvelope, 
    FaArrowUp, 
    FaCode, 
    FaCube, 
    FaGlobe, 
    FaHeart, 
    FaExternalLinkAlt 
} from 'react-icons/fa';
import { PiMusicNoteFill } from 'react-icons/pi';
import { SiTaichigraphics } from 'react-icons/si';

const CONTACT_EMAIL = 'primevaldigitals@gmail.com';
const WHATSAPP_LINK = 'https://wa.me/263789880071';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const navLinks = [
        { label: 'Home', href: '#page1' },
        { label: 'About Me', href: '#page4' },
        { label: 'Technical Skills', href: '#page2' },
        { label: 'Web Projects', href: '#page3' },
        { label: '3D Modelling', href: '#page5' },
        { label: 'Achievements', href: '#resume_page' },
        { label: 'Contact Me', href: '#contact' },
    ];

    const projectLinks = [
        { name: 'Kostic POS', url: 'https://kostic.vercel.app/', desc: 'Smart POS System' },
        { name: 'Trackway App', url: 'https://trackwayapp.vercel.app/', desc: 'Route & Delivery Optimization' },
        { name: 'Pixel Pyre Tech', url: 'https://www.pixelpyre-tech.co.zw/', desc: 'Creative Tech Partner' },
    ];

    const specializations = [
        { icon: FaGlobe, name: 'Web Development' },
        { icon: FaCube, name: '3D Modelling & Art' },
        { icon: SiTaichigraphics, name: 'Graphic Design' },
        { icon: PiMusicNoteFill, name: 'Music Production' },
        { icon: FaCode, name: 'Software & Tutoring' },
    ];

    const socialLinks = [
        { icon: FaGithub, label: 'GitHub', href: 'https://github.com/Primegotit' },
        { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/promise-siafwiyo' },
        { icon: FaWhatsapp, label: 'WhatsApp', href: WHATSAPP_LINK },
        { icon: FaYoutube, label: 'YouTube', href: 'https://youtube.com/@blaunx' },
        { icon: FaEnvelope, label: 'Email', href: `mailto:${CONTACT_EMAIL}` },
    ];

    return (
        <footer id="footer">
            <div id="footer-container">
                
                {/* Main 4-Column Footer Content */}
                <div id="footer-grid">
                    
                    {/* Column 1: Brand & Bio */}
                    <div className="footer-col" id="footer-brand-col">
                        <div id="footer-brand-header">
                            <img 
                                src="/primegotit logo green big 3.png" 
                                alt="PrimeGotit Logo" 
                                id="footer-brand-logo" 
                            />
                            <div>
                                <h3 id="footer-brand-name" className="gradient-text">Promise Siafwiyo</h3>
                                <span id="footer-brand-tagline">Prime • PrimeGotit</span>
                            </div>
                        </div>

                        <p id="footer-bio">
                            Interdisciplinary Specialist & Digital Polymath bridging the gap between creative imagination and functional engineering. Building, designing, breaking, and evolving across the digital space.
                        </p>

                        <div id="footer-status-badge">
                            <span className="status-dot"></span>
                            <span>Open for projects & collaborations</span>
                        </div>
                    </div>

                    {/* Column 2: Navigation Links */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Navigation</h4>
                        <div className="footer-heading-line"></div>
                        <ul className="footer-links-list">
                            {navLinks.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="footer-nav-link">
                                        <span className="link-arrow">›</span>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Featured Projects & Domains */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Featured & Domains</h4>
                        <div className="footer-heading-line"></div>
                        
                        <div className="footer-sub-section">
                            <h5 className="footer-subheading">Live Projects</h5>
                            <ul className="footer-projects-list">
                                {projectLinks.map((proj, idx) => (
                                    <li key={idx}>
                                        <a 
                                            href={proj.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="footer-project-link"
                                        >
                                            <span className="proj-name">{proj.name}</span>
                                            <span className="proj-desc">{proj.desc}</span>
                                            <FaExternalLinkAlt className="proj-icon" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-sub-section">
                            <h5 className="footer-subheading">Expertise</h5>
                            <div className="footer-spec-tags">
                                {specializations.map(({ icon: Icon, name }, i) => (
                                    <span key={i} className="footer-spec-tag">
                                        <Icon className="spec-tag-icon" />
                                        {name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Connect & Action */}
                    <div className="footer-col" id="footer-connect-col">
                        <h4 className="footer-heading">Connect</h4>
                        <div className="footer-heading-line"></div>
                        <p className="footer-connect-intro">
                            Let's talk code, 3D art, or innovative ideas. Reach out directly on any platform:
                        </p>

                        <div id="footer-social-icons">
                            {socialLinks.map(({ icon: Icon, label, href }) => (
                                <a 
                                    key={label}
                                    href={href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="footer-social-btn"
                                    aria-label={label}
                                    title={label}
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>

                        <div id="footer-direct-contact">
                            <a href={`mailto:${CONTACT_EMAIL}`} className="footer-email-badge">
                                <FaEnvelope className="email-badge-icon" />
                                <span>{CONTACT_EMAIL}</span>
                            </a>
                        </div>

                        <button 
                            id="footer-back-to-top" 
                            onClick={scrollToTop}
                            aria-label="Scroll back to top"
                        >
                            <span>Back to Top</span>
                            <FaArrowUp id="back-to-top-arrow" />
                        </button>
                    </div>

                </div>

                {/* Glowing Horizontal Accent Line */}
                <div id="footer-horizontal-line"></div>

                {/* Bottom Bar */}
                <div id="footer-bottom-bar">
                    <div id="footer-copyright">
                        © {new Date().getFullYear()} <span className="highlight-text">Promise Siafwiyo</span> (PrimeGotit). All rights reserved.
                    </div>

                    <div id="footer-motto">
                        <span className="gradient-text">Code. Create. Evolve.</span>
                    </div>

                    <div id="footer-credits">
                        Designed & Built with <FaHeart className="heart-icon" /> using React & Vite
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
