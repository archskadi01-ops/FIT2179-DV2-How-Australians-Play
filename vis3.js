const chart3 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

    "width": 350,
    "height": 250,

    "data": {
        "values": [
            {"age_group": "18-24", "value": 8},
            {"age_group": "25-34", "value": 13},
            {"age_group": "35-44", "value": 20},
            {"age_group": "45-64", "value": 30},
            {"age_group": "55-64", "value": 45},
            {"age_group": "65+", "value": 70}
        ]
    },

    "mark": {
        "type": "line",
        "point": true,
        "strokeWidth": 4
    },

    "encoding": {
        "x": {
            "field": "age_group",
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
                "title": "Only play alone (%)",
                "titleColor": "white"
            }
        },

        "color": {
            "value": "#ffb000"
        },

        "tooltip": [
            {"field": "age_group", "type": "ordinal", "title": "Age group"},
            {"field": "value", "type": "quantitative", "title": "Only play alone (%)"}
        ]
    },

    "config": {
        "background": "transparent",
        "view": {
            "stroke": "transparent"
        },
        "axis": {
            "gridColor": "#444"
        }
    }
};
