import React, {useEffect} from "react"
import WeekendFarmView from "./WeekendFarmView";
import {useRecoilState} from "recoil";
import {provinceState} from "../global-state/province";
import InfiniteScroll from "react-infinite-scroller";

interface ExperienceContainerProps {
    infinite: boolean
}

export interface IFarm {
    [key: string]: string

    _id: string
    province: string;
    city: string;
    name: string;
    address: string;
}

interface ExperienceState {
    farms: IFarm[];
    hasMore: boolean;
}

const WeekendFarmContainer: React.FC<ExperienceContainerProps> = ({infinite}) => {
    const [state, setState] = React.useState<ExperienceState>({farms: [], hasMore: true});
    const [province, setProvince] = useRecoilState(provinceState);

    useEffect(() => {
        fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/weekend-farms?page=${0}&province=${province}&limit=5`)
            .then((response) => response.json())
            .then((data) => {
                let clone = {...state};
                clone.farms = data.docs
                clone.hasMore = infinite ? data.hasNextPage : false
                setState(clone)
            });
    },[province])

    const loadFunc = (page: number) => {
        fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/weekend-farms?page=${page}&province=${province}&limit=5`)
            .then((response) => response.json())
            .then((data) => {
                let clone = {...state};
                clone.farms = clone.farms.concat(data.docs)
                clone.hasMore = infinite ? data.hasNextPage : false
                setState(clone)
            });
    }


    return (
        <main style={{overflow: "auto", height: "100%"}}>
            <InfiniteScroll style={{overflow: "auto"}}
                            pageStart={0}
                            loadMore={loadFunc}
                            hasMore={state.hasMore}
                            loader={<div className="loader" key={0}>Loading ...</div>}
                            useWindow={false}
                            initialLoad={true}
            >
                < WeekendFarmView farms={state.farms} province={province}/>
            </InfiniteScroll>
        </main>
    );
}


export default WeekendFarmContainer;
