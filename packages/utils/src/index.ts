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

    /**
     * Sends a HTTP response with a status code to the consumer.
     * Should be used when there is no need to return a descriptive 
     * message to the consumer.
     * @param status HTTP status code to return
     * @returns HTTP response
     */
    static sendStatus(status: number): Partial<HttpResponse> {
        return { statusCode: status };
    }
}
