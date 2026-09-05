import { useState, useEffect } from 'react';
import './ModelsPortfolio.css';
import { MODELS_DATA } from './data/modelsData.js';
import { FaYoutube, FaEye, FaTimes, FaExpand, FaCube, FaArrowLeft } from 'react-icons/fa';

function ModelBox({ model, onOpenLightbox }) {
    return (
        <div className="custom-model-box">
            {/* 3D Image Banner with Zoom Effect */}
            <div 
                className="custom-model-image-container"
                onClick={() => onOpenLightbox(model)}
                title="Click to view full render"
            >
                <img 
                    src={model.image_src} 
                    alt={model.name} 
                    className="custom-model-banner-img" 
                />
                
                <div className="custom-model-overlay-gradient"></div>

                <div className="custom-model-image-top">
                    {model.category && (
                        <span className="custom-model-category-tag">
                            <FaCube style={{ marginRight: '4px', fontSize: '10px' }} />
                            {model.category}
                        </span>
                    )}
                    <span className="custom-model-expand-hint">
                        <FaExpand />
                    </span>
                </div>

                <div className="custom-model-tech-stack">
                    <ul>
                        {model.software.map((tool, index) => (
                            <li key={index}>{tool}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Model Details Body */}
            <div className="custom-model-image-text">
                <div className="custom-model-heading-con1">
                    <h1>{model.name}</h1>
                    <div className="custom-model-heading-line"></div>
                    <img src="/primegotit logo green big 3.png" className="custom-my-logo-small" alt="" />
                </div>
                <br />

                {model.slogan && <h4>{model.slogan}</h4>}
                <p>{model.description}</p>

                <div className="custom-model-visit-container">
                    <div className="custom-logo-with-line-con">
                        <h5>{model.creation_date}</h5>
                    </div>

                    <div className="custom-model-button-container">
                        {model.video_url && (
                            <a 
                                href={model.video_url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="custom-model-video-btn"
                            >
                                Video <FaYoutube className="model-btn-icon-yt" />
                            </a>
                        )}
                        <button 
                            onClick={() => onOpenLightbox(model)} 
                            className="custom-model-view-btn"
                        >
                            Render <FaEye className="model-btn-icon-eye" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ModelsPortfolio({ onBack }) {
    const [lightboxModel, setLightboxModel] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            window.location.hash = '#page5';
        }
    };

    return (
        <div id="models-portfolio-page">
            {/* Background Video */}
            <video autoPlay muted loop id="bg-video">
                <source src="/backvideo.mp4" type="video/mp4" />
            </video>

            {/* Custom Top Navigation Bar */}
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

            <div id="page5-portfolio-wrapper">
                <div id="page5-intro">
                    <h3>All 3D Modelling & CGI Artworks</h3>
                </div>

                <div id="all-page5-container">
                    {/* Glowing vertical line */}
                    <div id="page5-line"></div>

                    {/* 2-Cards-Per-Row Grid of all 3D Models */}
                    <div id="all-models-box-container">
                        <div className="models-cards-grid">
                            {MODELS_DATA.map((model) => (
                                <ModelBox 
                                    key={model.id} 
                                    model={model} 
                                    onOpenLightbox={(m) => setLightboxModel(m)} 
                                />
                            ))}
                        </div>

                        {/* Bottom Return CTA */}
                        <div id="view-portfolio-container" className="model-portfolio-return-box">
                            <p><b>Explore other creative disciplines</b></p>
                            <button onClick={handleBack} className="portfolio-bottom-return-btn">
                                <FaArrowLeft /> Return to Main Page
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modern High-Res Lightbox Modal with Zoom/Fade Animations */}
            {lightboxModel && (
                <div className="model-lightbox-overlay" onClick={() => setLightboxModel(null)}>
                    <div 
                        className="model-lightbox-content" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            className="model-lightbox-close-btn"
                            onClick={() => setLightboxModel(null)}
                            aria-label="Close Preview"
                        >
                            <FaTimes />
                        </button>

                        <div className="model-lightbox-img-wrapper">
                            <img 
                                src={lightboxModel.image_src} 
                                alt={lightboxModel.name} 
                                className="model-lightbox-img" 
                            />
                        </div>

                        <div className="model-lightbox-caption">
                            <div className="lightbox-title-row">
                                <h2>{lightboxModel.name}</h2>
                                <span className="lightbox-date">{lightboxModel.creation_date}</span>
                            </div>
                            <p>{lightboxModel.description}</p>
                            <div className="lightbox-tools">
                                {lightboxModel.software.map((tool, i) => (
                                    <span key={i} className="lightbox-tool-pill">{tool}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ModelsPortfolio;
