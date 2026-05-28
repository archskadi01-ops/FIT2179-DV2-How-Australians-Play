const chart1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

    "width": 450,
    "height": 220,

    "data": {
        "values": [
            {"category": "Gamers", "value": 81},
            {"category": "Non Gamers", "value": 19}
        ]
    },

    "mark": {
        "type": "bar",
        "cornerRadiusTopRight": 10,
        "cornerRadiusBottomRight": 10
    },

    "encoding": {
        "y": {
            "field": "category",
            "type": "nominal",
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
                "title": "Percentage",
                "titleColor": "white"
            }
        },

        "color": {
            "field": "category",
            "type": "nominal",
            "scale": {
                "range": ["#ffb000", "#444444"]
            },
            "legend": null
        },

        "tooltip": [
            {"field": "category", "type": "nominal", "title": "Category"},
            {"field": "value", "type": "quantitative", "title": "Percentage"}
        ]
    },

    "config": {
        "background": "transparent",
        "view": {
            "stroke": "transparent"
        },
        "axis": {
            "gridColor": "#333",
            "domainColor": "#666",
            "tickColor": "#666"
        }
    }
};
