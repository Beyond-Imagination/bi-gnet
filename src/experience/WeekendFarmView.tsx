import React from "react";
import {useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {IFarm} from "./WeekendFarmContainer";
import Farm from "./Farm";

interface WeekendFarmProps {
    province: string
    farms: IFarm[]
}

const WeekendFarmView: React.FC<WeekendFarmProps> = ({province, farms}) => {
    const navigation = useNavigate();
    return (
        <>
            {
                window.location.href.endsWith("weekend-farm") ?
                    <h2>귀농 체험</h2> :
                    <div style={{marginBottom: 12}} onClick={() => {
                        navigation('/weekend-farm')
                    }}>
                        <Typography variant={'subtitle1'}>{`${province} 귀농체험 > `}</Typography>
                    </div>
            }
            {farms.length == 0 ? <Typography variant={'caption'}>해당 지역에 검색된 체험 공간이 존재하지 않습니다.</Typography>:farms.map(farm => <Farm key={farm._id} data={farm}/>)}
        </>
    )
}

export default WeekendFarmView;
