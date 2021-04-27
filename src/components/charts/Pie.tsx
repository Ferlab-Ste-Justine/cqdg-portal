import React from 'react';
import StackLayout from '@ferlab/ui/core/layout/StackLayout';
import { Pie, PieSvgProps, ResponsivePie } from '@nivo/pie';

import ChartsIcon from 'components/interface/Icon/Charts';
import { t } from 'locales/translate';

import { IChartProps } from './types';

import styles from './Pie.module.scss';

interface IPieChartProps extends IChartProps, Omit<PieSvgProps<any>, 'height' | 'width'> {
    className?: string;
    width?: number;
    height?: number;
}
const PieChart: React.FC<IPieChartProps> = ({
    className = '',
    data,
    height = 0,
    title,
    titleClassName = '',
    width = 0,
    ...rest
}) => {
    const commonProps = {
        // Fix graph width/height
        // activeOuterRadiusOffset: 2,
        colors: [
            '#A6CEE3',
            '#1F78B4',
            '#B2DF8A',
            '#33A02C',
            '#FB9A99',
            '#E31A1C',
            '#FDBF6F',
            '#FF7F00',
            '#CAB2D6',
            '#6A3D9A',
            '#FFFF99',
            '#B15928',
        ],
        enableArcLabels: false,
        enableArcLinkLabels: false,
        theme: {
            fontSize: 10,
            textColor: '#486F90',
        },
    };
    return (
        <StackLayout className={`${styles.container} ${className}`} fitContent vertical>
            <h3 className={`${styles.title} ${titleClassName}`}>{title}</h3>
            {data.length > 0 ? (
                width > 0 && height > 0 ? (
                    <Pie data={data} height={height} width={width} {...commonProps} {...rest} />
                ) : (
                    <ResponsivePie data={data} {...commonProps} {...rest} />
                )
            ) : (
                <StackLayout className={styles.noData} flexContent vertical>
                    <ChartsIcon className={styles.icon} />
                    <span>{t('global.empty')}</span>
                </StackLayout>
            )}
        </StackLayout>
    );
};

export default PieChart;
