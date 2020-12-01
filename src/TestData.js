export const MenuData = [{
        isActive: true,
        icon: "icon-page-home",
        name: "主页",
        page: "home"
    },
    {
        isActive: false,
        icon: "icon-page-devices",
        name: "報表",
        page: "data"
    },
    {
        isActive: false,
        icon: "icon-page-rooms",
        name: "房间",
        page: "rooms"
    },
    {
        isActive: false,
        icon: "icon-page-setting",
        name: "设置",
        page: "setting"
    }];

export const HomeFullData = {
        "location": {
            "name": "上海市",
            "temperature": "20",
            "temp_set": "27",
            "temp_min": "16",
            "temp_max": "33",
            "description": "昆山科技",
            "icon": "0",
            "airquality": "27",
            "sunrise": "05:13",
            "sunset": "18:32"
        },
        "forecast": [{
                "day": "3",
                "icon": "0",
                "temperature": "18"
            },
            {
                "day": "4",
                "icon": "2",
                "temperature": "21"
            },
            {
                "day": "5",
                "icon": "7",
                "temperature": "20"
            },
            {
                "day": "6",
                "icon": "2",
                "temperature": "20"
            },
            {
                "day": "0",
                "icon": "2",
                "temperature": "19"
            },
            {
                "day": "1",
                "icon": 2,
                "temperature": "19"
            },
            {
                "day": "2",
                "icon": "8",
                "temperature": "19"
            }
        ],
        "iaq": {
            "indoor_pm25": "37",
            "indoor_co2": "546",
            "indoor_humi": "48.5",
            "indoor_temp": "16.9"
        },
        "energy": [3, 4, 7, 9, 5, 3]};

export const DevicesFullData = [{
        "type": "aircon",
        "items": [{
                "gw_no": "15074",
                "no": "699",
                "name": "TH2003-2",
                "device_type": 4,
                "subtype": 2,
                "is_master": 0,
                "fan_speed": 3,
                "mode": 2,
                "temp": "23",
                "indoor_temp": "16.5",
                "temp_min": 15,
                "temp_max": 30,
                "status": 0,
                "fan_speed_type": [0, 1, 2, 3, 4, 5],
                "mode_type": [0, 1, 2, 3, 4],
                "update_time": "2020-04-14 07:05:19"
            },
            {
                "gw_no": "15074",
                "no": "700",
                "name": "TH2003-3",
                "device_type": 4,
                "subtype": 2,
                "is_master": 0,
                "fan_speed": 3,
                "mode": 2,
                "temp": "20",
                "indoor_temp": "18.2",
                "temp_min": 15,
                "temp_max": 30,
                "status": 0,
                "fan_speed_type": [0, 1, 2, 3, 4, 5],
                "mode_type": [0, 1, 2, 3, 4],
                "update_time": "2020-04-14 07:47:18"
            },
            {
                "gw_no": "15074",
                "no": "701",
                "name": "TH2003-4",
                "device_type": 4,
                "subtype": 2,
                "is_master": 0,
                "fan_speed": 3,
                "mode": 2,
                "temp": "20",
                "indoor_temp": "16.6",
                "temp_min": 15,
                "temp_max": 30,
                "status": 0,
                "fan_speed_type": [0, 1, 2, 3, 4, 5],
                "mode_type": [0, 1, 2, 3, 4],
                "update_time": "2020-04-14 07:18:58"
            },
            {
                "gw_no": "15075",
                "no": "702",
                "name": "TH2003-5",
                "device_type": 4,
                "subtype": 2,
                "is_master": 0,
                "fan_speed": 3,
                "mode": 2,
                "temp": "26",
                "indoor_temp": "16.6",
                "temp_min": 15,
                "temp_max": 30,
                "status": 0,
                "fan_speed_type": [0, 1, 2, 3, 4, 5],
                "mode_type": [0, 1, 2, 3, 4],
                "update_time": "2020-04-14 07:18:58"
            }
        ]
    },
    {
        "type": "iaq",
        "items": [{
            "gw_no": "15074",
            "no": "144",
            "name": "NHYIAQ-6",
            "device_type": 1281,
            "subtype": 2,
            "humi": "48.5",
            "voc": "3570",
            "pm25": "37",
            "co2": "546",
            "status": 1,
            "update_time": "2020-04-14 05:58:54"
        }]
    },
    {
        "type": "light",
        "items": [{
                "gw_no": "15074",
                "no": "5130",
                "name": "light 1",
                "device_type": 92,
                "alias_type": "light",
                "status": 0,
                "update_time": "2020-04-13 06:15:03"
            },
            {
                "gw_no": "15074",
                "no": "5131",
                "name": "light 2",
                "device_type": 92,
                "alias_type": "light",
                "status": 1,
                "update_time": "2020-04-13 06:15:03"
            }
        ]
    },
    {
        "type": "curtain",
        "items": [{
                "gw_no": "15074",
                "no": "4948279",
                "name": "04000001x1",
                "device_type": 94,
                "sub_type": 1,
                "percentage": 0,
                "update_time": "2020-04-13 07:35:03"
            },
            {
                "gw_no": "15074",
                "no": "4948280",
                "name": "04000001x2",
                "device_type": 94,
                "sub_type": 1,
                "percentage": 0,
                "update_time": "2020-04-13 07:35:03"
            }
        ]
    }
];

