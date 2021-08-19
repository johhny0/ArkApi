import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('users')
export class User {
  constructor() {
    this.id = uuid();
  }

  @PrimaryColumn()
  readonly id: string;

  // @Column()
  // name: string;

  @Column()
  username: string;

  @Column()
  password: string;
}
