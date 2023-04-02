/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "api.finance.v1";

/** proto3 service and messages for financial data */

/** A request to get financial data for a given company. */
export interface SaveFinancialItemRequest {
  /**
   * Required. The name of the financial data to retrieve.
   * Format: financialData/{company_symbol}
   */
  payload: FinancialData | undefined;
}

/** A response containing financial data for a given company. */
export interface SaveFinancialItemResponse {
}

export interface GetFinancialItemsRequest {
  /**
   * Required. The name of the financial data to retrieve.
   * Format: financialData/{company_symbol}
   */
  userId: string;
}

/** A response containing financial data for a given company. */
export interface GetFinancialItemsResponse {
  financialData: FinancialData[];
}

/** Financial data for a given company. */
export interface FinancialData {
  accessToken: string;
  itemId: string;
  userId: string;
  accounts: Account[];
  transactions: Transaction[];
}

export interface Account {
  accountId: string;
  balances: Balance | undefined;
  mask: string;
  name: string;
  officialName: string;
  subtype: string;
  type: string;
}

export interface Balance {
  available: number;
  current: number;
  isoCurrencyCode: string;
  limit: number;
  unofficialCurrencyCode: string;
}

export interface Transaction {
  accountId: string;
  amount: number;
  isoCurrencyCode: string;
  unofficialCurrencyCode: string;
  category: string[];
  categoryId: string;
  checkNumber: string;
  date: string;
  datetime: string;
  authorizedDate: string;
  authorizedDatetime: string;
  location: Location | undefined;
  name: string;
  merchantName: string;
  paymentMeta: PaymentMeta | undefined;
  paymentChannel: string;
  pending: boolean;
  pendingTransactionId: string;
  accountOwner: string;
  transactionId: string;
  transactionCode: string;
  transactionType: string;
}

export interface Location {
  address: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  lat: number;
  lon: number;
  storeNumber: string;
}

export interface PaymentMeta {
  byOrderOf: string;
  payee: string;
  payer: string;
  paymentMethod: string;
  paymentProcessor: string;
  ppdId: string;
  reason: string;
  referenceNumber: string;
}

export interface FinancialMetrics {
  /** The company's total revenue. */
  totalRevenue: number;
  /** The company's total revenue change. */
  totalRevenueChange: number;
  /** The company's total revenue change percentage. */
  totalRevenueChangePercentage: number;
}

function createBaseSaveFinancialItemRequest(): SaveFinancialItemRequest {
  return { payload: undefined };
}

export const SaveFinancialItemRequest = {
  encode(message: SaveFinancialItemRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      FinancialData.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SaveFinancialItemRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveFinancialItemRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.payload = FinancialData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SaveFinancialItemRequest {
    return { payload: isSet(object.payload) ? FinancialData.fromJSON(object.payload) : undefined };
  },

  toJSON(message: SaveFinancialItemRequest): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? FinancialData.toJSON(message.payload) : undefined);
    return obj;
  },

  create(base?: DeepPartial<SaveFinancialItemRequest>): SaveFinancialItemRequest {
    return SaveFinancialItemRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SaveFinancialItemRequest>): SaveFinancialItemRequest {
    const message = createBaseSaveFinancialItemRequest();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? FinancialData.fromPartial(object.payload)
      : undefined;
    return message;
  },
};

function createBaseSaveFinancialItemResponse(): SaveFinancialItemResponse {
  return {};
}

