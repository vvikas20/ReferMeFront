export class SearchParameter {
    Filters: Array<Filter> = [];
    GlobalFilter: Filter;
    SortMeta: Sort;
    Page: number = 1;
    Rows: number = 10;
    DefaultSortField: string = '';
    DefaultSortOrder: number = 1;
}

export interface Filter {
    Field: string;
    Value: any;
}

export interface Sort {
    Field: string;
    Order: number;
}
