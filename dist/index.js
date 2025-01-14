"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = hello;
const person = "beautiful people";
const tokenizer_1 = require("./compiler/tokenizer");
function hello(who = person) {
    return `Hello ${who}!`;
}
console.log(hello());
console.log((0, tokenizer_1.tokenizer)('print(1+5-2)'));
