import React from 'react';
import { ColumnsType } from 'antd/lib/table';

import ProgressComponent from 'components/functionnal/Progress';
import { t } from 'locales/translate';
import { INode, INodeData } from 'types/interface/data';

import styles from './Study.module.scss';

export const availableClinicalDataModel = (studyData: INodeData): ColumnsType => [
    {
        className: styles.capitalize,
        render: ({ node }: INode) => (node ? node.key.replace('_', ' ') : null),
        title: t('global.data'),
    },
    { className: 'numerical', dataIndex: ['node', 'donors'], title: t('global.donors.title') },
    {
        render: ({ node }: INode) => {
            if (node.donors === 0) {
                return '--';
            }
            return <ProgressComponent total={studyData.donors.hits.total} value={node.donors} />;
        },
        title: `(n=${studyData.donors.hits.total})`,
        width: 85,
    },
];

export const dataCategoriesModel = (studyData: INodeData): ColumnsType => [
    { dataIndex: ['node', 'key'], title: t('global.category') },
    { className: 'numerical', dataIndex: ['node', 'donors'], title: t('global.donors.title') },
    {
        render: ({ node }: INode) => {
            if (node.donors === 0) {
                return '--';
            }
            return <ProgressComponent total={studyData.donors.hits.total} value={node.donors} />;
        },

        title: `(n=${studyData.donors.hits.total})`,
        width: 85,
    },
    { className: 'numerical', dataIndex: ['node', 'files'], title: t('global.files.title') },
    {
        render: ({ node }: INode) => {
            if (node.files === 0) {
                return '--';
            }
            return <ProgressComponent total={studyData.files.hits.total} value={node.files} />;
        },

        title: `(n=${studyData.files.hits.total})`,
        width: 85,
    },
];

export const experimentalStrategiesModel = (studyData: INodeData): ColumnsType => [
    { dataIndex: ['node', 'key'], title: t('global.strategy') },
    { className: 'numerical', dataIndex: ['node', 'donors'], title: t('global.donors.title') },
    {
        render: ({ node }: INode) => {
            if (node.donors === 0) {
                return '--';
            }
            return <ProgressComponent total={studyData.donors.hits.total} value={node.donors} />;
        },

        title: `(n=${studyData.donors.hits.total})`,
        width: 85,
    },
    { className: 'numerical', dataIndex: ['node', 'files'], title: t('global.files.title') },
    {
        render: ({ node }: INode) => {
            if (node.files === 0) {
                return '--';
            }
            return <ProgressComponent total={studyData.files.hits.total} value={node.files} />;
        },

        title: `(n=${studyData.files.hits.total})`,
        width: 85,
    },
];
