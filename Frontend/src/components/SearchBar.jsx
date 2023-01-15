import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { getCity } from "../actions";
import { useSelector } from 'react-redux';
import './SearchBar.css'

const SearchBar = () => {
 
  const cities = useSelector(state => state.cities)
  const dispatch = useDispatch()
  const [ciudad, setCiudad] = useState("");

  const changeHandler = (e) =>{
    setCiudad(e.target.value)
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const arraycities = cities.map(city => city.name)
      if(arraycities.includes(ciudad) || arraycities.includes(ciudad.charAt(0).toUpperCase() + ciudad.slice(1))) {
      alert("Esta ciudad se encuentra actualmente en la pantalla")
      } else {
        dispatch(getCity(ciudad.trim()))
      }
   
      setCiudad("")
    }}>
      <input className="searchBarContainer" type="text" onChange={(e) => changeHandler(e)} value={ciudad} placeholder="Ciudad..."/>
      <input className="searchBoton" type="submit" value="Buscar" />
    </form>
  );
}

export default SearchBar