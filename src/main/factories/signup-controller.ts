import { AddAccountService } from "../../data/useCases/add-account";
import { BCryptAdapter } from "../../infra/cyptography/bcrypt-adapter";
import { AccountRepositoryTypeORM } from "../../infra/db/account-repository-typeorm";
import { EmailValidatorAdapter } from "../../infra/validators/email-validator-adapter";
import { SignUpController } from "../../presentation/controllers/signup-controller";

export const makeSignUpController = () : SignUpController => {
    const bcryptAdapter = new BCryptAdapter(12)
    const accountRepositoryTypeORM = new AccountRepositoryTypeORM()
    const addAccountService = new AddAccountService(accountRepositoryTypeORM, accountRepositoryTypeORM, bcryptAdapter)
    const emailValidator = new EmailValidatorAdapter()
    return new SignUpController(emailValidator, addAccountService)
}