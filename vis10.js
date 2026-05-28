const chart10 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

    "width": 720,
    "height": 300,

    "data": {
        "values": [
            {"age": "18-34", "value": 69.1},
            {"age": "35-44", "value": 48.5},
            {"age": "45-54", "value": 39.2},
            {"age": "55-64", "value": 25.7},
            {"age": "65-74", "value": 15.5}
        ]
    },

    "mark": {
        "type": "line",
        "point": {
            "filled": true,
            "size": 100
        },
        "strokeWidth": 4
    },

    "encoding": {
        "x": {
            "field": "age",
            "type": "ordinal",
            "axis": {
                "labelColor": "white",
                "title": "Age group",
                "titleColor": "white"
            }
        },

        "y": {
            "field": "value",
            "type": "quantitative",
            "axis": {
                "labelColor": "white",
                "title": "Recently used GenAI tools (%)",
                "titleColor": "white"
            }
        },

        "color": {
            "value": "#ffb000"
        },

        "tooltip": [
            {"field": "age", "type": "ordinal", "title": "Age group"},
            {"field": "value", "type": "quantitative", "title": "GenAI use (%)"}
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
