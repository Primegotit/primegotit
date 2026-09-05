import { useState, useEffect } from 'react'
import './App.css'
import Page1 from './page1.jsx'
import Page2 from './page2.jsx'
import Page3 from './page3.jsx'
import Page4 from './page4.jsx'
import Page5 from './page5.jsx'
import Resume from './Resume.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import WebsitesPortfolio from './WebsitesPortfolio.jsx'

function App() {
  const isWebsitesHash = () => {
    return window.location.hash === '#/websites' || window.location.hash === '#/all-websites';
  };

  const [currentRoute, setCurrentRoute] = useState(() => {
    return isWebsitesHash() ? 'websites' : 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (isWebsitesHash()) {
        setCurrentRoute('websites');
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

  const backToMainPortfolio = () => {
    window.location.hash = '#page3';
    setCurrentRoute('home');
    setTimeout(() => {
      const page3Element = document.getElementById('page3');
      if (page3Element) {
        page3Element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  if (currentRoute === 'websites') {
    return <WebsitesPortfolio onBack={backToMainPortfolio} />;
  }

  return (
    <>
      <Page1/>  
      <Page4/>
      <Page2/>
      <Page3 onOpenWebsites={openWebsitesPage}/>
      <Page5/>

      <Resume/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App

