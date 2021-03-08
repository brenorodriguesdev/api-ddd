import { Router } from 'express'
import { adaptRouter } from '../adapters/express-router'
import { makeSignUpController } from '../factories/signup-controller'

export default (router: Router):void => {
    router.post('/signup', adaptRouter(makeSignUpController()))
}