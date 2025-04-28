import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  cin: number

  @Column()
  password: string;

  @Column()
  role: string;

  @Column({ nullable: true })
  refreshToken: string;
}