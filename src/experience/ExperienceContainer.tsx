import React from "react"
import ExperienceView from "./ExperienceView";

interface ExperienceContainerProps {

}

const ExperienceContainer: React.FC<ExperienceContainerProps> = ({}) => {
    return (
        <main style={{padding: "1rem 0"}}>
            <ExperienceView/>
        </main>
    );
}


export default ExperienceContainer;
