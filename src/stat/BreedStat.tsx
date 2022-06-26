import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React from "react";
import {breedOption, cropOption} from "./stat-chart-option"
import {StatMap} from "./StatContainer";
import {dividerClasses} from "@mui/material";

interface BreedStatProps {
    myRef: any;
    data: StatMap[];

}

const convertEngToKor = (value: string) => {
    switch (value) {
        case 'koreanBeef':
            return '한우'
        case 'milkcowAndBeef':
            return '젖소 육우'
        case 'pig':
            return '돼지'
        case 'chicken':
            return '닭'
        case 'dog':
            return '개'
        case 'goat':
            return '산양'
        case 'deer':
            return '사슴'
        case 'bee':
            return '꿀벌'
        case 'duck':
            return '오리'
        case 'rabbit':
            return '토끼'
        case 'goat':
            return '염소'
        case 'insects':
            return '곤충류'
        case 'etc':
            return '기타'

    }
}
const BreedStat: React.FC<BreedStatProps> = ({myRef, data}) => {
    let map = data.sort((a, b) => {
        return b.value - a.value;
    }).map(value => {
        return ({
            name: convertEngToKor(value.key),
            y: value.value,
        })
    }).slice(0, 5)
        .filter(value => value.y > 0);

    if (map.length == 0) {
        return (
            <div ref={myRef}>
                <h3>사육 동물 TOP 5</h3>
                <span color={'#ABABAB'}>등록된 사육 동물 정보가 없습니다.</span>
            </div>
        )
    }

    return (
        <div ref={myRef}>
            <h3>사육 동물 TOP 5</h3>
            <HighchartsReact
                highcharts={Highcharts}
                options={{
                    ...breedOption, series: [{
                        name: '사육 동물',
                        type: 'bar',
                        data: map
                    }]
                }}/>
        </div>
    )
}

export default BreedStat;
