const chart5 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

    "width": 420,
    "height": 300,

    "data": {
        "values": [
            {"benefit": "Create enjoyment", "value": 95},
            {"benefit": "Bring joy", "value": 94},
            {"benefit": "Stimulate the mind", "value": 94},
            {"benefit": "Connect different people", "value": 86},
            {"benefit": "Create awareness", "value": 81},
            {"benefit": "Improve physical wellbeing", "value": 63}
        ]
    },

    "mark": {
        "type": "circle",
        "opacity": 0.85
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

        "size": {
            "field": "value",
            "type": "quantitative",
            "legend": null,
            "scale": {
                "range": [100, 900]
            }
        },

        "color": {
            "value": "#ffb000"
        },

        "tooltip": [
            {"field": "benefit", "type": "nominal", "title": "Personal growth benefit"},
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
