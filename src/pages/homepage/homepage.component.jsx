import React from 'react';
import { Component } from 'react';

import './homepage.styles.scss';

class Homepage extends Component{
    constructor(){
        super();

        this.state = {
            countries: []
        }

        
    }

    componentDidMount(){
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => this.setState({
            countries: data
        }))
    }

    render(){
        const countries = this.state.countries;
        console.log(countries)
        return(

            <div className="container country-wrapper">
                {
                    countries.map(country => (
                        <div className="country-card" key={country.numericCode}>
                            <div className="flag-wrapper">
                                <img src={country.flag} alt="" className="flags"/>
                            </div>
                            
                            <div className="country-details">
                                <h4>{country.name}</h4>
                                <p>Population: {country.population}</p>
                                <p>Region: {country.region}</p>
                                <p>Capital: {country.capital}</p>
                            </div>
                            
                        </div>

                    ))
                }

                
            </div>
        )
    }

}


export default Homepage;