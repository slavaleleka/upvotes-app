import React from 'react';

import { useAppContext } from '../AppContextProvider';
import { SingleUpvote, type UpvoteDataItem } from '../SingleUpvote';
import { PlusBtn } from '../PlusBtn';

import './upvote-list.css';

const LIST_ID_PREFIX = 'upvote-list-';
const UPVOTE_ID_PREFIX = 'upvote-';
const PLUS_BTN_ID_PREFIX = 'plus-btn-';

export const UpvoteList = ({ listIndex }: { listIndex: number }) => {
    const appContext = useAppContext();

    if (!appContext) {
        return null;
    }

    const { upvoteLists, addUpvoteToList, toggleUpvote } = appContext;

    const upvotes: UpvoteDataItem[] = upvoteLists[listIndex] || [];

    return (
        <div
            id={`${LIST_ID_PREFIX}${listIndex}`}
            className="list"
        >
            <div className="list--upvotes">
                {upvotes.map((upvote, index) => (
                    <SingleUpvote
                        id={`${UPVOTE_ID_PREFIX}${listIndex}-${index}`}
                        key={index}
                        isSelected={upvote.isSelected}
                        onClickHandler={() => toggleUpvote(listIndex, index)}
                    />
                    ))}
            </div>
            <PlusBtn
                id={`${PLUS_BTN_ID_PREFIX}${listIndex}`}
                onClickHandler={() => addUpvoteToList(listIndex)}
            />
        </div>
    );
};
