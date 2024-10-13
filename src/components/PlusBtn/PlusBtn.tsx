import React from 'react';

import { ReactComponent as PlusSvg } from '../../assets/icons/plus.svg';

import { IconWrapper } from '../IconWrapper';

export const PlusBtn = ({ id, onClickHandler }: {
    id: string,
    onClickHandler: () => void,
}) => {
    return (
        <IconWrapper
            id={id}
            isSelected={false}
            svg={<PlusSvg />}
            onClickHandler={onClickHandler}
        />
    );
};
