import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({min, max, name, img, onClose, id}) => {
  return (
      <div className="card">
        <div id="closeIcon" className="row">
            <button onClick={() => onClose(id)} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className="card-body">
      <Link to = {`/detail/${name}`} style={{ textDecoration: 'none', color: "black" }}>
          <h5 className="card-title">{name}</h5>
          <div className="row">
            <div className='rowInfo'>
              <p>Min</p>
              <p>{min}°</p> 
            </div>
            <div className='rowInfo'>
              <p>Max</p>
              <p>{max}°</p>
            </div>
            <div className='rowInfo iconCard'>
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </Link>
        </div>
      </div>
    );
};

export default Card