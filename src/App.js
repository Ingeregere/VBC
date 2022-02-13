import './App.css';
import Course from './Component/CardCourse';
import ControlledCarousel from './Component/Carousel';
import Navbars from './Component/Navbar';
import Testymonie from './Component/Testymonie';

function App() {
  return (
    <div className="App">
      <Navbars />
      <ControlledCarousel />
      <Course />
      <Testymonie />
    </div>
  );
}

export default App;
