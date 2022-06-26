import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React from "react";
import {genderOption} from "./stat-chart-option"
import {StatMap} from "./StatContainer";

interface GenderStatProps {
    myRef: any;
    data: StatMap[];
}

const convertEngToKor = (value: string) => {
    switch (value) {
        case 'male':
            return '남성';
        case 'female':
            return '여성';

    }
}

const GenderStat: React.FC<GenderStatProps> = ({myRef, data}) => {
    let map = data.map(value => {
        return ({
            name: convertEngToKor(value.key),
            type: 'bar',
            color: value.key == 'male' ? '#3CA9EE' : '#DC6E55',
            data: [{x: 0, y: value.value}]
        })
    });
    return (
        <div ref={myRef}>
            <h3>성별 별귀농 현황</h3>
            <HighchartsReact
                highcharts={Highcharts}
                options={{...genderOption, series: map}}
            />
        </div>
    )
}

export default GenderStat;
