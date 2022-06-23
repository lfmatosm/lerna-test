export type HttpResponse =  {
    statusCode: number;
    message?: string;
    timestamp: number;
};

/**
* Creates HTTP responses given status code and optional message to return to 
the client
*/
export class ResponseCreator {
    /**
     * Sends a HTTP response to the consumer.
     * @param status HTTP status code to return
     * @param message message to the consumer. Can be any primitive type or object
     * @returns HTTP response
     */
    static send(status: number, message?: object): HttpResponse {
        console.info(`Received status - ${status} and object - ${message}`);
        return {
            statusCode: status,
            message: message ? JSON.stringify(message) : undefined,
            timestamp: Date.now(),
        };
    }

    static sendStatus(status: number): Partial<HttpResponse> {
        return { statusCode: status };
    }
}
