import React from "react";
import BenefitView from "../benefit/BenefitView";
import {accordionDataSample} from "../common/accordion-data-sample";
import AccordionList, {AccordionListProps} from "../common/AccordionList";

interface ExperienceViewProps extends AccordionListProps{

}

const ExperienceView: React.FC<ExperienceViewProps> = ({data, expanded, handleChange}) => {
    return (
        <>
            <h2>귀농 체험</h2>
            <AccordionList data={data} expanded={expanded} handleChange={handleChange}/>
        </>
    )
}

export default ExperienceView;
