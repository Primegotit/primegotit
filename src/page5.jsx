import { useState } from 'react';
import './page5.css';
import { MODELS_DATA } from './data/modelsData.js';
import { FaYoutube, FaEye, FaTimes, FaExpand, FaCube } from 'react-icons/fa';

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

function VisitPortfolio({ onOpenModels }) {
    const handleClick = (e) => {
        if (onOpenModels) {
            e.preventDefault();
            onOpenModels();
        }
    };

    return (
        <div id="view-portfolio-container" className="model-portfolio-cta">
            <div id="all-web-logos">
                <img src="/primegotit logo green big 2.png" alt="" />
                <img src="/trackway.png" alt="" />
                <img src="/primegotit logo green big 3.png" alt="" />
                <img src="/POS system.png" alt="" />
                <img src="/Transparent official hoodie.png" alt="" />
                <img src="/logo7.png" alt="" />
                <img src="/offiCIAL website1_logo.png" alt="" />
            </div>
            <p>View 3D Modelling portfolio</p>
            <a href="#/3d-models" onClick={handleClick}>
                View
            </a>
        </div>
    );
}

function Page5({ onOpenModels }) {
    const [lightboxModel, setLightboxModel] = useState(null);
    const featuredModels = MODELS_DATA.slice(0, 4);

    return (
        <>
            <video autoPlay muted loop id="bg-video">
                <source src="/backvideo.mp4" type="video/mp4" />
            </video>

            <div id="page5">
                <div id="page5-intro">
                    <h3>3D Modelling</h3>
                </div>

                <div id="all-page5-container">
                    {/* Glowing orange gradient timeline line */}
                    <div id="page5-line"></div>

                    {/* 2-Cards-Per-Row Grid Container (4 Featured Models) */}
                    <div id="all-models-box-container">
                        <div className="models-cards-grid">
                            {featuredModels.map((model) => (
                                <ModelBox 
                                    key={model.id} 
                                    model={model} 
                                    onOpenLightbox={(m) => setLightboxModel(m)} 
                                />
                            ))}
                        </div>

                        <VisitPortfolio onOpenModels={onOpenModels} />
                    </div>
                </div>
            </div>

            {/* Modern High-Res Lightbox Modal with Smooth Scale-In Animation */}
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
        </>
    );
}

export default Page5;