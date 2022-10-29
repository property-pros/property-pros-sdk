/* eslint-disable */
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "notepurchaseagreement";

export interface NotePurchaseAgreement {
  Id: string;
  FirstName: string;
  LastName: string;
  DateOfBirth: string;
  HomeAddress: string;
  EmailAddress: string;
  PhoneNumber: string;
  SocialSecurity: string;
  FundsCommitted: number;
}

export interface GetNotePurchaseAgreementDocRequest {
  payload: NotePurchaseAgreement | undefined;
}

export interface GetNotePurchaseAgreementDocResponse {
  fileContent: Uint8Array;
}

export interface SaveNotePurchaseAgreementRequest {
  payload: NotePurchaseAgreement | undefined;
}

export interface SaveNotePurchaseAgreementResponse {
  Id: string;
}

function createBaseNotePurchaseAgreement(): NotePurchaseAgreement {
  return {
    Id: "",
    FirstName: "",
    LastName: "",
    DateOfBirth: "",
    HomeAddress: "",
    EmailAddress: "",
    PhoneNumber: "",
    SocialSecurity: "",
    FundsCommitted: 0,
  };
}

export const NotePurchaseAgreement = {
  encode(message: NotePurchaseAgreement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.EmailAddress !== "") {
      writer.uint32(50).string(message.EmailAddress);
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NotePurchaseAgreement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotePurchaseAgreement();
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
          message.EmailAddress = reader.string();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NotePurchaseAgreement {
    return {
      Id: isSet(object.Id) ? String(object.Id) : "",
      FirstName: isSet(object.FirstName) ? String(object.FirstName) : "",
      LastName: isSet(object.LastName) ? String(object.LastName) : "",
      DateOfBirth: isSet(object.DateOfBirth) ? String(object.DateOfBirth) : "",
      HomeAddress: isSet(object.HomeAddress) ? String(object.HomeAddress) : "",
      EmailAddress: isSet(object.EmailAddress) ? String(object.EmailAddress) : "",
      PhoneNumber: isSet(object.PhoneNumber) ? String(object.PhoneNumber) : "",
      SocialSecurity: isSet(object.SocialSecurity) ? String(object.SocialSecurity) : "",
      FundsCommitted: isSet(object.FundsCommitted) ? Number(object.FundsCommitted) : 0,
    };
  },

  toJSON(message: NotePurchaseAgreement): unknown {
    const obj: any = {};
    message.Id !== undefined && (obj.Id = message.Id);
    message.FirstName !== undefined && (obj.FirstName = message.FirstName);
    message.LastName !== undefined && (obj.LastName = message.LastName);
    message.DateOfBirth !== undefined && (obj.DateOfBirth = message.DateOfBirth);
    message.HomeAddress !== undefined && (obj.HomeAddress = message.HomeAddress);
    message.EmailAddress !== undefined && (obj.EmailAddress = message.EmailAddress);
    message.PhoneNumber !== undefined && (obj.PhoneNumber = message.PhoneNumber);
    message.SocialSecurity !== undefined && (obj.SocialSecurity = message.SocialSecurity);
    message.FundsCommitted !== undefined && (obj.FundsCommitted = Math.round(message.FundsCommitted));
    return obj;
  },

  fromPartial(object: DeepPartial<NotePurchaseAgreement>): NotePurchaseAgreement {
    const message = createBaseNotePurchaseAgreement();
    message.Id = object.Id ?? "";
    message.FirstName = object.FirstName ?? "";
    message.LastName = object.LastName ?? "";
    message.DateOfBirth = object.DateOfBirth ?? "";
    message.HomeAddress = object.HomeAddress ?? "";
    message.EmailAddress = object.EmailAddress ?? "";
    message.PhoneNumber = object.PhoneNumber ?? "";
    message.SocialSecurity = object.SocialSecurity ?? "";
    message.FundsCommitted = object.FundsCommitted ?? 0;
    return message;
  },
};

function createBaseGetNotePurchaseAgreementDocRequest(): GetNotePurchaseAgreementDocRequest {
  return { payload: undefined };
}

export const GetNotePurchaseAgreementDocRequest = {
  encode(message: GetNotePurchaseAgreementDocRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      NotePurchaseAgreement.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementDocRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNotePurchaseAgreementDocRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = NotePurchaseAgreement.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNotePurchaseAgreementDocRequest {
    return { payload: isSet(object.payload) ? NotePurchaseAgreement.fromJSON(object.payload) : undefined };
  },

  toJSON(message: GetNotePurchaseAgreementDocRequest): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? NotePurchaseAgreement.toJSON(message.payload) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetNotePurchaseAgreementDocRequest>): GetNotePurchaseAgreementDocRequest {
    const message = createBaseGetNotePurchaseAgreementDocRequest();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? NotePurchaseAgreement.fromPartial(object.payload)
      : undefined;
    return message;
  },
};

function createBaseGetNotePurchaseAgreementDocResponse(): GetNotePurchaseAgreementDocResponse {
  return { fileContent: new Uint8Array() };
}

export const GetNotePurchaseAgreementDocResponse = {
  encode(message: GetNotePurchaseAgreementDocResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fileContent.length !== 0) {
      writer.uint32(10).bytes(message.fileContent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementDocResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNotePurchaseAgreementDocResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileContent = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNotePurchaseAgreementDocResponse {
    return { fileContent: isSet(object.fileContent) ? bytesFromBase64(object.fileContent) : new Uint8Array() };
  },

  toJSON(message: GetNotePurchaseAgreementDocResponse): unknown {
    const obj: any = {};
    message.fileContent !== undefined &&
      (obj.fileContent = base64FromBytes(message.fileContent !== undefined ? message.fileContent : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<GetNotePurchaseAgreementDocResponse>): GetNotePurchaseAgreementDocResponse {
    const message = createBaseGetNotePurchaseAgreementDocResponse();
    message.fileContent = object.fileContent ?? new Uint8Array();
    return message;
  },
};

function createBaseSaveNotePurchaseAgreementRequest(): SaveNotePurchaseAgreementRequest {
  return { payload: undefined };
}

export const SaveNotePurchaseAgreementRequest = {
  encode(message: SaveNotePurchaseAgreementRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      NotePurchaseAgreement.encode(message.payload, writer.uint32(10).fork()).ldelim();
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
          message.payload = NotePurchaseAgreement.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveNotePurchaseAgreementRequest {
    return { payload: isSet(object.payload) ? NotePurchaseAgreement.fromJSON(object.payload) : undefined };
  },

  toJSON(message: SaveNotePurchaseAgreementRequest): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? NotePurchaseAgreement.toJSON(message.payload) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SaveNotePurchaseAgreementRequest>): SaveNotePurchaseAgreementRequest {
    const message = createBaseSaveNotePurchaseAgreementRequest();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? NotePurchaseAgreement.fromPartial(object.payload)
      : undefined;
    return message;
  },
};

function createBaseSaveNotePurchaseAgreementResponse(): SaveNotePurchaseAgreementResponse {
  return { Id: "" };
}

export const SaveNotePurchaseAgreementResponse = {
  encode(message: SaveNotePurchaseAgreementResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Id !== "") {
      writer.uint32(10).string(message.Id);
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
          message.Id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveNotePurchaseAgreementResponse {
    return { Id: isSet(object.Id) ? String(object.Id) : "" };
  },

  toJSON(message: SaveNotePurchaseAgreementResponse): unknown {
    const obj: any = {};
    message.Id !== undefined && (obj.Id = message.Id);
    return obj;
  },

  fromPartial(object: DeepPartial<SaveNotePurchaseAgreementResponse>): SaveNotePurchaseAgreementResponse {
    const message = createBaseSaveNotePurchaseAgreementResponse();
    message.Id = object.Id ?? "";
    return message;
  },
};

export type NotePurchaseAgreementServiceDefinition = typeof NotePurchaseAgreementServiceDefinition;
export const NotePurchaseAgreementServiceDefinition = {
  name: "NotePurchaseAgreementService",
  fullName: "notepurchaseagreement.NotePurchaseAgreementService",
  methods: {
    getNotePurchaseAgreementDoc: {
      name: "GetNotePurchaseAgreementDoc",
      requestType: GetNotePurchaseAgreementDocRequest,
      requestStream: false,
      responseType: GetNotePurchaseAgreementDocResponse,
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

export interface NotePurchaseAgreementServiceServiceImplementation<CallContextExt = {}> {
  getNotePurchaseAgreementDoc(
    request: GetNotePurchaseAgreementDocRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetNotePurchaseAgreementDocResponse>>;
  saveNotePurchaseAgreement(
    request: SaveNotePurchaseAgreementRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SaveNotePurchaseAgreementResponse>>;
}

export interface NotePurchaseAgreementServiceClient<CallOptionsExt = {}> {
  getNotePurchaseAgreementDoc(
    request: DeepPartial<GetNotePurchaseAgreementDocRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetNotePurchaseAgreementDocResponse>;
  saveNotePurchaseAgreement(
    request: DeepPartial<SaveNotePurchaseAgreementRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SaveNotePurchaseAgreementResponse>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
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
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
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
