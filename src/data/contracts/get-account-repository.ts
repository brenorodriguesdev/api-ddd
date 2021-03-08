import { AccountModel } from "../../domain/models/account";

export interface GetAccountRepository {
    getByEmail(email: string): Promise<AccountModel>
}