/* eslint-disable */
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "api.auth.v1";

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

function createBaseUser(): User {
  return { id: "", emailAddress: "", password: "" };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.emailAddress !== "") {
      writer.uint32(18).string(message.emailAddress);
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
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
          message.id = reader.string();
          break;
        case 2:
          message.emailAddress = reader.string();
          break;
        case 3:
          message.password = reader.string();
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
      id: isSet(object.id) ? String(object.id) : "",
      emailAddress: isSet(object.emailAddress) ? String(object.emailAddress) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.emailAddress !== undefined && (obj.emailAddress = message.emailAddress);
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  create(base?: DeepPartial<User>): User {
    return User.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<User>): User {
    const message = createBaseUser();
    message.id = object.id ?? "";
    message.emailAddress = object.emailAddress ?? "";
    message.password = object.password ?? "";
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

  create(base?: DeepPartial<AuthenticateUserRequest>): AuthenticateUserRequest {
    return AuthenticateUserRequest.fromPartial(base ?? {});
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
  return { isAuthenticated: false, errorMessage: "" };
}

export const AuthenticateUserResponse = {
  encode(message: AuthenticateUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isAuthenticated === true) {
      writer.uint32(8).bool(message.isAuthenticated);
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
          message.isAuthenticated = reader.bool();
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
      isAuthenticated: isSet(object.isAuthenticated) ? Boolean(object.isAuthenticated) : false,
      errorMessage: isSet(object.errorMessage) ? String(object.errorMessage) : "",
    };
  },

  toJSON(message: AuthenticateUserResponse): unknown {
    const obj: any = {};
    message.isAuthenticated !== undefined && (obj.isAuthenticated = message.isAuthenticated);
    message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
    return obj;
  },

  create(base?: DeepPartial<AuthenticateUserResponse>): AuthenticateUserResponse {
    return AuthenticateUserResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AuthenticateUserResponse>): AuthenticateUserResponse {
    const message = createBaseAuthenticateUserResponse();
    message.isAuthenticated = object.isAuthenticated ?? false;
    message.errorMessage = object.errorMessage ?? "";
    return message;
  },
};

export type AuthenticationServiceDefinition = typeof AuthenticationServiceDefinition;
export const AuthenticationServiceDefinition = {
  name: "AuthenticationService",
  fullName: "api.auth.v1.AuthenticationService",
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
