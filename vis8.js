const mapSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

    "width": 450,
    "height": 350,

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
            "field": "score",
            "type": "quantitative",
            "scale": {
                "scheme": "yellowgreen"
            },
            "title": "Digital Inclusion"
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

vegaEmbed("#vis10", mapSpec);
