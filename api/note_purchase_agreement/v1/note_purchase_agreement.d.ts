import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { User } from "../../auth/v1/auth";
import { RecordRequestPayload, RecordResultPayload } from "../../common/v1/common";
export declare const protobufPackage = "api.note_purchase_agreement.v1";
export interface NotePurchaseAgreementRecord {
    id: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    homeAddress: string;
    user: User | undefined;
    phoneNumber: string;
    socialSecurity: string;
    fundsCommitted: number;
    fileContent: Uint8Array;
    createdOn: string;
}
export interface GetNotePurchaseAgreementRequest {
    payload: RecordRequestPayload | undefined;
}
export interface GetNotePurchaseAgreementResponse {
    payload: NotePurchaseAgreementRecord | undefined;
}
export interface GetNotePurchaseAgreementDocRequest {
    payload: NotePurchaseAgreementRecord | undefined;
}
export interface GetNotePurchaseAgreementDocResponse {
    fileContent: Uint8Array;
}
export interface GetNotePurchaseAgreementsRequest {
    userId: string;
}
export interface GetNotePurchaseAgreementsResponse {
    payload: RecordResultPayload[];
}
export interface SaveNotePurchaseAgreementRequest {
    payload: NotePurchaseAgreementRecord | undefined;
}
export interface SaveNotePurchaseAgreementResponse {
    payload: RecordResultPayload | undefined;
}
export declare const NotePurchaseAgreementRecord: {
    encode(message: NotePurchaseAgreementRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NotePurchaseAgreementRecord;
    encodeTransform(source: AsyncIterable<NotePurchaseAgreementRecord | NotePurchaseAgreementRecord[]> | Iterable<NotePurchaseAgreementRecord | NotePurchaseAgreementRecord[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<NotePurchaseAgreementRecord>;
    fromJSON(object: any): NotePurchaseAgreementRecord;
    toJSON(message: NotePurchaseAgreementRecord): unknown;
    create(base?: DeepPartial<NotePurchaseAgreementRecord>): NotePurchaseAgreementRecord;
    fromPartial(object: DeepPartial<NotePurchaseAgreementRecord>): NotePurchaseAgreementRecord;
};
export declare const GetNotePurchaseAgreementRequest: {
    encode(message: GetNotePurchaseAgreementRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementRequest;
    encodeTransform(source: AsyncIterable<GetNotePurchaseAgreementRequest | GetNotePurchaseAgreementRequest[]> | Iterable<GetNotePurchaseAgreementRequest | GetNotePurchaseAgreementRequest[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<GetNotePurchaseAgreementRequest>;
    fromJSON(object: any): GetNotePurchaseAgreementRequest;
    toJSON(message: GetNotePurchaseAgreementRequest): unknown;
    create(base?: DeepPartial<GetNotePurchaseAgreementRequest>): GetNotePurchaseAgreementRequest;
    fromPartial(object: DeepPartial<GetNotePurchaseAgreementRequest>): GetNotePurchaseAgreementRequest;
};
export declare const GetNotePurchaseAgreementResponse: {
    encode(message: GetNotePurchaseAgreementResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementResponse;
    encodeTransform(source: AsyncIterable<GetNotePurchaseAgreementResponse | GetNotePurchaseAgreementResponse[]> | Iterable<GetNotePurchaseAgreementResponse | GetNotePurchaseAgreementResponse[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<GetNotePurchaseAgreementResponse>;
    fromJSON(object: any): GetNotePurchaseAgreementResponse;
    toJSON(message: GetNotePurchaseAgreementResponse): unknown;
    create(base?: DeepPartial<GetNotePurchaseAgreementResponse>): GetNotePurchaseAgreementResponse;
    fromPartial(object: DeepPartial<GetNotePurchaseAgreementResponse>): GetNotePurchaseAgreementResponse;
};
export declare const GetNotePurchaseAgreementDocRequest: {
    encode(message: GetNotePurchaseAgreementDocRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementDocRequest;
    encodeTransform(source: AsyncIterable<GetNotePurchaseAgreementDocRequest | GetNotePurchaseAgreementDocRequest[]> | Iterable<GetNotePurchaseAgreementDocRequest | GetNotePurchaseAgreementDocRequest[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<GetNotePurchaseAgreementDocRequest>;
    fromJSON(object: any): GetNotePurchaseAgreementDocRequest;
    toJSON(message: GetNotePurchaseAgreementDocRequest): unknown;
    create(base?: DeepPartial<GetNotePurchaseAgreementDocRequest>): GetNotePurchaseAgreementDocRequest;
    fromPartial(object: DeepPartial<GetNotePurchaseAgreementDocRequest>): GetNotePurchaseAgreementDocRequest;
};
export declare const GetNotePurchaseAgreementDocResponse: {
    encode(message: GetNotePurchaseAgreementDocResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementDocResponse;
    encodeTransform(source: AsyncIterable<GetNotePurchaseAgreementDocResponse | GetNotePurchaseAgreementDocResponse[]> | Iterable<GetNotePurchaseAgreementDocResponse | GetNotePurchaseAgreementDocResponse[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<GetNotePurchaseAgreementDocResponse>;
    fromJSON(object: any): GetNotePurchaseAgreementDocResponse;
    toJSON(message: GetNotePurchaseAgreementDocResponse): unknown;
    create(base?: DeepPartial<GetNotePurchaseAgreementDocResponse>): GetNotePurchaseAgreementDocResponse;
    fromPartial(object: DeepPartial<GetNotePurchaseAgreementDocResponse>): GetNotePurchaseAgreementDocResponse;
};
export declare const GetNotePurchaseAgreementsRequest: {
    encode(message: GetNotePurchaseAgreementsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementsRequest;
    encodeTransform(source: AsyncIterable<GetNotePurchaseAgreementsRequest | GetNotePurchaseAgreementsRequest[]> | Iterable<GetNotePurchaseAgreementsRequest | GetNotePurchaseAgreementsRequest[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<GetNotePurchaseAgreementsRequest>;
    fromJSON(object: any): GetNotePurchaseAgreementsRequest;
    toJSON(message: GetNotePurchaseAgreementsRequest): unknown;
    create(base?: DeepPartial<GetNotePurchaseAgreementsRequest>): GetNotePurchaseAgreementsRequest;
    fromPartial(object: DeepPartial<GetNotePurchaseAgreementsRequest>): GetNotePurchaseAgreementsRequest;
};
export declare const GetNotePurchaseAgreementsResponse: {
    encode(message: GetNotePurchaseAgreementsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementsResponse;
    encodeTransform(source: AsyncIterable<GetNotePurchaseAgreementsResponse | GetNotePurchaseAgreementsResponse[]> | Iterable<GetNotePurchaseAgreementsResponse | GetNotePurchaseAgreementsResponse[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<GetNotePurchaseAgreementsResponse>;
    fromJSON(object: any): GetNotePurchaseAgreementsResponse;
    toJSON(message: GetNotePurchaseAgreementsResponse): unknown;
    create(base?: DeepPartial<GetNotePurchaseAgreementsResponse>): GetNotePurchaseAgreementsResponse;
    fromPartial(object: DeepPartial<GetNotePurchaseAgreementsResponse>): GetNotePurchaseAgreementsResponse;
};
export declare const SaveNotePurchaseAgreementRequest: {
    encode(message: SaveNotePurchaseAgreementRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SaveNotePurchaseAgreementRequest;
    encodeTransform(source: AsyncIterable<SaveNotePurchaseAgreementRequest | SaveNotePurchaseAgreementRequest[]> | Iterable<SaveNotePurchaseAgreementRequest | SaveNotePurchaseAgreementRequest[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<SaveNotePurchaseAgreementRequest>;
    fromJSON(object: any): SaveNotePurchaseAgreementRequest;
    toJSON(message: SaveNotePurchaseAgreementRequest): unknown;
    create(base?: DeepPartial<SaveNotePurchaseAgreementRequest>): SaveNotePurchaseAgreementRequest;
    fromPartial(object: DeepPartial<SaveNotePurchaseAgreementRequest>): SaveNotePurchaseAgreementRequest;
};
export declare const SaveNotePurchaseAgreementResponse: {
    encode(message: SaveNotePurchaseAgreementResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SaveNotePurchaseAgreementResponse;
    encodeTransform(source: AsyncIterable<SaveNotePurchaseAgreementResponse | SaveNotePurchaseAgreementResponse[]> | Iterable<SaveNotePurchaseAgreementResponse | SaveNotePurchaseAgreementResponse[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<SaveNotePurchaseAgreementResponse>;
    fromJSON(object: any): SaveNotePurchaseAgreementResponse;
    toJSON(message: SaveNotePurchaseAgreementResponse): unknown;
    create(base?: DeepPartial<SaveNotePurchaseAgreementResponse>): SaveNotePurchaseAgreementResponse;
    fromPartial(object: DeepPartial<SaveNotePurchaseAgreementResponse>): SaveNotePurchaseAgreementResponse;
};
export declare type NotePurchaseAgreementServiceDefinition = typeof NotePurchaseAgreementServiceDefinition;
export declare const NotePurchaseAgreementServiceDefinition: {
    readonly name: "NotePurchaseAgreementService";
    readonly fullName: "api.note_purchase_agreement.v1.NotePurchaseAgreementService";
    readonly methods: {
        readonly getNotePurchaseAgreements: {
            readonly name: "GetNotePurchaseAgreements";
            readonly requestType: {
                encode(message: GetNotePurchaseAgreementsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementsRequest;
                encodeTransform(source: AsyncIterable<GetNotePurchaseAgreementsRequest | GetNotePurchaseAgreementsRequest[]> | Iterable<GetNotePurchaseAgreementsRequest | GetNotePurchaseAgreementsRequest[]>): AsyncIterable<Uint8Array>;
                decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<GetNotePurchaseAgreementsRequest>;
                fromJSON(object: any): GetNotePurchaseAgreementsRequest;
                toJSON(message: GetNotePurchaseAgreementsRequest): unknown;
                create(base?: DeepPartial<GetNotePurchaseAgreementsRequest>): GetNotePurchaseAgreementsRequest;
                fromPartial(object: DeepPartial<GetNotePurchaseAgreementsRequest>): GetNotePurchaseAgreementsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetNotePurchaseAgreementsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementsResponse;
                encodeTransform(source: AsyncIterable<GetNotePurchaseAgreementsResponse | GetNotePurchaseAgreementsResponse[]> | Iterable<GetNotePurchaseAgreementsResponse | GetNotePurchaseAgreementsResponse[]>): AsyncIterable<Uint8Array>;
                decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<GetNotePurchaseAgreementsResponse>;
                fromJSON(object: any): GetNotePurchaseAgreementsResponse;
                toJSON(message: GetNotePurchaseAgreementsResponse): unknown;
                create(base?: DeepPartial<GetNotePurchaseAgreementsResponse>): GetNotePurchaseAgreementsResponse;
                fromPartial(object: DeepPartial<GetNotePurchaseAgreementsResponse>): GetNotePurchaseAgreementsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Uint8Array];
                    readonly 578365826: readonly [Uint8Array];
                };
            };
        };
        readonly getNotePurchaseAgreement: {
            readonly name: "GetNotePurchaseAgreement";
            readonly requestType: {
                encode(message: GetNotePurchaseAgreementRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementRequest;
                encodeTransform(source: AsyncIterable<GetNotePurchaseAgreementRequest | GetNotePurchaseAgreementRequest[]> | Iterable<GetNotePurchaseAgreementRequest | GetNotePurchaseAgreementRequest[]>): AsyncIterable<Uint8Array>;
                decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<GetNotePurchaseAgreementRequest>;
                fromJSON(object: any): GetNotePurchaseAgreementRequest;
                toJSON(message: GetNotePurchaseAgreementRequest): unknown;
                create(base?: DeepPartial<GetNotePurchaseAgreementRequest>): GetNotePurchaseAgreementRequest;
                fromPartial(object: DeepPartial<GetNotePurchaseAgreementRequest>): GetNotePurchaseAgreementRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetNotePurchaseAgreementResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementResponse;
                encodeTransform(source: AsyncIterable<GetNotePurchaseAgreementResponse | GetNotePurchaseAgreementResponse[]> | Iterable<GetNotePurchaseAgreementResponse | GetNotePurchaseAgreementResponse[]>): AsyncIterable<Uint8Array>;
                decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<GetNotePurchaseAgreementResponse>;
                fromJSON(object: any): GetNotePurchaseAgreementResponse;
                toJSON(message: GetNotePurchaseAgreementResponse): unknown;
                create(base?: DeepPartial<GetNotePurchaseAgreementResponse>): GetNotePurchaseAgreementResponse;
                fromPartial(object: DeepPartial<GetNotePurchaseAgreementResponse>): GetNotePurchaseAgreementResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Uint8Array];
                    readonly 578365826: readonly [Uint8Array];
                };
            };
        };
        readonly saveNotePurchaseAgreement: {
            readonly name: "SaveNotePurchaseAgreement";
            readonly requestType: {
                encode(message: SaveNotePurchaseAgreementRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SaveNotePurchaseAgreementRequest;
                encodeTransform(source: AsyncIterable<SaveNotePurchaseAgreementRequest | SaveNotePurchaseAgreementRequest[]> | Iterable<SaveNotePurchaseAgreementRequest | SaveNotePurchaseAgreementRequest[]>): AsyncIterable<Uint8Array>;
                decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<SaveNotePurchaseAgreementRequest>;
                fromJSON(object: any): SaveNotePurchaseAgreementRequest;
                toJSON(message: SaveNotePurchaseAgreementRequest): unknown;
                create(base?: DeepPartial<SaveNotePurchaseAgreementRequest>): SaveNotePurchaseAgreementRequest;
                fromPartial(object: DeepPartial<SaveNotePurchaseAgreementRequest>): SaveNotePurchaseAgreementRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SaveNotePurchaseAgreementResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SaveNotePurchaseAgreementResponse;
                encodeTransform(source: AsyncIterable<SaveNotePurchaseAgreementResponse | SaveNotePurchaseAgreementResponse[]> | Iterable<SaveNotePurchaseAgreementResponse | SaveNotePurchaseAgreementResponse[]>): AsyncIterable<Uint8Array>;
                decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<SaveNotePurchaseAgreementResponse>;
                fromJSON(object: any): SaveNotePurchaseAgreementResponse;
                toJSON(message: SaveNotePurchaseAgreementResponse): unknown;
                create(base?: DeepPartial<SaveNotePurchaseAgreementResponse>): SaveNotePurchaseAgreementResponse;
                fromPartial(object: DeepPartial<SaveNotePurchaseAgreementResponse>): SaveNotePurchaseAgreementResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Uint8Array];
                    readonly 578365826: readonly [Uint8Array];
                };
            };
        };
        readonly getNotePurchaseAgreementDoc: {
            readonly name: "GetNotePurchaseAgreementDoc";
            readonly requestType: {
                encode(message: GetNotePurchaseAgreementDocRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementDocRequest;
                encodeTransform(source: AsyncIterable<GetNotePurchaseAgreementDocRequest | GetNotePurchaseAgreementDocRequest[]> | Iterable<GetNotePurchaseAgreementDocRequest | GetNotePurchaseAgreementDocRequest[]>): AsyncIterable<Uint8Array>;
                decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<GetNotePurchaseAgreementDocRequest>;
                fromJSON(object: any): GetNotePurchaseAgreementDocRequest;
                toJSON(message: GetNotePurchaseAgreementDocRequest): unknown;
                create(base?: DeepPartial<GetNotePurchaseAgreementDocRequest>): GetNotePurchaseAgreementDocRequest;
                fromPartial(object: DeepPartial<GetNotePurchaseAgreementDocRequest>): GetNotePurchaseAgreementDocRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetNotePurchaseAgreementDocResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementDocResponse;
                encodeTransform(source: AsyncIterable<GetNotePurchaseAgreementDocResponse | GetNotePurchaseAgreementDocResponse[]> | Iterable<GetNotePurchaseAgreementDocResponse | GetNotePurchaseAgreementDocResponse[]>): AsyncIterable<Uint8Array>;
                decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<GetNotePurchaseAgreementDocResponse>;
                fromJSON(object: any): GetNotePurchaseAgreementDocResponse;
                toJSON(message: GetNotePurchaseAgreementDocResponse): unknown;
                create(base?: DeepPartial<GetNotePurchaseAgreementDocResponse>): GetNotePurchaseAgreementDocResponse;
                fromPartial(object: DeepPartial<GetNotePurchaseAgreementDocResponse>): GetNotePurchaseAgreementDocResponse;
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
export interface NotePurchaseAgreementServiceImplementation<CallContextExt = {}> {
    getNotePurchaseAgreements(request: GetNotePurchaseAgreementsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetNotePurchaseAgreementsResponse>>;
    getNotePurchaseAgreement(request: GetNotePurchaseAgreementRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetNotePurchaseAgreementResponse>>;
    saveNotePurchaseAgreement(request: SaveNotePurchaseAgreementRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SaveNotePurchaseAgreementResponse>>;
    getNotePurchaseAgreementDoc(request: GetNotePurchaseAgreementDocRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetNotePurchaseAgreementDocResponse>>;
}
export interface NotePurchaseAgreementServiceClient<CallOptionsExt = {}> {
    getNotePurchaseAgreements(request: DeepPartial<GetNotePurchaseAgreementsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetNotePurchaseAgreementsResponse>;
    getNotePurchaseAgreement(request: DeepPartial<GetNotePurchaseAgreementRequest>, options?: CallOptions & CallOptionsExt): Promise<GetNotePurchaseAgreementResponse>;
    saveNotePurchaseAgreement(request: DeepPartial<SaveNotePurchaseAgreementRequest>, options?: CallOptions & CallOptionsExt): Promise<SaveNotePurchaseAgreementResponse>;
    getNotePurchaseAgreementDoc(request: DeepPartial<GetNotePurchaseAgreementDocRequest>, options?: CallOptions & CallOptionsExt): Promise<GetNotePurchaseAgreementDocResponse>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
