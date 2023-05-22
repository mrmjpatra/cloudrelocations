import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import { RoutesConfig } from './Routes/RoutesConfig';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <RoutesConfig />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
