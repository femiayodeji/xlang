"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenizer = tokenizer;
function tokenizer(input) {
    const tokens = [];
    let cursorPosition = 0;
    while (cursorPosition < input.length) {
        let character = input[cursorPosition];
        if (/\s/.test(character)) {
            cursorPosition++;
            continue;
        }
        if (character === '(') {
            tokens.push({ type: 'OpenBracketToken' });
            cursorPosition++;
            continue;
        }
        if (character === ')') {
            tokens.push({ type: 'CloseBracketToken' });
            cursorPosition++;
            continue;
        }
        if (character === '+') {
            tokens.push({ type: 'PlusToken' });
            cursorPosition++;
            continue;
        }
        if (character === '-') {
            tokens.push({ type: 'MinusToken' });
            cursorPosition++;
            continue;
        }
        const NUMBERS = /[0-9]/;
        const ALPHABETS = /[a-z]/i;
        if (NUMBERS.test(character)) {
            let value = '';
            while (NUMBERS.test(character)) {
                value += character;
                character = input[++cursorPosition];
            }
            tokens.push({ type: "NumericToken", value });
            continue;
        }
        if (ALPHABETS.test(character)) {
            let value = '';
            while (ALPHABETS.test(character)) {
                value += character;
                character = input[++cursorPosition];
            }
            tokens.push({ type: "Indentifier", value });
            continue;
        }
        throw new SyntaxError(`Ye! Unrecongnised token: ${character}.`);
    }
    return tokens;
}
