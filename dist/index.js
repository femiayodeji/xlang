"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = hello;
const person = "beautiful people";
const parser_1 = require("./compiler/parser");
const tokenizer_1 = require("./compiler/tokenizer");
function hello(who = person) {
    return `Hello ${who}!`;
}
console.log(hello());
const tokens = (0, tokenizer_1.tokenizer)('print(1+5-2)');
console.log(tokens);
const program = (0, parser_1.parser)(tokens);
console.log(JSON.stringify(program));
