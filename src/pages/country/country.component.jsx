import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams} from 'react-router-dom';
import BorderCountries from '../../components/borderCountries/borderCountries.component';



import './country.styles.scss';


function Country (){
    const country = useParams()
    const [countryDetails, setCountryDetails] = useState();
    const lang = [];
    const currencies = [];

    const fetchData = async () =>{
        const result = await axios('https://restcountries.com/v2/name/'+country.country,);
        setCountryDetails(result.data[0]);

    }
    useEffect(() => {
        if(country && country !== '') fetchData();
    }, [country.country, country]);

    if (countryDetails === undefined){
        return (<div className="country-wrapper">
                    <p>loading country data</p>
                </div>)
    } else {
        
        for(var i=0; i<countryDetails.languages.length ; i++){
            lang.push(countryDetails.languages[i].name);
        };
        for(var j=0; j<countryDetails.currencies.length ; j++){
            currencies.push(countryDetails.currencies[j].name);
        };

            return (
                <div className="country-preview-wrapper">
                    <Link to="./" className="back-btn"><i className="bi bi-arrow-left"></i>  <span>Back</span></Link>
                    <div className="country-details-wrapper">
                        <div className="country-flag">
                            <img src={countryDetails.flag} alt="country flag" className="flag" />
                        </div>
                        <div className="right">
                            <h3 className="country-name">{countryDetails.name}</h3>
                            <div className="country-details">
                                <div className="details-wrapper">
                                    <p><span>Native Name: &nbsp; </span>{`${countryDetails.nativeName}`}</p>
                                    <p><span>Population: &nbsp; </span>{countryDetails.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                    <p><span>Region: &nbsp; </span>{countryDetails.region}</p>
                                    <p><span>Sub Region: &nbsp; </span>{countryDetails.subregion}</p>
                                    <p><span>Capital: &nbsp; </span>{countryDetails.capital}</p>
                                </div>
                                <div className="details-wrapper">
                                    <p><span>Top Level Domain: &nbsp;</span>{countryDetails.topLevelDomain}</p>
                                    <p><span>Currencies:&nbsp; </span>{currencies.join(', ')}</p>
                                    <p><span>Language:&nbsp; </span>{lang.join(', ')}</p>
                                </div>
                            </div>
                            <div className="border-countries-wrapper">
                                <p>Border Countries: </p>
                                <div id="borderLinks" className="border-countries-link-wrapper">
                                    <BorderCountries border={countryDetails.borders}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
    
}

export default Country;