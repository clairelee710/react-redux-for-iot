import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, setModeActive } from '../../actions'
import ModesList from './components/ModesList';
import ForecastList from './components/ForecastList';
import './HomePageContainer.css';

export const HomeContainer = () => (
    <section className="home-container">
        <ModesList />
        <WeatherInfo />
    </section>
);

function WeatherInfo() {

    const homeData = useSelector(state => state.homeData) //find data from store.js by key
    const dispatch = useDispatch()
    const location = homeData.location;
    const forecast = homeData.forecast;

    return (
        <div className="weather-container">
            <div className="weather-list">
                <p className="title">天气资讯</p>
                <div className="information-container weather">
                    <div className="weather-status symbol">
                        <span className={`rotating icon icon-weather-${parseInt(location.icon) + 1}`}></span>      
                    </div>
                    <div className="weather-status info">
                        <p className="city">{location.name}</p>
                        <p>{location.description}</p>
                        <div>
                            {location.temperature}
                            <i className="icon icon-celsius"></i>
                        </div>
                        <p>pm2.5 {location.airquality} 微克</p>
                    </div>
                </div>
                <ForecastList forecast={forecast}/>
            </div>
            <div className="control-item temp">
                <p className="name">設定空調温度</p>
                <div className="controller">
                    <button className="btn" onClick={() => dispatch(decrement(location.temp_set))}>
                        <span className="range-value min">{location.temp_min}<i className="icon icon-celsius"></i></span>
                        <i className="icon icon-minus"></i>
                    </button>
                    <span className="range-value temp-now">{location.temp_set}<i className="icon icon-celsius"></i></span>
                    <button className="btn" onClick={() => dispatch(increment(location.temp_set))}>
                        <i className="icon icon-plus"></i>
                        <span className="range-value max">{location.temp_max}<i className="icon icon-celsius"></i></span>
                    </button>
                </div>
            </div>
        </div>
    );
}
