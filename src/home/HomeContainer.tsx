import React, {useEffect, useState} from "react";
import HomeView from "./HomeView";
import {initialOption, koreaData} from "./chart-data"
import {useRecoilState} from "recoil";
import {provinceState} from "../global-state/province"
import { useNavigate } from "react-router-dom";

const HomeContainer: React.FC = () => {
    const [option] = useState(initialOption)
    const [isOpened, setIsOpened] = useState(false);
    const [province, setProvince] = useRecoilState(provinceState);
    const [year, setYear] = React.useState<number>(0);
    const [month, setMonth] = React.useState<number>(0);
    const [day, setDay] = React.useState<number>(0);
    const [gender, setGender] = React.useState<number>(0);
    const [terms, setTerms] = React.useState<boolean[]>([false, false]);
    const navigation = useNavigate();

    useEffect(() => {
        setYear(Number(window.localStorage.getItem("year")))
        setMonth(Number(window.localStorage.getItem("month")))
        setDay(Number(window.localStorage.getItem("day")))
        setGender(Number(window.localStorage.getItem("gender")))
        const val = window.localStorage.getItem("terms");
        if (val != null)
            setTerms(JSON.parse(val));
    }, []);

    if(year == 0 || month == 0 || day == 0 || gender == 0 || terms == [false, false])
        navigation("/terms");

    return (
        <main style={{padding: "1rem 0", overflow: "hidden"}}>
            
            <HomeView isOpened={isOpened} setIsOpened={setIsOpened} option={{
                ...option,
                series: [{
                    data: koreaData,
                    name: 'Random data',
                    states: {
                        hover: {
                            color: '#BADA55'
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    },
                    point: {
                        events: {
                            click:(event: any) => {
                                if(event.point.name != undefined){
                                    setProvince(event.point.name);
                                    setIsOpened(false);
                                }
                            }
                        }
                    }
                }]
            }} selectProvince={province} setProvince={setProvince}/>
        </main>
    );
}

export default HomeContainer;
