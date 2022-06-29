import React from 'react'
import {styled as mstyled} from "@mui/material/styles";
import MuiAccordionSummary, {AccordionSummaryProps} from "@mui/material/AccordionSummary";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {Accordion} from "@mui/material";
import styled from "@emotion/styled";
import {IFarm} from "./WeekendFarmContainer";

export interface FarmProps {
    data: IFarm
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
detailMap.set("name", "상호명")
detailMap.set("city", "시도군")
detailMap.set("address", "주소")

const Farm: React.FC<FarmProps> = ({data}) => {
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
                                        {key == 'name' ? <a
                                                href={`https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=${data['city']}+${data[key]}`

                                        } target={'_blank'}> {data[key]} </a> :
                                            <Typography fontSize={14}>{data[key]}</Typography>}

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

export default Farm;
