const chart1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

    "description": "Australian gamers",

    "data": {
        "values": [
            {"category": "Gamers", "value": 81},
            {"category": "Non Gamers", "value": 19}
        ]
    },

    "mark": "bar",

    "encoding": {
        "x": {
            "field": "category",
            "type": "nominal"
        },

        "y": {
            "field": "value",
            "type": "quantitative"
        }
    }
};

vegaEmbed('#chart1', chart1);
