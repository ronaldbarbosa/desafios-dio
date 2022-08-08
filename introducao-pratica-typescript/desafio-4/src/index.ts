import { RequestToken } from './class/requestToken';
import { ValidateAccessButtons } from './class/validateAccessButtons';
import { Session } from './class/session';
import { ISession } from './interface/ISession';
import { Lists } from './class/lists';
import { ICreatedLists } from './interface/ICreatedLists';
import { Movie } from './class/movie';

/**
 * Lógica da página inicial
 */
const aproveTokenButton = document.getElementById('approve-token') as HTMLButtonElement;
const loginButton = document.getElementById('login-button') as HTMLButtonElement;

if(aproveTokenButton && loginButton) {
    aproveTokenButton.disabled = true;
    loginButton.disabled = true;

    ValidateAccessButtons.approveAccessButtons();

    aproveTokenButton.addEventListener('click', async () => {
        let apiKeyField = document.getElementById('api-key') as HTMLInputElement;
        let requestToken: string = await RequestToken.createRequestToken(apiKeyField.value);
    
        if(requestToken === 'error') alert('Ocorreu um erro durante a criação do request token.');
        else {
            sessionStorage.setItem('request-token', requestToken);
    
            let success: boolean = await RequestToken.aproveRequestToken(requestToken);
            if(success === false) alert('Ocorreu um erro durante a aprovação do request token.');
        }
    
        sessionStorage.setItem('api-key', apiKeyField.value);
    });

    loginButton.addEventListener('click',async () => {
        let result: ISession | boolean = await Session.createSession(sessionStorage.getItem('api-key')!, sessionStorage.getItem('request-token')!);
    
        if(result === false) alert('Ocorreu um erro durante a criação da sessão');
        else sessionStorage.setItem('session-id', result.session_id);
    
        window.location.href = "../src/loged.html";
    });
}

/**
 * Lógica da página após login
 */

const showListsButton = document.getElementById('show-lists') as HTMLAnchorElement;
const newListButton = document.getElementById('new-list') as HTMLAnchorElement;

if(showListsButton && newListButton) {
    showListsButton.addEventListener('click', async () => {
        let myLists: ICreatedLists | null = await Lists.getCreatedLists(sessionStorage.getItem('api-key')!, sessionStorage.getItem('session-id')!);
        if(myLists === null) alert('Não foi possível buscar suas listas');
        else {
            Lists.showLists(myLists);
        }
    });

    newListButton.addEventListener('click', async () => {
        let listName = prompt('Digite o nome da lista a ser criada:');
        let listDescription = prompt('Agora digite a descrição:');
        if (listName != null && listDescription != null){
            let success: boolean = await Lists.createList(sessionStorage.getItem('api-key')!, sessionStorage.getItem('session-id')!, listName, listDescription);
            if(success === true) alert(`A lista '${listName}' foi criada com sucesso!`);
        } else alert('Devem ser informados os campos de nome e descrição da lista!');
    });
}

let searchInputField = document.getElementById('search-input') as HTMLInputElement;
let searchButton = document.getElementById('search-button') as HTMLButtonElement;

if(searchInputField && searchButton) {
    let inputField = '';

    searchInputField.addEventListener('change', () => {
        inputField = searchInputField.value;
    });
    searchButton.addEventListener('click', () => {
         Movie.searchMovie(inputField, sessionStorage.getItem('api-key')!);
    });
}
