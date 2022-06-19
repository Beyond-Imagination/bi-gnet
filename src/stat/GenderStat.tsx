import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React from "react";
import {genderOption} from "./stat-chart-option"

const GenderStat: React.FC = () => {

    return (
        <>
            <h3>성별 별귀농 현황</h3>
            <HighchartsReact
                highcharts={Highcharts}
                options={genderOption}
            />
        </>
    )
}

export default GenderStat;
