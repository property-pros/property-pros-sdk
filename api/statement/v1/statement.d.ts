import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "api.statement.v1";
export interface Statement {
    id: string;
    userId: string;
    emailAddress: string;
    password: string;
}
export interface GetStatementsRequest {
    userId: string;
}
export interface GetStatementsResponse {
    statements: Statement[];
}
export declare const Statement: {
    encode(message: Statement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Statement;
    fromJSON(object: any): Statement;
    toJSON(message: Statement): unknown;
    create(base?: DeepPartial<Statement>): Statement;
    fromPartial(object: DeepPartial<Statement>): Statement;
};
export declare const GetStatementsRequest: {
    encode(message: GetStatementsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetStatementsRequest;
    fromJSON(object: any): GetStatementsRequest;
    toJSON(message: GetStatementsRequest): unknown;
    create(base?: DeepPartial<GetStatementsRequest>): GetStatementsRequest;
    fromPartial(object: DeepPartial<GetStatementsRequest>): GetStatementsRequest;
};
export declare const GetStatementsResponse: {
    encode(message: GetStatementsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetStatementsResponse;
    fromJSON(object: any): GetStatementsResponse;
    toJSON(message: GetStatementsResponse): unknown;
    create(base?: DeepPartial<GetStatementsResponse>): GetStatementsResponse;
    fromPartial(object: DeepPartial<GetStatementsResponse>): GetStatementsResponse;
};
export declare type StatementServiceDefinition = typeof StatementServiceDefinition;
export declare const StatementServiceDefinition: {
    readonly name: "StatementService";
    readonly fullName: "api.statement.v1.StatementService";
    readonly methods: {
        readonly getStatements: {
            readonly name: "GetStatements";
            readonly requestType: {
                encode(message: GetStatementsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetStatementsRequest;
                fromJSON(object: any): GetStatementsRequest;
                toJSON(message: GetStatementsRequest): unknown;
                create(base?: DeepPartial<GetStatementsRequest>): GetStatementsRequest;
                fromPartial(object: DeepPartial<GetStatementsRequest>): GetStatementsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetStatementsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetStatementsResponse;
                fromJSON(object: any): GetStatementsResponse;
                toJSON(message: GetStatementsResponse): unknown;
                create(base?: DeepPartial<GetStatementsResponse>): GetStatementsResponse;
                fromPartial(object: DeepPartial<GetStatementsResponse>): GetStatementsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Uint8Array];
                    readonly 578365826: readonly [Uint8Array];
                };
            };
        };
    };
};
export interface StatementServiceImplementation<CallContextExt = {}> {
    getStatements(request: GetStatementsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetStatementsResponse>>;
}
export interface StatementServiceClient<CallOptionsExt = {}> {
    getStatements(request: DeepPartial<GetStatementsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetStatementsResponse>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
