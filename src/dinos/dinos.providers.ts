import { Connection } from 'typeorm';
import { Dino } from './entities/dino.entity';

export const dinosProviders = [
  {
    provide: 'DINO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Dino),
    inject: ['DATABASE_CONNECTION'],
  },
];
