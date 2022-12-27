/* eslint-disable */
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { User } from "../../auth/v1/auth";

export const protobufPackage = "api.note_purchase_agreement.v1";

export interface RecordRequestPayload {
  id: string;
}

export interface RecordCollection {
  payload: RecordRequestPayload[];
}

export interface RecordResultPayload {
  id: string;
  createdOn: string;
}

export interface NotePurchaseAgreementRecord {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  homeAddress: string;
  user: User | undefined;
  phoneNumber: string;
  socialSecurity: string;
  fundsCommitted: number;
  fileContent: Uint8Array;
  createdOn: string;
}

export interface GetNotePurchaseAgreementRequest {
  payload: RecordRequestPayload | undefined;
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
  return { id: "" };
}

export const RecordRequestPayload = {
  encode(message: RecordRequestPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
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
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordRequestPayload {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: RecordRequestPayload): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<RecordRequestPayload>): RecordRequestPayload {
    const message = createBaseRecordRequestPayload();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseRecordCollection(): RecordCollection {
  return { payload: [] };
}

export const RecordCollection = {
  encode(message: RecordCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.payload) {
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
          message.payload.push(RecordRequestPayload.decode(reader, reader.uint32()));
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
      payload: Array.isArray(object?.payload) ? object.payload.map((e: any) => RecordRequestPayload.fromJSON(e)) : [],
    };
  },

  toJSON(message: RecordCollection): unknown {
    const obj: any = {};
    if (message.payload) {
      obj.payload = message.payload.map((e) => e ? RecordRequestPayload.toJSON(e) : undefined);
    } else {
      obj.payload = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<RecordCollection>): RecordCollection {
    const message = createBaseRecordCollection();
    message.payload = object.payload?.map((e) => RecordRequestPayload.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRecordResultPayload(): RecordResultPayload {
  return { id: "", createdOn: "" };
}

export const RecordResultPayload = {
  encode(message: RecordResultPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdOn !== "") {
      writer.uint32(18).string(message.createdOn);
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
          message.id = reader.string();
          break;
        case 2:
          message.createdOn = reader.string();
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
      id: isSet(object.id) ? String(object.id) : "",
      createdOn: isSet(object.createdOn) ? String(object.createdOn) : "",
    };
  },

  toJSON(message: RecordResultPayload): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.createdOn !== undefined && (obj.createdOn = message.createdOn);
    return obj;
  },

  fromPartial(object: DeepPartial<RecordResultPayload>): RecordResultPayload {
    const message = createBaseRecordResultPayload();
    message.id = object.id ?? "";
    message.createdOn = object.createdOn ?? "";
    return message;
  },
};

function createBaseNotePurchaseAgreementRecord(): NotePurchaseAgreementRecord {
  return {
    id: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    homeAddress: "",
    user: undefined,
    phoneNumber: "",
    socialSecurity: "",
    fundsCommitted: 0,
    fileContent: new Uint8Array(),
    createdOn: "",
  };
}

export const NotePurchaseAgreementRecord = {
  encode(message: NotePurchaseAgreementRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.firstName !== "") {
      writer.uint32(18).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(26).string(message.lastName);
    }
    if (message.dateOfBirth !== "") {
      writer.uint32(34).string(message.dateOfBirth);
    }
    if (message.homeAddress !== "") {
      writer.uint32(42).string(message.homeAddress);
    }
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(50).fork()).ldelim();
    }
    if (message.phoneNumber !== "") {
      writer.uint32(58).string(message.phoneNumber);
    }
    if (message.socialSecurity !== "") {
      writer.uint32(66).string(message.socialSecurity);
    }
    if (message.fundsCommitted !== 0) {
      writer.uint32(72).uint64(message.fundsCommitted);
    }
    if (message.fileContent.length !== 0) {
      writer.uint32(82).bytes(message.fileContent);
    }
    if (message.createdOn !== "") {
      writer.uint32(90).string(message.createdOn);
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
          message.id = reader.string();
          break;
        case 2:
          message.firstName = reader.string();
          break;
        case 3:
          message.lastName = reader.string();
          break;
        case 4:
          message.dateOfBirth = reader.string();
          break;
        case 5:
          message.homeAddress = reader.string();
          break;
        case 6:
          message.user = User.decode(reader, reader.uint32());
          break;
        case 7:
          message.phoneNumber = reader.string();
          break;
        case 8:
          message.socialSecurity = reader.string();
          break;
        case 9:
          message.fundsCommitted = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.fileContent = reader.bytes();
          break;
        case 11:
          message.createdOn = reader.string();
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
      id: isSet(object.id) ? String(object.id) : "",
      firstName: isSet(object.firstName) ? String(object.firstName) : "",
      lastName: isSet(object.lastName) ? String(object.lastName) : "",
      dateOfBirth: isSet(object.dateOfBirth) ? String(object.dateOfBirth) : "",
      homeAddress: isSet(object.homeAddress) ? String(object.homeAddress) : "",
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
      phoneNumber: isSet(object.phoneNumber) ? String(object.phoneNumber) : "",
      socialSecurity: isSet(object.socialSecurity) ? String(object.socialSecurity) : "",
      fundsCommitted: isSet(object.fundsCommitted) ? Number(object.fundsCommitted) : 0,
      fileContent: isSet(object.fileContent) ? bytesFromBase64(object.fileContent) : new Uint8Array(),
      createdOn: isSet(object.createdOn) ? String(object.createdOn) : "",
    };
  },

  toJSON(message: NotePurchaseAgreementRecord): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.dateOfBirth !== undefined && (obj.dateOfBirth = message.dateOfBirth);
    message.homeAddress !== undefined && (obj.homeAddress = message.homeAddress);
    message.user !== undefined && (obj.user = message.user ? User.toJSON(message.user) : undefined);
    message.phoneNumber !== undefined && (obj.phoneNumber = message.phoneNumber);
    message.socialSecurity !== undefined && (obj.socialSecurity = message.socialSecurity);
    message.fundsCommitted !== undefined && (obj.fundsCommitted = Math.round(message.fundsCommitted));
    message.fileContent !== undefined &&
      (obj.fileContent = base64FromBytes(message.fileContent !== undefined ? message.fileContent : new Uint8Array()));
    message.createdOn !== undefined && (obj.createdOn = message.createdOn);
    return obj;
  },

  fromPartial(object: DeepPartial<NotePurchaseAgreementRecord>): NotePurchaseAgreementRecord {
    const message = createBaseNotePurchaseAgreementRecord();
    message.id = object.id ?? "";
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    message.dateOfBirth = object.dateOfBirth ?? "";
    message.homeAddress = object.homeAddress ?? "";
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    message.phoneNumber = object.phoneNumber ?? "";
    message.socialSecurity = object.socialSecurity ?? "";
    message.fundsCommitted = object.fundsCommitted ?? 0;
    message.fileContent = object.fileContent ?? new Uint8Array();
    message.createdOn = object.createdOn ?? "";
    return message;
  },
};

function createBaseGetNotePurchaseAgreementRequest(): GetNotePurchaseAgreementRequest {
  return { payload: undefined };
}

export const GetNotePurchaseAgreementRequest = {
  encode(message: GetNotePurchaseAgreementRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      RecordRequestPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
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
          message.payload = RecordRequestPayload.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNotePurchaseAgreementRequest {
    return { payload: isSet(object.payload) ? RecordRequestPayload.fromJSON(object.payload) : undefined };
  },

  toJSON(message: GetNotePurchaseAgreementRequest): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? RecordRequestPayload.toJSON(message.payload) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetNotePurchaseAgreementRequest>): GetNotePurchaseAgreementRequest {
    const message = createBaseGetNotePurchaseAgreementRequest();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? RecordRequestPayload.fromPartial(object.payload)
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
  fullName: "api.note_purchase_agreement.v1.NotePurchaseAgreementService",
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
