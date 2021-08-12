import { Connection } from 'typeorm';
import { Boss } from './entity/bosses.entity';

export const bossesProviders = [
  {
    provide: 'BOSS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Boss),
    inject: ['DATABASE_CONNECTION'],
  },
];
