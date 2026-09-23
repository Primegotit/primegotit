import { useState } from 'react';
import './page6.css';
import { MUSIC_DATA } from './data/musicData.js';
import { FaYoutube, FaEye, FaTimes, FaExpand, FaMusic } from 'react-icons/fa';
import { PiMusicNoteFill } from 'react-icons/pi';

function BeatCard({ beat, onOpenLightbox }) {
    return (
        <div className="beat-card">
            {/* Cover Art Banner */}
            <div
                className="beat-card-image-container"
                onClick={() => onOpenLightbox(beat)}
                title="Click to view details"
            >
                <img
                    src={beat.cover_src}
                    alt={beat.title}
                    className="beat-card-banner-img"
                />

                <div className="beat-card-overlay-gradient"></div>

                <div className="beat-card-image-top">
                    {beat.genre && (
                        <span className="beat-card-genre-tag">
                            <FaMusic style={{ marginRight: '4px', fontSize: '10px' }} />
                            {beat.genre}
                        </span>
                    )}
                    <span className="beat-card-expand-hint">
                        <FaExpand />
                    </span>
                </div>

                <div className="beat-card-pills">
                    <ul>
                        <li>🎵 {beat.bpm} BPM</li>
                        <li>📅 {beat.year}</li>
                    </ul>
                </div>
            </div>

            {/* Beat Details Body */}
            <div className="beat-card-text">
                <div className="beat-card-heading-row">
                    <h1>{beat.title}</h1>
                    <div className="beat-card-heading-line"></div>
                    <img src="/primegotit logo green big 3.png" className="beat-card-logo-small" alt="" />
                </div>
                <br />

                <h4>{beat.artist} — <span className="beat-artist-type">{beat.artist_type}</span></h4>
                <p>{beat.description}</p>

                <div className="beat-card-actions">
                    <div className="beat-card-year">
                        <h5>{beat.year}</h5>
                    </div>
                    <div className="beat-btn-row">
                        {beat.video_url && (
                            <a
                                href={beat.video_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="beat-video-btn"
                            >
                                Listen <FaYoutube className="beat-btn-icon-yt" />
                            </a>
                        )}
                        <button
                            onClick={() => onOpenLightbox(beat)}
                            className="beat-view-btn"
                        >
                            Preview <FaEye className="beat-btn-icon-eye" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function VisitMusicPortfolio({ onOpenMusic }) {
    const handleClick = (e) => {
        if (onOpenMusic) {
            e.preventDefault();
            onOpenMusic();
        }
    };

    return (
        <div id="music-portfolio-cta">
            <div id="music-cta-logos">
                <PiMusicNoteFill className="music-cta-note" />
                <PiMusicNoteFill className="music-cta-note" />
                <PiMusicNoteFill className="music-cta-note" />
            </div>
            <p><b>View full Music Production portfolio</b></p>
            <a href="#/music" onClick={handleClick}>
                View All
            </a>
        </div>
    );
}

function Page6({ onOpenMusic }) {
    const [lightboxBeat, setLightboxBeat] = useState(null);
    const featuredBeats = MUSIC_DATA.slice(0, 4);

    return (
        <>
            <div id="page6">
                <div id="page6-intro">
                    <h3>Music Production</h3>
                </div>

                <div id="all-page6-container">
                    {/* Glowing vertical accent line */}
                    <div id="page6-line"></div>

                    <div id="all-beats-box-container">
                        <div className="beats-cards-grid">
                            {featuredBeats.map((beat) => (
                                <BeatCard
                                    key={beat.id}
                                    beat={beat}
                                    onOpenLightbox={(b) => setLightboxBeat(b)}
                                />
                            ))}
                        </div>

                        <VisitMusicPortfolio onOpenMusic={onOpenMusic} />
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {lightboxBeat && (
                <div className="beat-lightbox-overlay" onClick={() => setLightboxBeat(null)}>
                    <div
                        className="beat-lightbox-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="beat-lightbox-close-btn"
                            onClick={() => setLightboxBeat(null)}
                            aria-label="Close Preview"
                        >
                            <FaTimes />
                        </button>

                        <div className="beat-lightbox-img-wrapper">
                            <img
                                src={lightboxBeat.cover_src}
                                alt={lightboxBeat.title}
                                className="beat-lightbox-img"
                            />
                        </div>

                        <div className="beat-lightbox-caption">
                            <div className="beat-lightbox-title-row">
                                <h2>{lightboxBeat.title}</h2>
                                <span className="beat-lightbox-year">{lightboxBeat.year}</span>
                            </div>
                            <p className="beat-lightbox-artist">{lightboxBeat.artist}</p>
                            <p>{lightboxBeat.description}</p>
                            <div className="beat-lightbox-pills">
                                <span className="beat-lightbox-pill">{lightboxBeat.genre}</span>
                                <span className="beat-lightbox-pill">{lightboxBeat.bpm} BPM</span>
                                {lightboxBeat.video_url && (
                                    <a
                                        href={lightboxBeat.video_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="beat-lightbox-pill beat-lightbox-pill-link"
                                    >
                                        <FaYoutube style={{ marginRight: '5px' }} /> Watch on YouTube
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Page6;
