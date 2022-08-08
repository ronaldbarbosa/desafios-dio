export interface IRequestToken {
    data: {
        success: boolean,
        expires_at: string,
        request_token: string
    }
}