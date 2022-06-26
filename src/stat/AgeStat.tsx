import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React from "react";
import {ageOption} from "./stat-chart-option"

interface AgeStatProps {
    myRef: any;
}

const AgeStat: React.FC<AgeStatProps> = ({myRef}) => {

    return (
        <div ref={myRef}>
            <h3>연령 별귀농 현황</h3>
            <HighchartsReact
                highcharts={Highcharts}
                options={ageOption}
            />
        </div>
    )
}

export default AgeStat;
