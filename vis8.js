const chart8 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

    "width": 500,
    "height": 400,

    "projection": {
        "type": "mercator"
    },

    "data": {
        "url": "https://raw.githubusercontent.com/vega/vega/main/docs/data/australia.json",
        "format": {
            "type": "topojson",
            "feature": "states"
        }
    },

    "transform": [
        {
            "lookup": "properties.STATE_NAME",
            "from": {
                "data": {
                    "values": [
                        {"state": "New South Wales", "score": 74.0},
                        {"state": "Victoria", "score": 74.1},
                        {"state": "Queensland", "score": 72.9},
                        {"state": "Western Australia", "score": 73.9},
                        {"state": "South Australia", "score": 71.3},
                        {"state": "Tasmania", "score": 69.4},
                        {"state": "Northern Territory", "score": 72.5},
                        {"state": "Australian Capital Territory", "score": 79.5}
                    ]
                },

                "key": "state",
                "fields": ["score"]
            }
        }
    ],

    "mark": {
        "type": "geoshape",
        "stroke": "#222",
        "strokeWidth": 1.5
    },

    "encoding": {
        "color": {
            "field": "score",
            "type": "quantitative",

            "scale": {
                "scheme": "goldgreen"
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
