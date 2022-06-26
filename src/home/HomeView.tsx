import Highcharts from 'highcharts/highmaps'
import HighchartsReact from "highcharts-react-official";
import React from "react";
import StatLink from './StatLink';

interface HomeViewProps {
    option: any,
    selectProvince: any
}

const HomeView: React.FC<HomeViewProps> = ({option, selectProvince}) => {
    return (
        <>
            <div style={{width: '200%', marginLeft: -80}}>
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={"mapChart"}
                    options={option}
                />
            </div>
            <div>
                <StatLink province={selectProvince}/>
            </div>
        </>
    )
}

export default HomeView;
