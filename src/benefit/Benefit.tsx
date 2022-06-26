import React from 'react'
import {styled as mstyled} from "@mui/material/styles";
import MuiAccordionSummary, {AccordionSummaryProps} from "@mui/material/AccordionSummary";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {Accordion} from "@mui/material";
import styled from "@emotion/styled";

export interface IBenefit {
    [key: string]: string
    _id: string
    province: string;
    city: string;
    area: string;
    name: string;
    target: string;
    description: string;
    condition: string;
    document: string;
    size: string;
    contact: string;
}

export interface BenefitProps {
    data: IBenefit
}

const AccordionDetailBody = styled.div`
  display: flex;
  margin-bottom: 12px;
`

const AccordionSummary = mstyled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}
        {...props}
    />
))(({theme}) => ({
    backgroundColor: 'rgba(94,139,126,0.3)',
    flexDirection: 'row',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = mstyled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const detailMap = new Map();
detailMap.set("target", "지원대상 및 자격조건")
detailMap.set("description", "사업내용")
detailMap.set("condition", "지원조건")
detailMap.set("document", "증빙서류")
detailMap.set("size", "사업량")
detailMap.set("contact", "접수 및 문의처")

const Benefit: React.FC<BenefitProps> = ({data}) => {
    const [expanded, setExpanded] = React.useState<boolean>(false);
    return (
        <Accordion expanded={expanded}
                   onChange={() => setExpanded(!expanded)}
                   style={{marginBottom: 6}}
        >
            <AccordionSummary aria-controls={`${data._id}-content`} id={`${data._id}-header`}>
                <div>
                    <div><Typography fontSize={12}>{`${data.province} ${data.city || data.area}`}</Typography></div>
                    <div><Typography fontWeight={600}>{data.name}</Typography></div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                {
                    Object.keys(data).map(key => {
                        if (detailMap.has(key)) {
                            return (
                                <AccordionDetailBody key={data._id + key}>
                                    <div style={{width: '30%', marginRight: 12}}>
                                        <Typography fontSize={14} fontWeight={600}>{detailMap.get(key)}</Typography>
                                    </div>
                                    <div style={{width: '70%'}}>
                                        <Typography fontSize={14}>{data[key]}</Typography>
                                    </div>
                                </AccordionDetailBody>
                            )
                        } else {
                            return
                        }
                    })
                }
            </AccordionDetails>
        </Accordion>
    )
}

export default Benefit;
