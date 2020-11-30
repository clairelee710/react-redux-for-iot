import React from 'react';
import ReactDOM from 'react-dom';
import './ReportsPageContainer.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Line as LineChart } from 'react-chartjs-2';

export const ReportsContainer = ({ homeData, setHomeData, modesData, setModesData }) => (
    <section className="devices-container">
        <HomeInfoCarousel homeData={homeData} />
    </section>
);

function EnergyReport({ homeData }) {

    console.log("EnergyReport data");
    console.log(homeData);
    let energyData = homeData[3].energy;
    const data = {
        labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
        datasets: [{
            label: '月電力報表 (kWh)',
            fill: false,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(75,192,192,1)', //線和標記方框同色

            data: energyData
        }]
    };

    const options = {
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    color: 'rgba(255,255,255,.1)'
                },
                ticks: {
                    fontColor: 'white'
                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    color: 'rgba(255,255,255,.1)'
                },
                ticks: {
                    fontColor: 'white'
                }
            }]
        },
        legend: {
            labels: {
                fontColor: 'white'
            },
        },
        responsive: true
    };

    return (
        <div className="iaq-container">
            <p className="title">電力報表</p>
            <LineChart data={data}
            options={options}
            width="600px" height="400px"/>
        </div>
    )
}

function HomeInfoCarousel({ homeData }) {

    const iaq = homeData[2].iaq;

    console.log("HomeInfoCarousel location");
    console.log(iaq);

    return (
        <div className="weather-container">
            <IaqInfo iaq={iaq}/>
            <EnergyReport homeData={homeData} />
        </div>
    );
}

const IaqInfo = ({ iaq }) => (
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
);