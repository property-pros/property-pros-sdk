/* eslint-disable */
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { User } from "../auth/auth";

export const protobufPackage = "notepurchaseagreement";

export interface RecordRequestPayload {
  Id: string;
}

export interface RecordCollection {
  Payload: RecordRequestPayload[];
}

export interface RecordResultPayload {
  Id: string;
  CreatedOn: string;
}

export interface NotePurchaseAgreementRecord {
  Id: string;
  FirstName: string;
  LastName: string;
  DateOfBirth: string;
  HomeAddress: string;
  user: User | undefined;
  PhoneNumber: string;
  SocialSecurity: string;
  FundsCommitted: number;
  FileContent: Uint8Array;
  CreatedOn: string;
}

export interface GetNotePurchaseAgreementRequest {
  Payload: RecordRequestPayload | undefined;
}

export interface GetNotePurchaseAgreementResponse {
  payload: NotePurchaseAgreementRecord | undefined;
}

export interface GetNotePurchaseAgreementsRequest {
}

export interface GetNotePurchaseAgreementsResponse {
  payload: RecordCollection[];
}

export interface SaveNotePurchaseAgreementRequest {
  payload: NotePurchaseAgreementRecord | undefined;
}

export interface SaveNotePurchaseAgreementResponse {
  payload: RecordResultPayload | undefined;
}

function createBaseRecordRequestPayload(): RecordRequestPayload {
  return { Id: "" };
}

