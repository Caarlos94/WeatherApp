import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clean, getCity, getDetail } from "../actions/index";
import './CityDetail.css'

const CityDetail = ( props ) => {

    const dispatch = useDispatch()

    useEffect(() => {
        console.log(props.match.params.nombre);
        dispatch(getDetail(props.match.params.nombre))
        return function(){ dispatch(clean()) }
    }, [dispatch, props.match.params.id]);

    const city = useSelector(state => state.cityDetail)
    console.log(city.name);

    return(
        <>
        {
            (city.name) ? (<div className="detailContainer">
            <div className="container">
                <div className="info">
                <h3>{city.name}</h3>
                    <div>Temperatura: {Math.round(city.main.temp_max - 273.15)} ºC</div>
                    <div>Clima: {city.weather[0].main}</div>
                    <div>Viento: {city.wind.speed} km/h</div>
                    <div>Cantidad de nubes: {city.clouds.all}</div>
                    <div>Latitud: {city.coord.lat}º</div>
                    <div>Longitud: {city.coord.lon}º</div>
                    <button className="botonDetail">
                    <Link to="/home">Regresar</Link>
                    </button>
                </div>
        </div>
    </div>) : ("")
        }
    </>
    )
}

export default CityDetail