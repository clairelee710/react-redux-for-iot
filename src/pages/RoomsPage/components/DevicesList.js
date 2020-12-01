import React from 'react';

export const DeviceListByType = ({ roomData }) => {
    return (
        roomData.devices.map((deviceGroup, index) =>
            <DevicesGroupList key={index} deviceGroup={deviceGroup} />
        )
    );
}

function DevicesGroupList({ deviceGroup }) {
    return (
        <div className="device-list">
            <div className="title">
                <i className={`icon icon-devices-${deviceGroup.type}`}></i>
                <h3>{getDeviceNameByType[deviceGroup.type]}</h3>
            </div>
            <div>
                <DevicesList 
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

function DevicesList({ deviceGroup }) {
    let groupType = deviceGroup.type;
    let groupItems = deviceGroup.items;
    return (
        <ul className="flexbox-items-wrapper">
            {groupItems.map((device, index) => (
                <DeviceItem
                    key={index}
                    device={device}
                    deviceGroupType={groupType}
                />
            ))}
        </ul>
    );
}

const DeviceItem = ({ device, deviceGroupType }) => (
    <li>
        <div className={`item ${controllableDevice(device) ? "controllable" : ""}`} 
            data-status={`${device.hasOwnProperty("percentage") ? (device.percentage > 0 ? "on" : "off") : (device.status == 1 ? "on" : "off")}`}
            >
            {controllableDevice(device) && 
                <div className="line"></div>
            }
            <p className="name">{device.name}</p>
            <div className="info">
                {device.device_type === 93 && 
                    <span>{device.temp ? device.temp : "--"}<i className="icon icon-celsius"></i></span>
                }
                {device.device_type === 4 && 
                    <span>{device.temp ? device.temp : "--"}<i className="icon icon-celsius"></i></span>
                }
                {device.device_type === 1281 && 
                    <p>
                        <span className="info-text active">co2<em>{device.co2}ppm</em></span>
                        <span className="info-text">湿度<em>{device.humi}%</em></span>
                        <span className="info-text">悬浮微粒<em>{device.pm25}微克</em></span>
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
                <i className={`icon controller-icon ${device.is_master ? "icon-master" : "icon-controller"}`}>
                </i>
            }
        </div>
    </li>
);


const controllableDevice = (device) => {
    return device.hasOwnProperty("fan_speed") || device.hasOwnProperty("mode") || device.hasOwnProperty("percentage") || device.hasOwnProperty("set_status");
};