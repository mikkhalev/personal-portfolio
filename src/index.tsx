import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app/App";
import 'app/styles/style.scss'
import { StoreProvider } from "app/providers/StoreProvider";
import 'features/LangSwtcher/config/i18n'

const root = ReactDOM.createRoot(document.getElementById('app')!);

root.render(
    <React.StrictMode>
        <StoreProvider>
            <App />
        </StoreProvider>
    </React.StrictMode>
);