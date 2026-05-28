const chart4 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

    "width": 350,
    "height": 260,

    "data": {
        "values": [
            {"benefit": "Building resilience", "value": 83},
            {"benefit": "Managing stress", "value": 81},
            {"benefit": "Building self-confidence", "value": 80},
            {"benefit": "Managing depression and anxiety", "value": 78},
            {"benefit": "Developing emotional intelligence", "value": 73}
        ]
    },

    "mark": {
        "type": "bar",
        "cornerRadiusTopRight": 8,
        "cornerRadiusBottomRight": 8
    },

    "encoding": {
        "y": {
            "field": "benefit",
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
                "title": "Adults who agree (%)",
                "titleColor": "white"
            }
        },

        "color": {
            "value": "#ffb000"
        },

        "tooltip": [
            {"field": "benefit", "type": "nominal", "title": "Wellbeing benefit"},
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
