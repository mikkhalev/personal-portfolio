import React from 'react';
import {Provider} from "react-redux";
import {createReduxStore} from "app/providers/StoreProvider";
import {StoreSchema} from "app/providers/StoreProvider";

interface StoreProviderProps {
    children?: React.ReactNode;
    initialState?: StoreSchema;
}

const StoreProvider = ({children, initialState}: StoreProviderProps) => {

    const store = createReduxStore(initialState)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;