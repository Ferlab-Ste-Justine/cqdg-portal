import React from 'react';

import FileDonorTabs from 'components/functionnal/Tabs/FileDonor';
import { readQueryParam, updateQueryParam } from 'utils/url/query';

import DonorFilters from './DonorFilters';
import FileFilters from './FileFilters';

const tabKey = 'facetTab';

import styles from './SideBarContent.module.scss';

interface ISidebarContent {
    history: any;
    data: any;
}
const SideBar: React.FC<ISidebarContent> = ({ data, history }) => (
    <FileDonorTabs
        activeKey={readQueryParam(tabKey, { defaultValue: 'files', whiteList: ['files', 'donors'] })}
        className={styles.content}
        donors={<DonorFilters data={data} history={history} />}
        files={<FileFilters data={data} history={history} />}
        history={history}
        onChange={(activeKey) => updateQueryParam(history, tabKey, activeKey)}
        tabsPadding
    />
);

export default SideBar;
