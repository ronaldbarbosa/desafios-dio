export interface IAccountInfo {
    avatar: {
        gravatar: {
            hash: string
        },
        tmdb: {
            avatar_path: string | null
        }
    },
    id: number,
    include_adult: boolean,
    iso_3166_1: string,
    iso_639_1: string,
    name: string,
    username: string
}