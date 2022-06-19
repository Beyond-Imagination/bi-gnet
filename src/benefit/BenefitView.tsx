import React from "react";
import AccordionList, {AccordionListProps} from "../common/AccordionList";
import {AccordionProps} from "../common/AccordionList";

interface BenefitViewProps extends AccordionListProps{

}


const BenefitView: React.FC<BenefitViewProps> = ({data, expanded, handleChange}) => {
    return (
        <>
            <h2>귀농 혜택</h2>
            <AccordionList data={data} expanded={expanded} handleChange={handleChange}/>
        </>
    )
}

export default BenefitView;
