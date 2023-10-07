import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "api.statement.v1";
export interface Statement {
    id: string;
    userId: string;
    emailAddress: string;
    password: string;
    startPeriodDate: string;
    endPeriodDate: string;
    balance: string;
    totalIncome: string;
    principle: string;
    document: Uint8Array;
}
export interface GetStatementsRequest {
    userId: string;
}
export interface GetStatementsResponse {
    payload: Statement[];
}
export interface GetStatementDocRequest {
    payload: Statement | undefined;
}
export interface GetStatementDocResponse {
    document: Uint8Array;
}
export declare const Statement: {
    encode(message: Statement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Statement;
    encodeTransform(source: AsyncIterable<Statement | Statement[]> | Iterable<Statement | Statement[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<Statement>;
    fromJSON(object: any): Statement;
    toJSON(message: Statement): unknown;
    create(base?: DeepPartial<Statement>): Statement;
    fromPartial(object: DeepPartial<Statement>): Statement;
};
export declare const GetStatementsRequest: {
    encode(message: GetStatementsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetStatementsRequest;
    encodeTransform(source: AsyncIterable<GetStatementsRequest | GetStatementsRequest[]> | Iterable<GetStatementsRequest | GetStatementsRequest[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<GetStatementsRequest>;
    fromJSON(object: any): GetStatementsRequest;
    toJSON(message: GetStatementsRequest): unknown;
    create(base?: DeepPartial<GetStatementsRequest>): GetStatementsRequest;
    fromPartial(object: DeepPartial<GetStatementsRequest>): GetStatementsRequest;
};
export declare const GetStatementsResponse: {
    encode(message: GetStatementsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetStatementsResponse;
    encodeTransform(source: AsyncIterable<GetStatementsResponse | GetStatementsResponse[]> | Iterable<GetStatementsResponse | GetStatementsResponse[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<GetStatementsResponse>;
    fromJSON(object: any): GetStatementsResponse;
    toJSON(message: GetStatementsResponse): unknown;
    create(base?: DeepPartial<GetStatementsResponse>): GetStatementsResponse;
    fromPartial(object: DeepPartial<GetStatementsResponse>): GetStatementsResponse;
};
export declare const GetStatementDocRequest: {
    encode(message: GetStatementDocRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetStatementDocRequest;
    encodeTransform(source: AsyncIterable<GetStatementDocRequest | GetStatementDocRequest[]> | Iterable<GetStatementDocRequest | GetStatementDocRequest[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<GetStatementDocRequest>;
    fromJSON(object: any): GetStatementDocRequest;
    toJSON(message: GetStatementDocRequest): unknown;
    create(base?: DeepPartial<GetStatementDocRequest>): GetStatementDocRequest;
    fromPartial(object: DeepPartial<GetStatementDocRequest>): GetStatementDocRequest;
};
export declare const GetStatementDocResponse: {
    encode(message: GetStatementDocResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetStatementDocResponse;
    encodeTransform(source: AsyncIterable<GetStatementDocResponse | GetStatementDocResponse[]> | Iterable<GetStatementDocResponse | GetStatementDocResponse[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<GetStatementDocResponse>;
    fromJSON(object: any): GetStatementDocResponse;
    toJSON(message: GetStatementDocResponse): unknown;
    create(base?: DeepPartial<GetStatementDocResponse>): GetStatementDocResponse;
    fromPartial(object: DeepPartial<GetStatementDocResponse>): GetStatementDocResponse;
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
                encodeTransform(source: AsyncIterable<GetStatementsRequest | GetStatementsRequest[]> | Iterable<GetStatementsRequest | GetStatementsRequest[]>): AsyncIterable<Uint8Array>;
                decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<GetStatementsRequest>;
                fromJSON(object: any): GetStatementsRequest;
                toJSON(message: GetStatementsRequest): unknown;
                create(base?: DeepPartial<GetStatementsRequest>): GetStatementsRequest;
                fromPartial(object: DeepPartial<GetStatementsRequest>): GetStatementsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetStatementsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetStatementsResponse;
                encodeTransform(source: AsyncIterable<GetStatementsResponse | GetStatementsResponse[]> | Iterable<GetStatementsResponse | GetStatementsResponse[]>): AsyncIterable<Uint8Array>;
                decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<GetStatementsResponse>;
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
        readonly getStatementDoc: {
            readonly name: "GetStatementDoc";
            readonly requestType: {
                encode(message: GetStatementDocRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetStatementDocRequest;
                encodeTransform(source: AsyncIterable<GetStatementDocRequest | GetStatementDocRequest[]> | Iterable<GetStatementDocRequest | GetStatementDocRequest[]>): AsyncIterable<Uint8Array>;
                decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<GetStatementDocRequest>;
                fromJSON(object: any): GetStatementDocRequest;
                toJSON(message: GetStatementDocRequest): unknown;
                create(base?: DeepPartial<GetStatementDocRequest>): GetStatementDocRequest;
                fromPartial(object: DeepPartial<GetStatementDocRequest>): GetStatementDocRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetStatementDocResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetStatementDocResponse;
                encodeTransform(source: AsyncIterable<GetStatementDocResponse | GetStatementDocResponse[]> | Iterable<GetStatementDocResponse | GetStatementDocResponse[]>): AsyncIterable<Uint8Array>;
                decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<GetStatementDocResponse>;
                fromJSON(object: any): GetStatementDocResponse;
                toJSON(message: GetStatementDocResponse): unknown;
                create(base?: DeepPartial<GetStatementDocResponse>): GetStatementDocResponse;
                fromPartial(object: DeepPartial<GetStatementDocResponse>): GetStatementDocResponse;
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
    getStatementDoc(request: GetStatementDocRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetStatementDocResponse>>;
}
export interface StatementServiceClient<CallOptionsExt = {}> {
    getStatements(request: DeepPartial<GetStatementsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetStatementsResponse>;
    getStatementDoc(request: DeepPartial<GetStatementDocRequest>, options?: CallOptions & CallOptionsExt): Promise<GetStatementDocResponse>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
