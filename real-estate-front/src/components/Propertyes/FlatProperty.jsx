import React, { useState } from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom';
import data from '../../utils/dictionary';
import SearchBar from './SearchBar';

const FlatProperty = () => {


  const [results, setResults] = useState([]);

  const navigate = useNavigate();
  const handleNavigateToProperty = (propertyId) => {
    navigate(`/property/${propertyId}`);
  };
  return (
    <div className='hero'>
      <div className='hero-wrapper'>
        <h1>Flat</h1>
        <SearchBar url="http://127.0.0.1:8000/flats/" data={setResults} />
        <div className='hero-container'>
          {results.map((el) => (
            <div key={el[data.id]} className='card'>
              <img src={el[data.image]} alt="img" />
              <h2>{el[data.city]}, {el[data.address]}, <span>{el[data.sqft]}m2</span></h2>
              <p>{el[data.room]} room | {el[data.bathroom]} bath | {el[data.balcony]} balcony </p>
              <p><span>{el[data.price]}€</span></p>
              <button onClick={() => handleNavigateToProperty(el.id)}>View</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FlatProperty