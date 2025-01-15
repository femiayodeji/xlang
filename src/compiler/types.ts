export type IdentifierToken = { type: "Identifier", value: string };
export type PlusToken = { type: "PlusToken" };
export type MinusToken =  { type: "MinusToken" };
export type NumericToken = { type: "NumericLiteral", value: string };
export type OpenGroupToken = { type: "OpenBracketToken" };
export type CloseGroupToken = { type: "CloseBracketToken" };

export type Token = IdentifierToken | PlusToken | MinusToken | NumericToken | OpenGroupToken | CloseGroupToken;

export type ArithmeticOperator = PlusToken | MinusToken;

export type NumericLiteralNode = { type: "NumericLiteral", value: string };
export type CallExpressionNode = { type: "CallExpression", identifier: IdentifierToken, argument: Node };
export type BinaryExpressionNode = { type: "BinaryExpression", left: Node, right: Node, operator: ArithmeticOperator }

export type Node = | NumericLiteralNode | CallExpressionNode | BinaryExpressionNode;

export type Program = {
    body: Node[]
}
