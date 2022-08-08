import { ISession } from '../interface/ISession';
const axios = require('axios').default;
const defaultUrl = 'https://api.themoviedb.org/3/authentication/session/new?api_key=';

export class Session {
    static async createSession(apiKey: string, requestToken: string): Promise<ISession | boolean> {
        try {
            let sessionInfo: ISession;
            let result = await axios.post(`${defaultUrl}${apiKey}`, {"request_token": requestToken});
            sessionInfo = result.data;
            return sessionInfo;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}