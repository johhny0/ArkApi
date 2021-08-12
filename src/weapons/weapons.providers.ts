import { Connection } from 'typeorm';
import { Weapon } from './entities/weapon.entity';

export const weaponsProviders = [
  {
    provide: 'WEAPON_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Weapon),
    inject: ['DATABASE_CONNECTION'],
  },
];
