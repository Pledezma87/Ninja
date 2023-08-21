import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
      <div className="App">
       <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalle/:id" element={<Detail />} /> 
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
