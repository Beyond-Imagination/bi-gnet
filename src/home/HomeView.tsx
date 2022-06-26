import Highcharts from 'highcharts/highmaps'
import HighchartsReact from "highcharts-react-official";
import React, {useEffect} from "react";
import StatLink from './StatLink';
import TrendList from "./TrendList";

interface HomeViewProps {
    option: any,
    selectProvince: any
    setProvince: any;
}


const HomeView: React.FC<HomeViewProps> = ({option, selectProvince,setProvince}) => {
    const [age, setAge] = React.useState<number>(0);
    const [gender, setGender] = React.useState<string>("");


    useEffect(() => {
        setAge(Number(window.localStorage.getItem("age")))
        let genderItem = window.localStorage.getItem("gender");
        if (genderItem != null)
            setGender(genderItem)

    }, []);


    console.log(process.env)
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
            <TrendList age={age} gender={gender} setProvince={setProvince}/>

        </>
    )
}

export default HomeView;
