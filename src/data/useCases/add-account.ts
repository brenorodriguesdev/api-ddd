import { AccountModel } from "../../domain/models/account";
import AddAccount, { AccountDataModel } from "../../domain/useCases/add-account"
import { AddAccountRepository } from "../contracts/add-account-repository";
import { Encrypter } from "../contracts/encrypter";
import { GetAccountRepository } from "../contracts/get-account-repository";

export class AddAccountService implements AddAccount {

    constructor(private readonly addAccountRepository :AddAccountRepository, private readonly getAccountRepository: GetAccountRepository, private readonly encrypter: Encrypter ) {}

    async add(accountData: AccountDataModel): Promise<AccountModel> {

        const alreadyAccount = await this.getAccountRepository.getByEmail(accountData.email)
        if (alreadyAccount) {
            return null
        }
        const passwordHashed = await this.encrypter.encrypt(accountData.password)
        accountData.password = passwordHashed
        const account = await this.addAccountRepository.add(accountData)
        return account

    }
}