import cloneDeep from 'lodash/cloneDeep';

import { ISqonGroupFilter, TSqonGroupContent, TValueOp } from 'types/interface/filters';

export const addFilter = (filters: ISqonGroupFilter | null, field: string, value: string[]): ISqonGroupFilter => {
    if (!filters) {
        return { content: [{ content: { field, value }, op: 'in' }], op: 'or' };
    }

    return { ...filters, content: [...filters.content, { content: { field, value }, op: 'in' }] };
};

export const createSubFilter = (field: string, value: string[], op: TValueOp = 'in'): TSqonGroupContent => [
    { content: { field, value }, op },
];