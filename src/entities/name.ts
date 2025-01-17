import { Either, left, right } from '@/shared'
import { InvalidNameError } from '@/entities/errors'

export class Name {
    public readonly value: string

    private constructor (name: string) {
      this.value = name
    }

    public static create (name: string): Either<InvalidNameError, Name> {
      if (Name.validate(name)) {
        return right(new Name(name))
      }

      return left(new InvalidNameError(name))
    }

    public static validate (name: string): boolean {
      const trimmedName = name.trim()
      if (!trimmedName) {
        return false
      }

      if (trimmedName.length < 2) {
        return false
      }

      if (trimmedName.length > 256) {
        return false
      }

      return true
    }
}