export const ModesFullData = [{
        "no": "862",
        "com_no": "30168",
        "id": "aa000001x1",
        "icon": "modes-car",
        "name": "上班",
        "schedule_time": null,
        "schedule_day": null,
        "room_binding": ["504"],
        "is_active": 0,
        "is_night_hotkey": 0
    },
    {
        "no": "863",
        "com_no": "30168",
        "id": "aa000001x2",
        "icon": "modes-power",
        "name": "全開",
        "schedule_time": null,
        "schedule_day": null,
        "room_binding": null,
        "is_active": 0,
        "is_night_hotkey": 0
    },
    {
        "no": "864",
        "com_no": "30168",
        "id": "aa000001x1",
        "icon": "modes-home",
        "name": "回家",
        "schedule_time": null,
        "schedule_day": null,
        "room_binding": ["504"],
        "is_active": 1,
        "is_night_hotkey": 0
    },
    {
        "no": "865",
        "com_no": "30168",
        "id": "aa000001x2",
        "icon": "modes-sleep",
        "name": "睡眠",
        "schedule_time": null,
        "schedule_day": null,
        "room_binding": null,
        "is_active": 0,
        "is_night_hotkey": 0
    },
    {
        "no": "866",
        "com_no": "30168",
        "id": "aa000001x1",
        "icon": "modes-vacation",
        "name": "度假",
        "schedule_time": null,
        "schedule_day": null,
        "room_binding": ["504"],
        "is_active": 0,
        "is_night_hotkey": 0
    },
    {
        "no": "867",
        "com_no": "30168",
        "id": "aa000001x2",
        "icon": "modes-night",
        "name": "夜晚",
        "schedule_time": null,
        "schedule_day": null,
        "room_binding": null,
        "is_active": 0,
        "is_night_hotkey": 0
    }
];


