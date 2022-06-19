import React from "react";
import AgeStat from "./AgeStat";
import GenderStat from "./GenderStat";
import CropStat from "./CropStat";
import BreedStat from "./BreedStat";
import ProvincesList from "./ProvincesList";
import {provinces} from '../global-state/province'

interface StatViewProps {
    province: string;

}

const StatView: React.FC<StatViewProps> = ({province}) => {

    return (
        <>
            <h2>{province} 귀농 현황</h2>
            <AgeStat/>
            <GenderStat/>
            <CropStat/>
            <BreedStat/>
            <ProvincesList provinces={provinces} selectedProvince={province}/>
        </>
    )
}

export default StatView;
