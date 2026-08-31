import { useState, useEffect, useMemo } from 'react'
import './page1.css'
import { TiArrowRightThick } from "react-icons/ti";
import { FaBars, FaTimes } from "react-icons/fa";   

const RUSSIAN_SYMBOLS = [
    "Ж", "Щ", "Ю", "Я", "Б", "Г", "Д", "Ё",
    "З", "И", "Й", "Л", "П", "Ф", "Ц", "Ч",
    "Ш", "Ъ", "Ы", "Ь", "Э", "Җ", "Ҕ", "Ҝ",
    "Ӂ", "Ӝ", "Ӟ", "Ӡ", "Ӣ", "Ӥ", "Ӧ", "Ӫ",
    "Ѡ", "Ѫ", "Ѭ", "Ҩ", "Ҧ", "Ҏ", "҂", "҈"
];

const RUSSIAN_NAME_CHARS = [
    "Ж","Щ","Ю","Я","Ф","Ц","Ч","Ш",
    "Ы","Э","Б","Г","Д","З","И","Й",
    "Ӝ","Ӟ","Ӣ","Ӧ","Ѫ","Ҩ"
];

function GlitchName({ text = "Promise Siafwiyo" }) {
    const letters = useMemo(() => text.split(""), [text]);
    const [displayLetters, setDisplayLetters] = useState(letters);
    const [charStates, setCharStates] = useState({}); // { [index]: 'morphing' | 'russian' | '' }

    useEffect(() => {
        let isMounted = true;
        let mainTimer;

        const runGlitchCycle = () => {
            if (!isMounted) return;

            const indices = letters.map((_, i) => i);
            const order = [...indices].reverse(); // Right to Left wave

            order.forEach((index, step) => {
                if (letters[index] === " ") return; // Skip whitespace

                const delay = step * 300; // Slower, elegant propagation

                setTimeout(() => {
                    if (!isMounted) return;

                    // Phase 1: Smooth dissolve out (280ms)
                    setCharStates(prev => ({ ...prev, [index]: 'morphing' }));

                    setTimeout(() => {
                        if (!isMounted) return;

                        // Phase 2: Morph to Russian character with fiery plasma glow (hold for ~600ms)
                        const randomRussian = RUSSIAN_NAME_CHARS[Math.floor(Math.random() * RUSSIAN_NAME_CHARS.length)];
                        setDisplayLetters(prev => {
                            const updated = [...prev];
                            updated[index] = randomRussian;
                            return updated;
                        });
                        setCharStates(prev => ({ ...prev, [index]: 'russian' }));

                        setTimeout(() => {
                            if (!isMounted) return;

                            // Phase 3: Smooth dissolve out from Russian (280ms)
                            setCharStates(prev => ({ ...prev, [index]: 'morphing' }));

                            setTimeout(() => {
                                if (!isMounted) return;

                                // Phase 4: Restore original fiery English letter
                                setDisplayLetters(prev => {
                                    const updated = [...prev];
                                    updated[index] = letters[index];
                                    return updated;
                                });
                                setCharStates(prev => {
                                    const updated = { ...prev };
                                    delete updated[index];
                                    return updated;
                                });
                            }, 280);

                        }, 600);

                    }, 280);

                }, delay);
            });

            const totalCycleDuration = order.length * 300 + 1800;
            mainTimer = setTimeout(() => {
                if (!isMounted) return;
                setDisplayLetters(letters);
                setCharStates({});
                mainTimer = setTimeout(runGlitchCycle, 3500); // 3.5s pause on clean fiery name
            }, totalCycleDuration);
        };

        mainTimer = setTimeout(runGlitchCycle, 1500);

        return () => {
            isMounted = false;
            clearTimeout(mainTimer);
        };
    }, [letters]);

    const handleHover = () => {
        letters.forEach((l, index) => {
            if (l === " ") return;
            setTimeout(() => {
                setCharStates(prev => ({ ...prev, [index]: 'morphing' }));
                setTimeout(() => {
                    const randomRussian = RUSSIAN_NAME_CHARS[Math.floor(Math.random() * RUSSIAN_NAME_CHARS.length)];
                    setDisplayLetters(prev => {
                        const updated = [...prev];
                        updated[index] = randomRussian;
                        return updated;
                    });
                    setCharStates(prev => ({ ...prev, [index]: 'russian' }));

                    setTimeout(() => {
                        setCharStates(prev => ({ ...prev, [index]: 'morphing' }));
                        setTimeout(() => {
                            setDisplayLetters(prev => {
                                const updated = [...prev];
                                updated[index] = letters[index];
                                return updated;
                            });
                            setCharStates(prev => {
                                const updated = { ...prev };
                                delete updated[index];
                                return updated;
                            });
                        }, 280);
                    }, 500);
                }, 250);
            }, index * 70);
        });
    };

    return (
        <h2 className="gradient-text fiery-text glitch-name-heading" onMouseEnter={handleHover}>
            {displayLetters.map((char, i) => {
                const state = charStates[i] || '';
                const stateClass = state ? (state === 'morphing' ? 'morphing' : 'russian-active') : '';
                return (
                    <span 
                        key={i} 
                        className={`glitch-name-char ${stateClass} ${char === ' ' ? 'space-char' : ''}`}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                );
            })}
        </h2>
    );
}

