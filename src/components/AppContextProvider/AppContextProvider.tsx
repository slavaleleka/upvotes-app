import React from 'react';

import {
    createContext,
    useEffect,
    useContext,
    useState,
} from 'react';

import { getCookieValue, setCookieValue } from '../../utils/cookie';

import { type UpvoteDataItem } from '../SingleUpvote';

/**
 * The app context type.
 */
type AppContextType =  {
    /**
     * The upvote lists.
     */
    upvoteLists: UpvoteDataItem[][];

    /**
     * Function to add an upvote to the list.
     * @param listIndex Index of the list.
     */
    addUpvoteToList: (listIndex: number) => void;

    /**
     * Function to toggle an upvote.
     * @param listIndex Index of the list.
     * @param upvoteIndex Index of the upvote in the list.
     */
    toggleUpvote: (listIndex: number, upvoteIndex: number) => void;
}

const AppContext = createContext<AppContextType | null>(null);

/**
 * Returns the initial upvote lists.
 *
 * Checks if there are any stored lists in the cookies and returns them,
 * otherwise returns an array of empty arrays.
 *
 * @returns The initial upvote lists.
 */
const getInitialUpvoteLists = (): UpvoteDataItem[][] => {
    const storedLists = getCookieValue();
    return storedLists
        ? JSON.parse(storedLists)
        : [[], [], []];
};

/**
 * The app context provider.
 *
 * @param children The children.
 * @returns The app context provider.
 */
export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [upvoteLists, setUpvoteLists] = useState<UpvoteDataItem[][] | null>(getInitialUpvoteLists());

    useEffect(() => {
        setCookieValue(JSON.stringify(upvoteLists));
    }, [upvoteLists]);

    const addUpvoteToList = (listIndex: number) => {
        if (!upvoteLists) {
            return;
        }

        setUpvoteLists(upvoteLists.map((list, index) => {
            if (index !== listIndex) {
                return list;
            }

            return [
                ...list,
                { isSelected: false },
            ];
        }));
    };

    const toggleUpvote = (listIndex: number, upvoteIndex: number) => {
        setUpvoteLists(prevLists => {
            if (!prevLists) {
                return prevLists;
            }

            const updatedLists = prevLists.map((list, index) => {
                if (index !== listIndex) {
                    return list;
                }

                return list.map((upvote: UpvoteDataItem, i: number) => {
                    if (i !== upvoteIndex) {
                        return upvote;
                    }

                    return {
                        ...upvote,
                        isSelected: !upvote.isSelected,
                    };
                });
            });

            return updatedLists;
        });
    };

    if (!upvoteLists) {
        return null;
    }

    return (
        <AppContext.Provider value={{ upvoteLists, addUpvoteToList, toggleUpvote }}>
            {children}
        </AppContext.Provider>
    );
};


/**
 * Hook for accessing the context.
 *
 * @returns The app context hook.
 */
export const useAppContext = () => useContext(AppContext);
