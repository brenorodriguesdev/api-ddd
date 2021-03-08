export class AlreadyExistError extends Error {
    constructor (paramName: string) {
      super(`O ${paramName} já está cadastrado em nosso banco de dados.`)
      this.name = 'AlreadyExistError'
    }
  }