import { useState, useEffect } from 'react';
import './WebsitesPortfolio.css';
import { WEBSITES_DATA } from './data/websitesData.js';
import { IoEnter } from 'react-icons/io5';
import { FaArrowDown, FaArrowLeft, FaGithub } from 'react-icons/fa';

function WebsiteBox({ site }) {
    return (
        <div className="custom-web-box">
            <div 
                className="custom-web-image-container"
                style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), black), url(${site.image})`,
                }}
            >
                <div className="custom-web-image-src-text">
               
                </div>

                <div className="custom-web-image-tech-stack">
                    <ul>
                        {site.techStack.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="custom-web-image-text">
                <div className="custom-heading-con1">
                    <h1>{site.title}</h1>
                    <div className="custom-heading-line"></div>
                    {site.logo && (
                        <img src={site.logo} className="custom-my-logo-small" alt="" />
                    )}
                </div>
                <br />

                <h4>{site.slogan}</h4>
                <p>{site.description}</p>

                <div className="custom-visit-container">
                    <div className="custom-logo-with-line-con">
                        <h5>{site.year}</h5>
                    </div>

                    <div className="custom-visit-button-container">
                        {site.githubUrl && (
                            <a 
                                href={site.githubUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="custom-code-button"
                            >
                                Code <FaGithub />
                            </a>
                        )}
                        <a 
                            href={site.liveUrl} 
                            target={site.liveUrl.startsWith('#') ? '_self' : '_blank'} 
                            rel="noopener noreferrer" 
                            className="custom-visit-button"
                        >
                            Visit <IoEnter className="custom-visit-button-image" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function WebsitesPortfolio({ onBack }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            window.location.hash = '#page3';
        }
    };

    return (
        <div id="websites-portfolio-page">
            {/* Background Video */}
            <video autoPlay muted loop id="bg-video">
                <source src="/backvideo.mp4" type="video/mp4" />
            </video>

            {/* Custom Navbar matching original site */}
            <nav id="portfolio-custom-nav">
                <a href="#page1" onClick={handleBack} id="logo-section">
                    <img src="/primegotit logo green big 3.png" alt="Prime Logo" />
                    <h3>Prime</h3>
                </a>

                <div className="portfolio-nav-actions">
                    <button onClick={handleBack} className="portfolio-back-btn">
                        <FaArrowLeft /> Back to Portfolio
                    </button>
                </div>
            </nav>

            <div id="page3-portfolio-wrapper">
                <div id="page3-intro">
                    <h3>All Web Development Projects</h3>
                </div>

                <div id="all-page3-container">
                    {/* Glowing orange gradient vertical line matching original */}
                    <div id="page3-line"></div>

                    {/* 2-Cards-Per-Row Grid */}
                    <div id="all-web-box-container">
                        <div className="portfolio-cards-grid">
                            {WEBSITES_DATA.map((site) => (
                                <WebsiteBox key={site.id} site={site} />
                            ))}
                        </div>

                        {/* Return to Portfolio Footer CTA */}
                        <div id="view-portfolio-container" className="portfolio-return-box">
                            <p><b>Explore other disciplines & creations</b></p>
                            <button onClick={handleBack} className="portfolio-bottom-return-btn">
                                <FaArrowLeft /> Return to Main Page
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WebsitesPortfolio;
