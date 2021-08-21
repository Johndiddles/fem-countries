import { combineReducers } from 'redux';
import { countryReducer } from './countryReducers';

const reducers = combineReducers({
    allCountries: countryReducer,
})

export default reducers
