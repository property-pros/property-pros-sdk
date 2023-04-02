/* eslint-disable */
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { User } from "../../auth/v1/auth";
import { RecordCollection, RecordRequestPayload, RecordResultPayload } from "../../common/v1/common";

export const protobufPackage = "api.note_purchase_agreement.v1";

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

export interface GetNotePurchaseAgreementDocRequest {
  payload: NotePurchaseAgreementRecord | undefined;
}

export interface GetNotePurchaseAgreementDocResponse {
  fileContent: Uint8Array;
}

export interface GetNotePurchaseAgreementsRequest {
}

export interface GetNotePurchaseAgreementsResponse {
  payload: RecordCollection | undefined;
}

export interface SaveNotePurchaseAgreementRequest {
  payload: NotePurchaseAgreementRecord | undefined;
}

export interface SaveNotePurchaseAgreementResponse {
  payload: RecordResultPayload | undefined;
}

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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotePurchaseAgreementRecord();
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

          message.firstName = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.lastName = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.dateOfBirth = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.homeAddress = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.phoneNumber = reader.string();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.socialSecurity = reader.string();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.fundsCommitted = longToNumber(reader.uint64() as Long);
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.fileContent = reader.bytes();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.createdOn = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
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

  create(base?: DeepPartial<NotePurchaseAgreementRecord>): NotePurchaseAgreementRecord {
    return NotePurchaseAgreementRecord.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNotePurchaseAgreementRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.payload = RecordRequestPayload.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
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

  create(base?: DeepPartial<GetNotePurchaseAgreementRequest>): GetNotePurchaseAgreementRequest {
    return GetNotePurchaseAgreementRequest.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNotePurchaseAgreementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.payload = NotePurchaseAgreementRecord.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
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

  create(base?: DeepPartial<GetNotePurchaseAgreementResponse>): GetNotePurchaseAgreementResponse {
    return GetNotePurchaseAgreementResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetNotePurchaseAgreementResponse>): GetNotePurchaseAgreementResponse {
    const message = createBaseGetNotePurchaseAgreementResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? NotePurchaseAgreementRecord.fromPartial(object.payload)
      : undefined;
    return message;
  },
};

function createBaseGetNotePurchaseAgreementDocRequest(): GetNotePurchaseAgreementDocRequest {
  return { payload: undefined };
}

export const GetNotePurchaseAgreementDocRequest = {
  encode(message: GetNotePurchaseAgreementDocRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      NotePurchaseAgreementRecord.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementDocRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNotePurchaseAgreementDocRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.payload = NotePurchaseAgreementRecord.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetNotePurchaseAgreementDocRequest {
    return { payload: isSet(object.payload) ? NotePurchaseAgreementRecord.fromJSON(object.payload) : undefined };
  },

  toJSON(message: GetNotePurchaseAgreementDocRequest): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? NotePurchaseAgreementRecord.toJSON(message.payload) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetNotePurchaseAgreementDocRequest>): GetNotePurchaseAgreementDocRequest {
    return GetNotePurchaseAgreementDocRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetNotePurchaseAgreementDocRequest>): GetNotePurchaseAgreementDocRequest {
    const message = createBaseGetNotePurchaseAgreementDocRequest();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? NotePurchaseAgreementRecord.fromPartial(object.payload)
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNotePurchaseAgreementDocResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.fileContent = reader.bytes();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
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

  create(base?: DeepPartial<GetNotePurchaseAgreementDocResponse>): GetNotePurchaseAgreementDocResponse {
    return GetNotePurchaseAgreementDocResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetNotePurchaseAgreementDocResponse>): GetNotePurchaseAgreementDocResponse {
    const message = createBaseGetNotePurchaseAgreementDocResponse();
    message.fileContent = object.fileContent ?? new Uint8Array();
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNotePurchaseAgreementsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
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

  create(base?: DeepPartial<GetNotePurchaseAgreementsRequest>): GetNotePurchaseAgreementsRequest {
    return GetNotePurchaseAgreementsRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<GetNotePurchaseAgreementsRequest>): GetNotePurchaseAgreementsRequest {
    const message = createBaseGetNotePurchaseAgreementsRequest();
    return message;
  },
};

function createBaseGetNotePurchaseAgreementsResponse(): GetNotePurchaseAgreementsResponse {
  return { payload: undefined };
}

export const GetNotePurchaseAgreementsResponse = {
  encode(message: GetNotePurchaseAgreementsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      RecordCollection.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNotePurchaseAgreementsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNotePurchaseAgreementsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.payload = RecordCollection.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetNotePurchaseAgreementsResponse {
    return { payload: isSet(object.payload) ? RecordCollection.fromJSON(object.payload) : undefined };
  },

  toJSON(message: GetNotePurchaseAgreementsResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? RecordCollection.toJSON(message.payload) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetNotePurchaseAgreementsResponse>): GetNotePurchaseAgreementsResponse {
    return GetNotePurchaseAgreementsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetNotePurchaseAgreementsResponse>): GetNotePurchaseAgreementsResponse {
    const message = createBaseGetNotePurchaseAgreementsResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? RecordCollection.fromPartial(object.payload)
      : undefined;
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveNotePurchaseAgreementRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.payload = NotePurchaseAgreementRecord.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
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

  create(base?: DeepPartial<SaveNotePurchaseAgreementRequest>): SaveNotePurchaseAgreementRequest {
    return SaveNotePurchaseAgreementRequest.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveNotePurchaseAgreementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.payload = RecordResultPayload.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
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

  create(base?: DeepPartial<SaveNotePurchaseAgreementResponse>): SaveNotePurchaseAgreementResponse {
    return SaveNotePurchaseAgreementResponse.fromPartial(base ?? {});
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
      options: {
        _unknownFields: {
          8338: [
            new Uint8Array([
              130,
              1,
              10,
              21,
              78,
              111,
              116,
              101,
              80,
              117,
              114,
              99,
              104,
              97,
              115,
              101,
              65,
              103,
              114,
              101,
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
          578365826: [
            new Uint8Array([
              28,
              18,
              26,
              47,
              118,
              49,
              47,
              110,
              111,
              116,
              101,
              112,
              117,
              114,
              99,
              104,
              97,
              115,
              101,
              97,
              103,
              114,
              101,
              101,
              109,
              101,
              110,
              116,
              115,
            ]),
          ],
        },
      },
    },
    getNotePurchaseAgreement: {
      name: "GetNotePurchaseAgreement",
      requestType: GetNotePurchaseAgreementRequest,
      requestStream: false,
      responseType: GetNotePurchaseAgreementResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            new Uint8Array([
              109,
              10,
              21,
              78,
              111,
              116,
              101,
              80,
              117,
              114,
              99,
              104,
              97,
              115,
              101,
              65,
              103,
              114,
              101,
              101,
              109,
              101,
              110,
              116,
              18,
              34,
              71,
              101,
              116,
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
              82,
              101,
              99,
              111,
              114,
              100,
              26,
              48,
              71,
              101,
              116,
              115,
              32,
              97,
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
              102,
              117,
              108,
              108,
              32,
              114,
              101,
              99,
              111,
              114,
              100,
              32,
              100,
              97,
              116,
              97,
              46,
            ]),
          ],
          578365826: [
            new Uint8Array([
              27,
              18,
              25,
              47,
              118,
              49,
              47,
              110,
              111,
              116,
              101,
              112,
              117,
              114,
              99,
              104,
              97,
              115,
              101,
              97,
              103,
              114,
              101,
              101,
              109,
              101,
              110,
              116,
            ]),
          ],
        },
      },
    },
    saveNotePurchaseAgreement: {
      name: "SaveNotePurchaseAgreement",
      requestType: SaveNotePurchaseAgreementRequest,
      requestStream: false,
      responseType: SaveNotePurchaseAgreementResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            new Uint8Array([
              124,
              10,
              21,
              78,
              111,
              116,
              101,
              80,
              117,
              114,
              99,
              104,
              97,
              115,
              101,
              65,
              103,
              114,
              101,
              101,
              109,
              101,
              110,
              116,
              18,
              35,
              83,
              97,
              118,
              101,
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
              82,
              101,
              99,
              111,
              114,
              100,
              26,
              62,
              83,
              97,
              118,
              101,
              115,
              32,
              97,
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
              102,
              105,
              108,
              108,
              101,
              100,
              32,
              111,
              117,
              116,
              32,
              119,
              105,
              116,
              104,
              32,
              99,
              117,
              115,
              116,
              111,
              109,
              101,
              114,
              32,
              100,
              97,
              116,
              97,
              46,
            ]),
          ],
          578365826: [
            new Uint8Array([
              27,
              34,
              25,
              47,
              118,
              49,
              47,
              110,
              111,
              116,
              101,
              112,
              117,
              114,
              99,
              104,
              97,
              115,
              101,
              97,
              103,
              114,
              101,
              101,
              109,
              101,
              110,
              116,
            ]),
          ],
        },
      },
    },
    getNotePurchaseAgreementDoc: {
      name: "GetNotePurchaseAgreementDoc",
      requestType: GetNotePurchaseAgreementDocRequest,
      requestStream: false,
      responseType: GetNotePurchaseAgreementDocResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            new Uint8Array([
              150,
              1,
              10,
              21,
              78,
              111,
              116,
              101,
              80,
              117,
              114,
              99,
              104,
              97,
              115,
              101,
              65,
              103,
              114,
              101,
              101,
              109,
              101,
              110,
              116,
              18,
              46,
              71,
              101,
              116,
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
              70,
              105,
              108,
              101,
              32,
              79,
              110,
              108,
              121,
              26,
              77,
              71,
              101,
              116,
              115,
              32,
              97,
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
              32,
              111,
              110,
              108,
              121,
              46,
              32,
              32,
              78,
              111,
              32,
              114,
              101,
              99,
              111,
              114,
              100,
              32,
              100,
              97,
              116,
              97,
              32,
              111,
              116,
              104,
              101,
              114,
              119,
              105,
              115,
              101,
              46,
            ]),
          ],
          578365826: [
            new Uint8Array([
              32,
              18,
              30,
              47,
              118,
              49,
              47,
              110,
              111,
              116,
              101,
              112,
              117,
              114,
              99,
              104,
              97,
              115,
              101,
              97,
              103,
              114,
              101,
              101,
              109,
              101,
              110,
              116,
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
  getNotePurchaseAgreementDoc(
    request: GetNotePurchaseAgreementDocRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetNotePurchaseAgreementDocResponse>>;
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
  getNotePurchaseAgreementDoc(
    request: DeepPartial<GetNotePurchaseAgreementDocRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetNotePurchaseAgreementDocResponse>;
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
