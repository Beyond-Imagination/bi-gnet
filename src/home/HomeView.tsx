import Highcharts from 'highcharts/highmaps'
import HighchartsReact from "highcharts-react-official";
import React, {useEffect} from "react";
import StatLink from './StatLink';
import TrendList from "./TrendList";
import { Button } from '@mui/material';
import BenefitContainer from "../benefit/BenefitContainer";

interface HomeViewProps {
    option: any,
    isOpened : Boolean,
    selectProvince: any
    setProvince: any;
    setIsOpened : any;
}


const HomeView: React.FC<HomeViewProps> = ({option, isOpened, selectProvince,setProvince,setIsOpened}) => {
    const [age, setAge] = React.useState<number>(0);
    const [gender, setGender] = React.useState<string>("");

    useEffect(() => {
        setAge(Number(window.localStorage.getItem("age")))
        let genderItem = window.localStorage.getItem("gender");
        if (genderItem != null)
            setGender(genderItem)

    }, []);

    return (
        <>
            {
                isOpened ?
                <div style={{width: '200%', marginLeft: -80}}>
                    <HighchartsReact
                        highcharts={Highcharts}
                        constructorType={"mapChart"}
                        options={option}
                    />
                </div>:
                <Button fullWidth={true} variant={"contained"} style={{marginBottom:'20px'}}
                                onClick={() => {
                                    setIsOpened(true);
                                }}
                        >
                        지역선택하기
                </Button>
            }
            <div>
                <StatLink province={selectProvince}/>
            </div>
            <TrendList age={age} gender={gender} setProvince={setProvince}/>
            <div style={{marginTop: 12, marginBottom: 12}} >
                <BenefitContainer infinite={false} />
            </div>
        </>
    )
}

export default HomeView;
