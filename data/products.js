// get /product/:id_or_:barcode

exports.stub = {
    "params": {
        "cacheExpire": 600,
        "useCache": true,
        "timeout": 60000,
        "enableKeepAlive": false,
        "url": "https://api.gamestop.com/mobile/product/COM-90110",
        "requestHeaders": {
            "X-Device": "9AE5C7AB-6E43-529B-91B2-B5669CB0CA4B",
            "X-Developer-Key": "e61dc486679fb28793db0ee7ffdd7f8f",
            "Authorization": "GS OTMxYzAwOWNjYjk3ZGMxMWZkMWI1ODQ0MGEwNjhhNnwzNGVhMjZmZTA0NzczNDU5OTk4MTZlZDQ0OTgyZTFlMQ==",
            "Accept": "application/json; charset=utf-8"
        },
        "cacheLabel": "Authorization:GS OTMxYzAwOWNjYjk3ZGMxMWZkMWI1ODQ0MGEwNjhhNnwzNGVhMjZmZTA0NzczNDU5OTk4MTZlZDQ0OTgyZTFlMQ==",
        "format": "json",
        "method": "GET"
    },
    "status": 200,
    "headers": {
        "Server": "Microsoft-IIS/7.5",
        "Content-Type": "application/json; charset=utf-8",
        "Content-Length": "9124",
        "Connection": "close",
        "Date": "Fri, 25 May 2012 22:51:11 GMT",
        "Cache-Control": "private",
        "X-AspNet-Version": "4.0.30319",
        "X-Powered-By": "ASP.NET"
    },
    "text": "{\"Points\":{\"Available\":285,\"Lifetime\":285},\"Product\":{\"AverageRating\":9.4667,\"BoxArt\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/201024b.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/201024a.jpg\"},\"BuyBoxMessages\":[],\"Description\":\"\",\"Developer\":\"Square Enix\",\"EsrbDescriptors\":[\"Drug Reference\",\"Mild Language\",\"Mild Suggestive Themes\",\"Simulated Gambling\",\"Violence\"],\"EsrbRating\":\"T\",\"GameLibraryList\":\"WishToOwn\",\"Images\":[{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lscreen\\/122225_440x350.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sscreen\\/122225_140x105.jpg\"},{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lscreen\\/138582_440x350.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sscreen\\/138582_140x105.jpg\"},{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lscreen\\/138614_440x350.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sscreen\\/138614_140x105.jpg\"},{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lscreen\\/122228_440x350.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sscreen\\/122228_140x105.jpg\"},{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lscreen\\/146664_440x350.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sscreen\\/146664_140x105.jpg\"},{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lscreen\\/138580_440x350.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sscreen\\/138580_140x105.jpg\"},{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lscreen\\/138612_440x350.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sscreen\\/138612_140x105.jpg\"},{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lscreen\\/138637_440x350.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sscreen\\/138637_140x105.jpg\"},{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lscreen\\/122221_440x350.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sscreen\\/122221_140x105.jpg\"},{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lscreen\\/146663_440x350.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sscreen\\/146663_140x105.jpg\"}],\"Links\":[{\"LinkKey\":\"product-availability-geocode\",\"LinkType\":\"product-availability-geocode\",\"Method\":\"GET\",\"Url\":\"product\\/COM-90110\\/availability?lat={latitude}&lon={longitude}\"},{\"LinkKey\":\"product-availability-query\",\"LinkType\":\"product-availability-query\",\"Method\":\"GET\",\"Url\":\"product\\/COM-90110\\/availability?q={query}\"},{\"LinkKey\":\"user-gamelibrary-update\",\"LinkType\":\"user-gamelibrary-update\",\"Method\":\"POST\",\"Url\":\"user\\/gamelibrary\\/LOY-207798\"}],\"Platforms\":[\"Xbox 360\"],\"ProductKey\":\"COM-90110\",\"Publisher\":\"Square Enix\",\"ReleaseDate\":null,\"Specifications\":\"<?xml version=\\\"1.0\\\" encoding=\\\"utf-8\\\"?><Columns xmlns:xsi=\\\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance\\\" xmlns:xsd=\\\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema\\\"><Column sequence=\\\"1\\\" label=\\\"Game Details\\\"><Specification label=\\\"Disk Drive\\\" value=\\\"Hard drive required\\\" \\/><\\/Column><\\/Columns>\",\"Title\":\"Final Fantasy XIII-2\",\"Variants\":[{\"Availability\":\"Available\",\"Condition\":\"Used\",\"IsAvailableForInStorePickup\":false,\"IsHopsEnabled\":true,\"IsOnlinePrice\":false,\"Links\":[{\"LinkKey\":\"cart-additem\",\"LinkType\":\"web-external\",\"Method\":\"POST\",\"Url\":\"http:\\/\\/m.gamestop.com\\/Orders\\/AddToCart?sku=952947&quantity=1&affid=2121&cid=gsn_70000001\"}],\"Price\":39.99,\"Sku\":\"952947\",\"Status\":\"Usually ships in 24 hours\"},{\"Availability\":\"Available\",\"Condition\":\"New\",\"IsAvailableForInStorePickup\":false,\"IsHopsEnabled\":true,\"IsOnlinePrice\":false,\"Links\":[{\"LinkKey\":\"cart-additem\",\"LinkType\":\"web-external\",\"Method\":\"POST\",\"Url\":\"http:\\/\\/m.gamestop.com\\/Orders\\/AddToCart?sku=201024&quantity=1&affid=2121&cid=gsn_70000001\"}],\"Price\":49.99,\"Sku\":\"201024\",\"Status\":\"Usually ships in 24 hours\"}],\"Videos\":[{\"Image\":{\"LargeUrl\":\"http:\\/\\/brightcove.vo.llnwd.net\\/d17\\/unsecured\\/media\\/84373748001\\/84373748001_1190596891001_ari-origin05-arc-162-1317315883774.jpg?pubId=84373748001\",\"SmallUrl\":\"http:\\/\\/brightcove.vo.llnwd.net\\/d17\\/unsecured\\/media\\/84373748001\\/84373748001_1190596890001_ari-origin05-arc-162-1317315883467.jpg?pubId=84373748001\"},\"IsAgeRestricted\":false,\"Key\":\"981188912001\",\"Url\":\"http:\\/\\/gamestop.brightcove.com.edgesuite.net\\/84373748001\\/84373748001_981301905001_FFXIII2-us-multi-R1-WMV.mp4\"},{\"Image\":{\"LargeUrl\":\"http:\\/\\/brightcove.vo.llnwd.net\\/e1\\/pd\\/84373748001\\/84373748001_1001095533001_vs-1001088680001.jpg?pubId=84373748001\",\"SmallUrl\":\"http:\\/\\/brightcove.vo.llnwd.net\\/e1\\/pd\\/84373748001\\/84373748001_1001095534001_th-1001088680001.jpg?pubId=84373748001\"},\"IsAgeRestricted\":false,\"Key\":\"1001049028001\",\"Url\":\"http:\\/\\/gamestop.brightcove.com.edgesuite.net\\/84373748001\\/84373748001_1001095532001_FFXIII2-us-multi-R1-WMV-90110-90109.mp4\"},{\"Image\":{\"LargeUrl\":\"http:\\/\\/brightcove.vo.llnwd.net\\/e1\\/pd\\/84373748001\\/84373748001_1130525837001_vs-1130526764001.jpg?pubId=84373748001\",\"SmallUrl\":\"http:\\/\\/brightcove.vo.llnwd.net\\/e1\\/pd\\/84373748001\\/84373748001_1130525838001_th-1130526764001.jpg?pubId=84373748001\"},\"IsAgeRestricted\":false,\"Key\":\"1130521396001\",\"Url\":\"http:\\/\\/gamestop.brightcove.com.edgesuite.net\\/84373748001\\/84373748001_1130525836001_FFXIII-2-PAX-Trailer-US-720-90109-90110.mp4\"},{\"Image\":{\"LargeUrl\":\"http:\\/\\/brightcove.vo.llnwd.net\\/d17\\/unsecured\\/media\\/84373748001\\/84373748001_1173281533001_vs-1173240145001.jpg?pubId=84373748001\",\"SmallUrl\":\"http:\\/\\/brightcove.vo.llnwd.net\\/d17\\/unsecured\\/media\\/84373748001\\/84373748001_1173281534001_th-1173240145001.jpg?pubId=84373748001\"},\"IsAgeRestricted\":false,\"Key\":\"1173062005001\",\"Url\":\"http:\\/\\/gamestop.brightcove.com.edgesuite.net\\/84373748001\\/84373748001_1173281532001_TGS-US-Xbox-january-90110.mp4\"},{\"Image\":{\"LargeUrl\":\"http:\\/\\/brightcove.vo.llnwd.net\\/d18\\/unsecured\\/media\\/84373748001\\/84373748001_1253049886001_vs-1253040831001.jpg?pubId=84373748001\",\"SmallUrl\":\"http:\\/\\/brightcove.vo.llnwd.net\\/d18\\/unsecured\\/media\\/84373748001\\/84373748001_1253049887001_th-1253040831001.jpg?pubId=84373748001\"},\"IsAgeRestricted\":false,\"Key\":\"1253007310001\",\"Url\":\"http:\\/\\/gamestop.brightcove.com.edgesuite.net\\/84373748001\\/84373748001_1253049885001_NYCC-trailer-US-Multi-720-MP4.mp4\"},{\"Image\":{\"LargeUrl\":\"http:\\/\\/brightcove.vo.llnwd.net\\/d18\\/unsecured\\/media\\/84373748001\\/84373748001_1306668299001_vs-1306662990001.jpg?pubId=84373748001\",\"SmallUrl\":\"http:\\/\\/brightcove.vo.llnwd.net\\/d18\\/unsecured\\/media\\/84373748001\\/84373748001_1306668300001_th-1306662990001.jpg?pubId=84373748001\"},\"IsAgeRestricted\":false,\"Key\":\"1306622529001\",\"Url\":\"http:\\/\\/gamestop.brightcove.com.edgesuite.net\\/84373748001\\/84373748001_1306668298001_AOP-US.mp4\"},{\"Image\":{\"LargeUrl\":\"http:\\/\\/brightcove.vo.llnwd.net\\/d18\\/unsecured\\/media\\/84373748001\\/84373748001_1306665219001_vs-1306657862001.jpg?pubId=84373748001\",\"SmallUrl\":\"http:\\/\\/brightcove.vo.llnwd.net\\/d18\\/unsecured\\/media\\/84373748001\\/84373748001_1306665220001_th-1306657862001.jpg?pubId=84373748001\"},\"IsAgeRestricted\":false,\"Key\":\"1306641885001\",\"Url\":\"http:\\/\\/gamestop.brightcove.com.edgesuite.net\\/84373748001\\/84373748001_1306665218001_FFXIII-2-MiniVid01-HD-USA-MP4.mp4\"},{\"Image\":{\"LargeUrl\":\"http:\\/\\/brightcove.vo.llnwd.net\\/d19\\/unsecured\\/media\\/84373748001\\/84373748001_1325614343001_vs-1325609769001.jpg?pubId=84373748001\",\"SmallUrl\":\"http:\\/\\/brightcove.vo.llnwd.net\\/d19\\/unsecured\\/media\\/84373748001\\/84373748001_1325614344001_th-1325609769001.jpg?pubId=84373748001\"},\"IsAgeRestricted\":false,\"Key\":\"1325566909001\",\"Url\":\"http:\\/\\/gamestop.brightcove.com.edgesuite.net\\/84373748001\\/84373748001_1325614342001_FINAL-FFXIII-2-NutShell-526-FINAL-MP4.mp4\"},{\"Image\":{\"LargeUrl\":\"http:\\/\\/brightcove.vo.llnwd.net\\/d19\\/unsecured\\/media\\/84373748001\\/84373748001_1329981135001_vs-1329969561001.jpg?pubId=84373748001\",\"SmallUrl\":\"http:\\/\\/brightcove.vo.llnwd.net\\/d19\\/unsecured\\/media\\/84373748001\\/84373748001_1329981136001_th-1329969561001.jpg?pubId=84373748001\"},\"IsAgeRestricted\":false,\"Key\":\"1329948844001\",\"Url\":\"http:\\/\\/gamestop.brightcove.com.edgesuite.net\\/84373748001\\/84373748001_1329981134001_FFXIII-2-Masters-of-Monsters-MP4.mp4\"},{\"Image\":{\"LargeUrl\":\"http:\\/\\/brightcove.vo.llnwd.net\\/d20\\/unsecured\\/media\\/84373748001\\/84373748001_1404418226001_vs-1404333883001.jpg?pubId=84373748001\",\"SmallUrl\":\"http:\\/\\/brightcove.vo.llnwd.net\\/d20\\/unsecured\\/media\\/84373748001\\/84373748001_1404418227001_th-1404333883001.jpg?pubId=84373748001\"},\"IsAgeRestricted\":false,\"Key\":\"1403928971001\",\"Url\":\"http:\\/\\/gamestop.brightcove.com.edgesuite.net\\/84373748001\\/84373748001_1404418225001_FFXIII-2-MiniVid06-HD-MP4-USA.mp4\"},{\"Image\":{\"LargeUrl\":\"http:\\/\\/brightcove.vo.llnwd.net\\/d20\\/unsecured\\/media\\/84373748001\\/84373748001_1418588968001_vs-1418576281001.jpg?pubId=84373748001\",\"SmallUrl\":\"http:\\/\\/brightcove.vo.llnwd.net\\/d20\\/unsecured\\/media\\/84373748001\\/84373748001_1418588969001_th-1418576281001.jpg?pubId=84373748001\"},\"IsAgeRestricted\":false,\"Key\":\"1418554071001\",\"Url\":\"http:\\/\\/gamestop.brightcove.com.edgesuite.net\\/84373748001\\/84373748001_1418588967001_FFXIII-2-Vid08-VARIETY-HD-MP4-USA.mp4\"}]}}",
    "data": {},
    "fromCache": false,
    "xhr": {
        "autoEncodeUrl": false,
        "enableKeepAlive": false
    },
    "json": {
        "Points": {
            "Available": 285,
            "Lifetime": 285
        },
        "Product": {
            "AverageRating": 9.4667,
            "BoxArt": {
                "LargeUrl": "http://www.gamestop.com/common/images/lbox/201024b.jpg",
                "SmallUrl": "http://www.gamestop.com/common/images/sbox/201024a.jpg"
            },
            "BuyBoxMessages": [],
            "Description": "",
            "Developer": "Square Enix",
            "EsrbDescriptors": [
                "Drug Reference",
                "Mild Language",
                "Mild Suggestive Themes",
                "Simulated Gambling",
                "Violence"
            ],
            "EsrbRating": "T",
            "GameLibraryList": "WishToOwn",
            "Images": [
                {
                    "LargeUrl": "http://www.gamestop.com/common/images/lscreen/122225_440x350.jpg",
                    "SmallUrl": "http://www.gamestop.com/common/images/sscreen/122225_140x105.jpg"
                },
                {
                    "LargeUrl": "http://www.gamestop.com/common/images/lscreen/138582_440x350.jpg",
                    "SmallUrl": "http://www.gamestop.com/common/images/sscreen/138582_140x105.jpg"
                },
                {
                    "LargeUrl": "http://www.gamestop.com/common/images/lscreen/138614_440x350.jpg",
                    "SmallUrl": "http://www.gamestop.com/common/images/sscreen/138614_140x105.jpg"
                },
                {
                    "LargeUrl": "http://www.gamestop.com/common/images/lscreen/122228_440x350.jpg",
                    "SmallUrl": "http://www.gamestop.com/common/images/sscreen/122228_140x105.jpg"
                },
                {
                    "LargeUrl": "http://www.gamestop.com/common/images/lscreen/146664_440x350.jpg",
                    "SmallUrl": "http://www.gamestop.com/common/images/sscreen/146664_140x105.jpg"
                },
                {
                    "LargeUrl": "http://www.gamestop.com/common/images/lscreen/138580_440x350.jpg",
                    "SmallUrl": "http://www.gamestop.com/common/images/sscreen/138580_140x105.jpg"
                },
                {
                    "LargeUrl": "http://www.gamestop.com/common/images/lscreen/138612_440x350.jpg",
                    "SmallUrl": "http://www.gamestop.com/common/images/sscreen/138612_140x105.jpg"
                },
                {
                    "LargeUrl": "http://www.gamestop.com/common/images/lscreen/138637_440x350.jpg",
                    "SmallUrl": "http://www.gamestop.com/common/images/sscreen/138637_140x105.jpg"
                },
                {
                    "LargeUrl": "http://www.gamestop.com/common/images/lscreen/122221_440x350.jpg",
                    "SmallUrl": "http://www.gamestop.com/common/images/sscreen/122221_140x105.jpg"
                },
                {
                    "LargeUrl": "http://www.gamestop.com/common/images/lscreen/146663_440x350.jpg",
                    "SmallUrl": "http://www.gamestop.com/common/images/sscreen/146663_140x105.jpg"
                }
            ],
            "Links": [
                {
                    "LinkKey": "product-availability-geocode",
                    "LinkType": "product-availability-geocode",
                    "Method": "GET",
                    "Url": "product/COM-90110/availability?lat={latitude}&lon={longitude}"
                },
                {
                    "LinkKey": "product-availability-query",
                    "LinkType": "product-availability-query",
                    "Method": "GET",
                    "Url": "product/COM-90110/availability?q={query}"
                },
                {
                    "LinkKey": "user-gamelibrary-update",
                    "LinkType": "user-gamelibrary-update",
                    "Method": "POST",
                    "Url": "user/gamelibrary/LOY-207798"
                }
            ],
            "Platforms": [
                "Xbox 360"
            ],
            "ProductKey": "COM-90110",
            "Publisher": "Square Enix",
            "ReleaseDate": null,
            "Specifications": "<?xml version=\"1.0\" encoding=\"utf-8\"?><Columns xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><Column sequence=\"1\" label=\"Game Details\"><Specification label=\"Disk Drive\" value=\"Hard drive required\" /></Column></Columns>",
            "Title": "Final Fantasy XIII-2",
            "Variants": [
                {
                    "Availability": "Available",
                    "Condition": "Used",
                    "IsAvailableForInStorePickup": false,
                    "IsHopsEnabled": true,
                    "IsOnlinePrice": false,
                    "Links": [
                        {
                            "LinkKey": "cart-additem",
                            "LinkType": "web-external",
                            "Method": "POST",
                            "Url": "http://m.gamestop.com/Orders/AddToCart?sku=952947&quantity=1&affid=2121&cid=gsn_70000001"
                        }
                    ],
                    "Price": 39.99,
                    "Sku": "952947",
                    "Status": "Usually ships in 24 hours"
                },
                {
                    "Availability": "Available",
                    "Condition": "New",
                    "IsAvailableForInStorePickup": false,
                    "IsHopsEnabled": true,
                    "IsOnlinePrice": false,
                    "Links": [
                        {
                            "LinkKey": "cart-additem",
                            "LinkType": "web-external",
                            "Method": "POST",
                            "Url": "http://m.gamestop.com/Orders/AddToCart?sku=201024&quantity=1&affid=2121&cid=gsn_70000001"
                        }
                    ],
                    "Price": 49.99,
                    "Sku": "201024",
                    "Status": "Usually ships in 24 hours"
                }
            ],
            "Videos": [
                {
                    "Image": {
                        "LargeUrl": "http://brightcove.vo.llnwd.net/d17/unsecured/media/84373748001/84373748001_1190596891001_ari-origin05-arc-162-1317315883774.jpg?pubId=84373748001",
                        "SmallUrl": "http://brightcove.vo.llnwd.net/d17/unsecured/media/84373748001/84373748001_1190596890001_ari-origin05-arc-162-1317315883467.jpg?pubId=84373748001"
                    },
                    "IsAgeRestricted": false,
                    "Key": "981188912001",
                    "Url": "http://gamestop.brightcove.com.edgesuite.net/84373748001/84373748001_981301905001_FFXIII2-us-multi-R1-WMV.mp4"
                },
                {
                    "Image": {
                        "LargeUrl": "http://brightcove.vo.llnwd.net/e1/pd/84373748001/84373748001_1001095533001_vs-1001088680001.jpg?pubId=84373748001",
                        "SmallUrl": "http://brightcove.vo.llnwd.net/e1/pd/84373748001/84373748001_1001095534001_th-1001088680001.jpg?pubId=84373748001"
                    },
                    "IsAgeRestricted": false,
                    "Key": "1001049028001",
                    "Url": "http://gamestop.brightcove.com.edgesuite.net/84373748001/84373748001_1001095532001_FFXIII2-us-multi-R1-WMV-90110-90109.mp4"
                },
                {
                    "Image": {
                        "LargeUrl": "http://brightcove.vo.llnwd.net/e1/pd/84373748001/84373748001_1130525837001_vs-1130526764001.jpg?pubId=84373748001",
                        "SmallUrl": "http://brightcove.vo.llnwd.net/e1/pd/84373748001/84373748001_1130525838001_th-1130526764001.jpg?pubId=84373748001"
                    },
                    "IsAgeRestricted": false,
                    "Key": "1130521396001",
                    "Url": "http://gamestop.brightcove.com.edgesuite.net/84373748001/84373748001_1130525836001_FFXIII-2-PAX-Trailer-US-720-90109-90110.mp4"
                },
                {
                    "Image": {
                        "LargeUrl": "http://brightcove.vo.llnwd.net/d17/unsecured/media/84373748001/84373748001_1173281533001_vs-1173240145001.jpg?pubId=84373748001",
                        "SmallUrl": "http://brightcove.vo.llnwd.net/d17/unsecured/media/84373748001/84373748001_1173281534001_th-1173240145001.jpg?pubId=84373748001"
                    },
                    "IsAgeRestricted": false,
                    "Key": "1173062005001",
                    "Url": "http://gamestop.brightcove.com.edgesuite.net/84373748001/84373748001_1173281532001_TGS-US-Xbox-january-90110.mp4"
                },
                {
                    "Image": {
                        "LargeUrl": "http://brightcove.vo.llnwd.net/d18/unsecured/media/84373748001/84373748001_1253049886001_vs-1253040831001.jpg?pubId=84373748001",
                        "SmallUrl": "http://brightcove.vo.llnwd.net/d18/unsecured/media/84373748001/84373748001_1253049887001_th-1253040831001.jpg?pubId=84373748001"
                    },
                    "IsAgeRestricted": false,
                    "Key": "1253007310001",
                    "Url": "http://gamestop.brightcove.com.edgesuite.net/84373748001/84373748001_1253049885001_NYCC-trailer-US-Multi-720-MP4.mp4"
                },
                {
                    "Image": {
                        "LargeUrl": "http://brightcove.vo.llnwd.net/d18/unsecured/media/84373748001/84373748001_1306668299001_vs-1306662990001.jpg?pubId=84373748001",
                        "SmallUrl": "http://brightcove.vo.llnwd.net/d18/unsecured/media/84373748001/84373748001_1306668300001_th-1306662990001.jpg?pubId=84373748001"
                    },
                    "IsAgeRestricted": false,
                    "Key": "1306622529001",
                    "Url": "http://gamestop.brightcove.com.edgesuite.net/84373748001/84373748001_1306668298001_AOP-US.mp4"
                },
                {
                    "Image": {
                        "LargeUrl": "http://brightcove.vo.llnwd.net/d18/unsecured/media/84373748001/84373748001_1306665219001_vs-1306657862001.jpg?pubId=84373748001",
                        "SmallUrl": "http://brightcove.vo.llnwd.net/d18/unsecured/media/84373748001/84373748001_1306665220001_th-1306657862001.jpg?pubId=84373748001"
                    },
                    "IsAgeRestricted": false,
                    "Key": "1306641885001",
                    "Url": "http://gamestop.brightcove.com.edgesuite.net/84373748001/84373748001_1306665218001_FFXIII-2-MiniVid01-HD-USA-MP4.mp4"
                },
                {
                    "Image": {
                        "LargeUrl": "http://brightcove.vo.llnwd.net/d19/unsecured/media/84373748001/84373748001_1325614343001_vs-1325609769001.jpg?pubId=84373748001",
                        "SmallUrl": "http://brightcove.vo.llnwd.net/d19/unsecured/media/84373748001/84373748001_1325614344001_th-1325609769001.jpg?pubId=84373748001"
                    },
                    "IsAgeRestricted": false,
                    "Key": "1325566909001",
                    "Url": "http://gamestop.brightcove.com.edgesuite.net/84373748001/84373748001_1325614342001_FINAL-FFXIII-2-NutShell-526-FINAL-MP4.mp4"
                },
                {
                    "Image": {
                        "LargeUrl": "http://brightcove.vo.llnwd.net/d19/unsecured/media/84373748001/84373748001_1329981135001_vs-1329969561001.jpg?pubId=84373748001",
                        "SmallUrl": "http://brightcove.vo.llnwd.net/d19/unsecured/media/84373748001/84373748001_1329981136001_th-1329969561001.jpg?pubId=84373748001"
                    },
                    "IsAgeRestricted": false,
                    "Key": "1329948844001",
                    "Url": "http://gamestop.brightcove.com.edgesuite.net/84373748001/84373748001_1329981134001_FFXIII-2-Masters-of-Monsters-MP4.mp4"
                },
                {
                    "Image": {
                        "LargeUrl": "http://brightcove.vo.llnwd.net/d20/unsecured/media/84373748001/84373748001_1404418226001_vs-1404333883001.jpg?pubId=84373748001",
                        "SmallUrl": "http://brightcove.vo.llnwd.net/d20/unsecured/media/84373748001/84373748001_1404418227001_th-1404333883001.jpg?pubId=84373748001"
                    },
                    "IsAgeRestricted": false,
                    "Key": "1403928971001",
                    "Url": "http://gamestop.brightcove.com.edgesuite.net/84373748001/84373748001_1404418225001_FFXIII-2-MiniVid06-HD-MP4-USA.mp4"
                },
                {
                    "Image": {
                        "LargeUrl": "http://brightcove.vo.llnwd.net/d20/unsecured/media/84373748001/84373748001_1418588968001_vs-1418576281001.jpg?pubId=84373748001",
                        "SmallUrl": "http://brightcove.vo.llnwd.net/d20/unsecured/media/84373748001/84373748001_1418588969001_th-1418576281001.jpg?pubId=84373748001"
                    },
                    "IsAgeRestricted": false,
                    "Key": "1418554071001",
                    "Url": "http://gamestop.brightcove.com.edgesuite.net/84373748001/84373748001_1418588967001_FFXIII-2-Vid08-VARIETY-HD-MP4-USA.mp4"
                }
            ]
        }
    },
    "paging": null
};
