export class MissingParamError extends Error {
  public readonly name = 'MissingParamError';

  constructor (params: string[]) {
    super(`Missing parameters: ${params.join(', ')}`)
  }
}
