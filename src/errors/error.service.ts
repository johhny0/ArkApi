import { Injectable } from '@nestjs/common';
import { ArkException } from './exceptions/ark.exception';

export class ErrorMessage {
  constructor(public message: string) {}
}

@Injectable()
export class ErrorService {
  makeErrorMessage(exception: any) {
    if (exception instanceof ArkException) {
      return new ErrorMessage(exception.message);
    } else if (typeof exception === 'string') {
      return new ErrorMessage(exception as string);
    } else {
      return new ErrorMessage(exception.message);
    }
  }
}
