import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React from "react";
import {cropOption} from "./stat-chart-option"
import {StatMap} from "./StatContainer";

interface CropStatProps {
    myRef: any;
    data: StatMap[];

}

const convertEngToKor = (value: string) => {
    switch (value) {
        case 'paddyRice':
            return '논벼'
        case 'mixedGrains':
            return '맥류잡곡'
        case 'rootAndTuber':
            return '서류'
        case 'pulses':
            return '두류'
        case 'vegetable':
            return '채소'
        case 'flower':
            return '화훼'
        case 'special':
            return '특용'
        case 'fruitTree':
            return '과수'
        case 'etc':
            return '기타'

    }
}
const CropStat: React.FC<CropStatProps> = ({myRef, data}) => {
    let map = data.sort((a, b) => {
        return b.value - a.value;
    }).map(value => {
        return ({
            name: convertEngToKor(value.key),
            y: value.value,
        })
    }).slice(0,5);

    return (
        <div ref={myRef}>
            <h3>재배 작물 TOP 5</h3>
            <HighchartsReact
                highcharts={Highcharts}
                options={{
                    ...cropOption, series: [{
                        name: '재배 작물',
                        type: 'bar',
                        data: map
                    }]
                }}
            />
        </div>
    )
}

export default CropStat;
