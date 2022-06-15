import React from "react"
import BenefitView from "./BenefitView";

interface BenefitContainerProps {

}

const BenefitContainer: React.FC<BenefitContainerProps> = ({}) => {
    return (
        <main style={{padding: "1rem 0"}}>
            <BenefitView/>
        </main>
    );
}


export default BenefitContainer;
