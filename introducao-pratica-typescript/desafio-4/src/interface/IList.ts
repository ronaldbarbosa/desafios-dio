import { IMovieInfo } from './IMovieInfo';

export interface IList {
    description: string,
    favorite_count: number,
    id: number,
    iso_639_1: string,
    item_count: number,
    list_type: string,
    name: string,
    poster_path: string | null
}

export interface IListInfo {
    created_by: string,
    description: string,
    favorite_count: number,
    id: string,
    iso_639_1: string,
    item_count: number,
    items: IMovieInfo[],
    name: string,
    poster_path: string | null
}