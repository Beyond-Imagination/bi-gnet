import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React from "react";
import {ageOption} from "./stat-chart-option"
import {StatMap} from "./StatContainer";

interface AgeStatProps {
    myRef: any;
    data: StatMap[];
}

const convertEngToKor = (value: string) => {
    switch (value){
        case '70gte':
            return '70대 이상'
        case '60e':
            return '60대'
        case '50e':
            return '50대'
        case '40e':
            return '40대'
        case '30lte':
            return '30대 이하'

    }


}

const AgeStat: React.FC<AgeStatProps> = ({myRef, data}) => {
    let map = data.map(value => {
        return ({
            name: convertEngToKor(value.key),
            type: 'bar',
            data: [{x: 0, y: value.value}]
        })
    });

    return (
        <div ref={myRef}>
            <h3>연령 별귀농 현황</h3>
            <HighchartsReact
                highcharts={Highcharts}
                options={{
                    ...ageOption, series: map
                }}
            />
        </div>
    )
}

export default AgeStat;
