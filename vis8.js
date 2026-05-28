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
                        {"state": "Australian Capital Territory", "score": 79.5},
                        {"state": "Victoria", "score": 74.1},
                        {"state": "New South Wales", "score": 74.0},
                        {"state": "Western Australia", "score": 73.9},
                        {"state": "Queensland", "score": 72.9},
                        {"state": "Northern Territory", "score": 72.5},
                        {"state": "South Australia", "score": 71.3},
                        {"state": "Tasmania", "score": 69.4}
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
            "field": "score",
            "type": "quantitative",
            "scale": {
                "scheme": "yellowgreen"
            },
            "legend": {
                "title": "Digital Inclusion",
                "labelColor": "white",
                "titleColor": "white"
            }
        },

        "tooltip": [
            {
                "field": "properties.STATE_NAME",
                "type": "nominal",
                "title": "State"
            },
            {
                "field": "score",
                "type": "quantitative",
                "title": "Digital Inclusion Score"
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
