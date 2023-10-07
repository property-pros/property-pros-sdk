import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "api.common.v1";
export interface RecordRequestPayload {
    id: string;
}
export interface RecordRequestCollection {
    payload: RecordRequestPayload[];
}
export interface RecordCollection {
    payload: RecordResultPayload[];
}
export interface RecordResultPayload {
    id: string;
    createdOn: string;
}
export declare const RecordRequestPayload: {
    encode(message: RecordRequestPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RecordRequestPayload;
    encodeTransform(source: AsyncIterable<RecordRequestPayload | RecordRequestPayload[]> | Iterable<RecordRequestPayload | RecordRequestPayload[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<RecordRequestPayload>;
    fromJSON(object: any): RecordRequestPayload;
    toJSON(message: RecordRequestPayload): unknown;
    create(base?: DeepPartial<RecordRequestPayload>): RecordRequestPayload;
    fromPartial(object: DeepPartial<RecordRequestPayload>): RecordRequestPayload;
};
export declare const RecordRequestCollection: {
    encode(message: RecordRequestCollection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RecordRequestCollection;
    encodeTransform(source: AsyncIterable<RecordRequestCollection | RecordRequestCollection[]> | Iterable<RecordRequestCollection | RecordRequestCollection[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<RecordRequestCollection>;
    fromJSON(object: any): RecordRequestCollection;
    toJSON(message: RecordRequestCollection): unknown;
    create(base?: DeepPartial<RecordRequestCollection>): RecordRequestCollection;
    fromPartial(object: DeepPartial<RecordRequestCollection>): RecordRequestCollection;
};
export declare const RecordCollection: {
    encode(message: RecordCollection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RecordCollection;
    encodeTransform(source: AsyncIterable<RecordCollection | RecordCollection[]> | Iterable<RecordCollection | RecordCollection[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<RecordCollection>;
    fromJSON(object: any): RecordCollection;
    toJSON(message: RecordCollection): unknown;
    create(base?: DeepPartial<RecordCollection>): RecordCollection;
    fromPartial(object: DeepPartial<RecordCollection>): RecordCollection;
};
export declare const RecordResultPayload: {
    encode(message: RecordResultPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RecordResultPayload;
    encodeTransform(source: AsyncIterable<RecordResultPayload | RecordResultPayload[]> | Iterable<RecordResultPayload | RecordResultPayload[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<RecordResultPayload>;
    fromJSON(object: any): RecordResultPayload;
    toJSON(message: RecordResultPayload): unknown;
    create(base?: DeepPartial<RecordResultPayload>): RecordResultPayload;
    fromPartial(object: DeepPartial<RecordResultPayload>): RecordResultPayload;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
