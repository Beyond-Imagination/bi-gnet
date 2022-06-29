import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import {breedOption, trendOption} from "../stat/stat-chart-option";
import {TrendApi} from "../home/TrendList";

interface TrendViewProps {
    data: TrendApi;
}

const TrendView: React.FC<TrendViewProps> = ({data}) => {
    // let map = data.sort((a, b) => {
    //     return b.value - a.value;
    // }).map(value => {
    //     return ({
    //         name: convertEngToKor(value.key),
    //         y: value.value,
    //     })
    // }).slice(0, 5)
    //     .filter(value => value.y > 0);
    let map = data.data.sort((a, b) => {
        return b.value - a.value;
    }).map((value, index) => {
        return (
            {
                name: value.key,
                y: value.value
            }
        )
    })
    return (
        <>
            <h3>{data.title}</h3>
            <HighchartsReact
                highcharts={Highcharts}
                options={{
                    ...trendOption, series: [{
                        name: '',
                        type: 'bar',
                        data: map
                    }]
                }}/>
        </>
    )
}

export default TrendView;
