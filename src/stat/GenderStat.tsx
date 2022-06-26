import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React from "react";
import {genderOption} from "./stat-chart-option"

interface GenderStatProps {
    myRef: any;
}

const GenderStat: React.FC<GenderStatProps> = ({myRef}) => {

    return (
        <div ref={myRef}>
            <h3>성별 별귀농 현황</h3>
            <HighchartsReact
                highcharts={Highcharts}
                options={genderOption}
            />
        </div>
    )
}

export default GenderStat;
