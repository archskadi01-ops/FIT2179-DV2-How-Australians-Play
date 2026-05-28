const chart6 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

    "width": 420,
    "height": 300,

    "data": {
        "values": [
            {"reason": "Family connection", "value": 54},
            {"reason": "Spend time together", "value": 47},
            {"reason": "Child asks parent to play", "value": 46},
            {"reason": "Monitor what children play", "value": 37},
            {"reason": "Monitor how often children play", "value": 25},
            {"reason": "Help educate children", "value": 16}
        ]
    },

    "mark": {
        "type": "bar",
        "cornerRadiusTopRight": 8,
        "cornerRadiusBottomRight": 8
    },

    "encoding": {
        "y": {
            "field": "reason",
            "type": "nominal",
            "sort": "-x",
            "axis": {
                "labelColor": "white",
                "title": null
            }
        },

        "x": {
            "field": "value",
            "type": "quantitative",
            "axis": {
                "labelColor": "white",
                "title": "Parents (%)",
                "titleColor": "white"
            }
        },

        "color": {
            "value": "#ffb000"
        },

        "tooltip": [
            {"field": "reason", "type": "nominal", "title": "Reason"},
            {"field": "value", "type": "quantitative", "title": "Percentage"}
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
