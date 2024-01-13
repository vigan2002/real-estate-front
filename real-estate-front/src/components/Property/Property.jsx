import React, { useEffect, useState } from 'react'
import './property.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import data from '../../utils/dictionary'

const Property = () => {

  const [load] = useState(true);
  const [flatProperties, setFlatProperties] = useState([]);
  const [houseProperties, setHouseProperties] = useState([]);
  const [officeProperties, setOfficeProperties] = useState([]);
  const [landProperties, setLandProperties] = useState([]);
  const flatUrl = "http://127.0.0.1:8000/flats/";
  const houseUrl = "http://127.0.0.1:8000/house/";
  const officeUrl = "http://127.0.0.1:8000/office/";
  const landUrl = "http://127.0.0.1:8000/land/";


  useEffect(() => {
    const fetchData = async () => {
      try {
        const flatResponse = await axios.get(flatUrl);
        const houseResponse = await axios.get(houseUrl);
        const officeResponse = await axios.get(officeUrl);
        const landResponse = await axios.get(landUrl);
  
        setFlatProperties(flatResponse.data);
        setHouseProperties(houseResponse.data);
        setOfficeProperties(officeResponse.data);
        setLandProperties(landResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [load]);

  const navigate = useNavigate();

  const handleNavigateHouse = () => {
      navigate('/house');
  };

  const handleNavigateFlat = () => {
    navigate('/flats');
};

const handleNavigateOffice = () => {
  navigate('/office');
};

const handleNavigateLand = () => {
navigate('/land');
};

const handleNavigateToProperty = (propertyId) => {
  navigate(`/property/${propertyId}`);
};

  return (
    <div className='property'>
      <div className='property-wrapper'>
      <h1>Latest Flats</h1>
      <div className='property-container'>
        {flatProperties.slice(0, 4).map((el) => (
          <div key={el[data.id]} className='property-card'>
            <img src={el[data.image]} alt="img" onClick={() => handleNavigateToProperty(el.id)}/>
            <h2 onClick={() => handleNavigateToProperty(el.id)}>{el[data.city]}, {el[data.address]}</h2>
            <p>{el[data.sqft]}m2 | <span>{el[data.price]}€</span></p>
          </div>
        ))}
        <button onClick={handleNavigateFlat} className='show-more'>Show More</button>
      </div>
      <h1>Lattest Houses</h1>
      <div className='property-container'>
        {houseProperties.slice(0, 4).map((el) => (
          <div key={el[data.id]} className='property-card'>
          <img src={el[data.image]} alt="img" onClick={() => handleNavigateToProperty(el.id)}/>
          <h2 onClick={() => handleNavigateToProperty(el.id)}>{el[data.city]}, {el[data.address]}</h2>
          <p>{el[data.sqft]}m2 | <span>{el[data.price]}€</span></p>
        </div>
        ))}
        <button onClick={handleNavigateHouse} className='show-more'>Show More</button>
      </div>
      <h1>Lattest Offices</h1>
      <div className='property-container'>
        {officeProperties.slice(0, 4).map((el) => (
          <div key={el[data.id]} className='property-card'>
          <img src={el[data.image]} alt="img" onClick={() => handleNavigateToProperty(el.id)}/>
          <h2 onClick={() => handleNavigateToProperty(el.id)}>{el[data.city]}, {el[data.address]}</h2>
          <p>{el[data.sqft]}m2 | <span>{el[data.price]}€</span></p>
        </div>
        ))}
        <button onClick={handleNavigateOffice} className='show-more'>Show More</button>
      </div>
      <h1>Lattest Lands</h1>
      <div className='property-container'>
        {landProperties.slice(0, 4).map((el) => (
          <div key={el[data.id]} className='property-card'>
          <img src={el[data.image]} alt="img" onClick={() => handleNavigateToProperty(el.id)}/>
          <h2 onClick={() => handleNavigateToProperty(el.id)}>{el[data.city]}, {el[data.address]}</h2>
          <p>{el[data.sqft]}m2 | <span>{el[data.price]}€</span></p>
        </div>
        ))}
        <button onClick={handleNavigateLand} className='show-more'>Show More</button>
      </div>
      </div>
    </div>
  )
}

export default Property