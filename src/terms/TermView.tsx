import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Stack } from "@mui/material";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useNavigate} from "react-router-dom";


interface TermViewProps {
    year: number;
    month: number;
    day: number;
    gender: number;
    terms:boolean[];
    setYear: any;
    setMonth: any;
    setDay: any;
    setGender: any;
    setTerms:any;
}

const TermView: React.FC<TermViewProps> = ({ year, month, day, gender, terms, setYear, setMonth, setDay, setGender, setTerms }) => {
    const navigation = useNavigate();
    const yearList = () => {
        var dt = new Date();
        var com_year = dt.getFullYear();
        var arr = [];
        arr.push(<MenuItem value={0}>년도</MenuItem>)
        for (var i = com_year; i > 1900; i--) {
            arr.push(<MenuItem value={i}>{i}</MenuItem>)
        }
        return arr
    }

    const monthList = () => {
        var arr = [];
        arr.push(<MenuItem value={0}>월</MenuItem>)
        for (var i = 1; i < 13; i++) {
            arr.push(<MenuItem value={i}>{i}</MenuItem>)
        }
        return arr;
    }

    const dayList = () => {
        var arr = [];
        arr.push(<MenuItem value={0}>일</MenuItem>)
        for (var i = 1; i < 32; i++) {
            arr.push(<MenuItem value={i}>{i}</MenuItem>)
        }
        return arr;
    }

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTerms([event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTerms([event.target.checked, terms[1]]);
    };

    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTerms([terms[0], event.target.checked]);
    };

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <FormControlLabel
                label=""
                control={<Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Checkbox checked={terms[0]} onChange={handleChange2} />
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>이용약관 동의(필수)</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            1. 이용자는 본 약관 및 회사의 공지사항, 사이트 이용안내 등을 숙지하고 준수해야 하며 기타 회사의 업무에 방해되는 행위를 해서는 안된다.
                            <br />
                            2. 이용자는 회사의 사전 승인 없이 본 사이트를 이용해 어떠한 영리행위도 할 수 없다.
                            <br />
                            3. 이용자는 본 사이트를 통해 얻는 정보를 회사의 사전 승낙 없이 복사, 복제, 변경, 번역, 출판, 방송 및 기타의 방법으로 사용하거나 이를 타인에게 제공할 수 없다.
                        </Typography>
                    </AccordionDetails>
                </Accordion>}
            />
            <FormControlLabel
                label=""
                control={<Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Checkbox checked={terms[1]} onChange={handleChange3} />
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>개인정보 수집,이용 동의(필수)</div>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                            이용자가 제공한 모든 정보는 다음의 목적을 위해 활용하며, 하기 목적 이외의 용도로는 사용되지 않습니다.
                            <br />
                            1. 개인정보 수집 항목 및 수집·이용 목적
                            <br />
                            가) 수집 항목 (필수항목)
                            <br />
                            - 생년월일, 성별 또는 신청자가 제공한 정보
                            <br />
                            나) 수집 및 이용 목적
                            <br />
                            - 귀농 관련 컨텐츠 추천
                            <br />
                            2. 개인정보 보유 및 이용기간
                            <br />
                            - 수집·이용 동의일로부터 개인정보의 수집·이용목적을 달성할 때까지
                        </Typography>
                    </AccordionDetails>
                </Accordion>}
            />
        </Box>
    );
    const saveData = () =>{
        var today = new Date();
        var todayYear = today.getFullYear();

        window.localStorage.setItem("year",JSON.stringify(year));
        window.localStorage.setItem("month",JSON.stringify(month));
        window.localStorage.setItem("day",JSON.stringify(day));
        window.localStorage.setItem("age",JSON.stringify(todayYear-year+1))
        window.localStorage.setItem("gender",JSON.stringify(gender));
        window.localStorage.setItem("terms",JSON.stringify(terms));
    }


    return (
        <>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div>
                    <img src={require('../assets/img.png')} style={{width: 50, marginRight: 10}}></img>
                </div>
                <h1>
                    귀농 어때
                </h1>
            </div>
            <div style={{ marginBottom: '0px', fontSize: '25px', fontWeight: 'bold' }}>
                고객님
            </div>
            <div style={{ marginBottom: '10px', fontSize: '25px', fontWeight: 'bold' }}>
                환영합니다
            </div>
            <div style={{ marginBottom: '50px', fontSize: '15px' }}>원활한 앱 환경을 위해 아래의 정보를 입력해주세요</div>
            <div style={{ marginBottom: '10px', fontSize: '20px', fontWeight: 'bold' }}>
                생년월일 :
            </div>
            <Stack direction="row" justifyContent="center" style={{ marginBottom: '20px' }}>
                <FormControl sx={{ m: 1, minWidth: 100 }}>
                    <InputLabel id="selectYear"></InputLabel>
                    <Select
                        value={year}
                        defaultValue={0}
                        onChange={(value) => {
                            setYear(Number(value.target.value));
                        }}
                    >
                        {yearList()}
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 50 }}>
                    <InputLabel id="selectMonth"></InputLabel>
                    <Select
                        value={month}
                        defaultValue={0}
                        onChange={(value) => {
                            setMonth(Number(value.target.value));
                        }}
                    >
                        {monthList()}
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 50 }}>
                    <InputLabel id="selectDay"></InputLabel>
                    <Select
                        value={day}
                        defaultValue={0}
                        onChange={(value) => {
                            setDay(Number(value.target.value));
                        }}
                    >
                        {dayList()}
                    </Select>
                </FormControl>
            </Stack>
            <div style={{ marginBottom: '10px', fontSize: '20px', fontWeight: 'bold' }}>
                성별 :
            </div>
            <Stack direction="row" justifyContent="center" style={{ marginBottom: '20px' }}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" size="large" >
                    <Button variant={gender == 2 ? "outlined" : "contained"}
                        onClick={() => {
                            setGender(1);
                        }}
                    >
                        남자
                    </Button>
                    <Button variant={gender == 1 ? "outlined" : "contained"}
                        onClick={() => {
                            setGender(2);
                        }}
                    >
                        여자
                    </Button>
                </ButtonGroup>
            </Stack>

            <div style={{ marginBottom: '30px' }}>
                <FormControlLabel
                    label={<Typography style={{ fontSize: '20px', fontWeight: 'bold'}} justifyContent='center'>약관 전체 동의</Typography>}
                    control={
                        <Checkbox
                            checked={terms[0] && terms[1]}
                            indeterminate={terms[0] !== terms[1]}
                            onChange={handleChange1}
                        />
                    }
                />
                {children}
            </div>
            <div style={{textAlign:"center"}}>
                <Button fullWidth={true} variant={terms[0]&&terms[1] ? "contained" : "outlined"} disabled={terms[0]&&terms[1] ? false : true}
                        onClick={() => {
                            saveData();
                            navigation("/");
                        }}
                >
                    확인
                </Button>
            </div>

        </>
    )
}

export default TermView;
