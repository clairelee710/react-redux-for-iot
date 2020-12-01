import React from 'react';
import { useSelector } from 'react-redux'
import { Line as LineChart } from 'react-chartjs-2';

const EnergyReport = () => {

    const homeData = useSelector(state => state.homeData)
    const energyData = homeData.energy;
    const data = {
        labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
        datasets: [{
            label: '月電力報表 (kWh)',
            fill: false,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(75,192,192,1)',
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
            <LineChart data={data} options={options}/>
        </div>
    )
}

export default EnergyReport
