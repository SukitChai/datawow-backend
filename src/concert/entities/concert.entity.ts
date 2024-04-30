import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Concert {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'int' })
  seat: number;
}
