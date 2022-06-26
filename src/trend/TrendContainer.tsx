import React, {useEffect, useState} from "react"
import TrendView from "./TrendView";
import {useLocation} from "react-router-dom";
import queryString from "query-string";
import {fetchTrendList, TrendApiProp} from "../home/TrendList";
import {useQuery} from "react-query";

interface TrendContainerProps {

}

const TrendContainer: React.FC<TrendContainerProps> = ({}) => {
    let {search} = useLocation();
    const {age, gender} = queryString.parse(search);	// 문자열의 쿼리스트링을 Object로 변환
    const [localAge, setAge] = useState<number>(50);
    const [localGender, setGender] = useState<string>('male');

    const {status, data, error} = useQuery<TrendApiProp>(localAge + localGender, () => {
        // @ts-ignore
        return fetchTrendList(age, gender)
    });

    useEffect(() => {
        // @ts-ignore
        setAge(age);
        // @ts-ignore
        setGender(gender);
    }, [])

    if (data == undefined)
        return (
            <div>
                Error...
            </div>
        )
    return (
        <main style={{padding: "1rem 0"}}>
            <TrendView data={data.trends[0]}></TrendView>
        </main>
    );
}


export default TrendContainer;
