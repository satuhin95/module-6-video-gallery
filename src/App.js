import React from 'react';
import Home from './pages/Home';
import Vedio from './pages/Vedio';
import Navbar from './components/navbar/Navbar';
import Footer from './components/ui/Footer'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/videos/:videoId' element={<Vedio/>}/>
      </Routes>  
      <Footer/>
    </Router> 
    
    </>
  );
}

export default App;
