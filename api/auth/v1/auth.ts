/* eslint-disable */
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.emailAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  // encodeTransform encodes a source of message objects.
  // Transform<User, Uint8Array>
  async *encodeTransform(source: AsyncIterable<User | User[]> | Iterable<User | User[]>): AsyncIterable<Uint8Array> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [User.encode(p).finish()];
        }
      } else {
        yield* [User.encode(pkt).finish()];
      }
    }
  },

  // decodeTransform decodes a source of encoded messages.
  // Transform<Uint8Array, User>
  async *decodeTransform(
    source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>,
  ): AsyncIterable<User> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [User.decode(p)];
        }
      } else {
        yield* [User.decode(pkt)];
      }
    }
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
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.emailAddress !== "") {
      obj.emailAddress = message.emailAddress;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticateUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = User.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  // encodeTransform encodes a source of message objects.
  // Transform<AuthenticateUserRequest, Uint8Array>
  async *encodeTransform(
    source:
      | AsyncIterable<AuthenticateUserRequest | AuthenticateUserRequest[]>
      | Iterable<AuthenticateUserRequest | AuthenticateUserRequest[]>,
  ): AsyncIterable<Uint8Array> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [AuthenticateUserRequest.encode(p).finish()];
        }
      } else {
        yield* [AuthenticateUserRequest.encode(pkt).finish()];
      }
    }
  },

  // decodeTransform decodes a source of encoded messages.
  // Transform<Uint8Array, AuthenticateUserRequest>
  async *decodeTransform(
    source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>,
  ): AsyncIterable<AuthenticateUserRequest> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [AuthenticateUserRequest.decode(p)];
        }
      } else {
        yield* [AuthenticateUserRequest.decode(pkt)];
      }
    }
  },

  fromJSON(object: any): AuthenticateUserRequest {
    return { payload: isSet(object.payload) ? User.fromJSON(object.payload) : undefined };
  },

  toJSON(message: AuthenticateUserRequest): unknown {
    const obj: any = {};
    if (message.payload !== undefined) {
      obj.payload = User.toJSON(message.payload);
    }
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticateUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isAuthenticated = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.errorMessage = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  // encodeTransform encodes a source of message objects.
  // Transform<AuthenticateUserResponse, Uint8Array>
  async *encodeTransform(
    source:
      | AsyncIterable<AuthenticateUserResponse | AuthenticateUserResponse[]>
      | Iterable<AuthenticateUserResponse | AuthenticateUserResponse[]>,
  ): AsyncIterable<Uint8Array> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [AuthenticateUserResponse.encode(p).finish()];
        }
      } else {
        yield* [AuthenticateUserResponse.encode(pkt).finish()];
      }
    }
  },

  // decodeTransform decodes a source of encoded messages.
  // Transform<Uint8Array, AuthenticateUserResponse>
  async *decodeTransform(
    source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>,
  ): AsyncIterable<AuthenticateUserResponse> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [AuthenticateUserResponse.decode(p)];
        }
      } else {
        yield* [AuthenticateUserResponse.decode(pkt)];
      }
    }
  },

  fromJSON(object: any): AuthenticateUserResponse {
    return {
      isAuthenticated: isSet(object.isAuthenticated) ? Boolean(object.isAuthenticated) : false,
      errorMessage: isSet(object.errorMessage) ? String(object.errorMessage) : "",
    };
  },

  toJSON(message: AuthenticateUserResponse): unknown {
    const obj: any = {};
    if (message.isAuthenticated === true) {
      obj.isAuthenticated = message.isAuthenticated;
    }
    if (message.errorMessage !== "") {
      obj.errorMessage = message.errorMessage;
    }
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
      options: {
        _unknownFields: {
          8338: [
            new Uint8Array([
              110,
              10,
              14,
              65,
              117,
              116,
              104,
              101,
              110,
              116,
              105,
              99,
              97,
              116,
              105,
              111,
              110,
              18,
              45,
              65,
              117,
              116,
              104,
              101,
              110,
              116,
              105,
              99,
              97,
              116,
              101,
              115,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              32,
              98,
              121,
              32,
              117,
              115,
              101,
              114,
              110,
              97,
              109,
              101,
              32,
              97,
              110,
              100,
              32,
              112,
              97,
              115,
              115,
              119,
              111,
              114,
              100,
              26,
              45,
              65,
              117,
              116,
              104,
              101,
              110,
              116,
              105,
              99,
              97,
              116,
              101,
              115,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              32,
              98,
              121,
              32,
              117,
              115,
              101,
              114,
              110,
              97,
              109,
              101,
              32,
              97,
              110,
              100,
              32,
              112,
              97,
              115,
              115,
              119,
              111,
              114,
              100,
            ]),
          ],
          578365826: [
            new Uint8Array([
              26,
              58,
              1,
              42,
              34,
              21,
              47,
              118,
              49,
              47,
              97,
              117,
              116,
              104,
              101,
              110,
              116,
              105,
              99,
              97,
              116,
              101,
              45,
              117,
              115,
              101,
              114,
            ]),
          ],
        },
      },
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
