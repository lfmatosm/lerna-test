export type HttpResponse =  {
    statusCode: number;
    message?: string;
};

/**
* Creates HTTP responses given status code and optional message to return to 
the client
*/
export class ResponseCreator {

    static send(status: number, message?: object): HttpResponse {
        return {
            statusCode: status,
            message: message ? JSON.stringify(message) : undefined,
        }
    }

};

