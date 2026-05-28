const chart1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

    "width": 300,
    "height": 250,

    "data": {
        "values": [
            {"category":"Gamers","value":81},
            {"category":"Non Gamers","value":19}
        ]
    },

    "mark":{
        "type":"bar",
        "cornerRadiusTopLeft":10,
        "cornerRadiusTopRight":10
    },

    "encoding":{
        "x":{
            "field":"category",
            "type":"nominal",
            "axis":{
                "labelColor":"white",
                "title":null
            }
        },

        "y":{
            "field":"value",
            "type":"quantitative",
            "axis":{
                "labelColor":"white",
                "title":"Percentage"
            }
        },

        "color":{
            "field":"category",
            "scale":{
                "range":["#ffb000","#444444"]
            },
            "legend":null
        },

        "tooltip":[
            {"field":"category","type":"nominal"},
            {"field":"value","type":"quantitative"}
        ]
    },

    "config":{
        "background":"transparent",
        "view":{
            "stroke":"transparent"
        },
        "axis":{
            "gridColor":"#444"
        }
    }
};
