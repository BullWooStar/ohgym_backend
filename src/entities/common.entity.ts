import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class CommonBigPKEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id!: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;
}
