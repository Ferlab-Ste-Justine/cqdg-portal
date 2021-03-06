import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import FilterContainer from '@ferlab/ui/core/components/filters/FilterContainer';
import get from 'lodash/get';

import { FILE_TAB_FILTERS } from 'store/queries/files/filters';
import { enhanceFilters, getSelectedFilters } from 'utils/filters';
import { updateFilters } from 'utils/filters';
import { useFilters } from 'utils/filters/useFilters';

import presetFilters from './FileFilter.model';

const FileFilters: React.FC = () => {
    const history = useHistory();
    const { mappedFilters } = useFilters();
    const { data, loading, previousData } = useQuery<any>(FILE_TAB_FILTERS, {
        variables: mappedFilters,
    });

    let result = previousData;
    if (!previousData && loading) {
        return null;
    }

    if (data) {
        result = data;
    }
    const aggregations = get(result, 'File.aggregations', []);

    return (
        <>
            {presetFilters.map((filter) => {
                const enhancedFilters = enhanceFilters(aggregations, filter.field);
                const selectedFilters = getSelectedFilters(enhancedFilters, filter);
                return (
                    <FilterContainer
                        filterGroup={filter}
                        filters={enhancedFilters}
                        key={filter.field}
                        onChange={(fg, f) => updateFilters(history, fg, f)}
                        selectedFilters={selectedFilters}
                    />
                );
            })}
        </>
    );
};

export default FileFilters;
