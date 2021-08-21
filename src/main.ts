import {
  INestApplication,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationException } from './errors/validation.exception';
import { ValidationFilter } from './errors/validation.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new ValidationFilter());

  app.useGlobalPipes(globalValidationFilter());

  await app.listen(process.env.PORT || 3000);

  logRoutes(app);
}

function globalValidationFilter(): ValidationPipe {
  const validationPipe = new ValidationPipe({
    skipMissingProperties: false,
    exceptionFactory: (errors: ValidationError[]) => {
      const message = Object.values(errors.pop().constraints).pop();
      return new ValidationException(message);
    },
  });

  return validationPipe;
}

function logRoutes(app: INestApplication) {
  const server = app.getHttpServer();
  const router = server._events.request._router;

  const availableRoutes: [] = router.stack
    .map((layer) => {
      if (layer.route) {
        return {
          route: {
            path: layer.route?.path,
            method: layer.route?.stack[0].method,
          },
        };
      }
    })
    .filter((item) => item !== undefined);
  console.log(availableRoutes);
}

bootstrap();
