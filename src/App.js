import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Nopage from './Pages/Nopage';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route index element = {<Home/>}/>
        <Route path="/home" element= {<Home/>}/>
        <Route path="/About" element= {<About/>}/>
        <Route path="/Contact" element= {<Contact/>}/>
        <Route path="/Services" element= {<Services/>}/>
        <Route path="*" element= {<Nopage/>}/>
      </Routes>
      </BrowserRouter>
    
      </div>
  );
}

export default App;

