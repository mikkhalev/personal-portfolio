import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app/App";
import 'app/styles/style.scss'

const root = ReactDOM.createRoot(document.getElementById('app')!);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);