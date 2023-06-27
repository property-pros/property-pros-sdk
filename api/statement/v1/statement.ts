/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "api.statement.v1";

export interface Statement {
  id: string;
  userId: string;
  emailAddress: string;
  password: string;
  startPeriodDate: string;
  endPeriodDate: string;
  balance: string;
  totalIncome: string;
  principle: string;
  document: Uint8Array;
}

export interface StatementsPayload {
  statements: Statement[];
}

export interface GetStatementsRequest {
  userId: string;
}

export interface GetStatementsResponse {
  payload: StatementsPayload | undefined;
}

export interface GetStatementDocRequest {
  payload: Statement | undefined;
}

export interface GetStatementDocResponse {
  document: Uint8Array;
}

function createBaseStatement(): Statement {
  return {
    id: "",
    userId: "",
    emailAddress: "",
    password: "",
    startPeriodDate: "",
    endPeriodDate: "",
    balance: "",
    totalIncome: "",
    principle: "",
    document: new Uint8Array(),
  };
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
    if (message.startPeriodDate !== "") {
      writer.uint32(42).string(message.startPeriodDate);
    }
    if (message.endPeriodDate !== "") {
      writer.uint32(50).string(message.endPeriodDate);
    }
    if (message.balance !== "") {
      writer.uint32(58).string(message.balance);
    }
    if (message.totalIncome !== "") {
      writer.uint32(66).string(message.totalIncome);
    }
    if (message.principle !== "") {
      writer.uint32(74).string(message.principle);
    }
    if (message.document.length !== 0) {
      writer.uint32(82).bytes(message.document);
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
        case 5:
          if (tag != 42) {
            break;
          }

          message.startPeriodDate = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.endPeriodDate = reader.string();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.balance = reader.string();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.totalIncome = reader.string();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.principle = reader.string();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.document = reader.bytes();
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
      startPeriodDate: isSet(object.startPeriodDate) ? String(object.startPeriodDate) : "",
      endPeriodDate: isSet(object.endPeriodDate) ? String(object.endPeriodDate) : "",
      balance: isSet(object.balance) ? String(object.balance) : "",
      totalIncome: isSet(object.totalIncome) ? String(object.totalIncome) : "",
      principle: isSet(object.principle) ? String(object.principle) : "",
      document: isSet(object.document) ? bytesFromBase64(object.document) : new Uint8Array(),
    };
  },

  toJSON(message: Statement): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.userId !== undefined && (obj.userId = message.userId);
    message.emailAddress !== undefined && (obj.emailAddress = message.emailAddress);
    message.password !== undefined && (obj.password = message.password);
    message.startPeriodDate !== undefined && (obj.startPeriodDate = message.startPeriodDate);
    message.endPeriodDate !== undefined && (obj.endPeriodDate = message.endPeriodDate);
    message.balance !== undefined && (obj.balance = message.balance);
    message.totalIncome !== undefined && (obj.totalIncome = message.totalIncome);
    message.principle !== undefined && (obj.principle = message.principle);
    message.document !== undefined &&
      (obj.document = base64FromBytes(message.document !== undefined ? message.document : new Uint8Array()));
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
    message.startPeriodDate = object.startPeriodDate ?? "";
    message.endPeriodDate = object.endPeriodDate ?? "";
    message.balance = object.balance ?? "";
    message.totalIncome = object.totalIncome ?? "";
    message.principle = object.principle ?? "";
    message.document = object.document ?? new Uint8Array();
    return message;
  },
};

function createBaseStatementsPayload(): StatementsPayload {
  return { statements: [] };
}

