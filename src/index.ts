const person = "beautiful people";
import { tokenizer } from "./compiler/tokenizer";

export function hello(who: string = person): string {
    return `Hello ${who}!`;
}

console.log(hello());
const tokens = tokenizer('print(1+5-2)');
console.log(tokens)


