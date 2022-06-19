import React from "react"
import BenefitView from "./BenefitView";
import {accordionDataSample} from "../common/accordion-data-sample";

interface BenefitContainerProps {

}


const BenefitContainer: React.FC<BenefitContainerProps> = ({}) => {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };
    return (
        <main>
            <BenefitView data={accordionDataSample} expanded={expanded} handleChange={handleChange}/>
        </main>
    );
};

export default BenefitContainer;
