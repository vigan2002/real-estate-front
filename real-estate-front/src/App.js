import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer/Footer';
import SinglePropertyPage from './pages/SinglePropertyPage'
import OfficeProperty from './components/Propertyes/OfficeProperty';
import HouseProperty from './components/Propertyes/HouseProperty';
import FlatProperty from './components/Propertyes/FlatProperty';
import LandProperty from './components/Propertyes/LandProperty';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/office' element={<OfficeProperty/>}/>
        <Route path='/house' element={<HouseProperty/>}/>
        <Route path='/flats' element={<FlatProperty/>}/>
        <Route path='/land' element={<LandProperty/>}/>
        <Route path='/property/:id' element={<SinglePropertyPage/>}/>
        <Route path='/error' element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
