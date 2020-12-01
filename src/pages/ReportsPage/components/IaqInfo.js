import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux'

const IaqInfo = () => {

    const homeData = useSelector(state => state.homeData)
    const iaq = homeData.iaq;

    return (
        <div className="iaq-container">
            <div className="iaq-list">
                <p className="title">室内环境资讯</p>
                <div className="flexbox-items-wrapper">
                    <div className="item">
                        <div className="item-box">
                            <span className="icon icon-dust"></span>
                            <p className="name">{iaq.indoor_pm25} μg</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-box">
                            <span className="icon icon-co2"></span>
                            <p className="name">{iaq.indoor_co2}ppm</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-box">
                            <span className="icon icon-page-devices"></span>
                            <p className="name">{iaq.indoor_humi}%</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-box">
                            <span className="icon icon-power-cold"></span>
                            <p className="name">{iaq.indoor_temp} C</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default IaqInfo
