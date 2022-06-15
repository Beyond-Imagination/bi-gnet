import React, {useState} from "react";
import HomeView from "./HomeView";
import {initialOption, koreaData} from "./chart-data"
import {useRecoilState} from "recoil";
import {provinceState} from "../global-state/province"

const HomeContainer: React.FC = () => {
    const [option] = useState(initialOption)
    const [province, setProvince] = useRecoilState(provinceState);

    return (
        <main style={{padding: "1rem 0", overflow: "hidden"}}>
            선택된 도시: {province}
            <HomeView option={{
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
                            click: function () {
                                //TODO Select Province Logic 추가
                            }
                        }
                    }
                }]
            }} selectProvince={setProvince}/>
        </main>
    );
}

export default HomeContainer;
