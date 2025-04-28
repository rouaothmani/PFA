import { Column, Entity, PrimaryColumn, Unique } from 'typeorm';

@Entity()
@Unique(['cin'])
export class User {
  @PrimaryColumn()
  cin: number;

  @Column()
  password: string;

  @Column({ nullable: true })
  refreshToken: string;
}