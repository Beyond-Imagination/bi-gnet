import React from "react";
import Benefit, {IBenefit} from "./Benefit";

interface BenefitViewProps {
    benefits: IBenefit[]
}

const BenefitView: React.FC<BenefitViewProps> = ({benefits}) => {
    return (
        <>
            <h2>귀농 혜택</h2>
            {
                benefits.map(benefit => <Benefit key={benefit._id} data={benefit} />)
            }
        </>
    )
}

export default BenefitView;
