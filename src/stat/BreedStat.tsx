import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React from "react";
import {breedOption} from "./stat-chart-option"

interface BreedStatProps {
    myRef: any;
}

const BreedStat: React.FC<BreedStatProps> = ({myRef}) => {

    return (
        <div ref={myRef}>
            <h3>사육 동물 TOP 5</h3>
            <HighchartsReact
                highcharts={Highcharts}
                options={breedOption}
            />
        </div>
    )
}

export default BreedStat;
