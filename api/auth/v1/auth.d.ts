import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "api.auth.v1";
export interface User {
    id: string;
    emailAddress: string;
    password: string;
}
export interface AuthenticateUserRequest {
    payload: User | undefined;
}
export interface AuthenticateUserResponse {
    isAuthenticated: boolean;
    errorMessage: string;
}
export declare const User: {
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): User;
    encodeTransform(source: AsyncIterable<User | User[]> | Iterable<User | User[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<User>;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    create(base?: DeepPartial<User>): User;
    fromPartial(object: DeepPartial<User>): User;
};
export declare const AuthenticateUserRequest: {
    encode(message: AuthenticateUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticateUserRequest;
    encodeTransform(source: AsyncIterable<AuthenticateUserRequest | AuthenticateUserRequest[]> | Iterable<AuthenticateUserRequest | AuthenticateUserRequest[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<AuthenticateUserRequest>;
    fromJSON(object: any): AuthenticateUserRequest;
    toJSON(message: AuthenticateUserRequest): unknown;
    create(base?: DeepPartial<AuthenticateUserRequest>): AuthenticateUserRequest;
    fromPartial(object: DeepPartial<AuthenticateUserRequest>): AuthenticateUserRequest;
};
export declare const AuthenticateUserResponse: {
    encode(message: AuthenticateUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticateUserResponse;
    encodeTransform(source: AsyncIterable<AuthenticateUserResponse | AuthenticateUserResponse[]> | Iterable<AuthenticateUserResponse | AuthenticateUserResponse[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<AuthenticateUserResponse>;
    fromJSON(object: any): AuthenticateUserResponse;
    toJSON(message: AuthenticateUserResponse): unknown;
    create(base?: DeepPartial<AuthenticateUserResponse>): AuthenticateUserResponse;
    fromPartial(object: DeepPartial<AuthenticateUserResponse>): AuthenticateUserResponse;
};
export declare type AuthenticationServiceDefinition = typeof AuthenticationServiceDefinition;
export declare const AuthenticationServiceDefinition: {
    readonly name: "AuthenticationService";
    readonly fullName: "api.auth.v1.AuthenticationService";
    readonly methods: {
        readonly authenticateUser: {
            readonly name: "AuthenticateUser";
            readonly requestType: {
                encode(message: AuthenticateUserRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticateUserRequest;
                encodeTransform(source: AsyncIterable<AuthenticateUserRequest | AuthenticateUserRequest[]> | Iterable<AuthenticateUserRequest | AuthenticateUserRequest[]>): AsyncIterable<Uint8Array>;
                decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<AuthenticateUserRequest>;
                fromJSON(object: any): AuthenticateUserRequest;
                toJSON(message: AuthenticateUserRequest): unknown;
                create(base?: DeepPartial<AuthenticateUserRequest>): AuthenticateUserRequest;
                fromPartial(object: DeepPartial<AuthenticateUserRequest>): AuthenticateUserRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AuthenticateUserResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticateUserResponse;
                encodeTransform(source: AsyncIterable<AuthenticateUserResponse | AuthenticateUserResponse[]> | Iterable<AuthenticateUserResponse | AuthenticateUserResponse[]>): AsyncIterable<Uint8Array>;
                decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<AuthenticateUserResponse>;
                fromJSON(object: any): AuthenticateUserResponse;
                toJSON(message: AuthenticateUserResponse): unknown;
                create(base?: DeepPartial<AuthenticateUserResponse>): AuthenticateUserResponse;
                fromPartial(object: DeepPartial<AuthenticateUserResponse>): AuthenticateUserResponse;
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
export interface AuthenticationServiceImplementation<CallContextExt = {}> {
    authenticateUser(request: AuthenticateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AuthenticateUserResponse>>;
}
export interface AuthenticationServiceClient<CallOptionsExt = {}> {
    authenticateUser(request: DeepPartial<AuthenticateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<AuthenticateUserResponse>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
