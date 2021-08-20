import { BadRequestException } from '@nestjs/common';

interface ErrorReturn {
  message: string;
}

export class ValidationException extends BadRequestException {
  constructor(public validationErrors: ErrorReturn[]) {
    super();
  }
}
