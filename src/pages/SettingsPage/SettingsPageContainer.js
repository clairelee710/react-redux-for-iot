import React from 'react';
import { useSelector } from 'react-redux'
import { Carousel } from 'react-responsive-carousel';
import './SettingsPageContainer.css';

export const SettingsContainer = () => {
    const settingsData = useSelector(state => state.settingsData)
    const listItems = settingsData.map((item, index) =>
        <SettingsListItem key={index}  
                        settingsData={settingsData}
                        item={item}/>
    );
    return (
        <section className="settings-container">
            <Carousel className="main-slider" showArrows={false} showStatus={false}>
                {listItems}
            </Carousel>
        </section>
    );
}

function SettingsListItem({ settingsData, item, setSettingsData }) {
    return (
        <div className="carousel-item active">
            <h1>{item.name}</h1>
            <i className={`icon ${item.icon}`}></i>     
            <p className="description">{item.description}</p>
            <div className="toolbar">
                {item.tools.map(tool => (
                    <ToolsBtn
                        settingsData={settingsData}
                        item={item}
                        tool={tool}
                        setSettingsData={setSettingsData}
                    />
                ))}
            </div>
        </div>
    );
}

const ToolsBtn = ({ settingsData, item, tool, setSettingsData }) => (
    <button className="btn btn-basic">
        <span onclick={() => setSettingsData.showSettingPopup({settingsData, item, tool})}>
            {tool.name}
        </span>
    </button>
);
