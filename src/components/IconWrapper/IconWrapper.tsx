import React from 'react';

import './icon-wrapper.css';

/**
 * The icon wrapper props.
 */
type IconWrapperProps = {
    /**
     * The id of the element.
     */
    id: string,

    /**
     * The SVG icon component.
     */
    svg: React.ReactNode,

    /**
     * If the icon is selected.
     */
    isSelected: boolean,

    /**
     * The handler for the click event.
     */
    onClickHandler: () => void;

    /**
     * Extra class for the icon wrapper.
     */
    extraClass?: string;
};

export const IconWrapper = ({ id, svg, isSelected, onClickHandler, extraClass }: IconWrapperProps) => {
    let iconClass = 'icon-wrapper';

    if (isSelected) {
        iconClass += ' icon-wrapper--selected';
    } else {
        iconClass += ' icon-wrapper--default';
    }

    if (extraClass) {
        iconClass += ` ${extraClass}`;
    }

    return (
        <div
            id={id}
            className={iconClass}
            onClick={onClickHandler}
        >
            {svg}
        </div>
    );
}
