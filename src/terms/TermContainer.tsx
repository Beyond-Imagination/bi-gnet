import React from "react"
import TermView from "./TermView";

interface TermContainerProps {

}
//생년월일 : year, month, day
const TermContainer: React.FC<TermContainerProps> = ({}) => {
    const [year,setYear] = React.useState<number>(0);
    const [month,setMonth] = React.useState<number>(0);
    const [day,setDay] = React.useState<number>(0);
    const [gender,setGender] = React.useState<number>(0);
    const [terms,setTerms] = React.useState<boolean[]>([false,false]);

    return (
        <main style={{padding: "1rem 0"}}>
            <TermView year={year} month={month} day={day} gender={gender} terms={terms} setYear={setYear} setMonth={setMonth} setDay={setDay} setGender={setGender} setTerms={setTerms}/>
        </main>
    );
}


export default TermContainer;
