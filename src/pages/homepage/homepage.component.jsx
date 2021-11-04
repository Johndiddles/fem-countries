import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch } from 'react-redux';

import './homepage.styles.scss';
import axios from 'axios';
import { useEffect } from 'react';
import { setCountry } from '../../redux/actions/countryActions';

const CountryListing = () => {
    const dispatch = useDispatch();

    const fetchCountries = async()=>{
        const response = await axios
        .get('https://restcountries.com/v2/all')
        .catch((err) => {
            console.log('err ', err);
        });
        dispatch(setCountry(response.data))
    }
    
    useEffect(() => {
        fetchCountries()
    }, []);
    return('')
}


class Homepage extends Component{
    constructor(){
        super();

        this.state = {
            countries: [],
            searchField: '',
            region: ''
        }        
    }

    componentDidMount(){
        fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(data => this.setState({
            countries: data
        }))
    }

    handleChange = e => {

        this.setState({
            searchField: e.target.value
        })
        console.log(this.state.searchField)
    }
    handleContinentChange = e => {
        document.getElementById('filter').innerText = (e.target.innerText);

        if (e.target.innerText !== "All Regions"){
        this.setState({
            region: e.target.innerText
        });
        } else {
            this.setState({
                region: ''
            });
        }
        document.getElementById('dropdown').classList.toggle('target');
    }

    toggleRegionDisplay = () => {
        document.getElementById('dropdown').classList.toggle('target')
    }


    render(){
        const {countries, searchField, region} = this.state;

        const filteredCountries = countries.filter(country => 
            country.region.toLowerCase().includes(region.toLowerCase()) && country.name.toLowerCase().includes(searchField.toLowerCase())
            )
        
        return(
            

            <div className="container homepage" >
                
                <CountryListing />
                <div className="searcharea">
                    <div className="left">
                        <div className="filter-wrappers searchbox-wrapper">
                            <label className="searchbox-label" htmlFor="searchbox"><i className="bi bi-search"></i></label>
                            <input type="text" id="searchbox" className="searchbox" name="" placeholder="search for a country..." onChange={this.handleChange}/>
                        </div>
                    </div>

                    

                    <div className="custom-select">
                        <div className="filter-wrappers select-wrapper">
                            
                            <div className="dropdown-head" onClick={this.toggleRegionDisplay}> <p id="filter">filter by region </p> <span><i className="bi bi-chevron-down"></i></span></div>
                        </div>
                        <div id="dropdown" className="dropdown">
                            <div onClick={this.handleContinentChange} className="dropdown-item">All Regions</div>
                            <div onClick={this.handleContinentChange} className="dropdown-item">Africa</div>
                            <div onClick={this.handleContinentChange} className="dropdown-item">America</div>
                            <div onClick={this.handleContinentChange} className="dropdown-item">Asia</div>
                            <div onClick={this.handleContinentChange} className="dropdown-item">Europe</div>
                            <div onClick={this.handleContinentChange} className="dropdown-item">Oceania</div>

                        </div>
                    </div>
                    
                    
                </div>
                <div className="country-wrapper">
                    {
                        filteredCountries.map(country => (
                            <Link to={`./${country.name.toLowerCase()}`} className="country-card" key={country.numericCode} 
                                
                            >
                                <div className="flag-wrapper">
                                    <img src={country.flag} alt="" className="flags"/>
                                </div>

                                <div className="country-details">
                                    <h4>{country.name}</h4>
                                    <p>Population: <span>{country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></p>
                                    <p>Region: <span>{country.region}</span></p>
                                    <p>Capital: <span>{country.capital}</span></p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                

                
            </div>
        )
    }

}


export default Homepage;