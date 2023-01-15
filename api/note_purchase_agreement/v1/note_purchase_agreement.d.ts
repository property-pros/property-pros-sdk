import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { User } from "../../auth/v1/auth";
export declare const protobufPackage = "api.note_purchase_agreement.v1";
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
}
export interface GetNotePurchaseAgreementsResponse {
    payload: RecordCollection | undefined;
}
export interface SaveNotePurchaseAgreementRequest {
    payload: NotePurchaseAgreementRecord | undefined;
}
export interface SaveNotePurchaseAgreementResponse {
    payload: RecordResultPayload | undefined;
}
export declare const RecordRequestPayload: {
    encode(message: RecordRequestPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RecordRequestPayload;
    fromJSON(object: any): RecordRequestPayload;
    toJSON(message: RecordRequestPayload): unknown;
    create(base?: DeepPartial<RecordRequestPayload>): RecordRequestPayload;
    fromPartial(object: DeepPartial<RecordRequestPayload>): RecordRequestPayload;
};
export declare const RecordRequestCollection: {
    encode(message: RecordRequestCollection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RecordRequestCollection;
    fromJSON(object: any): RecordRequestCollection;
    toJSON(message: RecordRequestCollection): unknown;
    create(base?: DeepPartial<RecordRequestCollection>): RecordRequestCollection;
    fromPartial(object: DeepPartial<RecordRequestCollection>): RecordRequestCollection;
};
export declare const RecordCollection: {
    encode(message: RecordCollection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RecordCollection;
    fromJSON(object: any): RecordCollection;
    toJSON(message: RecordCollection): unknown;
    create(base?: DeepPartial<RecordCollection>): RecordCollection;
    fromPartial(object: DeepPartial<RecordCollection>): RecordCollection;
};
export declare const RecordResultPayload: {
    encode(message: RecordResultPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RecordResultPayload;
    fromJSON(object: any): RecordResultPayload;
    toJSON(message: RecordResultPayload): unknown;
    create(base?: DeepPartial<RecordResultPayload>): RecordResultPayload;
    fromPartial(object: DeepPartial<RecordResultPayload>): RecordResultPayload;
};
export declare const NotePurchaseAgreementRecord: {
    encode(message: NotePurchaseAgreementRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NotePurchaseAgreementRecord;
    fromJSON(object: any): NotePurchaseAgreementRecord;
    toJSON(message: NotePurchaseAgreementRecord): unknown;
    create(base?: DeepPartial<NotePurchaseAgreementRecord>): NotePurchaseAgreementRecord;
    fromPartial(object: DeepPartial<NotePurchaseAgreementRecord>): NotePurchaseAgreementRecord;
};
export declare const GetNotePurchaseAgreementRequest: {
    encode(message: GetNotePurchaseAgreementRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementRequest;
    fromJSON(object: any): GetNotePurchaseAgreementRequest;
    toJSON(message: GetNotePurchaseAgreementRequest): unknown;
    create(base?: DeepPartial<GetNotePurchaseAgreementRequest>): GetNotePurchaseAgreementRequest;
    fromPartial(object: DeepPartial<GetNotePurchaseAgreementRequest>): GetNotePurchaseAgreementRequest;
};
export declare const GetNotePurchaseAgreementResponse: {
    encode(message: GetNotePurchaseAgreementResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementResponse;
    fromJSON(object: any): GetNotePurchaseAgreementResponse;
    toJSON(message: GetNotePurchaseAgreementResponse): unknown;
    create(base?: DeepPartial<GetNotePurchaseAgreementResponse>): GetNotePurchaseAgreementResponse;
    fromPartial(object: DeepPartial<GetNotePurchaseAgreementResponse>): GetNotePurchaseAgreementResponse;
};
export declare const GetNotePurchaseAgreementDocRequest: {
    encode(message: GetNotePurchaseAgreementDocRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementDocRequest;
    fromJSON(object: any): GetNotePurchaseAgreementDocRequest;
    toJSON(message: GetNotePurchaseAgreementDocRequest): unknown;
    create(base?: DeepPartial<GetNotePurchaseAgreementDocRequest>): GetNotePurchaseAgreementDocRequest;
    fromPartial(object: DeepPartial<GetNotePurchaseAgreementDocRequest>): GetNotePurchaseAgreementDocRequest;
};
export declare const GetNotePurchaseAgreementDocResponse: {
    encode(message: GetNotePurchaseAgreementDocResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementDocResponse;
    fromJSON(object: any): GetNotePurchaseAgreementDocResponse;
    toJSON(message: GetNotePurchaseAgreementDocResponse): unknown;
    create(base?: DeepPartial<GetNotePurchaseAgreementDocResponse>): GetNotePurchaseAgreementDocResponse;
    fromPartial(object: DeepPartial<GetNotePurchaseAgreementDocResponse>): GetNotePurchaseAgreementDocResponse;
};
export declare const GetNotePurchaseAgreementsRequest: {
    encode(_: GetNotePurchaseAgreementsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementsRequest;
    fromJSON(_: any): GetNotePurchaseAgreementsRequest;
    toJSON(_: GetNotePurchaseAgreementsRequest): unknown;
    create(base?: DeepPartial<GetNotePurchaseAgreementsRequest>): GetNotePurchaseAgreementsRequest;
    fromPartial(_: DeepPartial<GetNotePurchaseAgreementsRequest>): GetNotePurchaseAgreementsRequest;
};
export declare const GetNotePurchaseAgreementsResponse: {
    encode(message: GetNotePurchaseAgreementsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementsResponse;
    fromJSON(object: any): GetNotePurchaseAgreementsResponse;
    toJSON(message: GetNotePurchaseAgreementsResponse): unknown;
    create(base?: DeepPartial<GetNotePurchaseAgreementsResponse>): GetNotePurchaseAgreementsResponse;
    fromPartial(object: DeepPartial<GetNotePurchaseAgreementsResponse>): GetNotePurchaseAgreementsResponse;
};
export declare const SaveNotePurchaseAgreementRequest: {
    encode(message: SaveNotePurchaseAgreementRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SaveNotePurchaseAgreementRequest;
    fromJSON(object: any): SaveNotePurchaseAgreementRequest;
    toJSON(message: SaveNotePurchaseAgreementRequest): unknown;
    create(base?: DeepPartial<SaveNotePurchaseAgreementRequest>): SaveNotePurchaseAgreementRequest;
    fromPartial(object: DeepPartial<SaveNotePurchaseAgreementRequest>): SaveNotePurchaseAgreementRequest;
};
export declare const SaveNotePurchaseAgreementResponse: {
    encode(message: SaveNotePurchaseAgreementResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SaveNotePurchaseAgreementResponse;
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
                encode(_: GetNotePurchaseAgreementsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementsRequest;
                fromJSON(_: any): GetNotePurchaseAgreementsRequest;
                toJSON(_: GetNotePurchaseAgreementsRequest): unknown;
                create(base?: DeepPartial<GetNotePurchaseAgreementsRequest>): GetNotePurchaseAgreementsRequest;
                fromPartial(_: DeepPartial<GetNotePurchaseAgreementsRequest>): GetNotePurchaseAgreementsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetNotePurchaseAgreementsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementsResponse;
                fromJSON(object: any): GetNotePurchaseAgreementsResponse;
                toJSON(message: GetNotePurchaseAgreementsResponse): unknown;
                create(base?: DeepPartial<GetNotePurchaseAgreementsResponse>): GetNotePurchaseAgreementsResponse;
                fromPartial(object: DeepPartial<GetNotePurchaseAgreementsResponse>): GetNotePurchaseAgreementsResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getNotePurchaseAgreement: {
            readonly name: "GetNotePurchaseAgreement";
            readonly requestType: {
                encode(message: GetNotePurchaseAgreementRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementRequest;
                fromJSON(object: any): GetNotePurchaseAgreementRequest;
                toJSON(message: GetNotePurchaseAgreementRequest): unknown;
                create(base?: DeepPartial<GetNotePurchaseAgreementRequest>): GetNotePurchaseAgreementRequest;
                fromPartial(object: DeepPartial<GetNotePurchaseAgreementRequest>): GetNotePurchaseAgreementRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetNotePurchaseAgreementResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementResponse;
                fromJSON(object: any): GetNotePurchaseAgreementResponse;
                toJSON(message: GetNotePurchaseAgreementResponse): unknown;
                create(base?: DeepPartial<GetNotePurchaseAgreementResponse>): GetNotePurchaseAgreementResponse;
                fromPartial(object: DeepPartial<GetNotePurchaseAgreementResponse>): GetNotePurchaseAgreementResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly saveNotePurchaseAgreement: {
            readonly name: "SaveNotePurchaseAgreement";
            readonly requestType: {
                encode(message: SaveNotePurchaseAgreementRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SaveNotePurchaseAgreementRequest;
                fromJSON(object: any): SaveNotePurchaseAgreementRequest;
                toJSON(message: SaveNotePurchaseAgreementRequest): unknown;
                create(base?: DeepPartial<SaveNotePurchaseAgreementRequest>): SaveNotePurchaseAgreementRequest;
                fromPartial(object: DeepPartial<SaveNotePurchaseAgreementRequest>): SaveNotePurchaseAgreementRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SaveNotePurchaseAgreementResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SaveNotePurchaseAgreementResponse;
                fromJSON(object: any): SaveNotePurchaseAgreementResponse;
                toJSON(message: SaveNotePurchaseAgreementResponse): unknown;
                create(base?: DeepPartial<SaveNotePurchaseAgreementResponse>): SaveNotePurchaseAgreementResponse;
                fromPartial(object: DeepPartial<SaveNotePurchaseAgreementResponse>): SaveNotePurchaseAgreementResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getNotePurchaseAgreementDoc: {
            readonly name: "GetNotePurchaseAgreementDoc";
            readonly requestType: {
                encode(message: GetNotePurchaseAgreementDocRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementDocRequest;
                fromJSON(object: any): GetNotePurchaseAgreementDocRequest;
                toJSON(message: GetNotePurchaseAgreementDocRequest): unknown;
                create(base?: DeepPartial<GetNotePurchaseAgreementDocRequest>): GetNotePurchaseAgreementDocRequest;
                fromPartial(object: DeepPartial<GetNotePurchaseAgreementDocRequest>): GetNotePurchaseAgreementDocRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetNotePurchaseAgreementDocResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementDocResponse;
                fromJSON(object: any): GetNotePurchaseAgreementDocResponse;
                toJSON(message: GetNotePurchaseAgreementDocResponse): unknown;
                create(base?: DeepPartial<GetNotePurchaseAgreementDocResponse>): GetNotePurchaseAgreementDocResponse;
                fromPartial(object: DeepPartial<GetNotePurchaseAgreementDocResponse>): GetNotePurchaseAgreementDocResponse;
            };
            readonly responseStream: false;
            readonly options: {};
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
