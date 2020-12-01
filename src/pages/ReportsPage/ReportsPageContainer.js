import React from 'react';
import ReactDOM from 'react-dom';
import IaqInfo from './components/IaqInfo';
import EnergyReport from './components/EnergyReport';
import './ReportsPageContainer.css';

export const ReportsContainer = () => (
    <section className="report-container">
        <div className="weather-container">
            <IaqInfo/>
            <EnergyReport />
        </div>
    </section>
);