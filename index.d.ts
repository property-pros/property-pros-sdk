import * as authModule from "./generated/auth/auth";
import * as notePurchaseAgreementModule from "./generated/notePurchaseAgreement/notePurchaseAgreement";
declare const _default: {
    protobufPackage: "notepurchaseagreement";
    NotePurchaseAgreement: {
        encode(message: notePurchaseAgreementModule.NotePurchaseAgreement, writer?: _m0.Writer): _m0.Writer;
        decode(input: any, length?: number): notePurchaseAgreementModule.NotePurchaseAgreement;
        fromJSON(object: any): notePurchaseAgreementModule.NotePurchaseAgreement;
        toJSON(message: notePurchaseAgreementModule.NotePurchaseAgreement): unknown;
        fromPartial(object: {
            Id?: string;
            FirstName?: string;
            LastName?: string;
            DateOfBirth?: string;
            HomeAddress?: string;
            EmailAddress?: string;
            PhoneNumber?: string;
            SocialSecurity?: string;
            FundsCommitted?: number;
        }): notePurchaseAgreementModule.NotePurchaseAgreement;
    };
    GetNotePurchaseAgreementDocRequest: {
        encode(message: notePurchaseAgreementModule.GetNotePurchaseAgreementDocRequest, writer?: _m0.Writer): _m0.Writer;
        decode(input: any, length?: number): notePurchaseAgreementModule.GetNotePurchaseAgreementDocRequest;
        fromJSON(object: any): notePurchaseAgreementModule.GetNotePurchaseAgreementDocRequest;
        toJSON(message: notePurchaseAgreementModule.GetNotePurchaseAgreementDocRequest): unknown;
        fromPartial(object: {
            payload?: {
                Id?: string;
                FirstName?: string;
                LastName?: string;
                DateOfBirth?: string;
                HomeAddress?: string;
                EmailAddress?: string;
                PhoneNumber?: string;
                SocialSecurity?: string;
                FundsCommitted?: number;
            };
        }): notePurchaseAgreementModule.GetNotePurchaseAgreementDocRequest;
    };
    GetNotePurchaseAgreementDocResponse: {
        encode(message: notePurchaseAgreementModule.GetNotePurchaseAgreementDocResponse, writer?: _m0.Writer): _m0.Writer;
        decode(input: any, length?: number): notePurchaseAgreementModule.GetNotePurchaseAgreementDocResponse;
        fromJSON(object: any): notePurchaseAgreementModule.GetNotePurchaseAgreementDocResponse;
        toJSON(message: notePurchaseAgreementModule.GetNotePurchaseAgreementDocResponse): unknown;
        fromPartial(object: {
            fileContent?: Uint8Array;
        }): notePurchaseAgreementModule.GetNotePurchaseAgreementDocResponse;
    };
    SaveNotePurchaseAgreementRequest: {
        encode(message: notePurchaseAgreementModule.SaveNotePurchaseAgreementRequest, writer?: _m0.Writer): _m0.Writer;
        decode(input: any, length?: number): notePurchaseAgreementModule.SaveNotePurchaseAgreementRequest;
        fromJSON(object: any): notePurchaseAgreementModule.SaveNotePurchaseAgreementRequest;
        toJSON(message: notePurchaseAgreementModule.SaveNotePurchaseAgreementRequest): unknown;
        fromPartial(object: {
            payload?: {
                Id?: string;
                FirstName?: string;
                LastName?: string;
                DateOfBirth?: string;
                HomeAddress?: string;
                EmailAddress?: string;
                PhoneNumber?: string;
                SocialSecurity?: string;
                FundsCommitted?: number;
            };
        }): notePurchaseAgreementModule.SaveNotePurchaseAgreementRequest;
    };
    SaveNotePurchaseAgreementResponse: {
        encode(message: notePurchaseAgreementModule.SaveNotePurchaseAgreementResponse, writer?: _m0.Writer): _m0.Writer;
        decode(input: any, length?: number): notePurchaseAgreementModule.SaveNotePurchaseAgreementResponse;
        fromJSON(object: any): notePurchaseAgreementModule.SaveNotePurchaseAgreementResponse;
        toJSON(message: notePurchaseAgreementModule.SaveNotePurchaseAgreementResponse): unknown;
        fromPartial(object: {
            Id?: string;
        }): notePurchaseAgreementModule.SaveNotePurchaseAgreementResponse;
    };
    NotePurchaseAgreementServiceDefinition: {
        readonly name: "NotePurchaseAgreementService";
        readonly fullName: "notepurchaseagreement.NotePurchaseAgreementService";
        readonly methods: {
            readonly getNotePurchaseAgreementDoc: {
                readonly name: "GetNotePurchaseAgreementDoc";
                readonly requestType: {
                    encode(message: notePurchaseAgreementModule.GetNotePurchaseAgreementDocRequest, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): notePurchaseAgreementModule.GetNotePurchaseAgreementDocRequest;
                    fromJSON(object: any): notePurchaseAgreementModule.GetNotePurchaseAgreementDocRequest;
                    toJSON(message: notePurchaseAgreementModule.GetNotePurchaseAgreementDocRequest): unknown;
                    fromPartial(object: {
                        payload?: {
                            Id?: string;
                            FirstName?: string;
                            LastName?: string;
                            DateOfBirth?: string;
                            HomeAddress?: string;
                            EmailAddress?: string;
                            PhoneNumber?: string;
                            SocialSecurity?: string;
                            FundsCommitted?: number;
                        };
                    }): notePurchaseAgreementModule.GetNotePurchaseAgreementDocRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: notePurchaseAgreementModule.GetNotePurchaseAgreementDocResponse, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): notePurchaseAgreementModule.GetNotePurchaseAgreementDocResponse;
                    fromJSON(object: any): notePurchaseAgreementModule.GetNotePurchaseAgreementDocResponse;
                    toJSON(message: notePurchaseAgreementModule.GetNotePurchaseAgreementDocResponse): unknown;
                    fromPartial(object: {
                        fileContent?: Uint8Array;
                    }): notePurchaseAgreementModule.GetNotePurchaseAgreementDocResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly saveNotePurchaseAgreement: {
                readonly name: "SaveNotePurchaseAgreement";
                readonly requestType: {
                    encode(message: notePurchaseAgreementModule.SaveNotePurchaseAgreementRequest, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): notePurchaseAgreementModule.SaveNotePurchaseAgreementRequest;
                    fromJSON(object: any): notePurchaseAgreementModule.SaveNotePurchaseAgreementRequest;
                    toJSON(message: notePurchaseAgreementModule.SaveNotePurchaseAgreementRequest): unknown;
                    fromPartial(object: {
                        payload?: {
                            Id?: string;
                            FirstName?: string;
                            LastName?: string;
                            DateOfBirth?: string;
                            HomeAddress?: string;
                            EmailAddress?: string;
                            PhoneNumber?: string;
                            SocialSecurity?: string;
                            FundsCommitted?: number;
                        };
                    }): notePurchaseAgreementModule.SaveNotePurchaseAgreementRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: notePurchaseAgreementModule.SaveNotePurchaseAgreementResponse, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): notePurchaseAgreementModule.SaveNotePurchaseAgreementResponse;
                    fromJSON(object: any): notePurchaseAgreementModule.SaveNotePurchaseAgreementResponse;
                    toJSON(message: notePurchaseAgreementModule.SaveNotePurchaseAgreementResponse): unknown;
                    fromPartial(object: {
                        Id?: string;
                    }): notePurchaseAgreementModule.SaveNotePurchaseAgreementResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
        };
    };
    User: {
        encode(message: authModule.User, writer?: _m0.Writer): _m0.Writer;
        decode(input: any, length?: number): authModule.User;
        fromJSON(object: any): authModule.User;
        toJSON(message: authModule.User): unknown;
        fromPartial(object: {
            id?: string;
            emailAddress?: string;
            password?: string;
        }): authModule.User;
    };
    AuthenticateUserRequest: {
        encode(message: authModule.AuthenticateUserRequest, writer?: _m0.Writer): _m0.Writer;
        decode(input: any, length?: number): authModule.AuthenticateUserRequest;
        fromJSON(object: any): authModule.AuthenticateUserRequest;
        toJSON(message: authModule.AuthenticateUserRequest): unknown;
        fromPartial(object: {
            payload?: {
                id?: string;
                emailAddress?: string;
                password?: string;
            };
        }): authModule.AuthenticateUserRequest;
    };
    AuthenticateUserResponse: {
        encode(message: authModule.AuthenticateUserResponse, writer?: _m0.Writer): _m0.Writer;
        decode(input: any, length?: number): authModule.AuthenticateUserResponse;
        fromJSON(object: any): authModule.AuthenticateUserResponse;
        toJSON(message: authModule.AuthenticateUserResponse): unknown;
        fromPartial(object: {
            authenticated?: boolean;
            errorMessage?: string;
        }): authModule.AuthenticateUserResponse;
    };
    AuthenticationServiceDefinition: {
        readonly name: "AuthenticationService";
        readonly fullName: "auth.AuthenticationService";
        readonly methods: {
            readonly authenticateUser: {
                readonly name: "AuthenticateUser";
                readonly requestType: {
                    encode(message: authModule.AuthenticateUserRequest, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): authModule.AuthenticateUserRequest;
                    fromJSON(object: any): authModule.AuthenticateUserRequest;
                    toJSON(message: authModule.AuthenticateUserRequest): unknown;
                    fromPartial(object: {
                        payload?: {
                            id?: string;
                            emailAddress?: string;
                            password?: string;
                        };
                    }): authModule.AuthenticateUserRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: authModule.AuthenticateUserResponse, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): authModule.AuthenticateUserResponse;
                    fromJSON(object: any): authModule.AuthenticateUserResponse;
                    toJSON(message: authModule.AuthenticateUserResponse): unknown;
                    fromPartial(object: {
                        authenticated?: boolean;
                        errorMessage?: string;
                    }): authModule.AuthenticateUserResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
        };
    };
};
export default _default;
export declare const auth: typeof authModule;
export declare const notePurchaseAgreement: typeof notePurchaseAgreementModule;
