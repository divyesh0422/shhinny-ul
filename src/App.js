import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Disclaimer from './components/Disclaimer';

import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Gallery/>
      <About/>

    <Contact/>
   
      <Disclaimer/>
      <Footer/>
      </div>
  );
}

export default App;
