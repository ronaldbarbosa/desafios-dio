import { IAccountInfo } from '../interface/IAccountInfo';
const axios = require('axios').default;
const defaultUrl = 'https://api.themoviedb.org/3/';

export class Account {
    static async getDetails(apiKey: string, sessionId: string): Promise<IAccountInfo | boolean> {
        try {
            let result = await axios.get(`${defaultUrl}account?api_key=${apiKey}&session_id=${sessionId}`);
            let accountDetails: IAccountInfo = result.data;
            return accountDetails;
        } catch (error) {
            console.log(error)
            return false;
        }
    }
}