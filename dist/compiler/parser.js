"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parser = parser;
function parser(tokens) {
    const program = {
        body: []
    };
    let tokenIndex = 0;
    function parse() {
        const token = tokens[tokenIndex];
        if (token.type === "Identifier") {
            return parseCallExpression(token);
        }
        if (token.type === "NumericLiteral") {
            const next = tokens[tokenIndex + 1];
            if ((next === null || next === void 0 ? void 0 : next.type) === "PlusToken" || (next === null || next === void 0 ? void 0 : next.type) === "MinusToken") {
                return parseBinaryExpression(token, next);
            }
            else {
                return parseNumericLiteral(token);
            }
        }
        throw new SyntaxError(`Ye! Unknown Token: ${token.type}`);
    }
    function parseBinaryExpression(token, next) {
        const left = parseNumericLiteral(token);
        const operator = next;
        tokenIndex++;
        const right = parse();
        return { type: "BinaryExpression", left, operator, right };
    }
    function parseCallExpression(token) {
        var _a, _b;
        const identifier = token;
        tokenIndex++;
        if (((_a = tokens[tokenIndex]) === null || _a === void 0 ? void 0 : _a.type) !== 'OpenBracketToken') {
            throw new SyntaxError("Ye! Identifier must be followed by (");
        }
        tokenIndex++;
        const argument = parse();
        if (((_b = tokens[tokenIndex]) === null || _b === void 0 ? void 0 : _b.type) !== "CloseBracketToken") {
            throw new SyntaxError("Function Expression terminate with )");
        }
        tokenIndex++;
        return { type: "CallExpression", identifier, argument };
    }
    function parseNumericLiteral(token) {
        tokenIndex++;
        return { type: "NumericLiteral", value: token.value };
    }
    while (tokenIndex < tokens.length) {
        program.body.push(parse());
    }
    return program;
}
