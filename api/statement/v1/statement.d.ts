import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "api.statement.v1";
export interface Statement {
    id: string;
    emailAddress: string;
    password: string;
}
export declare const Statement: {
    encode(message: Statement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Statement;
    fromJSON(object: any): Statement;
    toJSON(message: Statement): unknown;
    fromPartial(object: DeepPartial<Statement>): Statement;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
