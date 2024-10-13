import React from 'react';

import { AppContextProvider } from '../AppContextProvider';
import { UpvoteList } from '../UpvoteList';

import './App.css';

export const App = () => {
    return (
        <div className="app-background">
            <div className="app">
                <AppContextProvider>
                    <UpvoteList listIndex={0} />
                    <UpvoteList listIndex={1} />
                    <UpvoteList listIndex={2} />
                </AppContextProvider>
            </div>
        </div>
    );
};
