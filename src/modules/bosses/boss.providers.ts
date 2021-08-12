import { Connection } from 'typeorm';
import { Boss } from './boss.entity';

export const bossProviders = [
  {
    provide: 'BOSS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Boss),
    inject: ['DATABASE_CONNECTION'],
  },
];
