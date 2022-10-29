import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "notepurchaseagreement";
export interface NotePurchaseAgreement {
    Id: string;
    FirstName: string;
    LastName: string;
    DateOfBirth: string;
    HomeAddress: string;
    EmailAddress: string;
    PhoneNumber: string;
    SocialSecurity: string;
    FundsCommitted: number;
}
export interface GetNotePurchaseAgreementDocRequest {
    payload: NotePurchaseAgreement | undefined;
}
export interface GetNotePurchaseAgreementDocResponse {
    fileContent: Uint8Array;
}
export interface SaveNotePurchaseAgreementRequest {
    payload: NotePurchaseAgreement | undefined;
}
export interface SaveNotePurchaseAgreementResponse {
    Id: string;
}
export declare const NotePurchaseAgreement: {
    encode(message: NotePurchaseAgreement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NotePurchaseAgreement;
    fromJSON(object: any): NotePurchaseAgreement;
    toJSON(message: NotePurchaseAgreement): unknown;
    fromPartial(object: DeepPartial<NotePurchaseAgreement>): NotePurchaseAgreement;
};
export declare const GetNotePurchaseAgreementDocRequest: {
    encode(message: GetNotePurchaseAgreementDocRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementDocRequest;
    fromJSON(object: any): GetNotePurchaseAgreementDocRequest;
    toJSON(message: GetNotePurchaseAgreementDocRequest): unknown;
    fromPartial(object: DeepPartial<GetNotePurchaseAgreementDocRequest>): GetNotePurchaseAgreementDocRequest;
};
export declare const GetNotePurchaseAgreementDocResponse: {
    encode(message: GetNotePurchaseAgreementDocResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementDocResponse;
    fromJSON(object: any): GetNotePurchaseAgreementDocResponse;
    toJSON(message: GetNotePurchaseAgreementDocResponse): unknown;
    fromPartial(object: DeepPartial<GetNotePurchaseAgreementDocResponse>): GetNotePurchaseAgreementDocResponse;
};
export declare const SaveNotePurchaseAgreementRequest: {
    encode(message: SaveNotePurchaseAgreementRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SaveNotePurchaseAgreementRequest;
    fromJSON(object: any): SaveNotePurchaseAgreementRequest;
    toJSON(message: SaveNotePurchaseAgreementRequest): unknown;
    fromPartial(object: DeepPartial<SaveNotePurchaseAgreementRequest>): SaveNotePurchaseAgreementRequest;
};
export declare const SaveNotePurchaseAgreementResponse: {
    encode(message: SaveNotePurchaseAgreementResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SaveNotePurchaseAgreementResponse;
    fromJSON(object: any): SaveNotePurchaseAgreementResponse;
    toJSON(message: SaveNotePurchaseAgreementResponse): unknown;
    fromPartial(object: DeepPartial<SaveNotePurchaseAgreementResponse>): SaveNotePurchaseAgreementResponse;
};
export declare type NotePurchaseAgreementServiceDefinition = typeof NotePurchaseAgreementServiceDefinition;
export declare const NotePurchaseAgreementServiceDefinition: {
    readonly name: "NotePurchaseAgreementService";
    readonly fullName: "notepurchaseagreement.NotePurchaseAgreementService";
    readonly methods: {
        readonly getNotePurchaseAgreementDoc: {
            readonly name: "GetNotePurchaseAgreementDoc";
            readonly requestType: {
                encode(message: GetNotePurchaseAgreementDocRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementDocRequest;
                fromJSON(object: any): GetNotePurchaseAgreementDocRequest;
                toJSON(message: GetNotePurchaseAgreementDocRequest): unknown;
                fromPartial(object: DeepPartial<GetNotePurchaseAgreementDocRequest>): GetNotePurchaseAgreementDocRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetNotePurchaseAgreementDocResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementDocResponse;
                fromJSON(object: any): GetNotePurchaseAgreementDocResponse;
                toJSON(message: GetNotePurchaseAgreementDocResponse): unknown;
                fromPartial(object: DeepPartial<GetNotePurchaseAgreementDocResponse>): GetNotePurchaseAgreementDocResponse;
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
                fromPartial(object: DeepPartial<SaveNotePurchaseAgreementRequest>): SaveNotePurchaseAgreementRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SaveNotePurchaseAgreementResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SaveNotePurchaseAgreementResponse;
                fromJSON(object: any): SaveNotePurchaseAgreementResponse;
                toJSON(message: SaveNotePurchaseAgreementResponse): unknown;
                fromPartial(object: DeepPartial<SaveNotePurchaseAgreementResponse>): SaveNotePurchaseAgreementResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface NotePurchaseAgreementServiceServiceImplementation<CallContextExt = {}> {
    getNotePurchaseAgreementDoc(request: GetNotePurchaseAgreementDocRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetNotePurchaseAgreementDocResponse>>;
    saveNotePurchaseAgreement(request: SaveNotePurchaseAgreementRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SaveNotePurchaseAgreementResponse>>;
}
export interface NotePurchaseAgreementServiceClient<CallOptionsExt = {}> {
    getNotePurchaseAgreementDoc(request: DeepPartial<GetNotePurchaseAgreementDocRequest>, options?: CallOptions & CallOptionsExt): Promise<GetNotePurchaseAgreementDocResponse>;
    saveNotePurchaseAgreement(request: DeepPartial<SaveNotePurchaseAgreementRequest>, options?: CallOptions & CallOptionsExt): Promise<SaveNotePurchaseAgreementResponse>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
