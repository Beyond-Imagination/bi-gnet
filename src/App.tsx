import React from 'react';
import CustomDrawer from "./common/CustomDrawer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeContainer from './home/HomeContainer';
import WeekendFarmContainer from "./experience/WeekendFarmContainer";
import BenefitContainer from "./benefit/BenefitContainer";
import TrendContainer from "./trend/TrendContainer";
import StatContainer from "./stat/StatContainer";
import TermContainer from "./terms/TermContainer";


const App: React.FC = ({}) => {
    return (
        <BrowserRouter>
            <CustomDrawer/>
            <div id="wrap">
                <Routes>
                    <Route path="/terms" element={<TermContainer/>}/>
                    <Route path="/" element={<HomeContainer/>}/>
                    <Route path="/stat" element={<StatContainer/>}/>
                    <Route path="/trend" element={<TrendContainer/>}/>
                    <Route path="/benefit" element={<BenefitContainer infinite={true}/>}/>
                    <Route path="/weekend-farm" element={<WeekendFarmContainer infinite={true}/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
