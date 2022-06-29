import React, {useEffect, useState} from "react";
import HomeView from "./HomeView";
import {initialOption, koreaData} from "./chart-data"
import {useRecoilState} from "recoil";
import {provinceState} from "../global-state/province"
import { useNavigate } from "react-router-dom";
import { Point } from "highcharts";

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
        const val2 = window.localStorage.getItem("province");
        if (val2 != null)
            setProvince(JSON.parse(val2));
        else
            setIsOpened(true)
    }, [province]);

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
                        useHTML: true,
                        allowOverlap: true,

                        formatter:function(this :any){

                            var province = this.key;
                            if(province == '충청북도')
                                return `<img style = "width:70px"src ='${process.env.PUBLIC_URL}/kr-cb.png'></img>`
                            else if(province == '충청남도')
                                return `<img style = "width:70px"src ='${process.env.PUBLIC_URL}/kr-cn.png'></img>`
                            else if(province == '전라북도')
                                return `<img style = "width:70px"src ='${process.env.PUBLIC_URL}/kr-jb.png'></img>`
                            else if(province == '전라남도')
                                return `<img style = "width:70px"src ='${process.env.PUBLIC_URL}/kr-jn.png'></img>`
                            else if(province == '경상북도')
                                return `<img style = "width:70px"src ='${process.env.PUBLIC_URL}/kr-kb.png'></img>`
                            else if(province == '경기도')
                                return `<img style = "width:70px"src ='${process.env.PUBLIC_URL}/kr-kg.png'></img>`
                            else if(province == '경상남도')
                                return `<img style = "width:70px"src ='${process.env.PUBLIC_URL}/kr-kn.png'></img>`
                            else if(province == '강원도')
                                return `<img style = "width:70px"src ='${process.env.PUBLIC_URL}/kr-kw.png'></img>`
                            else if(province == '제주특별자치도')
                                return `<img style = "width:70px"src ='${process.env.PUBLIC_URL}/kr-jj.png'></img>`
                        }
                    },

                    point: {
                        events: {
                            click:(event: any) => {
                                if(event.point.name != undefined){
                                    setProvince(event.point.name);
                                    setIsOpened(false);
                                    window.localStorage.setItem("province",JSON.stringify(event.point.name));
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
