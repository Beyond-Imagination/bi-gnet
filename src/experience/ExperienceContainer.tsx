import React from "react"
import ExperienceView from "./ExperienceView";
import {accordionDataSample} from "../common/accordion-data-sample";

interface ExperienceContainerProps {

}

const ExperienceContainer: React.FC<ExperienceContainerProps> = ({}) => {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };
    return (
        <main>
            <ExperienceView data={accordionDataSample} expanded={expanded} handleChange={handleChange}/>
        </main>
    );
}


export default ExperienceContainer;
