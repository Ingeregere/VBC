import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HomePage from './Pages/Home.page'
import GraduationGallery from './Pages/Graduation.page'

import Navbars from './Component/Navbar';
import Footer from './Component/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbars />
      <Routes> GraduationGallery
          <Route path='/' exact element={<HomePage />} /> 
          <Route path='/graduation' exact element={<GraduationGallery />} /> 

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
