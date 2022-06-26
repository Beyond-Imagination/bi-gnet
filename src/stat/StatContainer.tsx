import React, {useEffect} from "react"
import StatView from "./StatView";
import {useRecoilState} from "recoil";
import {provinceState} from "../global-state/province";
import {useQuery} from "react-query";

interface StatContainerProps {

}

const fetchStatList = (province: string) =>
    fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/stats?province=${province}`) // 요청할 API 주소
        .then(res => res.json());

export interface ApiProp {
    stats: StatusApi[];
}

export interface StatusApi {
    province: string;
    age: StatMap[];
    gender: StatMap[];
    breed: StatMap[];
    crop: StatMap[];
}

export interface StatMap {
    key: string;
    value: number;
}

const StatContainer: React.FC<StatContainerProps> = ({}) => {
    const [province, setProvince] = useRecoilState(provinceState); //선택된 지역 가져오기
    const {status, data, error} = useQuery<ApiProp>(province, () => {
        return fetchStatList(province)
    });
    useEffect(() => {
    }, []);

    if (status == 'loading')
        return (
            <div>
                Loading..
            </div>
        )
    if (error)
        return (
            <div>
                error
            </div>
        )
    if (data == undefined) {
        return (<div>
            Loading..
        </div>)
    }

    return (
        <main>
            <StatView province={province} data={data.stats[0]} setProvince={setProvince}/>
        </main>
    );
}


export default StatContainer;
