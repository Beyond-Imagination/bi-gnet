import React from "react"
import StatView from "./StatView";

interface StatContainerProps {

}

const StatContainer: React.FC<StatContainerProps> = ({}) => {
    return (
        <main style={{padding: "1rem 0"}}>
            <StatView/>
        </main>
    );
}


export default StatContainer;
