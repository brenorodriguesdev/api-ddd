import { AddAccountRepository } from "../../data/contracts/add-account-repository";
import { AccountDTO } from "./models/account";
import { AccountModel } from "../../domain/models/account";
import { AccountDataModel } from "../../domain/useCases/add-account";
import { getRepository } from "typeorm";
import { GetAccountRepository } from "../../data/contracts/get-account-repository";

export class AccountRepositoryTypeORM implements AddAccountRepository, GetAccountRepository {

    constructor() { }
    
    async add(accountData: AccountDataModel): Promise<AccountModel> {
        const accountRepository = getRepository(AccountDTO);

        await accountRepository.create(accountData);

        return await accountRepository.save(accountData);
    }

    async getByEmail(email: string) {
        const accountRepository = getRepository(AccountDTO);
        return await accountRepository.findOne({ where: { email } });
    }
    
}