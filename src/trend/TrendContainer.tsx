import React from "react"
import TrendView from "./TrendView";

interface TrendContainerProps {

}

const TrendContainer: React.FC<TrendContainerProps> = ({}) => {
    return (
        <main style={{padding: "1rem 0"}}>
            <TrendView/>
        </main>
    );
}


export default TrendContainer;
