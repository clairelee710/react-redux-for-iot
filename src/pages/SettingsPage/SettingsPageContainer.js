import React from 'react';
import { useSelector } from 'react-redux'
import { Carousel } from 'react-responsive-carousel';
import './SettingsPageContainer.css';

export const SettingsContainer = () => {
    const settingsData = useSelector(state => state.settingsData)
    const listItems = settingsData.map((item, index) =>
        <SettingsListItem key={index} item={item}/>
    );
    return (
        <section className="settings-container">
            <Carousel className="main-slider" showThumbs={false} showStatus={false}>
                {listItems}
            </Carousel>
        </section>
    );
}

function SettingsListItem({ item }) {
    return (
        <div className="carousel-item active">
            <h1>{item.name}</h1>
            <i className={`icon ${item.icon}`}></i>     
            <p className="description">{item.description}</p>
            <div className="toolbar">
                {item.tools.map((tool, index) => (
                    <ToolsBtn
                        key={index}  
                        tool={tool}
                    />
                ))}
            </div>
        </div>
    );
}

const ToolsBtn = ({ tool }) => (
    <button className="btn btn-basic">
        <span>
            {tool.name}
        </span>
    </button>
);