export const RecordRequestPayload = {
  encode(message: RecordRequestPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Id !== "") {
      writer.uint32(10).string(message.Id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordRequestPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordRequestPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordRequestPayload {
    return { Id: isSet(object.Id) ? String(object.Id) : "" };
  },

  toJSON(message: RecordRequestPayload): unknown {
    const obj: any = {};
    message.Id !== undefined && (obj.Id = message.Id);
    return obj;
  },

  fromPartial(object: DeepPartial<RecordRequestPayload>): RecordRequestPayload {
    const message = createBaseRecordRequestPayload();
    message.Id = object.Id ?? "";
    return message;
  },
};

function createBaseRecordCollection(): RecordCollection {
  return { Payload: [] };
}

export const RecordCollection = {
  encode(message: RecordCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Payload) {
      RecordRequestPayload.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordCollection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Payload.push(RecordRequestPayload.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordCollection {
    return {
      Payload: Array.isArray(object?.Payload) ? object.Payload.map((e: any) => RecordRequestPayload.fromJSON(e)) : [],
    };
  },

  toJSON(message: RecordCollection): unknown {
    const obj: any = {};
    if (message.Payload) {
      obj.Payload = message.Payload.map((e) => e ? RecordRequestPayload.toJSON(e) : undefined);
    } else {
      obj.Payload = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<RecordCollection>): RecordCollection {
    const message = createBaseRecordCollection();
    message.Payload = object.Payload?.map((e) => RecordRequestPayload.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRecordResultPayload(): RecordResultPayload {
  return { Id: "", CreatedOn: "" };
}

export const RecordResultPayload = {
  encode(message: RecordResultPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Id !== "") {
      writer.uint32(10).string(message.Id);
    }
    if (message.CreatedOn !== "") {
      writer.uint32(18).string(message.CreatedOn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordResultPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordResultPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Id = reader.string();
          break;
        case 2:
          message.CreatedOn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordResultPayload {
    return {
      Id: isSet(object.Id) ? String(object.Id) : "",
      CreatedOn: isSet(object.CreatedOn) ? String(object.CreatedOn) : "",
    };
  },

  toJSON(message: RecordResultPayload): unknown {
    const obj: any = {};
    message.Id !== undefined && (obj.Id = message.Id);
    message.CreatedOn !== undefined && (obj.CreatedOn = message.CreatedOn);
    return obj;
  },

  fromPartial(object: DeepPartial<RecordResultPayload>): RecordResultPayload {
    const message = createBaseRecordResultPayload();
    message.Id = object.Id ?? "";
    message.CreatedOn = object.CreatedOn ?? "";
    return message;
  },
};

function createBaseNotePurchaseAgreementRecord(): NotePurchaseAgreementRecord {
  return {
    Id: "",
    FirstName: "",
    LastName: "",
    DateOfBirth: "",
    HomeAddress: "",
    user: undefined,
    PhoneNumber: "",
    SocialSecurity: "",
    FundsCommitted: 0,
    FileContent: new Uint8Array(),
    CreatedOn: "",
  };
}

export const NotePurchaseAgreementRecord = {
  encode(message: NotePurchaseAgreementRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Id !== "") {
      writer.uint32(10).string(message.Id);
    }
    if (message.FirstName !== "") {
      writer.uint32(18).string(message.FirstName);
    }
    if (message.LastName !== "") {
      writer.uint32(26).string(message.LastName);
    }
    if (message.DateOfBirth !== "") {
      writer.uint32(34).string(message.DateOfBirth);
    }
    if (message.HomeAddress !== "") {
      writer.uint32(42).string(message.HomeAddress);
    }
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(50).fork()).ldelim();
    }
    if (message.PhoneNumber !== "") {
      writer.uint32(58).string(message.PhoneNumber);
    }
    if (message.SocialSecurity !== "") {
      writer.uint32(66).string(message.SocialSecurity);
    }
    if (message.FundsCommitted !== 0) {
      writer.uint32(72).uint64(message.FundsCommitted);
    }
    if (message.FileContent.length !== 0) {
      writer.uint32(82).bytes(message.FileContent);
    }
    if (message.CreatedOn !== "") {
      writer.uint32(90).string(message.CreatedOn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NotePurchaseAgreementRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotePurchaseAgreementRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Id = reader.string();
          break;
        case 2:
          message.FirstName = reader.string();
          break;
        case 3:
          message.LastName = reader.string();
          break;
        case 4:
          message.DateOfBirth = reader.string();
          break;
        case 5:
          message.HomeAddress = reader.string();
          break;
        case 6:
          message.user = User.decode(reader, reader.uint32());
          break;
        case 7:
          message.PhoneNumber = reader.string();
          break;
        case 8:
          message.SocialSecurity = reader.string();
          break;
        case 9:
          message.FundsCommitted = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.FileContent = reader.bytes();
          break;
        case 11:
          message.CreatedOn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NotePurchaseAgreementRecord {
    return {
      Id: isSet(object.Id) ? String(object.Id) : "",
      FirstName: isSet(object.FirstName) ? String(object.FirstName) : "",
      LastName: isSet(object.LastName) ? String(object.LastName) : "",
      DateOfBirth: isSet(object.DateOfBirth) ? String(object.DateOfBirth) : "",
      HomeAddress: isSet(object.HomeAddress) ? String(object.HomeAddress) : "",
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
      PhoneNumber: isSet(object.PhoneNumber) ? String(object.PhoneNumber) : "",
      SocialSecurity: isSet(object.SocialSecurity) ? String(object.SocialSecurity) : "",
      FundsCommitted: isSet(object.FundsCommitted) ? Number(object.FundsCommitted) : 0,
      FileContent: isSet(object.FileContent) ? bytesFromBase64(object.FileContent) : new Uint8Array(),
      CreatedOn: isSet(object.CreatedOn) ? String(object.CreatedOn) : "",
    };
  },

  toJSON(message: NotePurchaseAgreementRecord): unknown {
    const obj: any = {};
    message.Id !== undefined && (obj.Id = message.Id);
    message.FirstName !== undefined && (obj.FirstName = message.FirstName);
    message.LastName !== undefined && (obj.LastName = message.LastName);
    message.DateOfBirth !== undefined && (obj.DateOfBirth = message.DateOfBirth);
    message.HomeAddress !== undefined && (obj.HomeAddress = message.HomeAddress);
    message.user !== undefined && (obj.user = message.user ? User.toJSON(message.user) : undefined);
    message.PhoneNumber !== undefined && (obj.PhoneNumber = message.PhoneNumber);
    message.SocialSecurity !== undefined && (obj.SocialSecurity = message.SocialSecurity);
    message.FundsCommitted !== undefined && (obj.FundsCommitted = Math.round(message.FundsCommitted));
    message.FileContent !== undefined &&
      (obj.FileContent = base64FromBytes(message.FileContent !== undefined ? message.FileContent : new Uint8Array()));
    message.CreatedOn !== undefined && (obj.CreatedOn = message.CreatedOn);
    return obj;
  },

  fromPartial(object: DeepPartial<NotePurchaseAgreementRecord>): NotePurchaseAgreementRecord {
    const message = createBaseNotePurchaseAgreementRecord();
    message.Id = object.Id ?? "";
    message.FirstName = object.FirstName ?? "";
    message.LastName = object.LastName ?? "";
    message.DateOfBirth = object.DateOfBirth ?? "";
    message.HomeAddress = object.HomeAddress ?? "";
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    message.PhoneNumber = object.PhoneNumber ?? "";
    message.SocialSecurity = object.SocialSecurity ?? "";
    message.FundsCommitted = object.FundsCommitted ?? 0;
    message.FileContent = object.FileContent ?? new Uint8Array();
    message.CreatedOn = object.CreatedOn ?? "";
    return message;
  },
};

function createBaseGetNotePurchaseAgreementRequest(): GetNotePurchaseAgreementRequest {
  return { Payload: undefined };
}

export const GetNotePurchaseAgreementRequest = {
  encode(message: GetNotePurchaseAgreementRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Payload !== undefined) {
      RecordRequestPayload.encode(message.Payload, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNotePurchaseAgreementRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Payload = RecordRequestPayload.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNotePurchaseAgreementRequest {
    return { Payload: isSet(object.Payload) ? RecordRequestPayload.fromJSON(object.Payload) : undefined };
  },

  toJSON(message: GetNotePurchaseAgreementRequest): unknown {
    const obj: any = {};
    message.Payload !== undefined &&
      (obj.Payload = message.Payload ? RecordRequestPayload.toJSON(message.Payload) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetNotePurchaseAgreementRequest>): GetNotePurchaseAgreementRequest {
    const message = createBaseGetNotePurchaseAgreementRequest();
    message.Payload = (object.Payload !== undefined && object.Payload !== null)
      ? RecordRequestPayload.fromPartial(object.Payload)
      : undefined;
    return message;
  },
};

function createBaseGetNotePurchaseAgreementResponse(): GetNotePurchaseAgreementResponse {
  return { payload: undefined };
}

export const GetNotePurchaseAgreementResponse = {
  encode(message: GetNotePurchaseAgreementResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      NotePurchaseAgreementRecord.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNotePurchaseAgreementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = NotePurchaseAgreementRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNotePurchaseAgreementResponse {
    return { payload: isSet(object.payload) ? NotePurchaseAgreementRecord.fromJSON(object.payload) : undefined };
  },

  toJSON(message: GetNotePurchaseAgreementResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? NotePurchaseAgreementRecord.toJSON(message.payload) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetNotePurchaseAgreementResponse>): GetNotePurchaseAgreementResponse {
    const message = createBaseGetNotePurchaseAgreementResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? NotePurchaseAgreementRecord.fromPartial(object.payload)
      : undefined;
    return message;
  },
};

function createBaseGetNotePurchaseAgreementsRequest(): GetNotePurchaseAgreementsRequest {
  return {};
}

export const GetNotePurchaseAgreementsRequest = {
  encode(_: GetNotePurchaseAgreementsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNotePurchaseAgreementsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetNotePurchaseAgreementsRequest {
    return {};
  },

  toJSON(_: GetNotePurchaseAgreementsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetNotePurchaseAgreementsRequest>): GetNotePurchaseAgreementsRequest {
    const message = createBaseGetNotePurchaseAgreementsRequest();
    return message;
  },
};

function createBaseGetNotePurchaseAgreementsResponse(): GetNotePurchaseAgreementsResponse {
  return { payload: [] };
}

export const GetNotePurchaseAgreementsResponse = {
  encode(message: GetNotePurchaseAgreementsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.payload) {
      RecordCollection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNotePurchaseAgreementsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload.push(RecordCollection.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNotePurchaseAgreementsResponse {
    return {
      payload: Array.isArray(object?.payload) ? object.payload.map((e: any) => RecordCollection.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetNotePurchaseAgreementsResponse): unknown {
    const obj: any = {};
    if (message.payload) {
      obj.payload = message.payload.map((e) => e ? RecordCollection.toJSON(e) : undefined);
    } else {
      obj.payload = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GetNotePurchaseAgreementsResponse>): GetNotePurchaseAgreementsResponse {
    const message = createBaseGetNotePurchaseAgreementsResponse();
    message.payload = object.payload?.map((e) => RecordCollection.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSaveNotePurchaseAgreementRequest(): SaveNotePurchaseAgreementRequest {
  return { payload: undefined };
}

export const SaveNotePurchaseAgreementRequest = {
  encode(message: SaveNotePurchaseAgreementRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      NotePurchaseAgreementRecord.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SaveNotePurchaseAgreementRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveNotePurchaseAgreementRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = NotePurchaseAgreementRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveNotePurchaseAgreementRequest {
    return { payload: isSet(object.payload) ? NotePurchaseAgreementRecord.fromJSON(object.payload) : undefined };
  },

  toJSON(message: SaveNotePurchaseAgreementRequest): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? NotePurchaseAgreementRecord.toJSON(message.payload) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SaveNotePurchaseAgreementRequest>): SaveNotePurchaseAgreementRequest {
    const message = createBaseSaveNotePurchaseAgreementRequest();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? NotePurchaseAgreementRecord.fromPartial(object.payload)
      : undefined;
    return message;
  },
};

function createBaseSaveNotePurchaseAgreementResponse(): SaveNotePurchaseAgreementResponse {
  return { payload: undefined };
}

export const SaveNotePurchaseAgreementResponse = {
  encode(message: SaveNotePurchaseAgreementResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      RecordResultPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SaveNotePurchaseAgreementResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveNotePurchaseAgreementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = RecordResultPayload.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveNotePurchaseAgreementResponse {
    return { payload: isSet(object.payload) ? RecordResultPayload.fromJSON(object.payload) : undefined };
  },

  toJSON(message: SaveNotePurchaseAgreementResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? RecordResultPayload.toJSON(message.payload) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SaveNotePurchaseAgreementResponse>): SaveNotePurchaseAgreementResponse {
    const message = createBaseSaveNotePurchaseAgreementResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? RecordResultPayload.fromPartial(object.payload)
      : undefined;
    return message;
  },
};

export type NotePurchaseAgreementServiceDefinition = typeof NotePurchaseAgreementServiceDefinition;
export const NotePurchaseAgreementServiceDefinition = {
  name: "NotePurchaseAgreementService",
  fullName: "notepurchaseagreement.NotePurchaseAgreementService",
  methods: {
    getNotePurchaseAgreements: {
      name: "GetNotePurchaseAgreements",
      requestType: GetNotePurchaseAgreementsRequest,
      requestStream: false,
      responseType: GetNotePurchaseAgreementsResponse,
      responseStream: false,
      options: {},
    },
    getNotePurchaseAgreement: {
      name: "GetNotePurchaseAgreement",
      requestType: GetNotePurchaseAgreementRequest,
      requestStream: false,
      responseType: GetNotePurchaseAgreementResponse,
      responseStream: false,
      options: {},
    },
    saveNotePurchaseAgreement: {
      name: "SaveNotePurchaseAgreement",
      requestType: SaveNotePurchaseAgreementRequest,
      requestStream: false,
      responseType: SaveNotePurchaseAgreementResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface NotePurchaseAgreementServiceImplementation<CallContextExt = {}> {
  getNotePurchaseAgreements(
    request: GetNotePurchaseAgreementsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetNotePurchaseAgreementsResponse>>;
  getNotePurchaseAgreement(
    request: GetNotePurchaseAgreementRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetNotePurchaseAgreementResponse>>;
  saveNotePurchaseAgreement(
    request: SaveNotePurchaseAgreementRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SaveNotePurchaseAgreementResponse>>;
}

export interface NotePurchaseAgreementServiceClient<CallOptionsExt = {}> {
  getNotePurchaseAgreements(
    request: DeepPartial<GetNotePurchaseAgreementsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetNotePurchaseAgreementsResponse>;
  getNotePurchaseAgreement(
    request: DeepPartial<GetNotePurchaseAgreementRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetNotePurchaseAgreementResponse>;
  saveNotePurchaseAgreement(
    request: DeepPartial<SaveNotePurchaseAgreementRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SaveNotePurchaseAgreementResponse>;
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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
