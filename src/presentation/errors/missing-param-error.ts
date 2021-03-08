export class MissingParamError extends Error {
    constructor (paramName: string) {
      super(`O campo ${paramName} não foi preenchido.`)
      this.name = 'MissingParamError'
    }
  }