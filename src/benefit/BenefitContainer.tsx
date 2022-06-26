import React from "react"
import BenefitView from "./BenefitView";
import InfiniteScroll from 'react-infinite-scroller';
import {IBenefit} from "./Benefit";

interface BenefitContainerProps {

}

interface BenefitState {
    benefits: IBenefit[]
    hasMore: boolean
}

const BenefitContainer: React.FC<BenefitContainerProps> = ({}) => {
    const [state, setState] = React.useState<BenefitState>({benefits: [], hasMore: true});

    const loadFunc = (page:number) => {
        fetch(`http://localhost:3001/benefits?page=${page}`) // host 를 환경변수에서 읽도록 수정
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
