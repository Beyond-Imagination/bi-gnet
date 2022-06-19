import React from 'react'
import {styled as mstyled} from "@mui/material/styles";
import MuiAccordionSummary, {AccordionSummaryProps} from "@mui/material/AccordionSummary";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {Accordion} from "@mui/material";
import styled from "@emotion/styled";


export interface AccordionListProps {
    data: AccordionProps[];
    expanded: string | false;
    handleChange?: any;
}

export interface AccordionProps {
    id: string;
    title: string;
    body: AccordionBodyProps[];
    city: string;
}

export interface AccordionBodyProps {
    title: string;
    body: string;
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

const AccordionList: React.FC<AccordionListProps> = ({data, expanded, handleChange}) => {
    return (
        <>
            {data.map(value => {
                return (<Accordion expanded={expanded === value.id}
                                   onChange={handleChange ? handleChange(value.id) : () => {
                                   }}
                                   style={{marginBottom: 6}}

                >
                    < AccordionSummary aria-controls={`${value.id}-content`} id={`${value.id}-header`}>
                        <div>
                            <div><Typography fontSize={12}>{value.city}</Typography></div>
                            <div><Typography fontWeight={600}>{value.title}</Typography></div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        {
                            value.body.map(value1 => {
                                return (
                                    <AccordionDetailBody>
                                        <div style={{width: '30%', marginRight: 12}}>
                                            <Typography fontSize={14} fontWeight={600}>{value1.title}</Typography>
                                        </div>
                                        <div style={{width: '70%'}}>
                                            <Typography fontSize={14}>{value1.body}</Typography>
                                        </div>
                                    </AccordionDetailBody>
                                )
                            })

                        }
                    </AccordionDetails>
                </Accordion>)
            })
            }
        </>
    )
}

export default AccordionList;
