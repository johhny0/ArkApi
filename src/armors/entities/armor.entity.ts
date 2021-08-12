import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('armors')
export class Armor {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
}
