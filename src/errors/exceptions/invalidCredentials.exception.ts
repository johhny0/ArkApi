import { ArkException } from './ark.exception';

export class InvalidCredentialsException extends ArkException {
  constructor() {
    super('Username or password are wrong!');
  }
}
