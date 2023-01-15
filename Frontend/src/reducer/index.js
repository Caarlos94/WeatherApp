import { DELETE_CITY, GET_DETAIL, GET_CITY, CLEAN } from "../actions";

const initialState = {
    cities:[],
    cityDetail:[]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case GET_CITY:
    return { ...state, cities: [...state.cities, action.payload] };

    case GET_DETAIL:
    return { ...state, cityDetail: action.payload };

    case DELETE_CITY:
    return { ...state, cities: state.cities.filter(
      city => city.id !== action.payload )};

    case CLEAN:
    return {...state, cityDetail:{}}

    default:
      return { ...state };
  }
};

export default reducer