import { useState } from 'react'
import './App.css'
import Page1 from './page1.jsx'
import Page2 from './page2.jsx'
import Page3 from './page3.jsx'
import Page4 from './page4.jsx'
import LastPage from './lastPage.jsx'

function App() {

  return (
    <>
      <Page1/>    
      <Page2/>
      <Page3/>

      <LastPage/>

    </>
  )
}

export default App
