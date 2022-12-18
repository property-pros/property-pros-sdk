/* eslint-disable */
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "auth";

export interface User {
  Id: string;
  EmailAddress: string;
  Password: string;
}

export interface AuthenticateUserRequest {
  payload: User | undefined;
}

export interface AuthenticateUserResponse {
  authenticated: boolean;
  errorMessage: string;
}

function createBaseUser(): User {
  return { Id: "", EmailAddress: "", Password: "" };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Id !== "") {
      writer.uint32(10).string(message.Id);
    }
    if (message.EmailAddress !== "") {
      writer.uint32(18).string(message.EmailAddress);
    }
    if (message.Password !== "") {
      writer.uint32(26).string(message.Password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Id = reader.string();
          break;
        case 2:
          message.EmailAddress = reader.string();
          break;
        case 3:
          message.Password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      Id: isSet(object.Id) ? String(object.Id) : "",
      EmailAddress: isSet(object.EmailAddress) ? String(object.EmailAddress) : "",
      Password: isSet(object.Password) ? String(object.Password) : "",
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.Id !== undefined && (obj.Id = message.Id);
    message.EmailAddress !== undefined && (obj.EmailAddress = message.EmailAddress);
    message.Password !== undefined && (obj.Password = message.Password);
    return obj;
  },

  fromPartial(object: DeepPartial<User>): User {
    const message = createBaseUser();
    message.Id = object.Id ?? "";
    message.EmailAddress = object.EmailAddress ?? "";
    message.Password = object.Password ?? "";
    return message;
  },
};

function createBaseAuthenticateUserRequest(): AuthenticateUserRequest {
  return { payload: undefined };
}

export const AuthenticateUserRequest = {
  encode(message: AuthenticateUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      User.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticateUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticateUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthenticateUserRequest {
    return { payload: isSet(object.payload) ? User.fromJSON(object.payload) : undefined };
  },

  toJSON(message: AuthenticateUserRequest): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? User.toJSON(message.payload) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AuthenticateUserRequest>): AuthenticateUserRequest {
    const message = createBaseAuthenticateUserRequest();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? User.fromPartial(object.payload)
      : undefined;
    return message;
  },
};

function createBaseAuthenticateUserResponse(): AuthenticateUserResponse {
  return { authenticated: false, errorMessage: "" };
}

export const AuthenticateUserResponse = {
  encode(message: AuthenticateUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authenticated === true) {
      writer.uint32(8).bool(message.authenticated);
    }
    if (message.errorMessage !== "") {
      writer.uint32(18).string(message.errorMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticateUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticateUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authenticated = reader.bool();
          break;
        case 2:
          message.errorMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthenticateUserResponse {
    return {
      authenticated: isSet(object.authenticated) ? Boolean(object.authenticated) : false,
      errorMessage: isSet(object.errorMessage) ? String(object.errorMessage) : "",
    };
  },

  toJSON(message: AuthenticateUserResponse): unknown {
    const obj: any = {};
    message.authenticated !== undefined && (obj.authenticated = message.authenticated);
    message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
    return obj;
  },

  fromPartial(object: DeepPartial<AuthenticateUserResponse>): AuthenticateUserResponse {
    const message = createBaseAuthenticateUserResponse();
    message.authenticated = object.authenticated ?? false;
    message.errorMessage = object.errorMessage ?? "";
    return message;
  },
};

export type AuthenticationServiceDefinition = typeof AuthenticationServiceDefinition;
export const AuthenticationServiceDefinition = {
  name: "AuthenticationService",
  fullName: "auth.AuthenticationService",
  methods: {
    authenticateUser: {
      name: "AuthenticateUser",
      requestType: AuthenticateUserRequest,
      requestStream: false,
      responseType: AuthenticateUserResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface AuthenticationServiceImplementation<CallContextExt = {}> {
  authenticateUser(
    request: AuthenticateUserRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AuthenticateUserResponse>>;
}

export interface AuthenticationServiceClient<CallOptionsExt = {}> {
  authenticateUser(
    request: DeepPartial<AuthenticateUserRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AuthenticateUserResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
