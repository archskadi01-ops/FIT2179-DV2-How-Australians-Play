const chart8 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

    "width": 420,
    "height": 300,

    "data": {
        "values": [
            {"region":"Metro", "players":88},
            {"region":"Regional", "players":76},
            {"region":"Remote", "players":61}
        ]
    },

    "mark": {
        "type":"arc",
        "innerRadius":50
    },

    "encoding": {
        "theta": {
            "field":"players",
            "type":"quantitative"
        },

        "color": {
            "field":"region",
            "type":"nominal",

            "scale": {
                "range": ["#ffb000", "#888888", "#444444"]
            },

            "legend": {
                "labelColor":"white",
                "titleColor":"white"
            }
        },

        "tooltip":[
            {"field":"region","type":"nominal"},
            {"field":"players","type":"quantitative"}
        ]
    },

    "config": {
        "background":"transparent",

        "view":{
            "stroke":"transparent"
        }
    }
};
