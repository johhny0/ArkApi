import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('weapons')
export class Weapon {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  category: string;
}
