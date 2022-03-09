export type HttpResponse =  {
    statusCode: number;
    message?: string;
};

export class ResponseCreator {

    static send(status: number, message?: object): HttpResponse {
        return {
            statusCode: status,
            message: message ? JSON.stringify(message) : undefined,
        }
    }

};

