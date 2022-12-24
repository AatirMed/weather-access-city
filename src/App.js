import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
// import dataCountry from './Json/country.json'  #json country
import { CircularProgress } from "@mui/material";
import { getElement } from "./Redux/store";
import moment from "moment/moment";
import './App.css';
import { Fragment } from "react";



const App = () => {

  const store = useSelector(res => res)
  const dispatch = useDispatch()

  // useState()
  // const [country, setCountry] = useState({ ...dataCountry }) // full names country : FR=>france : country[store.data.sys.country.toUpperCase()]
  const [City, setCity] = useState('fes')

  //get data 
  useEffect(() => {
    dispatch(getElement(City))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // HandChange City $$ pressKey
  const HandChange = (event) => setCity(event.target.value)
  const pressKey = (event) => event.code === 'Enter' ? dispatch(getElement(City)) : null

  return (
    <Fragment>

      {
        store.isLoad? <div className="load"><CircularProgress /></div> :

          <div className="all">
            <div className="header">

              <div className="logo">
                <img src={'http://openweathermap.org/img/wn/' + store.data.weather[0].icon.slice(0, 2) + 'd@2x.png'} alt="s" />
                <h3>Weather App</h3>
              </div>

              <span>{moment().format('l')}</span>
            </div>

            <div className="main">
              <div className="country">
                <h3>{store.data.weather[0].description}</h3>
                <h4>{store.data.name},{store.data.sys.country}</h4>
              </div>

              <div className="WTH">
                <div className="WTH-One">
                  <h3>Wind Speed</h3>
                  <span>{
                    //Conversion m/s to km/h (3,6*store.data.wind.speed)
                    store.data.wind.speed === 0 ? parseInt(store.data.wind.speed * 3.6) : (store.data.wind.speed * 3.6).toFixed(2)
                  } km/h</span>
                </div>

                <div className="WTH-One">
                  <h3>Temperature</h3>
                  <span>{parseInt(store.data.main.temp - 273.15)} °C</span>
                </div>

                <div className="WTH-One">
                  <h3>Humidity</h3>
                  <span>{store.data.main.humidity} %</span>
                </div>
              </div>
            </div>

            <div className="city">
              <input type='text' placeholder='City...' onChange={HandChange} onKeyDown={pressKey} />
              <button onClick={() => dispatch(getElement(City))}>Get Weather InFo</button>
            </div>

          </div>
      }
    </Fragment>
  );
};

export default App;

