import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('dinos')
export class Dino {
  @PrimaryColumn()
  id: string;

  @Column() name: string;
  @Column() diet: string;
  @Column() temperament: string;
  @Column() tameable: boolean;
  @Column() rideable: boolean;
  @Column() breedable: boolean;
  @Column() saddle: string;
}
