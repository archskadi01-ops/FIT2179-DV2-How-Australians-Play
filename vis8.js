const chart8 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

    "width": 500,
    "height": 400,

    "projection": {
        "type": "mercator"
    },

    "data": {
        "url": "https://raw.githubusercontent.com/rowanhogan/australian-states/master/states.geojson",
        "format": {
            "type": "geojson"
        }
    },

    "transform": [
        {
            "lookup": "properties.STATE_NAME",

            "from": {
                "data": {
                    "values": [
                        {"state":"New South Wales","score":74},
                        {"state":"Victoria","score":74},
                        {"state":"Queensland","score":73},
                        {"state":"Western Australia","score":73},
                        {"state":"South Australia","score":71},
                        {"state":"Tasmania","score":69},
                        {"state":"Northern Territory","score":68},
                        {"state":"Australian Capital Territory","score":79}
                    ]
                },

                "key":"state",
                "fields":["score"]
            }
        }
    ],

    "mark": {
        "type":"geoshape",
        "stroke":"#111",
        "strokeWidth":1.5
    },

    "encoding": {

        "color": {
            "field":"score",
            "type":"quantitative",

            "scale": {
                "scheme":"goldgreen"
            },

            "legend": {
                "title":"Digital Inclusion",
                "labelColor":"white",
                "titleColor":"white"
            }
        },

        "tooltip":[
            {
                "field":"properties.STATE_NAME",
                "title":"State"
            },

            {
                "field":"score",
                "title":"Score"
            }
        ]
    },

    "config": {
        "background":"transparent",

        "view":{
            "stroke":"transparent"
        }
    }
};

vegaEmbed("#chart8", chart8, {actions:false});