function RussianCharItem({ initialChar, delay }) {
    const [char, setChar] = useState(initialChar);
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        let isMounted = true;
        let timeoutId;

        const cycle = () => {
            const nextInterval = Math.random() * 2500 + 1000; // 1-3.5s transition
            timeoutId = setTimeout(() => {
                if (!isMounted) return;
                setIsGlitching(true);
                setTimeout(() => {
                    if (!isMounted) return;
                    setChar(RUSSIAN_SYMBOLS[Math.floor(Math.random() * RUSSIAN_SYMBOLS.length)]);
                    setIsGlitching(false);
                    cycle();
                }, 220);
            }, nextInterval);
        };

        const initTimer = setTimeout(cycle, delay);

        return () => {
            isMounted = false;
            clearTimeout(initTimer);
            clearTimeout(timeoutId);
        };
    }, [delay]);

    const handleHover = () => {
        setIsGlitching(true);
        setTimeout(() => {
            setChar(RUSSIAN_SYMBOLS[Math.floor(Math.random() * RUSSIAN_SYMBOLS.length)]);
            setIsGlitching(false);
        }, 150);
    };

    return (
        <li 
            className={`russian-char ${isGlitching ? 'glitching' : ''}`}
            onMouseEnter={handleHover}
        >
            <span>{char}</span>
        </li>
    );
}

const CHAR_LIST = Array.from({ length: 32 }, (_, i) => RUSSIAN_SYMBOLS[i % RUSSIAN_SYMBOLS.length]);

function Page1() {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <>
            <video autoPlay muted loop id="bg-video" >
                <source src="/backvideo.mp4" type="video/mp4"/>
            </video>
            <div id='page1'>
                

                <nav>
                    <a href="#page1" id='logo-section'><img src="/primegotit logo green big 3.png" alt="Prime Logo" /><h3>Prime</h3></a>

                    <ul className={menuOpen ? 'nav-active' : ''}>
                        <li><a href="#page1" className='hover-link' onClick={() => setMenuOpen(false)}>Home</a></li>
                        <li><a href="#page4" className='hover-link' onClick={() => setMenuOpen(false)}>About me</a></li>
                        <li><a href="#page2" className='hover-link' onClick={() => setMenuOpen(false)}>Services</a></li>
                        <li><a href="#page3" className='hover-link' onClick={() => setMenuOpen(false)}>Projects</a></li>
                        <li><a href="#page5" className='hover-link' onClick={() => setMenuOpen(false)}>3D Art</a></li>
                        <li><a href="#resume_page" className='hover-link' onClick={() => setMenuOpen(false)}>Achievements</a></li>
                        <li><a href="#contact" className='hover-link' onClick={() => setMenuOpen(false)}>Contact me</a></li>
                    </ul>

                    <section>
                        <button 
                            id="more-icon-btn" 
                            onClick={() => setMenuOpen(!menuOpen)} 
                            aria-label="Toggle navigation menu"
                        >
                            {menuOpen ? <FaTimes id='more-icon'/> : <FaBars id='more-icon'/>}
                        </button>
                    </section>
                </nav>

                <div id='main'>

                        <div id='my-content'>

                            <section id='content-box'>
                                
                                <h1 id='intro-text'>Who Am I ? </h1>
                                <GlitchName text="Promise Siafwiyo" />
                                <p>I thrive at the intersection of diverse fields. As an <b>Interdisciplinary Specialist</b>, I don't just use technology. I bridge the gap between complex ideas and functional reality. Explore my portfolio to see how I build, break and evolve. </p>
                                <section id='skills-container'>
                                    <a href="#" className='skills'>Christian</a>
                                    <a href="#" className='skills'>Visionary</a>
                                    <a href="#" className='skills'>Learner</a>
                                    <a href="#" className='skills'>Minimalist</a>
                                    <a href="#" className='skills'>Geek</a>
                                    <a href="#" className='skills'>Creator</a>
                                    <a href="#" className='skills'>Aspiring hacker</a>
                                    <a href="#" className='skills'>Programmer</a>
                                    <a href="#" className='skills'>Monochrome lifestyle</a>
                                    <a href="#" className='skills'>Coder</a>
                                    <a href="#" className='skills'>Designer</a>

                                    
                                    
                                </section>

                                <section >
                                    {/* <a href="#" id='view-work-btn' >View my work <TiArrowRightThick style={{color: 'white', marginLeft: '10px', width: '35px', height: '35px'}}/></a> */}
                                    <a href="#" id='view-work-btn' >  
                                        <div id='about-logos-container'>
                                            <img src="/primegotit logo green big 2.png" id='text-arrows' alt="" />
                                            <div id='logos-line'></div>

                                            <img src="/primegotit logo green big 2.png" id='text-arrows' alt="" />

                                        </div>
                                    </a>

                                </section>

                            </section>
                        </div>
                        

                        <div id='my-picture'>

                            <img id='me' src="promise big image 2.png"   alt="" />
                            {/* <video muted loop autoPlay playsInline></video> */}

                        </div>
                </div>

                <div id="bottom-container" className="russian-bottom-bar">
                    <ul className="russian-char-list">
                        {CHAR_LIST.map((char, index) => (
                            <RussianCharItem 
                                key={index} 
                                initialChar={char} 
                                delay={(index * 110) % 2000 + Math.random() * 400} 
                            />
                        ))}
                    </ul>
                </div>

            </div>
        </>
    )

}

export default Page1;