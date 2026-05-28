const chart9 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

    "width": 420,
    "height": 300,

    "data": {
        "values": [
            {"state": "ACT", "score": 79.5},
            {"state": "VIC", "score": 74.1},
            {"state": "NSW", "score": 74.0},
            {"state": "WA", "score": 73.9},
            {"state": "QLD", "score": 72.9},
            {"state": "NT", "score": 72.5},
            {"state": "SA", "score": 71.3},
            {"state": "TAS", "score": 69.4}
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
