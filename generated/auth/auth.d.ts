import { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "auth";
export interface User {
    id: string;
    emailAddress: string;
    password: string;
}
export interface AuthenticateUserRequest {
    payload: User | undefined;
}
export interface AuthenticateUserResponse {
    authenticated: boolean;
    errorMessage: string;
}
export declare const User: {
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    fromPartial(object: DeepPartial<User>): User;
};
export declare const AuthenticateUserRequest: {
    encode(message: AuthenticateUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticateUserRequest;
    fromJSON(object: any): AuthenticateUserRequest;
    toJSON(message: AuthenticateUserRequest): unknown;
    fromPartial(object: DeepPartial<AuthenticateUserRequest>): AuthenticateUserRequest;
};
export declare const AuthenticateUserResponse: {
    encode(message: AuthenticateUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticateUserResponse;
    fromJSON(object: any): AuthenticateUserResponse;
    toJSON(message: AuthenticateUserResponse): unknown;
    fromPartial(object: DeepPartial<AuthenticateUserResponse>): AuthenticateUserResponse;
};
export declare type AuthenticationServiceDefinition = typeof AuthenticationServiceDefinition;
export declare const AuthenticationServiceDefinition: {
    readonly name: "AuthenticationService";
    readonly fullName: "auth.AuthenticationService";
    readonly methods: {
        readonly authenticateUser: {
            readonly name: "AuthenticateUser";
            readonly requestType: {
                encode(message: AuthenticateUserRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticateUserRequest;
                fromJSON(object: any): AuthenticateUserRequest;
                toJSON(message: AuthenticateUserRequest): unknown;
                fromPartial(object: DeepPartial<AuthenticateUserRequest>): AuthenticateUserRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AuthenticateUserResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticateUserResponse;
                fromJSON(object: any): AuthenticateUserResponse;
                toJSON(message: AuthenticateUserResponse): unknown;
                fromPartial(object: DeepPartial<AuthenticateUserResponse>): AuthenticateUserResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface AuthenticationServiceServiceImplementation<CallContextExt = {}> {
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
