import * as authModule from "./generated/auth/auth"
import * as notePurchaseAgreementModule from "./generated/notePurchaseAgreement/notePurchaseAgreement"

export default {
    ...authModule,
    ...notePurchaseAgreementModule
}

export const auth = authModule
export const notePurchaseAgreement = notePurchaseAgreementModule