import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'bosses' })
export class Boss {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
}
