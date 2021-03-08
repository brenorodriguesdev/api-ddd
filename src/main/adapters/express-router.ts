import { Controller } from "../../presentation/contracts/controller"
import { Request, Response } from 'express'
import { HttpRequest } from "../../presentation/contracts/http"

export const adaptRouter = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            body: req.body
        }
        const httpResponse  = await controller.handle(httpRequest)
        res.status(httpResponse.statusNumber).json(httpResponse.body)
    }
}