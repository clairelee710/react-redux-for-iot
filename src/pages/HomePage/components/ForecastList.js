const ForecastList = ({ forecast, type }) => (
    <div className="information-container forecast">
        <ul className="flexbox-items-wrapper">
            {forecast.map((item, index) => (
                <ForecastItem
                    key={index}
                    item={item}
                />
            ))}
        </ul>
    </div>
);

export default ForecastList


const WeekdayMapping = ["日", "一", "二", "三", "四", "五", "六"];


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