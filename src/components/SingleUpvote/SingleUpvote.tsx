import React from 'react';

import { ReactComponent as ArrowUpIcon } from '../../assets/icons/arrow-up.svg';

import { IconWrapper } from '../IconWrapper';

import './single-upvote.css';

/**
 * Data item for the upvote in the list.
 */
export type UpvoteDataItem = {
    /**
     * Whether the upvote is selected.
     */
    isSelected: boolean;
};

/**
 * The single upvote component props.
 */
type SingleUpvoteProps = UpvoteDataItem & {
    /**
     * Upvote element id.
     */
    id: string;

    /**
     * The handler for the click event.
     */
    onClickHandler: () => void;
};

export const SingleUpvote = ({ id, isSelected, onClickHandler }: SingleUpvoteProps) => {
    return (
        <IconWrapper
            id={id}
            isSelected={isSelected}
            svg={<ArrowUpIcon />}
            onClickHandler={onClickHandler}
            extraClass='single-upvote'
        />
    );
};
