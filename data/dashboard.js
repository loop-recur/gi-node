// get /dashboard/:boardType
// boardTypes = [Home, Library, Shop, Reward]

exports.stub = {
    "params": {
        "cacheExpire": 600,
        "useCache": false,
        "timeout": 60000,
        "enableKeepAlive": false,
        "url": "https://api.gamestop.com/mobile/dashboard/Home",
        "query": {
            "cartkey": null
        },
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
        "Content-Length": "11180",
        "Connection": "close",
        "Date": "Fri, 25 May 2012 22:50:38 GMT",
        "Cache-Control": "private",
        "X-AspNet-Version": "4.0.30319",
        "X-Powered-By": "ASP.NET"
    },
    "text": "{\"Points\":{\"Available\":285,\"Lifetime\":285},\"Dashboard\":{\"BottomBanners\":[],\"Header\":{\"__type\":\"HomeDashboardHeader:http:\\/\\/www.gamestop.com\\/services\\/channel\\/mobile\\/entities\\/2011\\/08\",\"ActiveOfferCount\":0,\"LibraryCount\":2,\"MessagesCount\":0,\"ReservationsCount\":0,\"WishListCount\":4},\"Shelves\":[{\"Items\":[{\"Image\":{\"LargeUrl\":null,\"SmallUrl\":null},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-89141\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/media.poweruprewards.com\\/images\\/kiosk2\\/001\\/806\\/001806545_3_med_5654.jpg\",\"SmallUrl\":\"http:\\/\\/media.poweruprewards.com\\/images\\/kiosk2\\/001\\/806\\/001806545_3_t_5654.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-89162\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/media.poweruprewards.com\\/images\\/kiosk2\\/005\\/705\\/005705885_3_med_4900.jpg\",\"SmallUrl\":\"http:\\/\\/media.poweruprewards.com\\/images\\/kiosk2\\/005\\/705\\/005705885_3_t_4900.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-90110\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/231150b1.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/231150a1.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-90694\"}},{\"Image\":{\"LargeUrl\":null,\"SmallUrl\":null},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-95532\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/media.poweruprewards.com\\/images\\/kiosk2\\/002\\/900\\/002900136_3_med_1872.jpg\",\"SmallUrl\":\"http:\\/\\/media.poweruprewards.com\\/images\\/kiosk2\\/002\\/900\\/002900136_3_t_1872.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-92540\"}},{\"Image\":{\"LargeUrl\":null,\"SmallUrl\":null},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-91181\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/media.poweruprewards.com\\/images\\/kiosk2\\/000\\/027\\/000027180_3_med_2462.jpg\",\"SmallUrl\":\"http:\\/\\/media.poweruprewards.com\\/images\\/kiosk2\\/000\\/027\\/000027180_3_t_2462.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-6821\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/media.poweruprewards.com\\/images\\/kiosk2\\/005\\/841\\/005841674_3_med_1010.jpg\",\"SmallUrl\":\"http:\\/\\/media.poweruprewards.com\\/images\\/kiosk2\\/005\\/841\\/005841674_3_t_1010.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-84415\"}},{\"Image\":{\"LargeUrl\":null,\"SmallUrl\":null},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-89700\"}}],\"Link\":{\"LinkKey\":\"product-list-recommendations\",\"LinkType\":\"product-list\",\"Method\":\"GET\",\"Url\":\"product\\/list\\/recommendations\"},\"Title\":\"We Recommend\"},{\"Items\":[{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/790007b2.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/790007a3.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-84477\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/640013b1.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/640013a1.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-76157\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/200061bLE.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/200061aLE.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-77068\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/201369brp.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/201369arp.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-101863\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/550001b.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/550001a.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-84722\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/550002b.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/550002a.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-84723\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/271143brp.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/271143arp.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-101864\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/201377brp1.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/201377arp1.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-102028\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/270508bLE.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/270508aLE.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-77067\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/790005b2.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/790005a2.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-84476\"}}],\"Link\":{\"LinkKey\":\"product-list-bestsellers\",\"LinkType\":\"product-list\",\"Method\":\"GET\",\"Url\":\"product\\/list\\/bestsellers\"},\"Title\":\"Best Sellers\"},{\"Items\":[{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/640013b1.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/640013a1.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-76157\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/200061bLE.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/200061aLE.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-77068\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/270508bLE.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/270508aLE.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-77067\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/200742b.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/200742a.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-75257\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/320172b.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/320172a.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-101681\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/201076b.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/201076a.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-90839\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/270868b.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/270868a.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-90840\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/270454b.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/270454a.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-75258\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/803194b.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/803194a.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-100144\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/320141b.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/320141a.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-98918\"}}],\"Link\":{\"LinkKey\":\"product-list-nowshipping\",\"LinkType\":\"product-list\",\"Method\":\"GET\",\"Url\":\"product\\/list\\/nowshipping\"},\"Title\":\"Now Shipping\"},{\"Items\":[{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/100700b.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/100700a.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-100601\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/883866b.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/883866a.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-100586\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/170484b.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/170484a.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-98945\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/271133b.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/271133a.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-100573\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/201363b.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/201363a.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-101488\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/271138b.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/271138a.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-101489\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/160017brp.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/160017arp.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-92936\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/803244b.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/803244a.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-102096\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/803211b.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/803211a.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-100627\"}},{\"Image\":{\"LargeUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/lbox\\/320165b.jpg\",\"SmallUrl\":\"http:\\/\\/www.gamestop.com\\/common\\/images\\/sbox\\/320165a.jpg\"},\"Link\":{\"LinkKey\":\"product-get\",\"LinkType\":\"product-get\",\"Method\":\"GET\",\"Url\":\"product\\/COM-100559\"}}],\"Link\":{\"LinkKey\":\"product-list-comingsoon\",\"LinkType\":\"product-list\",\"Method\":\"GET\",\"Url\":\"product\\/list\\/comingsoon\"},\"Title\":\"Coming Soon\"}],\"TopBanners\":[]}}",
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
        "Dashboard": {
            "BottomBanners": [],
            "Header": {
                "__type": "HomeDashboardHeader:http://www.gamestop.com/services/channel/mobile/entities/2011/08",
                "ActiveOfferCount": 0,
                "LibraryCount": 2,
                "MessagesCount": 0,
                "ReservationsCount": 0,
                "WishListCount": 4
            },
            "Shelves": [
                {
                    "Items": [
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/790007b2.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/790007a3.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-84477"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/640013b1.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/640013a1.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-76157"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/200061bLE.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/200061aLE.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-77068"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/201369brp.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/201369arp.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-101863"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/550001b.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/550001a.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-84722"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/550002b.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/550002a.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-84723"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/271143brp.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/271143arp.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-101864"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/201377brp1.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/201377arp1.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-102028"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/270508bLE.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/270508aLE.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-77067"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/790005b2.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/790005a2.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-84476"
                            }
                        }
                    ],
                    "Link": {
                        "LinkKey": "product-list-bestsellers",
                        "LinkType": "product-list",
                        "Method": "GET",
                        "Url": "product/list/bestsellers"
                    },
                    "Title": "Best Sellers"
                },
                {
                    "Items": [
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/640013b1.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/640013a1.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-76157"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/200061bLE.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/200061aLE.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-77068"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/270508bLE.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/270508aLE.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-77067"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/200742b.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/200742a.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-75257"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/320172b.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/320172a.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-101681"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/201076b.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/201076a.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-90839"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/270868b.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/270868a.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-90840"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/270454b.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/270454a.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-75258"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/803194b.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/803194a.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-100144"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/320141b.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/320141a.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-98918"
                            }
                        }
                    ],
                    "Link": {
                        "LinkKey": "product-list-nowshipping",
                        "LinkType": "product-list",
                        "Method": "GET",
                        "Url": "product/list/nowshipping"
                    },
                    "Title": "Now Shipping"
                },
                {
                    "Items": [
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/100700b.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/100700a.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-100601"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/883866b.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/883866a.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-100586"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/170484b.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/170484a.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-98945"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/271133b.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/271133a.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-100573"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/201363b.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/201363a.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-101488"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/271138b.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/271138a.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-101489"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/160017brp.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/160017arp.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-92936"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/803244b.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/803244a.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-102096"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/803211b.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/803211a.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-100627"
                            }
                        },
                        {
                            "Image": {
                                "LargeUrl": "http://www.gamestop.com/common/images/lbox/320165b.jpg",
                                "SmallUrl": "http://www.gamestop.com/common/images/sbox/320165a.jpg"
                            },
                            "Link": {
                                "LinkKey": "product-get",
                                "LinkType": "product-get",
                                "Method": "GET",
                                "Url": "product/COM-100559"
                            }
                        }
                    ],
                    "Link": {
                        "LinkKey": "product-list-comingsoon",
                        "LinkType": "product-list",
                        "Method": "GET",
                        "Url": "product/list/comingsoon"
                    },
                    "Title": "Coming Soon"
                }
            ],
            "TopBanners": []
        }
    },
    "paging": null
};
