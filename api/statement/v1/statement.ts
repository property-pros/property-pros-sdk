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

export interface GetStatementsRequest {
  userId: string;
}

export interface GetStatementsResponse {
  payload: Statement[];
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
    document: new Uint8Array(0),
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
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.emailAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.password = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.startPeriodDate = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.endPeriodDate = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.balance = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.totalIncome = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.principle = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.document = reader.bytes();
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
  // Transform<Statement, Uint8Array>
  async *encodeTransform(
    source: AsyncIterable<Statement | Statement[]> | Iterable<Statement | Statement[]>,
  ): AsyncIterable<Uint8Array> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [Statement.encode(p).finish()];
        }
      } else {
        yield* [Statement.encode(pkt).finish()];
      }
    }
  },

  // decodeTransform decodes a source of encoded messages.
  // Transform<Uint8Array, Statement>
  async *decodeTransform(
    source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>,
  ): AsyncIterable<Statement> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [Statement.decode(p)];
        }
      } else {
        yield* [Statement.decode(pkt)];
      }
    }
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
      document: isSet(object.document) ? bytesFromBase64(object.document) : new Uint8Array(0),
    };
  },

  toJSON(message: Statement): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.emailAddress !== "") {
      obj.emailAddress = message.emailAddress;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.startPeriodDate !== "") {
      obj.startPeriodDate = message.startPeriodDate;
    }
    if (message.endPeriodDate !== "") {
      obj.endPeriodDate = message.endPeriodDate;
    }
    if (message.balance !== "") {
      obj.balance = message.balance;
    }
    if (message.totalIncome !== "") {
      obj.totalIncome = message.totalIncome;
    }
    if (message.principle !== "") {
      obj.principle = message.principle;
    }
    if (message.document.length !== 0) {
      obj.document = base64FromBytes(message.document);
    }
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
    message.document = object.document ?? new Uint8Array(0);
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
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
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
  // Transform<GetStatementsRequest, Uint8Array>
  async *encodeTransform(
    source:
      | AsyncIterable<GetStatementsRequest | GetStatementsRequest[]>
      | Iterable<GetStatementsRequest | GetStatementsRequest[]>,
  ): AsyncIterable<Uint8Array> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [GetStatementsRequest.encode(p).finish()];
        }
      } else {
        yield* [GetStatementsRequest.encode(pkt).finish()];
      }
    }
  },

  // decodeTransform decodes a source of encoded messages.
  // Transform<Uint8Array, GetStatementsRequest>
  async *decodeTransform(
    source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>,
  ): AsyncIterable<GetStatementsRequest> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [GetStatementsRequest.decode(p)];
        }
      } else {
        yield* [GetStatementsRequest.decode(pkt)];
      }
    }
  },

  fromJSON(object: any): GetStatementsRequest {
    return { userId: isSet(object.userId) ? String(object.userId) : "" };
  },

  toJSON(message: GetStatementsRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
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
  return { payload: [] };
}

