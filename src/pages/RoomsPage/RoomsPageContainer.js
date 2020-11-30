import React from 'react';
import ReactDOM from 'react-dom';
import './RoomsPageContainer.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const RoomsContainer = ({ roomsData, setRoomsData }) => (
    <section className="rooms-container">
        <RoomInfoCarousel roomsData={roomsData} />
    </section>
);

function RoomInfoCarousel({ roomsData }) {
    console.log("RoomInfoCarousel roomsData");
    console.log(roomsData);
    const listItems = roomsData.map((roomData, index) =>
        <RoomListItem key={index} roomData={roomData} />
    );
    return (
        <Carousel className="carousel slide rooms-slider" showArrows={false} showStatus={false}>
            {listItems}
        </Carousel>
    );
}

function RoomListItem({ roomData }) {
    return (
        <li className="item">
            <div className="carousel-item">
                <div className="room-info">
                    <div className="room-image"
                         style={ roomData.image ? {backgroundImage: `url('/${roomData.image}')`} : {background: `rgba(0,0,0,.7)`}}
                    >
                    </div>
                    <div className="overlay"></div>
                    <p className="name">{roomData.name}</p>
                </div>
                <div class="device-container">
                    <DeviceListByType roomData={roomData} />
                </div>
            </div>
        </li>
    );
}

function DeviceListByType({ roomData }) {
    console.log("DeviceListByType roomData");
    console.log(roomData.devices);
    return (
        roomData.devices.map((deviceGroup, index) =>
            <DevicesListItem key={index} deviceGroup={deviceGroup} />
        )
    );
}

function DevicesListItem({ deviceGroup }) {
    return (
        <div class="device-list">
            <div class="title">
                <i class={`icon icon-devices-${deviceGroup.type}`}></i>
                <h3>{getDeviceNameByType[deviceGroup.type]}</h3>
            </div>
            <div>
                <CreateDeviceList 
                    deviceGroup={deviceGroup}
                />
            </div>
        </div>
    );
}

const getDeviceNameByType = {
    "aircon": "温控器",
    "iaq": "空气盒子",
    "socket": "插座",
    "floorheating": "地热",
    "lock": "门锁",
    "light": "灯",
    "curtain": "窗帘",
    "tfa": "新风",
    "tfc": "大牛"
};

function CreateDeviceList({ deviceGroup }) {
    console.log("CreateDeviceList deviceGroup");
    console.log(deviceGroup);
    let groupType = deviceGroup.type;
    let groupItems = deviceGroup.items;
    return (
        <ul class="flexbox-items-wrapper">
            {groupItems.map(device => (
                <DeviceBox
                    device={device}
                    deviceGroupType={groupType}
                />
            ))}
        </ul>
    );
}

const DeviceBox = ({ device, deviceGroupType }) => (
    <li>
        <div class={`item ${controllableDevice(device) ? "controllable" : ""}`} 
            data-status={`${device.hasOwnProperty("percentage") ? (device.percentage > 0 ? "on" : "off") : (device.status == 1 ? "on" : "off")}`}
            data-no={device.no}
            >
            {controllableDevice(device) && 
                <div class="line"></div>
            }
            <p class="name">{device.name}</p>
            <div class="info">
                {device.device_type === 93 && 
                    <span>{device.temp ? device.temp : "--"}<i class="icon icon-celsius"></i></span>
                }
                {device.device_type === 4 && 
                    <span>{device.temp ? device.temp : "--"}<i class="icon icon-celsius"></i></span>
                }
                {device.device_type === 1281 && 
                    <p>
                        <span class="info-text active">co2<em>{device.co2}ppm</em></span>
                        <span class="info-text">湿度<em>{device.humi}%</em></span>
                        <span class="info-text">悬浮微粒<em>{device.pm25}微克</em></span>
                    </p>
                }
                {device.device_type === 91 && 
                    <span>{device.percentage}%</span>
                }
                {device.device_type === 94 && device.sub_type === 1 && 
                    <span>{device.percentage}%</span>
                }
            </div>
            {controllableDevice(device) && 
                <i class={`icon controller-icon ${device.is_master ? "icon-master" : "icon-controller"}`}>
                </i>
            }
        </div>
    </li>
);


const controllableDevice = (device) => {
    return device.hasOwnProperty("fan_speed") || device.hasOwnProperty("mode") || device.hasOwnProperty("percentage") || device.hasOwnProperty("set_status");
};