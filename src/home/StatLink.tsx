import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highmaps";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";
import StatIcon from "./StatIcon";

interface StatLinkProps {
    province: string
}

const StatLink: React.FC<StatLinkProps> = ({province}) => {
    const navigation = useNavigate();
    return (
        <div style={{marginBottom: 12}}>
            <div style={{marginBottom: 12}} onClick={() => {
                navigation('/stat')
            }}>
                <Typography variant={'subtitle1'}>{`${province} 귀농현황 > `}</Typography>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <StatIcon onClick={() => {
                    navigation("/stat?category=age");
                }} category={'연령'}>
                    <img src={require('../assets/age.png')} alt="age"
                         style={{width: 80, height: 80, border: '1px solid #ABABAB', borderRadius: 15}}/>

                </StatIcon>

                <StatIcon onClick={() => {
                    navigation("/stat?category=gender");
                }} category={'성별'}>
                    <img src={require('../assets/geneder.png')} alt="age"
                         style={{width: 80, height: 80, border: '1px solid #ABABAB', borderRadius: 15}}/>

                </StatIcon>
                <StatIcon onClick={() => {
                    navigation("/stat?category=crop");
                }} category={'작물'}>
                    <img src={require('../assets/crop.png')} alt="age"
                         style={{width: 80, height: 80, border: '1px solid #ABABAB', borderRadius: 15}}/>

                </StatIcon>
                <StatIcon onClick={() => {
                    navigation("/stat?category=breed");
                }} category={'동물'}>
                    <img src={require('../assets/breed.png')} alt="age"
                         style={{width: 80, height: 80, border: '1px solid #ABABAB', borderRadius: 15}}/>

                </StatIcon>

            </div>
        </div>
    )
}

export default StatLink;
