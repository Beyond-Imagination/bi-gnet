import mapData from "../assets/kr-all.geo.json";

export const koreaData = [
    ['kr-4194', 0],
    ['kr-kg', 0],
    ['kr-cb', 0],
    ['kr-kn', 0],
    ['kr-2685', 0],
    ['kr-pu', 0],
    ['kr-2688', 0],
    ['kr-tj', 0],
    ['kr-ul', 0],
    ['kr-in', 0],
    ['kr-kw', 0],
    ['kr-gn', 0],
    ['kr-so', 0],
    ['kr-cj', 0],
    ['kr-gb', 0],
    ['kr-tg', 0],
    ['kr-sj',0],
    ['kr-kj',0],
    ['default',1]
];

export let initialOption = {
    chart: {
        map: mapData,
        width: 500,
        height: 500,
        // margin: [0,0,-200,0]c
    },
    credits: {
        enabled: false
    },
    title: {
        text: ' '
    },
    legend: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    mapNavigation: {
        enabled: false,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },
    colorAxis: {
        min: 0
    },
};
