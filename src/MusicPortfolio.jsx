import { useState, useEffect } from 'react';
import './MusicPortfolio.css';
import { MUSIC_DATA } from './data/musicData.js';
import { FaYoutube, FaEye, FaTimes, FaExpand, FaMusic, FaArrowLeft } from 'react-icons/fa';
import { PiMusicNoteFill } from 'react-icons/pi';

function BeatCard({ beat, onOpenLightbox }) {
    return (
        <div className="mp-beat-card">
            {/* Cover Art Banner */}
            <div
                className="mp-beat-image-container"
                onClick={() => onOpenLightbox(beat)}
                title="Click to view details"
            >
                <img
                    src={beat.cover_src}
                    alt={beat.title}
                    className="mp-beat-banner-img"
                />

                <div className="mp-beat-overlay-gradient"></div>

                <div className="mp-beat-image-top">
                    {beat.genre && (
                        <span className="mp-beat-genre-tag">
                            <FaMusic style={{ marginRight: '4px', fontSize: '10px' }} />
                            {beat.genre}
                        </span>
                    )}
                    <span className="mp-beat-expand-hint">
                        <FaExpand />
                    </span>
                </div>

                <div className="mp-beat-pills">
                    <ul>
                        <li> {beat.bpm} BPM</li>
                        <li> {beat.year}</li>
                    </ul>
                </div>
            </div>

            {/* Beat Details Body */}
            <div className="mp-beat-text">
                <div className="mp-beat-heading-row">
                    <h1>{beat.title}</h1>
                    <div className="mp-beat-heading-line"></div>
                    <img src="/primegotit logo green big 3.png" className="mp-beat-logo-small" alt="" />
                </div>
                <br />

                <h4>
                    {beat.artist}
                    {beat.artist_type && (
                        <span className="mp-artist-type"> — {beat.artist_type}</span>
                    )}
                </h4>
                <p>{beat.description}</p>

                <div className="mp-beat-actions">
                    <div className="mp-beat-year">
                        <h5>{beat.year}</h5>
                    </div>
                    <div className="mp-beat-btn-row">
                        {beat.video_url && (
                            <a
                                href={beat.video_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mp-beat-video-btn"
                            >
                                Listen <FaYoutube className="mp-beat-btn-icon-yt" />
                            </a>
                        )}
                        <button
                            onClick={() => onOpenLightbox(beat)}
                            className="mp-beat-view-btn"
                        >
                            Preview <FaEye className="mp-beat-btn-icon-eye" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MusicPortfolio({ onBack }) {
    const [lightboxBeat, setLightboxBeat] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            window.location.hash = '#page6';
        }
    };

    return (
        <div id="music-portfolio-page">
            {/* Background Video */}
            <video autoPlay muted loop id="mp-bg-video">
                <source src="/backvideo.mp4" type="video/mp4" />
            </video>

            {/* Top Navigation — matches ModelsPortfolio nav */}
            <nav id="mp-custom-nav">
                <a href="#page1" onClick={handleBack} id="mp-logo-section">
                    <img src="/primegotit logo green big 3.png" alt="Prime Logo" />
                    <h3>Prime</h3>
                </a>

                <div className="mp-nav-actions">
                    <button onClick={handleBack} className="mp-back-btn">
                        <FaArrowLeft /> Back to Portfolio
                    </button>
                </div>
            </nav>

            <div id="mp-portfolio-wrapper">
                <div id="mp-intro">
                    <PiMusicNoteFill className="mp-intro-icon" />
                    <h3>All Music Production Beats & Tracks</h3>
                </div>

                <div id="mp-all-container">
                    {/* Glowing vertical line */}
                    <div id="mp-line"></div>

                    <div id="mp-beats-container">
                        <div className="mp-cards-grid">
                            {MUSIC_DATA.map((beat) => (
                                <BeatCard
                                    key={beat.id}
                                    beat={beat}
                                    onOpenLightbox={(b) => setLightboxBeat(b)}
                                />
                            ))}
                        </div>

                        {/* Bottom Return CTA */}
                        <div id="mp-return-box">
                            <p><b>Explore other creative disciplines</b></p>
                            <button onClick={handleBack} className="mp-return-btn">
                                <FaArrowLeft /> Return to Main Page
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {lightboxBeat && (
                <div className="mp-lightbox-overlay" onClick={() => setLightboxBeat(null)}>
                    <div
                        className="mp-lightbox-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="mp-lightbox-close-btn"
                            onClick={() => setLightboxBeat(null)}
                            aria-label="Close Preview"
                        >
                            <FaTimes />
                        </button>

                        <div className="mp-lightbox-img-wrapper">
                            <img
                                src={lightboxBeat.cover_src}
                                alt={lightboxBeat.title}
                                className="mp-lightbox-img"
                            />
                        </div>

                        <div className="mp-lightbox-caption">
                            <div className="mp-lightbox-title-row">
                                <h2>{lightboxBeat.title}</h2>
                                <span className="mp-lightbox-year">{lightboxBeat.year}</span>
                            </div>
                            <p className="mp-lightbox-artist">{lightboxBeat.artist}</p>
                            <p>{lightboxBeat.description}</p>
                            <div className="mp-lightbox-pills">
                                <span className="mp-lightbox-pill">{lightboxBeat.genre}</span>
                                <span className="mp-lightbox-pill">{lightboxBeat.bpm} BPM</span>
                                {lightboxBeat.video_url && (
                                    <a
                                        href={lightboxBeat.video_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mp-lightbox-pill mp-lightbox-pill-link"
                                    >
                                        <FaYoutube style={{ marginRight: '5px' }} /> Watch on YouTube
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MusicPortfolio;
