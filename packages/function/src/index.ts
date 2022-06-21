import { HttpResponse, ResponseCreator } from 'lffloyd-test-utils';
import { APIGatewayProxyEvent } from 'aws-lambda';

const PAYLOAD = {
    text: 'Message',
    body: { result: 123, size: 256 },
};

/** 
* Handles a lambda request and returns a mock response to the caller.
* @param {APIGatewayProxyEvent} _ - AWS ApiGateway Proxy Event passed through the lambda context
* @return {Promise<HttpResponse>} HttpResponse to the client
*/
async function handler(_: APIGatewayProxyEvent): Promise<HttpResponse> {
    try {
        console.info('Starting execution...');
        console.info('Successfully invoked handler');
        return ResponseCreator.send(200, PAYLOAD);
    } catch (err) {
        if (err instanceof Error) {
            console.error(`Error while invoking handler: ${err.message}`);
            return ResponseCreator.send(500, { error: err.message });
        }
        return ResponseCreator.send(500, { error: 'Internal Server Error' });
    }
}

export { handler };
