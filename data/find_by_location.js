exports.stub = {
    "params": {
        "cacheExpire": 600,
        "timeout": 60000,
        "enableKeepAlive": false,
        "url": "https://api.gamestop.com/mobile/store/search?lat=37.78583526611328&lon=-122.4064178466797&d=60",
        "query": {
            "lat": 37.78583526611328,
            "lon": -122.40641784667969,
            "d": 60
        },
        "paging": {
            "page": 1
        },
        "requestHeaders": {
            "X-Device": "9AE5C7AB-6E43-529B-91B2-B5669CB0CA4B",
            "X-Developer-Key": "e61dc486679fb28793db0ee7ffdd7f8f",
            "Authorization": "GS OTMxYzAwOWNjYjk3ZGMxMWZkMWI1ODQ0MGEwNjhhNnwzNGVhMjZmZTA0NzczNDU5OTk4MTZlZDQ0OTgyZTFlMQ==",
            "X-Range": "page=1,size=10",
            "Accept": "application/json; charset=utf-8"
        },
        "cacheLabel": "Authorization:GS OTMxYzAwOWNjYjk3ZGMxMWZkMWI1ODQ0MGEwNjhhNnwzNGVhMjZmZTA0NzczNDU5OTk4MTZlZDQ0OTgyZTFlMQ==;Range:page=1,size=10",
        "format": "json",
        "method": "GET"
    },
    "status": 206,
    "headers": {
        "X-Accept-Ranges": "page",
        "Server": "Microsoft-IIS/7.5",
        "Content-Type": "application/json; charset=utf-8",
        "Content-Length": "5962",
        "Connection": "close",
        "Date": "Fri, 25 May 2012 22:53:08 GMT",
        "Cache-Control": "private",
        "X-AspNet-Version": "4.0.30319",
        "X-Powered-By": "ASP.NET",
        "X-Content-Range": "page 1/9,size 10,count 84"
    },
    "text": {
        "Center": {
            "Latitude": 37.78583526611328,
            "Longitude": -122.4064178466797
        },
        "Stores": [
            {
                "Store": {
                    "Hours": [
                        "Mon-Sat9am-9pm",
                        "Sun10am-7pm"
                    ],
                    "IsHopsEnabled": true,
                    "Links": [
                        {
                            "LinkKey": "store-checkin",
                            "LinkType": "store-checkin",
                            "Method": "POST",
                            "Url": "store/11080/checkin"
                        }
                    ],
                    "Location": {
                        "GeoCode": {
                            "Latitude": 37.7859795918367,
                            "Longitude": -122.407932040816
                        },
                        "Address": {
                            "City": "SANFRANCISCO",
                            "Country": "US",
                            "Line1": "151POWELLST",
                            "Line2": "STE4",
                            "Line3": null,
                            "Line4": null,
                            "PostalCode": "94102",
                            "StateOrProvince": "CA"
                        }
                    },
                    "Mall": "151PowellStreet",
                    "PhoneNumber": "4153627601",
                    "StoreNumber": 4437,
                    "StoreType": "GameStop"
                },
                "DistanceInMiles": 0.08328151300273065,
                "IsAvailableForCheckin": true
            },
            {
                "Store": {
                    "Hours": [
                        "Mon-Sat9am-7pm",
                        "Sun11am-7pm"
                    ],
                    "IsHopsEnabled": true,
                    "Links": [
                        {
                            "LinkKey": "store-checkin",
                            "LinkType": "store-checkin",
                            "Method": "POST",
                            "Url": "store/11785/checkin"
                        }
                    ],
                    "Location": {
                        "GeoCode": {
                            "Latitude": 37.7542597959184,
                            "Longitude": -122.418637142857
                        },
                        "Address": {
                            "City": "SANFRANCISCO",
                            "Country": "US",
                            "Line1": "2673MISSIONST",
                            "Line2": "",
                            "Line3": null,
                            "Line4": null,
                            "PostalCode": "94110",
                            "StateOrProvince": "CA"
                        }
                    },
                    "Mall": "2673MissionSt",
                    "PhoneNumber": "4152852276",
                    "StoreNumber": 5145,
                    "StoreType": "GameStop"
                },
                "DistanceInMiles": 2.2814481639776587,
                "IsAvailableForCheckin": true
            },
            {
                "Store": {
                    "Hours": [
                        "Mon-Sat10am-9pm",
                        "Sun12pm-6pm"
                    ],
                    "IsHopsEnabled": true,
                    "Links": [
                        {
                            "LinkKey": "store-checkin",
                            "LinkType": "store-checkin",
                            "Method": "POST",
                            "Url": "store/10719/checkin"
                        }
                    ],
                    "Location": {
                        "GeoCode": {
                            "Latitude": 37.728597,
                            "Longitude": -122.477056
                        },
                        "Address": {
                            "City": "SANFRANCISCO",
                            "Country": "US",
                            "Line1": "325120THAVE.",
                            "Line2": "SUITE242",
                            "Line3": null,
                            "Line4": null,
                            "PostalCode": "94132",
                            "StateOrProvince": "CA"
                        }
                    },
                    "Mall": "StonestownGalleria",
                    "PhoneNumber": "4155647567",
                    "StoreNumber": 4075,
                    "StoreType": "GameStopMall"
                },
                "DistanceInMiles": 5.525371480451164,
                "IsAvailableForCheckin": false
            },
            {
                "Store": {
                    "Hours": [
                        "Mon-Thu10am-8pm",
                        "Fri-Sat10am-9pm",
                        "Sun11am-6pm"
                    ],
                    "IsHopsEnabled": true,
                    "Links": [
                        {
                            "LinkKey": "store-checkin",
                            "LinkType": "store-checkin",
                            "Method": "POST",
                            "Url": "store/9929/checkin"
                        }
                    ],
                    "Location": {
                        "GeoCode": {
                            "Latitude": 37.73403,
                            "Longitude": -122.489
                        },
                        "Address": {
                            "City": "SanFrancisco",
                            "Country": "US",
                            "Line1": "1501SLOATBLVD",
                            "Line2": "STEC",
                            "Line3": null,
                            "Line4": null,
                            "PostalCode": "94132",
                            "StateOrProvince": "CA"
                        }
                    },
                    "Mall": "LakeshorePlaza",
                    "PhoneNumber": "4156827318",
                    "StoreNumber": 2459,
                    "StoreType": "GameStop"
                },
                "DistanceInMiles": 5.758553719479793,
                "IsAvailableForCheckin": false
            },
            {
                "Store": {
                    "Hours": [
                        "Mon-Sat10am-9pm",
                        "Sun11am-6pm"
                    ],
                    "IsHopsEnabled": true,
                    "Links": [
                        {
                            "LinkKey": "store-checkin",
                            "LinkType": "store-checkin",
                            "Method": "POST",
                            "Url": "store/12534/checkin"
                        }
                    ],
                    "Location": {
                        "GeoCode": {
                            "Latitude": 37.6997063065327,
                            "Longitude": -122.482567638191
                        },
                        "Address": {
                            "City": "DalyCity",
                            "Country": "US",
                            "Line1": "436WestlakeCenter",
                            "Line2": "",
                            "Line3": null,
                            "Line4": null,
                            "PostalCode": "94015",
                            "StateOrProvince": "CA"
                        }
                    },
                    "Mall": "WestlakeShopping",
                    "PhoneNumber": "6507571971",
                    "StoreNumber": 3798,
                    "StoreType": "GameStop"
                },
                "DistanceInMiles": 7.261129782421821,
                "IsAvailableForCheckin": false
            },
            {
                "Store": {
                    "Hours": [
                        "Mon-Sat10am-7pm",
                        "Sun11am-6pm"
                    ],
                    "IsHopsEnabled": true,
                    "Links": [
                        {
                            "LinkKey": "store-checkin",
                            "LinkType": "store-checkin",
                            "Method": "POST",
                            "Url": "store/8938/checkin"
                        }
                    ],
                    "Location": {
                        "GeoCode": {
                            "Latitude": 37.8296659183673,
                            "Longitude": -122.285312857143
                        },
                        "Address": {
                            "City": "Emeryville",
                            "Country": "US",
                            "Line1": "3980HollisStreet",
                            "Line2": "",
                            "Line3": null,
                            "Line4": null,
                            "PostalCode": "94608",
                            "StateOrProvince": "CA"
                        }
                    },
                    "Mall": "Bridgecourt",
                    "PhoneNumber": "5106544221",
                    "StoreNumber": 864,
                    "StoreType": "GameStop"
                },
                "DistanceInMiles": 7.271594287734112,
                "IsAvailableForCheckin": false
            },
            {
                "Store": {
                    "Hours": [
                        "Mon-Sat9am-10pm",
                        "Sun11am-9pm"
                    ],
                    "IsHopsEnabled": true,
                    "Links": [
                        {
                            "LinkKey": "store-checkin",
                            "LinkType": "store-checkin",
                            "Method": "POST",
                            "Url": "store/8764/checkin"
                        }
                    ],
                    "Location": {
                        "GeoCode": {
                            "Latitude": 37.6736218402367,
                            "Longitude": -122.466786486759
                        },
                        "Address": {
                            "City": "Colma",
                            "Country": "US",
                            "Line1": "4929JuniperoSerraBlvd",
                            "Line2": "",
                            "Line3": null,
                            "Line4": null,
                            "PostalCode": "94014",
                            "StateOrProvince": "CA"
                        }
                    },
                    "Mall": "SerraCenter",
                    "PhoneNumber": "6507567170",
                    "StoreNumber": 690,
                    "StoreType": "GameStop"
                },
                "DistanceInMiles": 8.42585208924029,
                "IsAvailableForCheckin": false
            },
            {
                "Store": {
                    "Hours": [
                        "Mon-Sat10am-9pm",
                        "Sun11am-6pm"
                    ],
                    "IsHopsEnabled": true,
                    "Links": [
                        {
                            "LinkKey": "store-checkin",
                            "LinkType": "store-checkin",
                            "Method": "POST",
                            "Url": "store/9653/checkin"
                        }
                    ],
                    "Location": {
                        "GeoCode": {
                            "Latitude": 37.6692193002471,
                            "Longitude": -122.469011963619
                        },
                        "Address": {
                            "City": "DalyCity",
                            "Country": "US",
                            "Line1": "127-CSERRAMONTECTR",
                            "Line2": "",
                            "Line3": null,
                            "Line4": null,
                            "PostalCode": "94015",
                            "StateOrProvince": "CA"
                        }
                    },
                    "Mall": "SerramonteCenter",
                    "PhoneNumber": "6507552737",
                    "StoreNumber": 1846,
                    "StoreType": "GameStopMall"
                },
                "DistanceInMiles": 8.75341186636426,
                "IsAvailableForCheckin": false
            },
            {
                "Store": {
                    "Hours": [
                        "Mon-Sat10am-8pm",
                        "Sun11am-6pm"
                    ],
                    "IsHopsEnabled": true,
                    "Links": [
                        {
                            "LinkKey": "store-checkin",
                            "LinkType": "store-checkin",
                            "Method": "POST",
                            "Url": "store/11907/checkin"
                        }
                    ],
                    "Location": {
                        "GeoCode": {
                            "Latitude": 37.8350694594595,
                            "Longitude": -122.251976756757
                        },
                        "Address": {
                            "City": "OAKLAND",
                            "Country": "US",
                            "Line1": "5110BROADWAY",
                            "Line2": "STEA",
                            "Line3": null,
                            "Line4": null,
                            "PostalCode": "94611",
                            "StateOrProvince": "CA"
                        }
                    },
                    "Mall": "RockridgeShppngCtr",
                    "PhoneNumber": "5106534705",
                    "StoreNumber": 5267,
                    "StoreType": "GameStop"
                },
                "DistanceInMiles": 9.090878339322307,
                "IsAvailableForCheckin": false
            }
        ]
    },
    "paging": {
        "page": 1,
        "totalPages": 9,
        "pageSize": 10,
        "total": 84
    }
};

