const chart2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

    "width": 300,
    "height": 250,

    "data": {
        "values": [
            {"type": "Play alone only", "value": 23},
            {"type": "Play with others", "value": 77}
        ]
    },

    "mark": {
        "type": "arc",
        "innerRadius": 70
    },

    "encoding": {
        "theta": {
            "field": "value",
            "type": "quantitative"
        },
        "color": {
            "field": "type",
            "type": "nominal",
            "scale": {
                "range": ["#444444", "#ffb000"]
            },
            "legend": {
                "labelColor": "white",
                "titleColor": "white"
            }
        },
        "tooltip": [
            {"field": "type", "type": "nominal"},
            {"field": "value", "type": "quantitative"}
        ]
    },

    "config": {
        "background": "transparent",
        "view": {
            "stroke": "transparent"
        }
    }
};
