import { IMovieInfo } from '../interface/IMovieInfo';
import { Lists } from './lists';

const axios = require('axios').default;
const defaultUrl = 'https://api.themoviedb.org/3/';

export class Movie {
    static async searchMovie(query: string, apiKey: string) {
        try {
            let result = await axios.get(`${defaultUrl}search/movie?api_key=${apiKey}&query=${query}&language=pt-BR`);
            let movieList: Array<IMovieInfo> = result.data.results;
            Lists.showListInfo('', movieList, 'movie-search-area');
            this.addListenerToMovies(movieList);
        } catch (error) {
            console.log(error)
        }
    }

    static async addListenerToMovies(movieList: Array<IMovieInfo>) {
        movieList.forEach(movie => {
            const addMovieToListButton = document.getElementById(`${movie.id}`) as HTMLButtonElement;
            addMovieToListButton.addEventListener('click', async () => {
                let listName = prompt('Digite o nome da lista para adicionar o filme:')!;
                Lists.addMovieToList(listName, `${movie.id}`);
            });
        });
    }
}