export const GetStatementsResponse = {
  encode(message: GetStatementsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.payload) {
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
          if (tag !== 10) {
            break;
          }

          message.payload.push(Statement.decode(reader, reader.uint32()));
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
  // Transform<GetStatementsResponse, Uint8Array>
  async *encodeTransform(
    source:
      | AsyncIterable<GetStatementsResponse | GetStatementsResponse[]>
      | Iterable<GetStatementsResponse | GetStatementsResponse[]>,
  ): AsyncIterable<Uint8Array> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [GetStatementsResponse.encode(p).finish()];
        }
      } else {
        yield* [GetStatementsResponse.encode(pkt).finish()];
      }
    }
  },

  // decodeTransform decodes a source of encoded messages.
  // Transform<Uint8Array, GetStatementsResponse>
  async *decodeTransform(
    source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>,
  ): AsyncIterable<GetStatementsResponse> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [GetStatementsResponse.decode(p)];
        }
      } else {
        yield* [GetStatementsResponse.decode(pkt)];
      }
    }
  },

  fromJSON(object: any): GetStatementsResponse {
    return { payload: Array.isArray(object?.payload) ? object.payload.map((e: any) => Statement.fromJSON(e)) : [] };
  },

  toJSON(message: GetStatementsResponse): unknown {
    const obj: any = {};
    if (message.payload?.length) {
      obj.payload = message.payload.map((e) => Statement.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GetStatementsResponse>): GetStatementsResponse {
    return GetStatementsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetStatementsResponse>): GetStatementsResponse {
    const message = createBaseGetStatementsResponse();
    message.payload = object.payload?.map((e) => Statement.fromPartial(e)) || [];
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
          if (tag !== 10) {
            break;
          }

          message.payload = Statement.decode(reader, reader.uint32());
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
  // Transform<GetStatementDocRequest, Uint8Array>
  async *encodeTransform(
    source:
      | AsyncIterable<GetStatementDocRequest | GetStatementDocRequest[]>
      | Iterable<GetStatementDocRequest | GetStatementDocRequest[]>,
  ): AsyncIterable<Uint8Array> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [GetStatementDocRequest.encode(p).finish()];
        }
      } else {
        yield* [GetStatementDocRequest.encode(pkt).finish()];
      }
    }
  },

  // decodeTransform decodes a source of encoded messages.
  // Transform<Uint8Array, GetStatementDocRequest>
  async *decodeTransform(
    source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>,
  ): AsyncIterable<GetStatementDocRequest> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [GetStatementDocRequest.decode(p)];
        }
      } else {
        yield* [GetStatementDocRequest.decode(pkt)];
      }
    }
  },

  fromJSON(object: any): GetStatementDocRequest {
    return { payload: isSet(object.payload) ? Statement.fromJSON(object.payload) : undefined };
  },

  toJSON(message: GetStatementDocRequest): unknown {
    const obj: any = {};
    if (message.payload !== undefined) {
      obj.payload = Statement.toJSON(message.payload);
    }
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
  return { document: new Uint8Array(0) };
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
          if (tag !== 10) {
            break;
          }

          message.document = reader.bytes();
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
  // Transform<GetStatementDocResponse, Uint8Array>
  async *encodeTransform(
    source:
      | AsyncIterable<GetStatementDocResponse | GetStatementDocResponse[]>
      | Iterable<GetStatementDocResponse | GetStatementDocResponse[]>,
  ): AsyncIterable<Uint8Array> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [GetStatementDocResponse.encode(p).finish()];
        }
      } else {
        yield* [GetStatementDocResponse.encode(pkt).finish()];
      }
    }
  },

  // decodeTransform decodes a source of encoded messages.
  // Transform<Uint8Array, GetStatementDocResponse>
  async *decodeTransform(
    source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>,
  ): AsyncIterable<GetStatementDocResponse> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [GetStatementDocResponse.decode(p)];
        }
      } else {
        yield* [GetStatementDocResponse.decode(pkt)];
      }
    }
  },

  fromJSON(object: any): GetStatementDocResponse {
    return { document: isSet(object.document) ? bytesFromBase64(object.document) : new Uint8Array(0) };
  },

  toJSON(message: GetStatementDocResponse): unknown {
    const obj: any = {};
    if (message.document.length !== 0) {
      obj.document = base64FromBytes(message.document);
    }
    return obj;
  },

  create(base?: DeepPartial<GetStatementDocResponse>): GetStatementDocResponse {
    return GetStatementDocResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetStatementDocResponse>): GetStatementDocResponse {
    const message = createBaseGetStatementDocResponse();
    message.document = object.document ?? new Uint8Array(0);
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
            new Uint8Array([
              33,
              18,
              31,
              47,
              118,
              49,
              47,
              115,
              116,
              97,
              116,
              101,
              109,
              101,
              110,
              116,
              47,
              123,
              112,
              97,
              121,
              108,
              111,
              97,
              100,
              46,
              105,
              100,
              125,
              47,
              102,
              105,
              108,
              101,
            ]),
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

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
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
