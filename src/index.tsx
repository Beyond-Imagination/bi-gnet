import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home, Stat, Trend, Benefits, Experience, Terms} from "./rotues";
import CustomDrawer from "./components/CustomDrawer";
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <CustomDrawer/>
            <div id="wrap">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/stat" element={<Stat/>}/>
                    <Route path="/trend" element={<Trend/>}/>
                    <Route path="/benefits" element={<Benefits/>}/>
                    <Route path="/terms" element={<Terms/>}/>
                    <Route path="/experience" element={<Experience/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
