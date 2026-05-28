const chart8 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

    "width": 450,
    "height": 350,

    "projection": {
        "type": "mercator",
        "center": [134, -25],
        "scale": 550
    },

    "data": {
        "url": "https://raw.githubusercontent.com/rowanhogan/australian-states/master/states.geojson",
        "format": {
            "type": "json",
            "property": "features"
        }
    },

    "transform": [
        {
            "lookup": "properties.STATE_NAME",
            "from": {
                "data": {
                    "values": [
                        {"state":"New South Wales","score":69},
                        {"state":"Victoria","score":72},
                        {"state":"Queensland","score":67},
                        {"state":"Western Australia","score":66},
                        {"state":"South Australia","score":65},
                        {"state":"Tasmania","score":64},
                        {"state":"Northern Territory","score":66},
                        {"state":"Australian Capital Territory","score":78}
                    ]
                },
                "key": "state",
                "fields": ["score"]
            }
        }
    ],

    "mark": {
        "type": "geoshape",
        "stroke": "#111",
        "strokeWidth": 1.5
    },

    "encoding": {
        "color": {
            "value": "#ffb000"
        },

        "tooltip": [
            {
                "field": "properties.STATE_NAME",
                "title": "State"
            },
            {
                "field": "score",
                "title": "Score"
            }
        ]
    },

    "config": {
        "background": "transparent",
        "view": {
            "stroke": "transparent"
        }
    }
};
