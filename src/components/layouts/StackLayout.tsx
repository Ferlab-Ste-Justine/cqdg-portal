/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import cx from 'classnames';

import './StackLayout.scss';

export enum StackOrientation {
    Vertical = 'vertical',
    Horizontal = 'horizontal',
}

interface IExtraProps {
    onClick?: (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => null;
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => null;
}

interface IStackLayout extends IExtraProps {
    orientation?: StackOrientation;
    vertical?: boolean;
    horizontal?: boolean;
    children: React.ReactNode;
    className?: string;
    grow?: boolean;
    center?: boolean;
    noScroll?: boolean;
}

const StackLayout = ({
    center,
    children,
    className,
    grow = false,
    horizontal,
    noScroll = false,
    onClick,
    orientation,
    vertical,
}: IStackLayout): React.ReactElement => {
    const definedOrientation = vertical
        ? StackOrientation.Vertical
        : horizontal
        ? StackOrientation.Horizontal
        : orientation || StackOrientation.Horizontal;

    const extraProps: IExtraProps = {};
    if (onClick) {
        extraProps.onClick = onClick;
        extraProps.onKeyDown = onClick;
    }

    const compoundCN = cx(className, { center, grow, noScroll });

    return (
        <div className={`fui-stack-layout ${definedOrientation} ${compoundCN}`} {...extraProps}>
            {children}
        </div>
    );
};

export default StackLayout;
