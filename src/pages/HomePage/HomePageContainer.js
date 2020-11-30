import React from 'react';
import ReactDOM from 'react-dom';
import './HomePageContainer.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, switchLoading, setModeActive } from '../../actions'

export const HomeContainer = () => (
    <section className="home-container">
        <div className="mode-list">
            <p className="title">切换情境</p>
            <div id="mode-container" className="mode-container">
                <ModesList />
            </div>
        </div>
        <HomeInfoCarousel />
    </section>
);

function ModesList() {

    const modesData = useSelector(state => state.modesData) //find data from store.js by key

    console.log("ModesList modesData");
    console.log(modesData);
    const listItems = modesData .map((mode) =>
        <ModesListItem key={mode.no} mode={mode} />
    );
    return (
        <ul className="flexbox-items-wrapper">
            {listItems}
        </ul>
    );
}

function ModesListItem({ mode }) {
    const dispatch = useDispatch()
    return (
        <li className={`item ${mode.is_active ? "active" : ""}`}  onClick={() => dispatch(setModeActive(mode.no))}>
            <div className="item-box">
                <i className={`icon icon-${mode.icon}`}></i>
                <p className="name">{mode.name}</p>
            </div>
        </li>
    );
}

function HomeInfoCarousel() {

    const homeData = useSelector(state => state.homeData) //find data from store.js by key
    const dispatch = useDispatch()

    console.log("HomeInfoCarousel homeData");
    console.log(homeData);

    const location = homeData.location;
    const forecast = homeData.forecast;
    const iaq = homeData.iaq;

    console.log(location);
    console.log(iaq);

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
                <ForecastInfo forecast={forecast}/>
            </div>
            <div>
                <div class="control-item temp">
                    <p class="name">設定空調温度</p>
                    <div class="controller">
                        <button class="btn" onClick={() => dispatch(decrement(location.temp_set))}>
                            <span class="range-value min">{location.temp_min}<i class="icon icon-celsius"></i></span>
                            <i class="icon icon-minus"></i>
                        </button>
                        <span class="range-value temp-now">{location.temp_set}<i class="icon icon-celsius"></i></span>
                        <button class="btn" onClick={() => dispatch(increment(location.temp_set))}>
                            <i class="icon icon-plus"></i>
                            <span class="range-value max">{location.temp_max}<i class="icon icon-celsius"></i></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const ForecastInfo = ({ forecast, type }) => (
    <div>
        <div className="information-container forecast">
            <ul className="flexbox-items-wrapper">
                {forecast.map((item) => (
                    <ForecastItem
                        item={item}
                    />
                ))}
            </ul>
        </div>
    </div>
);


export const WeekdayMapping = ["日", "一", "二", "三", "四", "五", "六"];


const ForecastItem = ({ item }) => (
    <li className="item">
        <p>{WeekdayMapping[item.day]}</p>
        <p>
            <i className={`icon icon-weather-${parseInt(item.icon) + 1} weather-icon`}></i>     
        </p>
        <p>
            {item.temperature}
            <i className="icon icon-celsius"></i>
        </p>
    </li>
);