import React from "react";
import Nav from './Nav.jsx'
import Card from "./Card.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { deleteCity } from "../actions";
import './Home.css'

const Home = () => {

  const dispatch = useDispatch()
  const cities = useSelector(state => state.cities)

    const onClose = (id) =>{
    dispatch(deleteCity(id))
    }

    return(
      <div className="home">
        <Nav></Nav>
        <div className="cardsContainer">
        {cities.length > 0 ? (
            cities.map(city => (
                <Card
                    key={city.id}
                    id={city.id}
                    max={Math.round(city.main.temp_max - 273.15)}
                    min={Math.round(city.main.temp_min - 273.15)}
                    name={city.name}
                    img={city.weather[0].icon}
                    onClose={onClose}
                ></Card>
            ))
        ) : (<div className="span">
          <p className="ningun"> POR FAVOR, INTRODUCE EL NOMBRE DE UNA CIUDAD </p>
        </div>)}
        </div>
      </div>
    )
}

export default Home