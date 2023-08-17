"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const simpleFilter_1 = require("./simpleFilter");
(0, vitest_1.test)('simpleFilter', () => {
    const input = [
        {
            id: 1,
            name: 'Filter 1',
            email: 'x@y.com',
            body: 'This is the first filter'
        },
        {
            id: 2,
            name: 'Filter 2',
            email: 'me2U.COM',
            body: 'This is the second filter'
        }
    ];
    const key = 'email';
    const output = (0, simpleFilter_1.simpleFilter)(input, key, "x@y.com");
    (0, vitest_1.expect)(output).toStrictEqual([
        {
            id: 1,
            name: 'Filter 1',
            email: 'x@y.com',
            body: 'This is the first filter'
        }
    ]);
});
