import { IRequestToken } from "../interface/IRequestToken";

const axios = require('axios').default;
const defaultUrl = 'https://api.themoviedb.org/3/authentication/token/new?api_key=';

export class RequestToken {
    static async createRequestToken(apiKey: string): Promise<string> {
        try {
            let result: IRequestToken = await axios.get(`${defaultUrl}${apiKey}`);
            return result.data.request_token;
        } catch (error) {
            console.log(error);
            return 'error';
        }
    }

    static async aproveRequestToken(requestToken: string): Promise<boolean> {
        try {
            window.open(`https://www.themoviedb.org/authenticate/${requestToken}`, "_blank");
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}