import { HttpResponse, ResponseCreator } from "../../src";

describe('Unit tests for "utils" package', () => {
    test('send method returns object composed of statusCode and message', () => {
        const result = ResponseCreator.send(200, { singer: 'Rihanna' });
        const expected: HttpResponse = {
            statusCode: 200,
            message: '{\"singer\":\"Rihanna\"}',
        };
        expect(result).toStrictEqual(expected);
    });
});
