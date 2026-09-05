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

const RUSSIAN_UPPER_CHARS = [
    "Ж", "Щ", "Ю", "Я", "Ф", "Ц", "Ч", "Ш",
    "Ы", "Э", "Б", "Г", "Д", "З", "И", "Й"
];

const RUSSIAN_LOWER_CHARS = [
    "ж", "щ", "ю", "я", "ф", "ц", "ч", "ш",
    "ы", "э", "б", "г", "д", "з", "и", "й"
];

function GlitchName({ text = "Promise Siafwiyo" }) {
    const letters = useMemo(() => text.split(""), [text]);
    const [displayLetters, setDisplayLetters] = useState(letters);
    const [charStates, setCharStates] = useState({}); // { [index]: 'glitch-in' | 'russian-active' | 'glitch-out' | '' }

    useEffect(() => {
        let isMounted = true;
        let mainTimer;
        let activeTimeouts = [];

        const clearAllTimeouts = () => {
            activeTimeouts.forEach(t => clearTimeout(t));
            activeTimeouts = [];
        };

        const glitchCycle = () => {
            if (!isMounted) return;
            clearAllTimeouts();

            // Right-to-Left wave: [...spans].reverse()
            const indices = letters.map((_, i) => i);
            const order = [...indices].reverse(); // RIGHT → LEFT

            order.forEach((index, i) => {
                if (letters[index] === " ") return; // Keep space intact

                const tStart = setTimeout(() => {
                    if (!isMounted) return;

                    const original = letters[index];
                    const isUpper = original === original.toUpperCase() && original !== original.toLowerCase();
                    const charPool = isUpper ? RUSSIAN_UPPER_CHARS : RUSSIAN_LOWER_CHARS;

                    // STEP 1: glitch in (translateY(10px), blur(6px), opacity 0)
                    setCharStates(prev => ({ ...prev, [index]: 'glitch-in' }));

                    const t1 = setTimeout(() => {
                        if (!isMounted) return;

                        // Case-matched Russian character visible (same height & proportions)
                        const randomRussian = charPool[Math.floor(Math.random() * charPool.length)];
                        setDisplayLetters(prev => {
                            const updated = [...prev];
                            updated[index] = randomRussian;
                            return updated;
                        });
                        setCharStates(prev => ({ ...prev, [index]: 'russian-active' }));

                        // STEP 2: return to original after short delay (300ms hold)
                        const t2 = setTimeout(() => {
                            if (!isMounted) return;

                            // glitch out (translateY(-5px), blur(6px), opacity 0)
                            setCharStates(prev => ({ ...prev, [index]: 'glitch-out' }));

                            const t3 = setTimeout(() => {
                                if (!isMounted) return;

                                // restore original text (translateY(0), blur(0px), opacity 1)
                                setDisplayLetters(prev => {
                                    const updated = [...prev];
                                    updated[index] = original;
                                    return updated;
                                });
                                setCharStates(prev => {
                                    const updated = { ...prev };
                                    delete updated[index];
                                    return updated;
                                });
                            }, 200);
                            activeTimeouts.push(t3);

                        }, 300);
                        activeTimeouts.push(t2);

                    }, 200);
                    activeTimeouts.push(t1);

                }, i * 300); // speed of right → left (300ms)
                activeTimeouts.push(tStart);
            });

            // after full cycle → pause on clean text
            const fullCycleTime = order.length * 300 + 1200;
            mainTimer = setTimeout(() => {
                if (!isMounted) return;
                // resetPause
                setDisplayLetters(letters);
                setCharStates({});
                mainTimer = setTimeout(glitchCycle, 2500); // 2.5s pause before next cycle
            }, fullCycleTime);
        };

        mainTimer = setTimeout(glitchCycle, 1500);

        return () => {
            isMounted = false;
            clearTimeout(mainTimer);
            clearAllTimeouts();
        };
    }, [letters]);

    const handleHover = () => {
        const indices = letters.map((_, i) => i);
        const order = [...indices].reverse();

        order.forEach((index, i) => {
            if (letters[index] === " ") return;
            const original = letters[index];
            const isUpper = original === original.toUpperCase() && original !== original.toLowerCase();
            const charPool = isUpper ? RUSSIAN_UPPER_CHARS : RUSSIAN_LOWER_CHARS;

            setTimeout(() => {
                setCharStates(prev => ({ ...prev, [index]: 'glitch-in' }));
                setTimeout(() => {
                    const randomRussian = charPool[Math.floor(Math.random() * charPool.length)];
                    setDisplayLetters(prev => {
                        const updated = [...prev];
                        updated[index] = randomRussian;
                        return updated;
                    });
                    setCharStates(prev => ({ ...prev, [index]: 'russian-active' }));

                    setTimeout(() => {
                        setCharStates(prev => ({ ...prev, [index]: 'glitch-out' }));
                        setTimeout(() => {
                            setDisplayLetters(prev => {
                                const updated = [...prev];
                                updated[index] = original;
                                return updated;
                            });
                            setCharStates(prev => {
                                const updated = { ...prev };
                                delete updated[index];
                                return updated;
                            });
                        }, 200);
                    }, 300);
                }, 200);
            }, i * 70);
        });
    };

    return (
        <h2 className="glitch-name-heading" onMouseEnter={handleHover}>
            {displayLetters.map((char, i) => {
                const state = charStates[i] || '';
                return (
                    <span 
                        key={i} 
                        className={`glitch-name-char ${state} ${char === ' ' ? 'space-char' : ''}`}
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
                                    <a href="#" className='skills'>Faith Driven</a>
                                    <a href="#" className='skills'>Melanophile</a>
                                    <a href="#" className='skills'>Minimalist</a>
                                    <a href="#" className='skills'>Geek</a>
                                    <a href="#" className='skills'>Creator</a>
                                    <a href="#" className='skills'>Aspiring hacker</a>
                                    <a href="#" className='skills'>Programmer</a>
                                    <a href="#" className='skills'>Coder</a>
                                    <a href="#" className='skills'>Designer</a>
                                    <a href="#" className='skills'>Polymath</a>

                                    
                                    
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