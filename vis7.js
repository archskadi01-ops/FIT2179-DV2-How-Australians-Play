const chart7 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

    "width": 350,
    "height": 260,

    "data": {
        "values": [
            {"age":"18-24","value":92},
            {"age":"25-34","value":88},
            {"age":"35-44","value":82},
            {"age":"45-54","value":73},
            {"age":"55-64","value":61},
            {"age":"65+","value":49}
        ]
    },

    "mark": {
        "type": "area",
        "line": {
            "color": "#ffb000",
            "strokeWidth": 3
        },
        "color": {
            "x1": 1,
            "y1": 1,
            "x2": 1,
            "y2": 0,
            "gradient": "linear",
            "stops": [
                {"offset": 0, "color": "#ffb00022"},
                {"offset": 1, "color": "#ffb000"}
            ]
        }
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
                "title": "Participation (%)",
                "titleColor": "white"
            }
        },

        "tooltip": [
            {"field":"age","type":"ordinal"},
            {"field":"value","type":"quantitative"}
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
