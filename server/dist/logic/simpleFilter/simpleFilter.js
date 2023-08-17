"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simpleFilter = void 0;
const simpleFilter = (input, key, value) => input.filter((item) => item[key] === value);
exports.simpleFilter = simpleFilter;
