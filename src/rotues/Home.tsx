import React, {useState} from "react";
import Highcharts from 'highcharts/highmaps'
import HighchartsReact from "highcharts-react-official";
import mapData from "../assets/kr-all.geo.json"

const koreaData = [
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
    ['kr-cj', 0],
    ['kr-gb', 0],
    ['kr-tg', 0],
];

export default function Home() {
    const [option] = useState({
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
        mapNavigation: {
            enabled: false,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series: [{
            data: koreaData,
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    })


    return (
        <main style={{padding: "1rem 0", overflow: "hidden"}}>
            <div style={{width: '200%', marginLeft: -80}}>
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={"mapChart"}
                    options={option}
                />
            </div>
        </main>
    );
}