export const SaveFinancialItemResponse = {
  encode(_: SaveFinancialItemResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SaveFinancialItemResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveFinancialItemResponse();
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

  fromJSON(_: any): SaveFinancialItemResponse {
    return {};
  },

  toJSON(_: SaveFinancialItemResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<SaveFinancialItemResponse>): SaveFinancialItemResponse {
    return SaveFinancialItemResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<SaveFinancialItemResponse>): SaveFinancialItemResponse {
    const message = createBaseSaveFinancialItemResponse();
    return message;
  },
};

function createBaseGetFinancialItemsRequest(): GetFinancialItemsRequest {
  return { userId: "" };
}

export const GetFinancialItemsRequest = {
  encode(message: GetFinancialItemsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFinancialItemsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFinancialItemsRequest();
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

  fromJSON(object: any): GetFinancialItemsRequest {
    return { userId: isSet(object.userId) ? String(object.userId) : "" };
  },

  toJSON(message: GetFinancialItemsRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  create(base?: DeepPartial<GetFinancialItemsRequest>): GetFinancialItemsRequest {
    return GetFinancialItemsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetFinancialItemsRequest>): GetFinancialItemsRequest {
    const message = createBaseGetFinancialItemsRequest();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseGetFinancialItemsResponse(): GetFinancialItemsResponse {
  return { financialData: [] };
}

export const GetFinancialItemsResponse = {
  encode(message: GetFinancialItemsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.financialData) {
      FinancialData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFinancialItemsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFinancialItemsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.financialData.push(FinancialData.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetFinancialItemsResponse {
    return {
      financialData: Array.isArray(object?.financialData)
        ? object.financialData.map((e: any) => FinancialData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetFinancialItemsResponse): unknown {
    const obj: any = {};
    if (message.financialData) {
      obj.financialData = message.financialData.map((e) => e ? FinancialData.toJSON(e) : undefined);
    } else {
      obj.financialData = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GetFinancialItemsResponse>): GetFinancialItemsResponse {
    return GetFinancialItemsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetFinancialItemsResponse>): GetFinancialItemsResponse {
    const message = createBaseGetFinancialItemsResponse();
    message.financialData = object.financialData?.map((e) => FinancialData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFinancialData(): FinancialData {
  return { accessToken: "", itemId: "", userId: "", accounts: [], transactions: [] };
}

export const FinancialData = {
  encode(message: FinancialData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    if (message.itemId !== "") {
      writer.uint32(18).string(message.itemId);
    }
    if (message.userId !== "") {
      writer.uint32(42).string(message.userId);
    }
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.transactions) {
      Transaction.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinancialData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinancialData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.accessToken = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.itemId = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.accounts.push(Account.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.transactions.push(Transaction.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FinancialData {
    return {
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
      itemId: isSet(object.itemId) ? String(object.itemId) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromJSON(e)) : [],
      transactions: Array.isArray(object?.transactions)
        ? object.transactions.map((e: any) => Transaction.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FinancialData): unknown {
    const obj: any = {};
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) => e ? Account.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }
    if (message.transactions) {
      obj.transactions = message.transactions.map((e) => e ? Transaction.toJSON(e) : undefined);
    } else {
      obj.transactions = [];
    }
    return obj;
  },

  create(base?: DeepPartial<FinancialData>): FinancialData {
    return FinancialData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FinancialData>): FinancialData {
    const message = createBaseFinancialData();
    message.accessToken = object.accessToken ?? "";
    message.itemId = object.itemId ?? "";
    message.userId = object.userId ?? "";
    message.accounts = object.accounts?.map((e) => Account.fromPartial(e)) || [];
    message.transactions = object.transactions?.map((e) => Transaction.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAccount(): Account {
  return { accountId: "", balances: undefined, mask: "", name: "", officialName: "", subtype: "", type: "" };
}

export const Account = {
  encode(message: Account, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.balances !== undefined) {
      Balance.encode(message.balances, writer.uint32(18).fork()).ldelim();
    }
    if (message.mask !== "") {
      writer.uint32(26).string(message.mask);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.officialName !== "") {
      writer.uint32(42).string(message.officialName);
    }
    if (message.subtype !== "") {
      writer.uint32(50).string(message.subtype);
    }
    if (message.type !== "") {
      writer.uint32(58).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Account {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.balances = Balance.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.mask = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.officialName = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.subtype = reader.string();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Account {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      balances: isSet(object.balances) ? Balance.fromJSON(object.balances) : undefined,
      mask: isSet(object.mask) ? String(object.mask) : "",
      name: isSet(object.name) ? String(object.name) : "",
      officialName: isSet(object.officialName) ? String(object.officialName) : "",
      subtype: isSet(object.subtype) ? String(object.subtype) : "",
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: Account): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.balances !== undefined && (obj.balances = message.balances ? Balance.toJSON(message.balances) : undefined);
    message.mask !== undefined && (obj.mask = message.mask);
    message.name !== undefined && (obj.name = message.name);
    message.officialName !== undefined && (obj.officialName = message.officialName);
    message.subtype !== undefined && (obj.subtype = message.subtype);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<Account>): Account {
    return Account.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Account>): Account {
    const message = createBaseAccount();
    message.accountId = object.accountId ?? "";
    message.balances = (object.balances !== undefined && object.balances !== null)
      ? Balance.fromPartial(object.balances)
      : undefined;
    message.mask = object.mask ?? "";
    message.name = object.name ?? "";
    message.officialName = object.officialName ?? "";
    message.subtype = object.subtype ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseBalance(): Balance {
  return { available: 0, current: 0, isoCurrencyCode: "", limit: 0, unofficialCurrencyCode: "" };
}

export const Balance = {
  encode(message: Balance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.available !== 0) {
      writer.uint32(9).double(message.available);
    }
    if (message.current !== 0) {
      writer.uint32(17).double(message.current);
    }
    if (message.isoCurrencyCode !== "") {
      writer.uint32(26).string(message.isoCurrencyCode);
    }
    if (message.limit !== 0) {
      writer.uint32(33).double(message.limit);
    }
    if (message.unofficialCurrencyCode !== "") {
      writer.uint32(42).string(message.unofficialCurrencyCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Balance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.available = reader.double();
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.current = reader.double();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.isoCurrencyCode = reader.string();
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.limit = reader.double();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.unofficialCurrencyCode = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Balance {
    return {
      available: isSet(object.available) ? Number(object.available) : 0,
      current: isSet(object.current) ? Number(object.current) : 0,
      isoCurrencyCode: isSet(object.isoCurrencyCode) ? String(object.isoCurrencyCode) : "",
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      unofficialCurrencyCode: isSet(object.unofficialCurrencyCode) ? String(object.unofficialCurrencyCode) : "",
    };
  },

  toJSON(message: Balance): unknown {
    const obj: any = {};
    message.available !== undefined && (obj.available = message.available);
    message.current !== undefined && (obj.current = message.current);
    message.isoCurrencyCode !== undefined && (obj.isoCurrencyCode = message.isoCurrencyCode);
    message.limit !== undefined && (obj.limit = message.limit);
    message.unofficialCurrencyCode !== undefined && (obj.unofficialCurrencyCode = message.unofficialCurrencyCode);
    return obj;
  },

  create(base?: DeepPartial<Balance>): Balance {
    return Balance.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Balance>): Balance {
    const message = createBaseBalance();
    message.available = object.available ?? 0;
    message.current = object.current ?? 0;
    message.isoCurrencyCode = object.isoCurrencyCode ?? "";
    message.limit = object.limit ?? 0;
    message.unofficialCurrencyCode = object.unofficialCurrencyCode ?? "";
    return message;
  },
};

function createBaseTransaction(): Transaction {
  return {
    accountId: "",
    amount: 0,
    isoCurrencyCode: "",
    unofficialCurrencyCode: "",
    category: [],
    categoryId: "",
    checkNumber: "",
    date: "",
    datetime: "",
    authorizedDate: "",
    authorizedDatetime: "",
    location: undefined,
    name: "",
    merchantName: "",
    paymentMeta: undefined,
    paymentChannel: "",
    pending: false,
    pendingTransactionId: "",
    accountOwner: "",
    transactionId: "",
    transactionCode: "",
    transactionType: "",
  };
}

export const Transaction = {
  encode(message: Transaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.amount !== 0) {
      writer.uint32(17).double(message.amount);
    }
    if (message.isoCurrencyCode !== "") {
      writer.uint32(26).string(message.isoCurrencyCode);
    }
    if (message.unofficialCurrencyCode !== "") {
      writer.uint32(34).string(message.unofficialCurrencyCode);
    }
    for (const v of message.category) {
      writer.uint32(42).string(v!);
    }
    if (message.categoryId !== "") {
      writer.uint32(50).string(message.categoryId);
    }
    if (message.checkNumber !== "") {
      writer.uint32(58).string(message.checkNumber);
    }
    if (message.date !== "") {
      writer.uint32(66).string(message.date);
    }
    if (message.datetime !== "") {
      writer.uint32(74).string(message.datetime);
    }
    if (message.authorizedDate !== "") {
      writer.uint32(82).string(message.authorizedDate);
    }
    if (message.authorizedDatetime !== "") {
      writer.uint32(90).string(message.authorizedDatetime);
    }
    if (message.location !== undefined) {
      Location.encode(message.location, writer.uint32(98).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(106).string(message.name);
    }
    if (message.merchantName !== "") {
      writer.uint32(114).string(message.merchantName);
    }
    if (message.paymentMeta !== undefined) {
      PaymentMeta.encode(message.paymentMeta, writer.uint32(122).fork()).ldelim();
    }
    if (message.paymentChannel !== "") {
      writer.uint32(130).string(message.paymentChannel);
    }
    if (message.pending === true) {
      writer.uint32(136).bool(message.pending);
    }
    if (message.pendingTransactionId !== "") {
      writer.uint32(146).string(message.pendingTransactionId);
    }
    if (message.accountOwner !== "") {
      writer.uint32(154).string(message.accountOwner);
    }
    if (message.transactionId !== "") {
      writer.uint32(162).string(message.transactionId);
    }
    if (message.transactionCode !== "") {
      writer.uint32(170).string(message.transactionCode);
    }
    if (message.transactionType !== "") {
      writer.uint32(178).string(message.transactionType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transaction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.amount = reader.double();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.isoCurrencyCode = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.unofficialCurrencyCode = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.category.push(reader.string());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.categoryId = reader.string();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.checkNumber = reader.string();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.date = reader.string();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.datetime = reader.string();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.authorizedDate = reader.string();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.authorizedDatetime = reader.string();
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.location = Location.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.name = reader.string();
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.merchantName = reader.string();
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.paymentMeta = PaymentMeta.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.paymentChannel = reader.string();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.pending = reader.bool();
          continue;
        case 18:
          if (tag != 146) {
            break;
          }

          message.pendingTransactionId = reader.string();
          continue;
        case 19:
          if (tag != 154) {
            break;
          }

          message.accountOwner = reader.string();
          continue;
        case 20:
          if (tag != 162) {
            break;
          }

          message.transactionId = reader.string();
          continue;
        case 21:
          if (tag != 170) {
            break;
          }

          message.transactionCode = reader.string();
          continue;
        case 22:
          if (tag != 178) {
            break;
          }

          message.transactionType = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Transaction {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      isoCurrencyCode: isSet(object.isoCurrencyCode) ? String(object.isoCurrencyCode) : "",
      unofficialCurrencyCode: isSet(object.unofficialCurrencyCode) ? String(object.unofficialCurrencyCode) : "",
      category: Array.isArray(object?.category) ? object.category.map((e: any) => String(e)) : [],
      categoryId: isSet(object.categoryId) ? String(object.categoryId) : "",
      checkNumber: isSet(object.checkNumber) ? String(object.checkNumber) : "",
      date: isSet(object.date) ? String(object.date) : "",
      datetime: isSet(object.datetime) ? String(object.datetime) : "",
      authorizedDate: isSet(object.authorizedDate) ? String(object.authorizedDate) : "",
      authorizedDatetime: isSet(object.authorizedDatetime) ? String(object.authorizedDatetime) : "",
      location: isSet(object.location) ? Location.fromJSON(object.location) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      merchantName: isSet(object.merchantName) ? String(object.merchantName) : "",
      paymentMeta: isSet(object.paymentMeta) ? PaymentMeta.fromJSON(object.paymentMeta) : undefined,
      paymentChannel: isSet(object.paymentChannel) ? String(object.paymentChannel) : "",
      pending: isSet(object.pending) ? Boolean(object.pending) : false,
      pendingTransactionId: isSet(object.pendingTransactionId) ? String(object.pendingTransactionId) : "",
      accountOwner: isSet(object.accountOwner) ? String(object.accountOwner) : "",
      transactionId: isSet(object.transactionId) ? String(object.transactionId) : "",
      transactionCode: isSet(object.transactionCode) ? String(object.transactionCode) : "",
      transactionType: isSet(object.transactionType) ? String(object.transactionType) : "",
    };
  },

  toJSON(message: Transaction): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.amount !== undefined && (obj.amount = message.amount);
    message.isoCurrencyCode !== undefined && (obj.isoCurrencyCode = message.isoCurrencyCode);
    message.unofficialCurrencyCode !== undefined && (obj.unofficialCurrencyCode = message.unofficialCurrencyCode);
    if (message.category) {
      obj.category = message.category.map((e) => e);
    } else {
      obj.category = [];
    }
    message.categoryId !== undefined && (obj.categoryId = message.categoryId);
    message.checkNumber !== undefined && (obj.checkNumber = message.checkNumber);
    message.date !== undefined && (obj.date = message.date);
    message.datetime !== undefined && (obj.datetime = message.datetime);
    message.authorizedDate !== undefined && (obj.authorizedDate = message.authorizedDate);
    message.authorizedDatetime !== undefined && (obj.authorizedDatetime = message.authorizedDatetime);
    message.location !== undefined && (obj.location = message.location ? Location.toJSON(message.location) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.merchantName !== undefined && (obj.merchantName = message.merchantName);
    message.paymentMeta !== undefined &&
      (obj.paymentMeta = message.paymentMeta ? PaymentMeta.toJSON(message.paymentMeta) : undefined);
    message.paymentChannel !== undefined && (obj.paymentChannel = message.paymentChannel);
    message.pending !== undefined && (obj.pending = message.pending);
    message.pendingTransactionId !== undefined && (obj.pendingTransactionId = message.pendingTransactionId);
    message.accountOwner !== undefined && (obj.accountOwner = message.accountOwner);
    message.transactionId !== undefined && (obj.transactionId = message.transactionId);
    message.transactionCode !== undefined && (obj.transactionCode = message.transactionCode);
    message.transactionType !== undefined && (obj.transactionType = message.transactionType);
    return obj;
  },

  create(base?: DeepPartial<Transaction>): Transaction {
    return Transaction.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Transaction>): Transaction {
    const message = createBaseTransaction();
    message.accountId = object.accountId ?? "";
    message.amount = object.amount ?? 0;
    message.isoCurrencyCode = object.isoCurrencyCode ?? "";
    message.unofficialCurrencyCode = object.unofficialCurrencyCode ?? "";
    message.category = object.category?.map((e) => e) || [];
    message.categoryId = object.categoryId ?? "";
    message.checkNumber = object.checkNumber ?? "";
    message.date = object.date ?? "";
    message.datetime = object.datetime ?? "";
    message.authorizedDate = object.authorizedDate ?? "";
    message.authorizedDatetime = object.authorizedDatetime ?? "";
    message.location = (object.location !== undefined && object.location !== null)
      ? Location.fromPartial(object.location)
      : undefined;
    message.name = object.name ?? "";
    message.merchantName = object.merchantName ?? "";
    message.paymentMeta = (object.paymentMeta !== undefined && object.paymentMeta !== null)
      ? PaymentMeta.fromPartial(object.paymentMeta)
      : undefined;
    message.paymentChannel = object.paymentChannel ?? "";
    message.pending = object.pending ?? false;
    message.pendingTransactionId = object.pendingTransactionId ?? "";
    message.accountOwner = object.accountOwner ?? "";
    message.transactionId = object.transactionId ?? "";
    message.transactionCode = object.transactionCode ?? "";
    message.transactionType = object.transactionType ?? "";
    return message;
  },
};

function createBaseLocation(): Location {
  return { address: "", city: "", region: "", postalCode: "", country: "", lat: 0, lon: 0, storeNumber: "" };
}

export const Location = {
  encode(message: Location, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.city !== "") {
      writer.uint32(18).string(message.city);
    }
    if (message.region !== "") {
      writer.uint32(26).string(message.region);
    }
    if (message.postalCode !== "") {
      writer.uint32(34).string(message.postalCode);
    }
    if (message.country !== "") {
      writer.uint32(42).string(message.country);
    }
    if (message.lat !== 0) {
      writer.uint32(49).double(message.lat);
    }
    if (message.lon !== 0) {
      writer.uint32(57).double(message.lon);
    }
    if (message.storeNumber !== "") {
      writer.uint32(66).string(message.storeNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Location {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.city = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.region = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.postalCode = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.country = reader.string();
          continue;
        case 6:
          if (tag != 49) {
            break;
          }

          message.lat = reader.double();
          continue;
        case 7:
          if (tag != 57) {
            break;
          }

          message.lon = reader.double();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.storeNumber = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Location {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      city: isSet(object.city) ? String(object.city) : "",
      region: isSet(object.region) ? String(object.region) : "",
      postalCode: isSet(object.postalCode) ? String(object.postalCode) : "",
      country: isSet(object.country) ? String(object.country) : "",
      lat: isSet(object.lat) ? Number(object.lat) : 0,
      lon: isSet(object.lon) ? Number(object.lon) : 0,
      storeNumber: isSet(object.storeNumber) ? String(object.storeNumber) : "",
    };
  },

  toJSON(message: Location): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.city !== undefined && (obj.city = message.city);
    message.region !== undefined && (obj.region = message.region);
    message.postalCode !== undefined && (obj.postalCode = message.postalCode);
    message.country !== undefined && (obj.country = message.country);
    message.lat !== undefined && (obj.lat = message.lat);
    message.lon !== undefined && (obj.lon = message.lon);
    message.storeNumber !== undefined && (obj.storeNumber = message.storeNumber);
    return obj;
  },

  create(base?: DeepPartial<Location>): Location {
    return Location.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Location>): Location {
    const message = createBaseLocation();
    message.address = object.address ?? "";
    message.city = object.city ?? "";
    message.region = object.region ?? "";
    message.postalCode = object.postalCode ?? "";
    message.country = object.country ?? "";
    message.lat = object.lat ?? 0;
    message.lon = object.lon ?? 0;
    message.storeNumber = object.storeNumber ?? "";
    return message;
  },
};

function createBasePaymentMeta(): PaymentMeta {
  return {
    byOrderOf: "",
    payee: "",
    payer: "",
    paymentMethod: "",
    paymentProcessor: "",
    ppdId: "",
    reason: "",
    referenceNumber: "",
  };
}

export const PaymentMeta = {
  encode(message: PaymentMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.byOrderOf !== "") {
      writer.uint32(10).string(message.byOrderOf);
    }
    if (message.payee !== "") {
      writer.uint32(18).string(message.payee);
    }
    if (message.payer !== "") {
      writer.uint32(26).string(message.payer);
    }
    if (message.paymentMethod !== "") {
      writer.uint32(34).string(message.paymentMethod);
    }
    if (message.paymentProcessor !== "") {
      writer.uint32(42).string(message.paymentProcessor);
    }
    if (message.ppdId !== "") {
      writer.uint32(50).string(message.ppdId);
    }
    if (message.reason !== "") {
      writer.uint32(58).string(message.reason);
    }
    if (message.referenceNumber !== "") {
      writer.uint32(66).string(message.referenceNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.byOrderOf = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.payee = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.payer = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.paymentMethod = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.paymentProcessor = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.ppdId = reader.string();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.reason = reader.string();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.referenceNumber = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PaymentMeta {
    return {
      byOrderOf: isSet(object.byOrderOf) ? String(object.byOrderOf) : "",
      payee: isSet(object.payee) ? String(object.payee) : "",
      payer: isSet(object.payer) ? String(object.payer) : "",
      paymentMethod: isSet(object.paymentMethod) ? String(object.paymentMethod) : "",
      paymentProcessor: isSet(object.paymentProcessor) ? String(object.paymentProcessor) : "",
      ppdId: isSet(object.ppdId) ? String(object.ppdId) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
      referenceNumber: isSet(object.referenceNumber) ? String(object.referenceNumber) : "",
    };
  },

  toJSON(message: PaymentMeta): unknown {
    const obj: any = {};
    message.byOrderOf !== undefined && (obj.byOrderOf = message.byOrderOf);
    message.payee !== undefined && (obj.payee = message.payee);
    message.payer !== undefined && (obj.payer = message.payer);
    message.paymentMethod !== undefined && (obj.paymentMethod = message.paymentMethod);
    message.paymentProcessor !== undefined && (obj.paymentProcessor = message.paymentProcessor);
    message.ppdId !== undefined && (obj.ppdId = message.ppdId);
    message.reason !== undefined && (obj.reason = message.reason);
    message.referenceNumber !== undefined && (obj.referenceNumber = message.referenceNumber);
    return obj;
  },

  create(base?: DeepPartial<PaymentMeta>): PaymentMeta {
    return PaymentMeta.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PaymentMeta>): PaymentMeta {
    const message = createBasePaymentMeta();
    message.byOrderOf = object.byOrderOf ?? "";
    message.payee = object.payee ?? "";
    message.payer = object.payer ?? "";
    message.paymentMethod = object.paymentMethod ?? "";
    message.paymentProcessor = object.paymentProcessor ?? "";
    message.ppdId = object.ppdId ?? "";
    message.reason = object.reason ?? "";
    message.referenceNumber = object.referenceNumber ?? "";
    return message;
  },
};

function createBaseFinancialMetrics(): FinancialMetrics {
  return { totalRevenue: 0, totalRevenueChange: 0, totalRevenueChangePercentage: 0 };
}

export const FinancialMetrics = {
  encode(message: FinancialMetrics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalRevenue !== 0) {
      writer.uint32(153).double(message.totalRevenue);
    }
    if (message.totalRevenueChange !== 0) {
      writer.uint32(161).double(message.totalRevenueChange);
    }
    if (message.totalRevenueChangePercentage !== 0) {
      writer.uint32(169).double(message.totalRevenueChangePercentage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinancialMetrics {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinancialMetrics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 19:
          if (tag != 153) {
            break;
          }

          message.totalRevenue = reader.double();
          continue;
        case 20:
          if (tag != 161) {
            break;
          }

          message.totalRevenueChange = reader.double();
          continue;
        case 21:
          if (tag != 169) {
            break;
          }

          message.totalRevenueChangePercentage = reader.double();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FinancialMetrics {
    return {
      totalRevenue: isSet(object.totalRevenue) ? Number(object.totalRevenue) : 0,
      totalRevenueChange: isSet(object.totalRevenueChange) ? Number(object.totalRevenueChange) : 0,
      totalRevenueChangePercentage: isSet(object.totalRevenueChangePercentage)
        ? Number(object.totalRevenueChangePercentage)
        : 0,
    };
  },

  toJSON(message: FinancialMetrics): unknown {
    const obj: any = {};
    message.totalRevenue !== undefined && (obj.totalRevenue = message.totalRevenue);
    message.totalRevenueChange !== undefined && (obj.totalRevenueChange = message.totalRevenueChange);
    message.totalRevenueChangePercentage !== undefined &&
      (obj.totalRevenueChangePercentage = message.totalRevenueChangePercentage);
    return obj;
  },

  create(base?: DeepPartial<FinancialMetrics>): FinancialMetrics {
    return FinancialMetrics.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FinancialMetrics>): FinancialMetrics {
    const message = createBaseFinancialMetrics();
    message.totalRevenue = object.totalRevenue ?? 0;
    message.totalRevenueChange = object.totalRevenueChange ?? 0;
    message.totalRevenueChangePercentage = object.totalRevenueChangePercentage ?? 0;
    return message;
  },
};

/** The FinancialData service definition. */
export type FinanceServiceDefinition = typeof FinanceServiceDefinition;
export const FinanceServiceDefinition = {
  name: "FinanceService",
  fullName: "api.finance.v1.FinanceService",
  methods: {
    /** Returns a list of financial data points for a given company. */
    saveFinancialItem: {
      name: "SaveFinancialItem",
      requestType: SaveFinancialItemRequest,
      requestStream: false,
      responseType: SaveFinancialItemResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [new Uint8Array([16, 58, 1, 42, 34, 11, 47, 118, 49, 47, 102, 105, 110, 97, 110, 99, 101])],
        },
      },
    },
    getFinancialItems: {
      name: "GetFinancialItems",
      requestType: GetFinancialItemsRequest,
      requestStream: false,
      responseType: GetFinancialItemsResponse,
      responseStream: false,
      options: {
        _unknownFields: { 578365826: [new Uint8Array([13, 18, 11, 47, 118, 49, 47, 102, 105, 110, 97, 110, 99, 101])] },
      },
    },
  },
} as const;

export interface FinanceServiceImplementation<CallContextExt = {}> {
  /** Returns a list of financial data points for a given company. */
  saveFinancialItem(
    request: SaveFinancialItemRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SaveFinancialItemResponse>>;
  getFinancialItems(
    request: GetFinancialItemsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetFinancialItemsResponse>>;
}

export interface FinanceServiceClient<CallOptionsExt = {}> {
  /** Returns a list of financial data points for a given company. */
  saveFinancialItem(
    request: DeepPartial<SaveFinancialItemRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SaveFinancialItemResponse>;
  getFinancialItems(
    request: DeepPartial<GetFinancialItemsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetFinancialItemsResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
