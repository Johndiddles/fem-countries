import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './borderCountries.styles.scss';

const BorderCountries = ({border}) => {
    const countries = useSelector((state) => state.allCountries.countries);
    const borders = []
    
    
    for(var i=0; i<border.length; i++){
        countries.map(country => {
            if(country.alpha3Code === border[i]){
                borders.push(country.name);
            }
        })        
    }


    return (
            <div className='borderLinksWrapper'>
                {borders.map(borderCountry => 
                <Link className='borderCountryLinks' key={borderCountry} to={`./${borderCountry.toLowerCase()}`}>{borderCountry}</Link>
                )}
            </div>
        )
    }

export default BorderCountries;