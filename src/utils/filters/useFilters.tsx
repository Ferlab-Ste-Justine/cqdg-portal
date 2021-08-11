import { useContext } from 'react';
import { getQueryBuilderCache } from '@ferlab/ui/core/data/filters/utils';
import { ISyntheticSqon } from '@ferlab/ui/core/data/sqon/types';
import { resolveSyntheticSqon } from '@ferlab/ui/core/data/sqon/utils';

import { FilterContext } from 'providers/Filter';
import { GET_ALL_SAVE_SETS } from 'store/queries/files/saveSets';
import { getFiltersQuery } from 'utils/filters';
import { remapFilterToSaveSets } from 'utils/filters/saveSets';
import { useLazyResultQuery } from 'utils/graphql/query';

interface IMapFilters {
    [key: string]: ISyntheticSqon | null;
}

interface IFilters {
    filters: ISyntheticSqon | null;
    mappedFilters: IMapFilters;
}

export const useFilters = (filters: ISyntheticSqon | null = null): IFilters => {
    const filterTypes = useContext(FilterContext);
    const { result } = useLazyResultQuery<any>(GET_ALL_SAVE_SETS);
    const currentFilters = filters || getFiltersQuery();

    console.log(currentFilters);
    console.log(getQueryBuilderCache('file-repo'));

    const resolvedFilters = resolveSyntheticSqon(
        getQueryBuilderCache('file-repo').state || [],
        currentFilters as ISyntheticSqon
    );

    const mappedFilters: IMapFilters = {};
    filterTypes.forEach((filter) => {
        const filtersWithSaveSetIds = remapFilterToSaveSets(
            { donor: result?.saveSetsDonor || [], file: result?.saveSetsFile || [] },
            resolvedFilters
        );
        const remapedFilter = filter.remapValues(filtersWithSaveSetIds);
        mappedFilters[filter.type] = remapedFilter;
    });
    return { filters: currentFilters, mappedFilters };
};
