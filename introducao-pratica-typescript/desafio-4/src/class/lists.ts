import { Account } from './account';
import { IAccountInfo } from '../interface/IAccountInfo';
import { ICreatedLists } from '../interface/ICreatedLists';
import { IList, IListInfo } from '../interface/IList';
import { IMovieInfo } from '../interface/IMovieInfo';


const axios = require('axios').default;
const defaultUrl = 'https://api.themoviedb.org/3/';
const header = {
    "Authorization": `Bearer ${sessionStorage.getItem('request-token')}`,
    "Content-Type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": '*',
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "POST"
}

export class Lists {
    static async createList(apiKey: string, sessionId: string, name: string, description: string): Promise<boolean> {
        try {
            let result = await axios.post(`${defaultUrl}list?api_key=${apiKey}&session_id=${sessionId}`, {
                "name": name,
                "description": description,
                "language": "pt"
            });
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    static async getCreatedLists(apiKey: string, sessionId: string): Promise<ICreatedLists | null> {
        let accountInfo: IAccountInfo | boolean = await Account.getDetails(apiKey, sessionId);
        if(accountInfo === false) {
            alert('Não foi possível receber as informações da conta.');
            return null;
        }
        else {
            let accountId = accountInfo.id;
            localStorage.setItem('account-id', accountId);
            let result = await axios.get(`${defaultUrl}account/${accountId}/lists?api_key=${apiKey}&language=pt-BR&session_id=${sessionId}`);
            let movieLists: ICreatedLists = result.data;
            return movieLists;
        }
    }

    static async getListInfo(movieList: IList, apiKey: string) {
        let result = await axios.get(`${defaultUrl}/list/${movieList.id}?api_key=${apiKey}&language=pt-BR`);
        let listInfo: IListInfo = result.data;
        this.showListInfo(listInfo.name, listInfo.items, 'movie-lists-area');
    }

    static async showLists(createdLists: ICreatedLists) {
        let showListsArea = document.getElementById('movie-lists-area') as HTMLDivElement;
        let infoToSend = '';
        let lists: Array<IList> = createdLists.results;

        lists.forEach(list => {
            infoToSend += `<div class="list-group"><div class="card my-4"><div class="card-body"><h5 class="card-title">${list.name}</h5><p class="card-text">${list.description}</p><a class="btn btn-dark" id="${list.id}">Exibir</a><a class="btn btn-danger mx-3" id="delete-${list.id}">Excluir</a></div></div></div>`;
        });
        showListsArea.innerHTML = infoToSend;

        lists.forEach(list => {
            let listInfoButton = document.getElementById(`${list.id}`) as HTMLAnchorElement;
            listInfoButton.addEventListener('click', () => {
                this.getListInfo(list, sessionStorage.getItem('api-key')!);
            });
        });

        lists.forEach(list => {
            let deleteListButton = document.getElementById(`delete-${list.id}`) as HTMLAnchorElement;
            deleteListButton.addEventListener('click', async () => {
                await this.deleteList(`${list.id}`);
                alert('Clique em "Exibir Listas" para atualizar a exibição das listas!');
            });
        });
    }

    static async showListInfo(name: string, movieList: Array<IMovieInfo>, area: string) {
        const baseUrlImg = 'https://image.tmdb.org/t/p/w200';
        let showListsArea = document.getElementById('movie-lists-area') as HTMLDivElement;
        let showSearchArea = document.getElementById('movie-search-area') as HTMLDivElement;
        let infoToSend = '<div class="d-flex direction-row movies-listed">';
        movieList.forEach(movie => {
            infoToSend += `<div class="card mb-3 mx-3"><div class="row g-0"><div class="col-md-4"><img src="${baseUrlImg}${movie.poster_path}" class="img-fluid rounded-start" alt="poster ${movie.title}"></div><div class="col-md-8"><div class="card-body"><h5 class="card-title">${movie.title}</h5><p class="card-text">${movie.overview}</p>`;
            if(area === 'movie-search-area') infoToSend += `<button class='btn btn-dark btn-list d-flex' id='${movie.id}'>Adicionar a lista</button>`;
            infoToSend += `</div></div></div></div>`;
        });
        infoToSend += '</div>';

        if(area === 'movie-lists-area') showListsArea.innerHTML = infoToSend;
        else if(area === 'movie-search-area') showSearchArea.innerHTML = infoToSend;
    }

    static async deleteList(listId: string) {
        try {
            // Essa chamada retorna status code 500, porém a operação de exclusão da lista é realizada.
            let result = await axios.delete(`${defaultUrl}list/${listId}?api_key=${sessionStorage.getItem('api-key')!}&session_id=${sessionStorage.getItem('session-id')!}`);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    static async addMovieToList(listName: string, movieId: string) {
        try {
            let myLists: ICreatedLists | null = await Lists.getCreatedLists(sessionStorage.getItem('api-key')!, sessionStorage.getItem('session-id')!);
            let listId = '';
            if(myLists !== null) {
                myLists.results.forEach(element => {
                    if(element.name === listName) listId = `${element.id}`;
                });
            }
            if(listId !== '') {
                let result = await axios.post(`${defaultUrl}list/${listId}/add_item?api_key=${sessionStorage.getItem('api-key')!}&session_id=${sessionStorage.getItem('session-id')!}`, {
                    "media_id": movieId
                });
                alert('Filme adicionado com sucesso!')
            } else alert('Nome da lista informado é incorreto!');
        } catch (error) {
            alert('Erro! a operação não pôde ser completada!')
            console.log(error);
        }
    }
}
