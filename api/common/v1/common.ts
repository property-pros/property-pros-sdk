/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "api.common.v1";

export interface RecordRequestPayload {
  id: string;
}

export interface RecordRequestCollection {
  payload: RecordRequestPayload[];
}

export interface RecordCollection {
  payload: RecordResultPayload[];
}

export interface RecordResultPayload {
  id: string;
  createdOn: string;
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordRequestPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
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
  // Transform<RecordRequestPayload, Uint8Array>
  async *encodeTransform(
    source:
      | AsyncIterable<RecordRequestPayload | RecordRequestPayload[]>
      | Iterable<RecordRequestPayload | RecordRequestPayload[]>,
  ): AsyncIterable<Uint8Array> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [RecordRequestPayload.encode(p).finish()];
        }
      } else {
        yield* [RecordRequestPayload.encode(pkt).finish()];
      }
    }
  },

  // decodeTransform decodes a source of encoded messages.
  // Transform<Uint8Array, RecordRequestPayload>
  async *decodeTransform(
    source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>,
  ): AsyncIterable<RecordRequestPayload> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [RecordRequestPayload.decode(p)];
        }
      } else {
        yield* [RecordRequestPayload.decode(pkt)];
      }
    }
  },

  fromJSON(object: any): RecordRequestPayload {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: RecordRequestPayload): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<RecordRequestPayload>): RecordRequestPayload {
    return RecordRequestPayload.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RecordRequestPayload>): RecordRequestPayload {
    const message = createBaseRecordRequestPayload();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseRecordRequestCollection(): RecordRequestCollection {
  return { payload: [] };
}

export const RecordRequestCollection = {
  encode(message: RecordRequestCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.payload) {
      RecordRequestPayload.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordRequestCollection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordRequestCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload.push(RecordRequestPayload.decode(reader, reader.uint32()));
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
  // Transform<RecordRequestCollection, Uint8Array>
  async *encodeTransform(
    source:
      | AsyncIterable<RecordRequestCollection | RecordRequestCollection[]>
      | Iterable<RecordRequestCollection | RecordRequestCollection[]>,
  ): AsyncIterable<Uint8Array> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [RecordRequestCollection.encode(p).finish()];
        }
      } else {
        yield* [RecordRequestCollection.encode(pkt).finish()];
      }
    }
  },

  // decodeTransform decodes a source of encoded messages.
  // Transform<Uint8Array, RecordRequestCollection>
  async *decodeTransform(
    source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>,
  ): AsyncIterable<RecordRequestCollection> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [RecordRequestCollection.decode(p)];
        }
      } else {
        yield* [RecordRequestCollection.decode(pkt)];
      }
    }
  },

  fromJSON(object: any): RecordRequestCollection {
    return {
      payload: Array.isArray(object?.payload) ? object.payload.map((e: any) => RecordRequestPayload.fromJSON(e)) : [],
    };
  },

  toJSON(message: RecordRequestCollection): unknown {
    const obj: any = {};
    if (message.payload?.length) {
      obj.payload = message.payload.map((e) => RecordRequestPayload.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<RecordRequestCollection>): RecordRequestCollection {
    return RecordRequestCollection.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RecordRequestCollection>): RecordRequestCollection {
    const message = createBaseRecordRequestCollection();
    message.payload = object.payload?.map((e) => RecordRequestPayload.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRecordCollection(): RecordCollection {
  return { payload: [] };
}

export const RecordCollection = {
  encode(message: RecordCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.payload) {
      RecordResultPayload.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordCollection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload.push(RecordResultPayload.decode(reader, reader.uint32()));
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
  // Transform<RecordCollection, Uint8Array>
  async *encodeTransform(
    source: AsyncIterable<RecordCollection | RecordCollection[]> | Iterable<RecordCollection | RecordCollection[]>,
  ): AsyncIterable<Uint8Array> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [RecordCollection.encode(p).finish()];
        }
      } else {
        yield* [RecordCollection.encode(pkt).finish()];
      }
    }
  },

  // decodeTransform decodes a source of encoded messages.
  // Transform<Uint8Array, RecordCollection>
  async *decodeTransform(
    source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>,
  ): AsyncIterable<RecordCollection> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [RecordCollection.decode(p)];
        }
      } else {
        yield* [RecordCollection.decode(pkt)];
      }
    }
  },

  fromJSON(object: any): RecordCollection {
    return {
      payload: Array.isArray(object?.payload) ? object.payload.map((e: any) => RecordResultPayload.fromJSON(e)) : [],
    };
  },

  toJSON(message: RecordCollection): unknown {
    const obj: any = {};
    if (message.payload?.length) {
      obj.payload = message.payload.map((e) => RecordResultPayload.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<RecordCollection>): RecordCollection {
    return RecordCollection.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RecordCollection>): RecordCollection {
    const message = createBaseRecordCollection();
    message.payload = object.payload?.map((e) => RecordResultPayload.fromPartial(e)) || [];
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordResultPayload();
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

          message.createdOn = reader.string();
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
  // Transform<RecordResultPayload, Uint8Array>
  async *encodeTransform(
    source:
      | AsyncIterable<RecordResultPayload | RecordResultPayload[]>
      | Iterable<RecordResultPayload | RecordResultPayload[]>,
  ): AsyncIterable<Uint8Array> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [RecordResultPayload.encode(p).finish()];
        }
      } else {
        yield* [RecordResultPayload.encode(pkt).finish()];
      }
    }
  },

  // decodeTransform decodes a source of encoded messages.
  // Transform<Uint8Array, RecordResultPayload>
  async *decodeTransform(
    source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>,
  ): AsyncIterable<RecordResultPayload> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [RecordResultPayload.decode(p)];
        }
      } else {
        yield* [RecordResultPayload.decode(pkt)];
      }
    }
  },

  fromJSON(object: any): RecordResultPayload {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdOn: isSet(object.createdOn) ? String(object.createdOn) : "",
    };
  },

  toJSON(message: RecordResultPayload): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdOn !== "") {
      obj.createdOn = message.createdOn;
    }
    return obj;
  },

  create(base?: DeepPartial<RecordResultPayload>): RecordResultPayload {
    return RecordResultPayload.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RecordResultPayload>): RecordResultPayload {
    const message = createBaseRecordResultPayload();
    message.id = object.id ?? "";
    message.createdOn = object.createdOn ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
