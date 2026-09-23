import { useState, useEffect } from 'react'
import './App.css'
import Page1 from './page1.jsx'
import Page2 from './page2.jsx'
import Page3 from './page3.jsx'
import Page4 from './page4.jsx'
import Page5 from './page5.jsx'
import Page6 from './page6.jsx'
import Resume from './Resume.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import WebsitesPortfolio from './WebsitesPortfolio.jsx'
import ModelsPortfolio from './ModelsPortfolio.jsx'
import MusicPortfolio from './MusicPortfolio.jsx'

function App() {
  const getInitialRoute = () => {
    const hash = window.location.hash;
    if (hash === '#/websites' || hash === '#/all-websites') return 'websites';
    if (hash === '#/3d-models' || hash === '#/models' || hash === '#/3d-art') return 'models';
    if (hash === '#/music' || hash === '#/music-portfolio') return 'music';
    return 'home';
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/websites' || hash === '#/all-websites') {
        setCurrentRoute('websites');
        window.scrollTo(0, 0);
      } else if (hash === '#/3d-models' || hash === '#/models' || hash === '#/3d-art') {
        setCurrentRoute('models');
        window.scrollTo(0, 0);
      } else if (hash === '#/music' || hash === '#/music-portfolio') {
        setCurrentRoute('music');
        window.scrollTo(0, 0);
      } else {
        setCurrentRoute('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openWebsitesPage = () => {
    window.location.hash = '#/websites';
    setCurrentRoute('websites');
    window.scrollTo(0, 0);
  };

  const openModelsPage = () => {
    window.location.hash = '#/3d-models';
    setCurrentRoute('models');
    window.scrollTo(0, 0);
  };

  const openMusicPage = () => {
    window.location.hash = '#/music';
    setCurrentRoute('music');
    window.scrollTo(0, 0);
  };

  const backToMainPortfolioFromWebsites = () => {
    window.location.hash = '#page3';
    setCurrentRoute('home');
    setTimeout(() => {
      const page3Element = document.getElementById('page3');
      if (page3Element) {
        page3Element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const backToMainPortfolioFromModels = () => {
    window.location.hash = '#page5';
    setCurrentRoute('home');
    setTimeout(() => {
      const page5Element = document.getElementById('page5');
      if (page5Element) {
        page5Element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const backToMainPortfolioFromMusic = () => {
    window.location.hash = '#page6';
    setCurrentRoute('home');
    setTimeout(() => {
      const page6Element = document.getElementById('page6');
      if (page6Element) {
        page6Element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  if (currentRoute === 'websites') {
    return <WebsitesPortfolio onBack={backToMainPortfolioFromWebsites} />;
  }

  if (currentRoute === 'models') {
    return <ModelsPortfolio onBack={backToMainPortfolioFromModels} />;
  }

  if (currentRoute === 'music') {
    return <MusicPortfolio onBack={backToMainPortfolioFromMusic} />;
  }

  return (
    <>
      <Page1/>  
      <Page4/>
      <Page2/>
      <Page3 onOpenWebsites={openWebsitesPage}/>
      <Page5 onOpenModels={openModelsPage}/>
      <Page6 onOpenMusic={openMusicPage}/>

      <Resume/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App
