import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "api.finance.v1";
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
export declare const SaveFinancialItemRequest: {
    encode(message: SaveFinancialItemRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SaveFinancialItemRequest;
    fromJSON(object: any): SaveFinancialItemRequest;
    toJSON(message: SaveFinancialItemRequest): unknown;
    create(base?: DeepPartial<SaveFinancialItemRequest>): SaveFinancialItemRequest;
    fromPartial(object: DeepPartial<SaveFinancialItemRequest>): SaveFinancialItemRequest;
};
export declare const SaveFinancialItemResponse: {
    encode(_: SaveFinancialItemResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SaveFinancialItemResponse;
    fromJSON(_: any): SaveFinancialItemResponse;
    toJSON(_: SaveFinancialItemResponse): unknown;
    create(base?: DeepPartial<SaveFinancialItemResponse>): SaveFinancialItemResponse;
    fromPartial(_: DeepPartial<SaveFinancialItemResponse>): SaveFinancialItemResponse;
};
export declare const GetFinancialItemsRequest: {
    encode(message: GetFinancialItemsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetFinancialItemsRequest;
    fromJSON(object: any): GetFinancialItemsRequest;
    toJSON(message: GetFinancialItemsRequest): unknown;
    create(base?: DeepPartial<GetFinancialItemsRequest>): GetFinancialItemsRequest;
    fromPartial(object: DeepPartial<GetFinancialItemsRequest>): GetFinancialItemsRequest;
};
export declare const GetFinancialItemsResponse: {
    encode(message: GetFinancialItemsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetFinancialItemsResponse;
    fromJSON(object: any): GetFinancialItemsResponse;
    toJSON(message: GetFinancialItemsResponse): unknown;
    create(base?: DeepPartial<GetFinancialItemsResponse>): GetFinancialItemsResponse;
    fromPartial(object: DeepPartial<GetFinancialItemsResponse>): GetFinancialItemsResponse;
};
export declare const FinancialData: {
    encode(message: FinancialData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FinancialData;
    fromJSON(object: any): FinancialData;
    toJSON(message: FinancialData): unknown;
    create(base?: DeepPartial<FinancialData>): FinancialData;
    fromPartial(object: DeepPartial<FinancialData>): FinancialData;
};
export declare const Account: {
    encode(message: Account, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Account;
    fromJSON(object: any): Account;
    toJSON(message: Account): unknown;
    create(base?: DeepPartial<Account>): Account;
    fromPartial(object: DeepPartial<Account>): Account;
};
export declare const Balance: {
    encode(message: Balance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Balance;
    fromJSON(object: any): Balance;
    toJSON(message: Balance): unknown;
    create(base?: DeepPartial<Balance>): Balance;
    fromPartial(object: DeepPartial<Balance>): Balance;
};
export declare const Transaction: {
    encode(message: Transaction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Transaction;
    fromJSON(object: any): Transaction;
    toJSON(message: Transaction): unknown;
    create(base?: DeepPartial<Transaction>): Transaction;
    fromPartial(object: DeepPartial<Transaction>): Transaction;
};
export declare const Location: {
    encode(message: Location, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Location;
    fromJSON(object: any): Location;
    toJSON(message: Location): unknown;
    create(base?: DeepPartial<Location>): Location;
    fromPartial(object: DeepPartial<Location>): Location;
};
export declare const PaymentMeta: {
    encode(message: PaymentMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PaymentMeta;
    fromJSON(object: any): PaymentMeta;
    toJSON(message: PaymentMeta): unknown;
    create(base?: DeepPartial<PaymentMeta>): PaymentMeta;
    fromPartial(object: DeepPartial<PaymentMeta>): PaymentMeta;
};
export declare const FinancialMetrics: {
    encode(message: FinancialMetrics, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FinancialMetrics;
    fromJSON(object: any): FinancialMetrics;
    toJSON(message: FinancialMetrics): unknown;
    create(base?: DeepPartial<FinancialMetrics>): FinancialMetrics;
    fromPartial(object: DeepPartial<FinancialMetrics>): FinancialMetrics;
};
/** The FinancialData service definition. */
export declare type FinanceServiceDefinition = typeof FinanceServiceDefinition;
export declare const FinanceServiceDefinition: {
    readonly name: "FinanceService";
    readonly fullName: "api.finance.v1.FinanceService";
    readonly methods: {
        /** Returns a list of financial data points for a given company. */
        readonly saveFinancialItem: {
            readonly name: "SaveFinancialItem";
            readonly requestType: {
                encode(message: SaveFinancialItemRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SaveFinancialItemRequest;
                fromJSON(object: any): SaveFinancialItemRequest;
                toJSON(message: SaveFinancialItemRequest): unknown;
                create(base?: DeepPartial<SaveFinancialItemRequest>): SaveFinancialItemRequest;
                fromPartial(object: DeepPartial<SaveFinancialItemRequest>): SaveFinancialItemRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: SaveFinancialItemResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SaveFinancialItemResponse;
                fromJSON(_: any): SaveFinancialItemResponse;
                toJSON(_: SaveFinancialItemResponse): unknown;
                create(base?: DeepPartial<SaveFinancialItemResponse>): SaveFinancialItemResponse;
                fromPartial(_: DeepPartial<SaveFinancialItemResponse>): SaveFinancialItemResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 578365826: readonly [Uint8Array];
                };
            };
        };
        readonly getFinancialItems: {
            readonly name: "GetFinancialItems";
            readonly requestType: {
                encode(message: GetFinancialItemsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetFinancialItemsRequest;
                fromJSON(object: any): GetFinancialItemsRequest;
                toJSON(message: GetFinancialItemsRequest): unknown;
                create(base?: DeepPartial<GetFinancialItemsRequest>): GetFinancialItemsRequest;
                fromPartial(object: DeepPartial<GetFinancialItemsRequest>): GetFinancialItemsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetFinancialItemsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetFinancialItemsResponse;
                fromJSON(object: any): GetFinancialItemsResponse;
                toJSON(message: GetFinancialItemsResponse): unknown;
                create(base?: DeepPartial<GetFinancialItemsResponse>): GetFinancialItemsResponse;
                fromPartial(object: DeepPartial<GetFinancialItemsResponse>): GetFinancialItemsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 578365826: readonly [Uint8Array];
                };
            };
        };
    };
};
export interface FinanceServiceImplementation<CallContextExt = {}> {
    /** Returns a list of financial data points for a given company. */
    saveFinancialItem(request: SaveFinancialItemRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SaveFinancialItemResponse>>;
    getFinancialItems(request: GetFinancialItemsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetFinancialItemsResponse>>;
}
export interface FinanceServiceClient<CallOptionsExt = {}> {
    /** Returns a list of financial data points for a given company. */
    saveFinancialItem(request: DeepPartial<SaveFinancialItemRequest>, options?: CallOptions & CallOptionsExt): Promise<SaveFinancialItemResponse>;
    getFinancialItems(request: DeepPartial<GetFinancialItemsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetFinancialItemsResponse>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
