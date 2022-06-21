import { APIGatewayProxyEvent } from 'aws-lambda';
import { HttpResponse } from 'lffloyd-test-utils';
import { handler } from '../../src/index';

describe('Unit tests for "function" package', () => {
    test('handler call returns expected success response', async () => {
        const expected: HttpResponse = {
            statusCode: 200,
            message: '{\"text\":\"Message\",\"body\":{\"result\":123}}'
        };
        const result = await handler({} as APIGatewayProxyEvent);
        expect(result).toStrictEqual(expected);
    });
});
