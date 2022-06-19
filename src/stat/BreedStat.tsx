import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React from "react";
import {breedOption} from "./stat-chart-option"

const BreedStat: React.FC = () => {

    return (
        <>
            <h3>사육 동물 TOP 5</h3>
            <HighchartsReact
                highcharts={Highcharts}
                options={breedOption}
            />
        </>
    )
}

export default BreedStat;
