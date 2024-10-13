import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { SingleUpvote } from './components/SingleUpvote';

const convertHexToRGBA = (hexCode: string) => {
    let hex = hexCode.replace('#', '');

    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return { r, g, b };
};

test('check upvote click', () => {
    const DEFAULT_BG_STYLE = 'background-color: #F4F6F8';
    const SELECTED_BG_STYLE = 'background-color: #E5E8FD';
    const TEST_ID = 'test1';

    let isSelected = false;
    const handleClick = () => {
        isSelected = !isSelected;
    };

    render(
        <div data-testid={TEST_ID}>
            <SingleUpvote id={TEST_ID} isSelected={isSelected} onClickHandler={handleClick} />
        </div>
    );

    const upvoteElementParent = screen.getByTestId(TEST_ID);

    const upvoteElement = upvoteElementParent.firstChild as Element;

    expect(upvoteElement).toBeInTheDocument();

    // background-color before click
    expect(upvoteElementParent).toHaveStyle({ 'background-color': convertHexToRGBA(DEFAULT_BG_STYLE) });

    fireEvent.click(upvoteElement);

    // background-color after click
    expect(upvoteElementParent).toHaveStyle({ 'background-color': convertHexToRGBA(SELECTED_BG_STYLE) });
});
