import { Connection } from 'typeorm';
import { Armor } from './entities/armor.entity';

export const armorsProviders = [
  {
    provide: 'ARMOR_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Armor),
    inject: ['DATABASE_CONNECTION'],
  },
];
