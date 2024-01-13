import React, { useEffect, useState } from 'react';
import './propertyDetail.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import data from '../../utils/dictionary';

const PropertyDetail = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const baseURL = `http://127.0.0.1:8000/property/${id}`;

    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setProperty(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [baseURL, id]);

    const navigate = useNavigate();

    return (
        <div className='property-detail'>
            <div className='property-detail-wrapper'>
                <div className='property-detail-container'>
                    {property && (
                        <div className='property-card'>
                            <div className='card-images'>
                                <img src={property[data.image]} alt='img' />
                            </div>
                            <div className='card-info'>
                                <div>
                                    <h2>{property[data.city]}, <span>{property[data.sqft]}m2</span></h2>
                                    <h3>Address: {property[data.address]} | {property[data.room]} room | {property[data.bathroom]} bath | {property[data.balcony]} balcony</h3>
                                    <br/>
                                    <p><span>Description</span></p>
                                    <p>{property[data.description]}</p>
                                    <p><span>Price: {property[data.price]}€.</span></p>
                                </div>
                                <div>
                                    <button onClick={() => navigate(-1)}>Back</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PropertyDetail;
