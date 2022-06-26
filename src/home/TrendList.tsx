import React from "react";
import {StatMap} from "../stat/StatContainer";
import {useQuery} from "react-query";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TrendListProps {
    age: number;
    gender: string;
    setProvince: any;
}

export interface TrendApiProp {
    trends: TrendApi[]
}

export interface TrendApi {
    title: string;
    age: number;
    gender: string;
    data: StatMap[];
}


const fetchTrendList = (age: number, gender: string,) =>
    fetch(`http://localhost:3001/trends?age=${age},gender=${gender}`) // 요청할 API 주소
        .then(res => res.json());

const TrendList: React.FC<TrendListProps> = ({age, gender, setProvince}) => {
    const {status, data, error} = useQuery<TrendApiProp>(age + gender, () => {
        return fetchTrendList(age, gender)
    });
    if (data == undefined)
        return <>Loading...</>
    if (status == "error")
        return <>Error...</>

    return (
        <div>
            <div style={{marginBottom: 12}}>
                <Typography variant={'subtitle1'}> {data.trends[0].title}</Typography>
            </div>
            <div style={{display: 'flex', width: '200%'}}>
                {data.trends[0].data.slice(0, 5).map((value, idx) => {
                    return (<div style={{
                        width: 80,
                        height: 80,
                        borderRadius: 10,
                        border: '1px solid #ABABAB',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        marginRight: 12,
                        overflow: 'auto'
                    }}
                                 onClick={() => {
                                     setProvince(value.key)
                                 }}
                    >
                        <div style={{marginBottom: 4}}>
                            {idx + 1} 순위
                        </div>
                        <div>
                            {value.key}
                        </div>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default TrendList;
