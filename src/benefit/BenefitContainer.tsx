import React from "react"
import BenefitView from "./BenefitView";
import InfiniteScroll from 'react-infinite-scroller';
import {IBenefit} from "./Benefit";
import {useRecoilState} from "recoil";
import {provinceState} from "../global-state/province";

interface BenefitContainerProps {

}

interface BenefitState {
    benefits: IBenefit[]
    hasMore: boolean
}

const BenefitContainer: React.FC<BenefitContainerProps> = ({}) => {
    const [state, setState] = React.useState<BenefitState>({benefits: [], hasMore: true});
    const [province, setProvince] = useRecoilState(provinceState);

    const loadFunc = (page:number) => {
        fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/benefits?page=${page}&province=${province}`) // host 를 환경변수에서 읽도록 수정
            .then((response) => response.json())
            .then((data) => {
                let clone = {...state};
                clone.benefits = clone.benefits.concat(data.docs)
                clone.hasMore = data.hasNextPage
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
                <BenefitView benefits={state.benefits} />
            </InfiniteScroll>
        </main>
    );
};

export default BenefitContainer;
