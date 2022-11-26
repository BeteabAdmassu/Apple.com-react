import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import AlertSection from './components/alertSection'
import FirstHightlightWrapper from './components/firstHightlightWrapper'
import SecondHightLightWrapper from './components/SecondHightLightWrapper'
import './components/css/styles.css'

 function App() {
  return (
    <body> 
       <Header /> 
       <AlertSection />
       <FirstHightlightWrapper />
       <SecondHightLightWrapper />
       <Footer />

      </body>
   
  )
}
export default App; 