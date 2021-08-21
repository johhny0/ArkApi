import { BadRequestException } from '@nestjs/common';

export class ValidationException extends BadRequestException {
  constructor(public message: string) {
    super(message);
  }
}
