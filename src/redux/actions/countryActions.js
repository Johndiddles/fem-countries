import { ActionTypes } from "../constants/action-types";

export const setCountry = (country) => {
    return {
        type: ActionTypes.SET_COUNTRIES,
        payload: country,
    };
};

