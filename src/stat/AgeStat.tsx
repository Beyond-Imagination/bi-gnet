import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React from "react";
import {ageOption} from "./stat-chart-option"

const AgeStat: React.FC = () => {

    return (
        <>
            <h3>연령 별귀농 현황</h3>
            <HighchartsReact
                highcharts={Highcharts}
                options={ageOption}
            />
        </>
    )
}

export default AgeStat;
