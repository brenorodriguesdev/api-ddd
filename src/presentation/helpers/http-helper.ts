import { HttpResponse } from "../contracts/http";
import { ServerError } from "../errors/server-error";

export const badRequest = (error: Error): HttpResponse => ({
    statusNumber: 400,
    body: error.message
})

export const ok = (data: any): HttpResponse => ({
    statusNumber: 200,
    body: data
})

export const serverError = (): HttpResponse => ({
    statusNumber: 500,
    body: new ServerError()
})