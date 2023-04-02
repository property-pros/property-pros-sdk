/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "api.statement.v1";

export interface Statement {
  id: string;
  userId: string;
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
  return { id: "", userId: "", emailAddress: "", password: "" };
}

export const Statement = {
  encode(message: Statement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    if (message.emailAddress !== "") {
      writer.uint32(26).string(message.emailAddress);
    }
    if (message.password !== "") {
      writer.uint32(34).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Statement {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.emailAddress = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Statement {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
      emailAddress: isSet(object.emailAddress) ? String(object.emailAddress) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: Statement): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.userId !== undefined && (obj.userId = message.userId);
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
    message.userId = object.userId ?? "";
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStatementsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStatementsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.statements.push(Statement.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
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
      options: {
        _unknownFields: {
          8338: [
            new Uint8Array([
              118,
              10,
              9,
              83,
              116,
              97,
              116,
              101,
              109,
              101,
              110,
              116,
              18,
              48,
              71,
              101,
              116,
              32,
              65,
              108,
              108,
              32,
              78,
              111,
              116,
              101,
              32,
              80,
              117,
              114,
              99,
              104,
              97,
              115,
              101,
              32,
              65,
              103,
              114,
              101,
              101,
              109,
              101,
              110,
              116,
              32,
              68,
              111,
              99,
              117,
              109,
              101,
              110,
              116,
              32,
              82,
              101,
              99,
              111,
              114,
              100,
              115,
              26,
              55,
              71,
              101,
              116,
              115,
              32,
              110,
              111,
              116,
              101,
              32,
              112,
              117,
              114,
              99,
              104,
              97,
              115,
              101,
              32,
              97,
              103,
              114,
              101,
              101,
              109,
              101,
              110,
              116,
              32,
              114,
              101,
              99,
              111,
              114,
              100,
              115,
              32,
              119,
              105,
              116,
              104,
              32,
              108,
              105,
              109,
              105,
              116,
              101,
              100,
              32,
              100,
              97,
              116,
              97,
              46,
            ]),
          ],
          578365826: [new Uint8Array([16, 18, 14, 47, 118, 49, 47, 115, 116, 97, 116, 101, 109, 101, 110, 116, 115])],
        },
      },
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