export const StatementsPayload = {
  encode(message: StatementsPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.statements) {
      Statement.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatementsPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatementsPayload();
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

  fromJSON(object: any): StatementsPayload {
    return {
      statements: Array.isArray(object?.statements) ? object.statements.map((e: any) => Statement.fromJSON(e)) : [],
    };
  },

  toJSON(message: StatementsPayload): unknown {
    const obj: any = {};
    if (message.statements) {
      obj.statements = message.statements.map((e) => e ? Statement.toJSON(e) : undefined);
    } else {
      obj.statements = [];
    }
    return obj;
  },

  create(base?: DeepPartial<StatementsPayload>): StatementsPayload {
    return StatementsPayload.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<StatementsPayload>): StatementsPayload {
    const message = createBaseStatementsPayload();
    message.statements = object.statements?.map((e) => Statement.fromPartial(e)) || [];
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
  return { payload: undefined };
}

export const GetStatementsResponse = {
  encode(message: GetStatementsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      StatementsPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
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

          message.payload = StatementsPayload.decode(reader, reader.uint32());
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
    return { payload: isSet(object.payload) ? StatementsPayload.fromJSON(object.payload) : undefined };
  },

  toJSON(message: GetStatementsResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? StatementsPayload.toJSON(message.payload) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetStatementsResponse>): GetStatementsResponse {
    return GetStatementsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetStatementsResponse>): GetStatementsResponse {
    const message = createBaseGetStatementsResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? StatementsPayload.fromPartial(object.payload)
      : undefined;
    return message;
  },
};

function createBaseGetStatementDocRequest(): GetStatementDocRequest {
  return { payload: undefined };
}

export const GetStatementDocRequest = {
  encode(message: GetStatementDocRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      Statement.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStatementDocRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStatementDocRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.payload = Statement.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetStatementDocRequest {
    return { payload: isSet(object.payload) ? Statement.fromJSON(object.payload) : undefined };
  },

  toJSON(message: GetStatementDocRequest): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? Statement.toJSON(message.payload) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetStatementDocRequest>): GetStatementDocRequest {
    return GetStatementDocRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetStatementDocRequest>): GetStatementDocRequest {
    const message = createBaseGetStatementDocRequest();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Statement.fromPartial(object.payload)
      : undefined;
    return message;
  },
};

function createBaseGetStatementDocResponse(): GetStatementDocResponse {
  return { document: new Uint8Array() };
}

export const GetStatementDocResponse = {
  encode(message: GetStatementDocResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.document.length !== 0) {
      writer.uint32(10).bytes(message.document);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStatementDocResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStatementDocResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.document = reader.bytes();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetStatementDocResponse {
    return { document: isSet(object.document) ? bytesFromBase64(object.document) : new Uint8Array() };
  },

  toJSON(message: GetStatementDocResponse): unknown {
    const obj: any = {};
    message.document !== undefined &&
      (obj.document = base64FromBytes(message.document !== undefined ? message.document : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<GetStatementDocResponse>): GetStatementDocResponse {
    return GetStatementDocResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetStatementDocResponse>): GetStatementDocResponse {
    const message = createBaseGetStatementDocResponse();
    message.document = object.document ?? new Uint8Array();
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
              94,
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
              31,
              71,
              101,
              116,
              115,
              32,
              109,
              111,
              110,
              116,
              104,
              108,
              121,
              32,
              115,
              116,
              97,
              116,
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
              46,
            ]),
          ],
          578365826: [new Uint8Array([16, 18, 14, 47, 118, 49, 47, 115, 116, 97, 116, 101, 109, 101, 110, 116, 115])],
        },
      },
    },
    getStatementDoc: {
      name: "GetStatementDoc",
      requestType: GetStatementDocRequest,
      requestStream: false,
      responseType: GetStatementDocResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            new Uint8Array([
              85,
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
              41,
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
              115,
              26,
              29,
              71,
              101,
              116,
              115,
              32,
              115,
              116,
              97,
              116,
              101,
              109,
              101,
              110,
              116,
              32,
              100,
              111,
              99,
              117,
              109,
              101,
              110,
              116,
              32,
              102,
              105,
              108,
              101,
              46,
            ]),
          ],
          578365826: [
            new Uint8Array([18, 18, 16, 47, 118, 49, 47, 115, 116, 97, 116, 101, 109, 101, 110, 116, 100, 111, 99]),
          ],
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
  getStatementDoc(
    request: GetStatementDocRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetStatementDocResponse>>;
}

export interface StatementServiceClient<CallOptionsExt = {}> {
  getStatements(
    request: DeepPartial<GetStatementsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetStatementsResponse>;
  getStatementDoc(
    request: DeepPartial<GetStatementDocRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetStatementDocResponse>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
