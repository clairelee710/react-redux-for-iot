import React from 'react';
import ReactDOM from 'react-dom';
import './SettingsPageContainer.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const SettingsContainer = ({ settingsData, setSettingsData }) => (
    <section className="setting-container">
        <SettingsInfoCarousel settingsData={settingsData} />
    </section>
);

function SettingsInfoCarousel({settingsData, setSettingsData}) {
    console.log("SettingsInfoCarousel settingsData");
    const settingsInfo = settingsData;
    console.log(settingsInfo);
    const listItems = settingsInfo.map((props, index) =>
        <SettingsListItem key={index}  
                        settingsData={settingsData}
                        props={props}
                        setSettingsData={setSettingsData}/>
    );
    return (
        <Carousel className="main-slider" showArrows={false} showStatus={false}>
            {listItems}
        </Carousel>
    );
}

function SettingsListItem({ settingsData, props, setSettingsData }) {
    return (
        <li className="carousel-item active">
            <h1>{props.name}</h1>
            <i className={`icon ${props.icon}`}></i>     
            <p className="description">{props.description}</p>
            <div className="toolbar">
                {props.tools.map(tool => (
                    <ToolsBtn
                        settingsData={settingsData}
                        props={props}
                        tool={tool}
                        setSettingsData={setSettingsData}
                    />
                ))}
            </div>
        </li>
    );
}

const ToolsBtn = ({ settingsData, props, tool, setSettingsData }) => (
    <button className="btn btn-basic">
            <span onclick={() => setSettingsData.showSettingPopup({settingsData, props, tool})}>
                {tool.name}
            </span>
    </button>
);
