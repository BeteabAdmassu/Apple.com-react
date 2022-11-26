import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import AlertSection from './components/alertSection'
import FirstHightlightWrapper from './components/firstHightlightWrapper'
import SecondHightLightWrapper from './components/secondHightLightWrapper'
import ThirdHightLightWrapper from './components/thirdHightLightWrapper'
import FourthHightLightWrapper from './components/fourthHeghLightWrapper'
import FifthHeghlightWrapper from './components/fifthHeghLightWrapper'
import SixthHeghLightWrapper from './components/sixthHeghLightWrapper'
import './components/css/styles.css'

 function App() {
  return (
    <body> 
       <Header /> 
       <AlertSection />
       <FirstHightlightWrapper />
       <SecondHightLightWrapper />
       <ThirdHightLightWrapper />
       <FourthHightLightWrapper />
       <FifthHeghlightWrapper /> 
       <SixthHeghLightWrapper />

       <Footer />

      </body>
   
  )
}
export default App; 