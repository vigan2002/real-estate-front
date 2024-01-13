import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.scss';

const SearchBar = (props) => {
  const { url, data } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const [type, setType] = useState('');
  const [city, setCity] = useState('');
  const [totalSpaceLTE, setTotalSpaceLTE] = useState('');
  const [totalSpaceGTE, setTotalSpaceGTE] = useState('');
  const [priceLTE, setPriceLTE] = useState('');
  const [priceGTE, setPriceGTE] = useState('');
  const queryParams = new URLSearchParams();
  const navigate = useNavigate();

  const constructURL = () => {
    if (type) queryParams.append('type', type);
    if (city) queryParams.append('city', city);
    if (totalSpaceLTE) queryParams.append('total_space_m2__lte', totalSpaceLTE);
    if (totalSpaceGTE) queryParams.append('total_space_m2__gte', totalSpaceGTE);
    if (priceLTE) queryParams.append('price__lte', priceLTE);
    if (priceGTE) queryParams.append('price__gte', priceGTE);

    return `?${queryParams.toString()}`;
  };

  const queryParameters = new URLSearchParams(window.location.search);
  const type1 = queryParameters.get('type');
  const city2 = queryParameters.get('city');
  const totalSpaceLTE3 = queryParameters.get('total_space_m2__lte');
  const totalSpaceGTE4 = queryParameters.get('total_space_m2__gte');
  const priceLTE5 = queryParameters.get('price__lte');
  const priceGTE6 = queryParameters.get('price__gte');

  useEffect(() => {
    const parameters = {
      type: type1,
      city: city2,
      total_space_m2__lte: totalSpaceLTE3,
      total_space_m2__gte: totalSpaceGTE4,
      price__lte: priceLTE5,
      price__gte: priceGTE6,
    };

    axios
      .get(url, {
        params: parameters,
      })
      .then((response) => {
        const properties = response.data;
        data(properties);
      })
      .catch((err) => {
        console.log('Error fetching data:', err);
        navigate('/error');
      });
  }, [data, url, type1, city2, totalSpaceGTE4, totalSpaceLTE3, priceLTE5, priceGTE6, navigate]);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = constructURL();
    setSearchParams(params);
  };

  const handleClear = () => {
    setType('');
    setCity('');
    setTotalSpaceLTE('');
    setTotalSpaceGTE('');
    setPriceLTE('');
    setPriceGTE('');
    setSearchParams('');
  };

  return (
    <div className="search-bar">
      <form action="" onSubmit={handleSearch}>
        <div className="search-wrapper">
          <div className="search-type">
            <select
              id="type"
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="" disabled hidden>
                Lloji
              </option>
              <option value="qera">Qera</option>
              <option value="shitje">Shitje</option>
            </select>
          </div>
          <div>
            <select
              id="city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="" disabled hidden>
                City
              </option>
              <option value="Prishtinë">Prishtine</option>
              <option value="Fushë Kosovë">Fushe Kosove</option>
            </select>
          </div>
          <div>
            <input
              type="number"
              min="0"
              id="totalSpaceLTE"
              value={totalSpaceLTE}
              onChange={(e) => setTotalSpaceLTE(e.target.value)}
              placeholder="Total Space (Max)"
            />
          </div>
          <div>
            <input
              type="number"
              min="0"
              id="totalSpaceGTE"
              value={totalSpaceGTE}
              onChange={(e) => setTotalSpaceGTE(e.target.value)}
              placeholder="Total Space (Min)"
            />
          </div>
          <div>
            <input
              type="number"
              min="0"
              id="priceLTE"
              value={priceLTE}
              onChange={(e) => setPriceLTE(e.target.value)}
              placeholder="Price (Max)"
            />
          </div>
          <div>
            <input
              type="number"
              min="0"
              id="priceGTE"
              value={priceGTE}
              onChange={(e) => setPriceGTE(e.target.value)}
              placeholder="Price (Min)"
            />
          </div>
        </div>
        <div className="search-button">
          <button>Search</button>
          <button type="button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
