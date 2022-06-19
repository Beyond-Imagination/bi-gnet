import React from "react"
import StatView from "./StatView";
import {useRecoilState} from "recoil";
import {provinceState} from "../global-state/province";

interface StatContainerProps {

}

const StatContainer: React.FC<StatContainerProps> = ({}) => {
    const [province, setProvince] = useRecoilState(provinceState); //선택된 지역 가져오기
    return (
        <main>
            <StatView province={province}/>
        </main>
    );
}


export default StatContainer;
