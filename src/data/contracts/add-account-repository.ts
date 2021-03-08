import { AccountModel } from "../../domain/models/account";
import { AccountDataModel } from "../../domain/useCases/add-account";

export interface AddAccountRepository {
    add(account : AccountDataModel): Promise<AccountModel>
}