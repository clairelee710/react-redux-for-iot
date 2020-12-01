import React from 'react';
import { useSelector } from 'react-redux'
import { Carousel } from 'react-responsive-carousel';
import { DeviceListByType } from './components/DevicesList';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './RoomsPageContainer.css';

export const RoomsContainer = () => {
    const roomsData = useSelector(state => state.roomsData)
    const listItems = roomsData.map((roomData, index) =>
        <RoomListItem key={index} roomData={roomData} />
    );
    return (
        <section className="rooms-container">
            <Carousel className="carousel slide rooms-slider" showStatus={false}>
                {listItems}
            </Carousel>
        </section>
    );
}

function RoomListItem({ roomData }) {
    return (
        <div className="item carousel-item">
            <div className="room-info">
                <div className="room-image"
                     style={ roomData.image ? {backgroundImage: `url('./images/${roomData.image}')`} : {background: `rgba(0,0,0,.7)`}}
                >
                </div>
                <div className="overlay"></div>
                <p className="name">{roomData.name}</p>
            </div>
            <div className="device-container">
                <DeviceListByType roomData={roomData} />
            </div>
        </div>
    );
}
