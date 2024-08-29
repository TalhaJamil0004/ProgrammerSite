import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import DemoProjects from './components/projects/DemoProjects';
import CarForm from "./components/Forms/CarForm"
import WeatherForm from './components/Forms/WeatherForm';
function App() {
  return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/demoprojects' element={<DemoProjects/>}></Route>
        <Route path='/carform' element={<CarForm/>}></Route>
        <Route path="/weatherform" element={<WeatherForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
