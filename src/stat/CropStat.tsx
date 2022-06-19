import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React from "react";
import {cropOption} from "./stat-chart-option"

const CropStat: React.FC = () => {

    return (
        <>
            <h3>재배 작물 TOP 5</h3>
            <HighchartsReact
                highcharts={Highcharts}
                options={cropOption}
            />
        </>
    )
}

export default CropStat;