export const SettingsFullData = [{
        type: "user",
        icon: "icon-setting-user",
        name: "帐号管理",
        description: "你可以新增子帐号，并指定不同空间让子帐号使用。",
        tools: [{
                name: "分享体验",
                id: "userShare",
                clickAction: "popup"
            },
            {
                name: "子帐号设定",
                id: "userInfo",
                clickAction: "popup"
            }
        ],
        items: [{
            "no": 362,
            "accout_type": "sub_user",
            "name": "claire.aivwv",
            "phone": null,
            "enable_qrcode_login": "1",
            "address": null
        }]
    },
    {
        type: "gateway",
        icon: "icon-setting-gateway",
        name: "网关中心",
        description: "如果遇到装置设备无法控制的情况，你可以在这里查看网关资讯或是重新开启。",
        tools: [{
            name: "网关状态",
            id: "gatewayStatus",
            clickAction: "popup"
        }, {
            name: "全部重启",
            id: "gatewayReboot",
            clickAction: "gatewayReboot"
        }],
        items: [{
            "no": "15074",
            "id": "B0:A3:51:2F:6A:72",
            "lan": "192.168.0.101",
            "wan": "180.106.70.127",
            "cpu": "0.25",
            "ram": "55.36",
            "update_time": "2020-04-13 05:10:03"
        }]
    },
    {
        type: "power",
        icon: "icon-setting-power",
        name: "能源中心",
        description: "如果想要手动调整能源主机的模式，你可以在这里进行控制。",
        tools: [{
            name: "控制能源主机",
            id: "power",
            clickAction: "popup"
        }],
        items: [{
            "gw_no": "15074",
            "no": "17",
            "name": "YORK-98",
            "device_type": 4097,
            "status": 0,
            "error_code": null,
            "temp": 30,
            "temp_min": 15,
            "temp_max": 55,
            "inwater_temp": 13,
            "outwater_temp": 14,
            "mode": 1,
            "usage": 0,
            "warranty": "2021-01-04",
            "run_time": 561782
        }]
    },
    {
        type: "hotkey",
        icon: "icon-setting-hotkey",
        name: "操作管理",
        description: "在不同的时间你可以指定开启快捷模式，使用起来更方便。",
        tools: [{
            name: "操作设定",
            id: "hotkey",
            clickAction: "popup"
        }],
        items: [{
            "no": null,
            "id": "night",
            "name": "testu591c95935feb6377",
            "status": "0",
            "start_time": "23:00",
            "end_time": "06:00",
            "schedule_day": "0000000",
            "modes": []
        }]
    },
    {
        type: "service",
        icon: "icon-setting-service",
        name: "客服中心",
        description: "如果遇到使用问题，你可以在这里查看保固资讯以及一键报修。",
        tools: [{
            name: "服务资讯",
            id: "serviceInfo",
            clickAction: "popup"
        }, {
            name: "一键报修",
            id: "serviceCenter",
            clickAction: "call"
        }],
        info: {
            "name": "aCloud",
            "address": "testu66065c714e0067354e91"
        }
    }
];
export const RoomsFullData = [{
        "no": "504",
        "name": "客廳",
        "image": "default-1.jpg",
        "devices": [{
                "type": "aircon",
                "items": [{
                        "gw_no": "15074",
                        "no": "699",
                        "name": "客廳空調-2",
                        "device_type": 4,
                        "subtype": 2,
                        "is_master": 0,
                        "fan_speed": 3,
                        "mode": 2,
                        "temp": "23",
                        "indoor_temp": "16.5",
                        "temp_min": 15,
                        "temp_max": 30,
                        "status": 0,
                        "fan_speed_type": [0, 1, 2, 3, 4, 5],
                        "mode_type": [0, 1, 2, 3, 4],
                        "update_time": "2020-04-14 07:05:19"
                    },
                    {
                        "gw_no": "15074",
                        "no": "700",
                        "name": "客廳空調-3",
                        "device_type": 4,
                        "subtype": 2,
                        "is_master": 0,
                        "fan_speed": 3,
                        "mode": 2,
                        "temp": "20",
                        "indoor_temp": "18.2",
                        "temp_min": 15,
                        "temp_max": 30,
                        "status": 0,
                        "fan_speed_type": [0, 1, 2, 3, 4, 5],
                        "mode_type": [0, 1, 2, 3, 4],
                        "update_time": "2020-04-14 07:47:18"
                    }
                ]
            },
            {
                "type": "iaq",
                "items": [{
                    "gw_no": "15074",
                    "no": "144",
                    "name": "客廳iaq",
                    "device_type": 1281,
                    "subtype": 2,
                    "humi": "48.5",
                    "voc": "3570",
                    "pm25": "37",
                    "co2": "546",
                    "status": 1,
                    "update_time": "2020-04-14 05:58:54"
                }]
            },
            {
                "type": "light",
                "items": [{
                        "gw_no": "15074",
                        "no": "5130",
                        "name": "客廳主燈",
                        "device_type": 92,
                        "alias_type": "light",
                        "status": 0,
                        "update_time": "2020-04-13 06:15:03"
                    }, {
                        "gw_no": "15074",
                        "no": "5137",
                        "name": "玄關燈",
                        "device_type": 92,
                        "alias_type": "light",
                        "status": 0,
                        "update_time": "2020-04-13 06:15:03"
                    }, {
                        "gw_no": "15074",
                        "no": "5138",
                        "name": "前陽台燈",
                        "device_type": 92,
                        "alias_type": "light",
                        "status": 0,
                        "update_time": "2020-04-13 06:15:03"
                    },
                    {
                        "gw_no": "15074",
                        "no": "5131",
                        "name": "客廳邊燈",
                        "device_type": 92,
                        "alias_type": "light",
                        "status": 1,
                        "update_time": "2020-04-13 06:15:03"
                    }
                ]
            },
            {
                "type": "curtain",
                "items": [{
                        "gw_no": "15074",
                        "no": "4948279",
                        "name": "客廳窗簾",
                        "device_type": 94,
                        "sub_type": 1,
                        "percentage": 0,
                        "update_time": "2020-04-13 07:35:03"
                    },
                    {
                        "gw_no": "15074",
                        "no": "4948280",
                        "name": "客廳紗簾",
                        "device_type": 94,
                        "sub_type": 1,
                        "percentage": 0,
                        "update_time": "2020-04-13 07:35:03"
                    }
                ]
            }
        ],
        "modes": [{
                "no": "862",
                "com_no": "30168",
                "mode_id": "aa000001x1"
            },
            {
                "no": "863",
                "com_no": "30168",
                "mode_id": "aa000001x2"
            }
        ]
    },
    {
        "no": "505",
        "name": "主臥室",
        "image": "default-26.jpg",
        "devices": [{
                "type": "aircon",
                "items": [{
                        "gw_no": "15074",
                        "no": "699",
                        "name": "主臥室-空調2",
                        "device_type": 4,
                        "subtype": 2,
                        "is_master": 0,
                        "fan_speed": 3,
                        "mode": 2,
                        "temp": "23",
                        "indoor_temp": "16.5",
                        "temp_min": 15,
                        "temp_max": 30,
                        "status": 0,
                        "fan_speed_type": [0, 1, 2, 3, 4, 5],
                        "mode_type": [0, 1, 2, 3, 4],
                        "update_time": "2020-04-14 07:05:19"
                    },
                    {
                        "gw_no": "15074",
                        "no": "700",
                        "name": "主臥室-空調3",
                        "device_type": 4,
                        "subtype": 2,
                        "is_master": 0,
                        "fan_speed": 3,
                        "mode": 2,
                        "temp": "20",
                        "indoor_temp": "18.2",
                        "temp_min": 15,
                        "temp_max": 30,
                        "status": 0,
                        "fan_speed_type": [0, 1, 2, 3, 4, 5],
                        "mode_type": [0, 1, 2, 3, 4],
                        "update_time": "2020-04-14 07:47:18"
                    }
                ]
            },
            {
                "type": "socket",
                "items": [{
                        "gw_no": "15074",
                        "no": "4948279",
                        "name": "床邊插座",
                        "device_type": 92,
                        "status": 1,
                        "update_time": "2020-04-13 07:35:03"
                    },
                    {
                        "gw_no": "15074",
                        "no": "4948280",
                        "name": "電視插座",
                        "device_type": 92,
                        "status": 1,
                        "update_time": "2020-04-13 07:35:03"
                    }
                ]
            },
            {
                "type": "light",
                "items": [{
                        "gw_no": "15074",
                        "no": "5138",
                        "name": "梳妝檯燈",
                        "device_type": 92,
                        "alias_type": "light",
                        "status": 0,
                        "update_time": "2020-04-13 06:15:03"
                    },{
                        "gw_no": "15074",
                        "no": "5139",
                        "name": "床邊燈",
                        "device_type": 92,
                        "alias_type": "light",
                        "status": 0,
                        "update_time": "2020-04-13 06:15:03"
                    },{
                        "gw_no": "15074",
                        "no": "5140",
                        "name": "臥室主燈",
                        "device_type": 92,
                        "alias_type": "light",
                        "status": 0,
                        "update_time": "2020-04-13 06:15:03"
                    },
                    {
                        "gw_no": "15074",
                        "no": "5131",
                        "name": "閱讀燈",
                        "device_type": 92,
                        "alias_type": "light",
                        "status": 1,
                        "update_time": "2020-04-13 06:15:03"
                    }
                ]
            },
            {
                "type": "curtain",
                "items": [{
                        "gw_no": "15074",
                        "no": "4948279",
                        "name": "主臥窗簾",
                        "device_type": 94,
                        "sub_type": 1,
                        "percentage": 0,
                        "update_time": "2020-04-13 07:35:03"
                    },
                    {
                        "gw_no": "15074",
                        "no": "4948280",
                        "name": "主臥紗簾",
                        "device_type": 94,
                        "sub_type": 1,
                        "percentage": 0,
                        "update_time": "2020-04-13 07:35:03"
                    }
                ]
            }
        ],
        "modes": [{
                "no": "862",
                "com_no": "30168",
                "mode_id": "aa000001x1"
            },
            {
                "no": "863",
                "com_no": "30168",
                "mode_id": "aa000001x2"
            },
            {
                "no": "862",
                "com_no": "30168",
                "mode_id": "aa000001x1"
            },
            {
                "no": "863",
                "com_no": "30168",
                "mode_id": "aa000001x2"
            },
            {
                "no": "862",
                "com_no": "30168",
                "mode_id": "aa000001x1"
            },
            {
                "no": "863",
                "com_no": "30168",
                "mode_id": "aa000001x2"
            }
        ]
    }
];

// import { client } from '../../api/client'

// Thunk function
export async function fetchAllData(dispatch, getState) {
    // const response = await client.get('/fakeApi/todos')
    // Use fake data from Data.js JSON
    // const stateBefore = getState()
    // console.log('Todos before dispatch: ', stateBefore.todos)

    dispatch({ type: 'INIT_MENUS', payload: MenuData })
    dispatch({ type: 'INIT_HOME_PAGE', payload: HomeFullData })
    dispatch({ type: 'INIT_MODES_LIST', payload: ModesFullData })

    // const stateAfter = getState()
    // console.log('Todos after dispatch: ', stateAfter.todos)
}
