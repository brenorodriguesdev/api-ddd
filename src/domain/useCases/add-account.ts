import { AccountModel } from "../models/account";

export interface AccountDataModel {
    email: string
    name: string
    password: string
}

export default interface AddAccount {
    add(account : AccountDataModel): Promise<AccountModel>
}