const chart9 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

    "width": 420,
    "height": 300,

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

    "mark": {
        "type": "bar",
        "cornerRadiusTopRight": 8,
        "cornerRadiusBottomRight": 8
    },

    "encoding": {
        "y": {
            "field": "state",
            "type": "nominal",
            "sort": "-x",
            "axis": {
                "labelColor": "white",
                "title": null
            }
        },

        "x": {
            "field": "score",
            "type": "quantitative",
            "axis": {
                "labelColor": "white",
                "title": "Digital Inclusion Score",
                "titleColor": "white"
            }
        },

        "color": {
            "field": "score",
            "type": "quantitative",
            "scale": {
                "range": ["#444444", "#ffb000"]
            },
            "legend": null
        },

        "tooltip": [
            {"field": "state", "type": "nominal", "title": "State / Territory"},
            {"field": "score", "type": "quantitative", "title": "Digital Inclusion Score"}
        ]
    },

    "config": {
        "background": "transparent",
        "view": {
            "stroke": "transparent"
        },
        "axis": {
            "gridColor": "#333"
        }
    }
};
