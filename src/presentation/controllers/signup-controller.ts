import AddAccount from "../../domain/useCases/add-account";
import { EmailValidator } from "../../validation/contracts/email-validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { AlreadyExistError } from "../errors/already-exist-error";
import { InvalidParamError } from "../errors/invalid-param-error";
import { MissingParamError } from "../errors/missing-param-error";
import { badRequest, ok, serverError } from "../helpers/http-helper";

export class SignUpController implements Controller {

    constructor(private readonly emailValidator: EmailValidator, private readonly addAccount: AddAccount) { }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

        try {
            const requiredFields = ['email', 'name', 'password', 'passwordConfirmation']

            for (let field of requiredFields) {
                if (!httpRequest.body[field]) {
                    return badRequest(new MissingParamError(field))
                }
            }

            const { email, name, password, passwordConfirmation } = httpRequest.body
            if (password !== passwordConfirmation) {
                return badRequest(new InvalidParamError('passwordConfirmation'))
            }

            const isValid = this.emailValidator.isValid(email)

            if (!isValid) {
                return badRequest(new InvalidParamError('email'))
            }

            const account = await this.addAccount.add({
                email,
                name,
                password
            })

            if (!account) {
                return badRequest(new AlreadyExistError("email"))
            }

            return ok(account)
        }
        catch (error) {
            console.log(error)
            return serverError()
        }
        
    }
}

