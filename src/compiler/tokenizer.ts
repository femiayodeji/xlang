import { Token } from "./types";

export function tokenizer(input: string): Token[] {
    const tokens: Token[] = [];

    let cursorPosition = 0;
    while(cursorPosition < input.length) {
        let character = input[cursorPosition]!;

        if(/\s/.test(character)) {
            cursorPosition++;
            continue;
        }

        if(character === '(') {
            tokens.push({ type: 'OpenBracketToken' })
            cursorPosition++;
            continue;
        }

        if(character === ')') {
            tokens.push({ type: 'CloseBracketToken' })
            cursorPosition++;
            continue;
        }

        if(character === '+') {
            tokens.push({ type: 'PlusToken' })
            cursorPosition++;
            continue;
        }

        if(character === '-') {
            tokens.push({ type: 'MinusToken' })
            cursorPosition++;
            continue;
        }

        const NUMBERS = /[0-9]/;
        const ALPHABETS = /[a-z]/i;
        if(NUMBERS.test(character)){
            let value = '';
            while(NUMBERS.test(character)) {
                value += character;
                character = input[++cursorPosition]!;
            }
            tokens.push({ type: "NumericLiteral", value })
            continue;
        }

        if(ALPHABETS.test(character)){
            let value = '';
            while(ALPHABETS.test(character)) {
                value += character;
                character = input[++cursorPosition]!;
            }
            tokens.push({ type: "Identifier", value })
            continue;
        }

        throw new SyntaxError(`Ye! Unrecongnised token: ${character}.`)
    }

    return tokens;
}
