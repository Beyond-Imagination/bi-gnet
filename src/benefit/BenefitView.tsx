import React from "react";
import Benefit, {IBenefit} from "./Benefit";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";

interface BenefitViewProps {
    province: string
    benefits: IBenefit[]
}

const BenefitView: React.FC<BenefitViewProps> = ({province, benefits}) => {
    const navigation = useNavigate();
    return (
        <>
            {
                window.location.href.endsWith("benefit") ?
                <h2>귀농 혜택</h2> :
                <div style={{marginBottom: 12}} onClick={() => {
                    navigation('/benefit')
                }}>
                    <Typography variant={'subtitle1'}>{`${province} 귀농혜택 > `}</Typography>
                </div>
            }
            {
                benefits.map(benefit => <Benefit key={benefit._id} data={benefit} />)
            }
        </>
    )
}

export default BenefitView;
