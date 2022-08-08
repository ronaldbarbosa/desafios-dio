import { IList } from './IList';

export interface ICreatedLists {
    page: number,
    results: IList[],
    total_pages: number,
    total_results: number
}