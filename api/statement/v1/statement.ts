/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "api.statement.v1";

export interface Statement {
  id: string;
  emailAddress: string;
  password: string;
}

export interface GetStatementsRequest {
  userId: string;
}

export interface GetStatementsResponse {
  statements: Statement[];
}

function createBaseStatement(): Statement {
  return { id: "", emailAddress: "", password: "" };
}

export const Statement = {
  encode(message: Statement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Statement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatement();
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

  fromJSON(object: any): Statement {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      emailAddress: isSet(object.emailAddress) ? String(object.emailAddress) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: Statement): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.emailAddress !== undefined && (obj.emailAddress = message.emailAddress);
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  create(base?: DeepPartial<Statement>): Statement {
    return Statement.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Statement>): Statement {
    const message = createBaseStatement();
    message.id = object.id ?? "";
    message.emailAddress = object.emailAddress ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseGetStatementsRequest(): GetStatementsRequest {
  return { userId: "" };
}

export const GetStatementsRequest = {
  encode(message: GetStatementsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStatementsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStatementsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetStatementsRequest {
    return { userId: isSet(object.userId) ? String(object.userId) : "" };
  },

  toJSON(message: GetStatementsRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  create(base?: DeepPartial<GetStatementsRequest>): GetStatementsRequest {
    return GetStatementsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetStatementsRequest>): GetStatementsRequest {
    const message = createBaseGetStatementsRequest();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseGetStatementsResponse(): GetStatementsResponse {
  return { statements: [] };
}

export const GetStatementsResponse = {
  encode(message: GetStatementsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.statements) {
      Statement.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStatementsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStatementsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statements.push(Statement.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetStatementsResponse {
    return {
      statements: Array.isArray(object?.statements) ? object.statements.map((e: any) => Statement.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetStatementsResponse): unknown {
    const obj: any = {};
    if (message.statements) {
      obj.statements = message.statements.map((e) => e ? Statement.toJSON(e) : undefined);
    } else {
      obj.statements = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GetStatementsResponse>): GetStatementsResponse {
    return GetStatementsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetStatementsResponse>): GetStatementsResponse {
    const message = createBaseGetStatementsResponse();
    message.statements = object.statements?.map((e) => Statement.fromPartial(e)) || [];
    return message;
  },
};

export type StatementServiceDefinition = typeof StatementServiceDefinition;
export const StatementServiceDefinition = {
  name: "StatementService",
  fullName: "api.statement.v1.StatementService",
  methods: {
    getStatements: {
      name: "GetStatements",
      requestType: GetStatementsRequest,
      requestStream: false,
      responseType: GetStatementsResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface StatementServiceImplementation<CallContextExt = {}> {
  getStatements(
    request: GetStatementsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetStatementsResponse>>;
}

export interface StatementServiceClient<CallOptionsExt = {}> {
  getStatements(
    request: DeepPartial<GetStatementsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetStatementsResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
