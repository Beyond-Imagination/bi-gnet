import React from "react"
import TermView from "./TermView";

interface TermContainerProps {

}

const TermContainer: React.FC<TermContainerProps> = ({}) => {
    return (
        <main style={{padding: "1rem 0"}}>
            <TermView/>
        </main>
    );
}


export default TermContainer;
