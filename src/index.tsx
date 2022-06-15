import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {RecoilRoot} from 'recoil';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={true}/>
                <App/>
            </QueryClientProvider>
        </RecoilRoot>
    </React.StrictMode>
);
