import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React from "react";
import {cropOption} from "./stat-chart-option"
interface CropStatProps {
    myRef: any;
}
const CropStat: React.FC<CropStatProps> = ({myRef}) => {

    return (
        <div ref={myRef}>
            <h3>재배 작물 TOP 5</h3>
            <HighchartsReact
                highcharts={Highcharts}
                options={cropOption}
            />
        </div>
    )
}

export default CropStat;
