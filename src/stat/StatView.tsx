import React, {useEffect, useRef} from "react";
import AgeStat from "./AgeStat";
import GenderStat from "./GenderStat";
import CropStat from "./CropStat";
import BreedStat from "./BreedStat";
import ProvincesList from "./ProvincesList";
import {provinces} from '../global-state/province'
import {useLocation, useParams} from "react-router-dom";
import queryString from 'query-string'

interface StatViewProps {
    province: string;
}

const StatView: React.FC<StatViewProps> = ({province}) => {
    const genderRef = useRef<null | HTMLDivElement>(null);
    const ageRef = useRef<null | HTMLDivElement>(null);
    const cropRef = useRef<null | HTMLDivElement>(null);
    const breedRef = useRef<null | HTMLDivElement>(null);
    let { search } = useLocation();
    const {category} = queryString.parse(search);	// 문자열의 쿼리스트링을 Object로 변환

    useEffect(() => {
        if (category == null) {
        }

        if (category == 'age') {
            ageRef.current?.scrollIntoView();
        }
        if (category == 'gender') {
            genderRef.current?.scrollIntoView();
        }
        if (category == 'crop') {
            cropRef.current?.scrollIntoView();
        }
        if (category == 'breed') {
            breedRef.current?.scrollIntoView();
        }

    }, [])
    return (
        < >
            <div>
                <h2>{province} 귀농 현황</h2>
                <AgeStat myRef={ageRef}/>
                <GenderStat myRef={genderRef}/>
                <CropStat myRef={cropRef}/>
                <BreedStat myRef={breedRef}/>
                <ProvincesList provinces={provinces} selectedProvince={province}/>
            </div>

        </>
    )
}

export default StatView;
