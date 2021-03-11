import React from 'react';

import { IClassNameProp } from 'types/generic';

const Database = ({ className = '' }: IClassNameProp): React.ReactElement => (
    <svg
        className={className}
        fill="currentColor"
        height="18"
        viewBox="0 0 18 18"
        width="18"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path clipRule="evenodd" d="M8.71875 16.0312V14.3438H9.28125V16.0312H8.71875Z" fillRule="evenodd" />
        <path
            clipRule="evenodd"
            d="M9 16.3125C8.68934 16.3125 8.4375 16.5643 8.4375 16.875C8.4375 17.1857 8.68934 17.4375 9 17.4375C9.31066 17.4375 9.5625 17.1857 9.5625 16.875C9.5625 16.5643 9.31066 16.3125 9 16.3125ZM7.875 16.875C7.875 16.2537 8.37868 15.75 9 15.75C9.62132 15.75 10.125 16.2537 10.125 16.875C10.125 17.4963 9.62132 18 9 18C8.37868 18 7.875 17.4963 7.875 16.875Z"
            fillRule="evenodd"
        />
        <path clipRule="evenodd" d="M0 16.5938H8.15625V17.1562H0V16.5938Z" fillRule="evenodd" />
        <path clipRule="evenodd" d="M9.84375 16.5938H18V17.1562H9.84375V16.5938Z" fillRule="evenodd" />
        <path
            clipRule="evenodd"
            d="M3.20387 1.71197C2.9049 1.92709 2.8125 2.11267 2.8125 2.25C2.8125 2.38733 2.9049 2.57291 3.20387 2.78803C3.49619 2.99838 3.93734 3.19944 4.50779 3.37305C5.64519 3.71922 7.23349 3.9375 9 3.9375C10.7665 3.9375 12.3548 3.71922 13.4922 3.37305C14.0627 3.19944 14.5038 2.99838 14.7961 2.78803C15.0951 2.57291 15.1875 2.38733 15.1875 2.25C15.1875 2.11267 15.0951 1.92709 14.7961 1.71197C14.5038 1.50162 14.0627 1.30056 13.4922 1.12695C12.3548 0.780784 10.7665 0.5625 9 0.5625C7.23349 0.5625 5.64519 0.780784 4.50779 1.12695C3.93734 1.30056 3.49619 1.50162 3.20387 1.71197ZM4.34401 0.588819C5.54784 0.222436 7.19392 0 9 0C10.8061 0 12.4522 0.222436 13.656 0.588819C14.2562 0.771478 14.7623 0.994649 15.1247 1.25538C15.4804 1.51134 15.75 1.84367 15.75 2.25C15.75 2.65633 15.4804 2.98866 15.1247 3.24462C14.7623 3.50535 14.2562 3.72852 13.656 3.91118C12.4522 4.27756 10.8061 4.5 9 4.5C7.19392 4.5 5.54784 4.27756 4.34401 3.91118C3.74385 3.72852 3.23768 3.50535 2.87533 3.24462C2.51962 2.98866 2.25 2.65633 2.25 2.25C2.25 1.84367 2.51962 1.51134 2.87533 1.25538C3.23768 0.994649 3.74385 0.771478 4.34401 0.588819Z"
            fillRule="evenodd"
        />
        <path
            clipRule="evenodd"
            d="M2.8125 3.65625V5.625C2.8125 5.76233 2.9049 5.94792 3.20385 6.16304C3.49616 6.37338 3.9373 6.57444 4.50775 6.74805C5.64513 7.09422 7.23343 7.3125 9 7.3125C10.7666 7.3125 12.3549 7.09422 13.4923 6.74805C14.0627 6.57444 14.5038 6.37338 14.7961 6.16304C15.0951 5.94792 15.1875 5.76233 15.1875 5.625V3.65625H15.75V5.625C15.75 6.03132 15.4804 6.36366 15.1247 6.61962C14.7624 6.88035 14.2562 7.10352 13.656 7.28618C12.4522 7.65256 10.8061 7.875 9 7.875C7.19385 7.875 5.54778 7.65256 4.34397 7.28618C3.74381 7.10352 3.23765 6.88035 2.87531 6.61962C2.5196 6.36366 2.25 6.03132 2.25 5.625V3.65625H2.8125Z"
            fillRule="evenodd"
        />
        <path
            clipRule="evenodd"
            d="M2.8125 7.03125V9C2.8125 9.13733 2.9049 9.32292 3.20385 9.53804C3.49616 9.74838 3.9373 9.94944 4.50775 10.1231C5.64513 10.4692 7.23343 10.6875 9 10.6875C10.7666 10.6875 12.3549 10.4692 13.4923 10.1231C14.0627 9.94944 14.5038 9.74838 14.7961 9.53804C15.0951 9.32292 15.1875 9.13733 15.1875 9V7.03125H15.75V9C15.75 9.40632 15.4804 9.73866 15.1247 9.99462C14.7624 10.2554 14.2562 10.4785 13.656 10.6612C12.4522 11.0276 10.8061 11.25 9 11.25C7.19385 11.25 5.54778 11.0276 4.34397 10.6612C3.74381 10.4785 3.23765 10.2554 2.87531 9.99462C2.5196 9.73866 2.25 9.40632 2.25 9V7.03125H2.8125Z"
            fillRule="evenodd"
        />
        <path
            clipRule="evenodd"
            d="M2.8125 10.4062V12.375C2.8125 12.5123 2.9049 12.6979 3.20385 12.913C3.49616 13.1234 3.9373 13.3244 4.50775 13.4981C5.64513 13.8442 7.23343 14.0625 9 14.0625C10.7666 14.0625 12.3549 13.8442 13.4923 13.4981C14.0627 13.3244 14.5038 13.1234 14.7961 12.913C15.0951 12.6979 15.1875 12.5123 15.1875 12.375V10.4062H15.75V12.375C15.75 12.7813 15.4804 13.1137 15.1247 13.3696C14.7624 13.6304 14.2562 13.8535 13.656 14.0362C12.4522 14.4026 10.8061 14.625 9 14.625C7.19385 14.625 5.54778 14.4026 4.34397 14.0362C3.74381 13.8535 3.23765 13.6304 2.87531 13.3696C2.5196 13.1137 2.25 12.7813 2.25 12.375V10.4062H2.8125Z"
            fillRule="evenodd"
        />
        <path clipRule="evenodd" d="M9.28125 12.9375H8.71875V12.375H9.28125V12.9375Z" fillRule="evenodd" />
        <path clipRule="evenodd" d="M8.15625 12.9375H7.59375V12.375H8.15625V12.9375Z" fillRule="evenodd" />
        <path clipRule="evenodd" d="M10.4062 12.9375H9.84375V12.375H10.4062V12.9375Z" fillRule="evenodd" />
        <path clipRule="evenodd" d="M9.28125 9.5625H8.71875V9H9.28125V9.5625Z" fillRule="evenodd" />
        <path clipRule="evenodd" d="M8.15625 9.5625H7.59375V9H8.15625V9.5625Z" fillRule="evenodd" />
        <path clipRule="evenodd" d="M10.4062 9.5625H9.84375V9H10.4062V9.5625Z" fillRule="evenodd" />
        <path clipRule="evenodd" d="M9.28125 6.1875H8.71875V5.625H9.28125V6.1875Z" fillRule="evenodd" />
        <path clipRule="evenodd" d="M8.15625 6.1875H7.59375V5.625H8.15625V6.1875Z" fillRule="evenodd" />
        <path clipRule="evenodd" d="M10.4062 6.1875H9.84375V5.625H10.4062V6.1875Z" fillRule="evenodd" />
    </svg>
);

export default Database;