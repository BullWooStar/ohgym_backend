import { Column, Entity } from 'typeorm';
import { CommonBigPKEntity } from './common.entity';

@Entity('User')
export class UserEntity extends CommonBigPKEntity {
  @Column('varchar', { unique: true, nullable: false })
  email: string | undefined;

  @Column('varchar', { unique: false, nullable: false })
  password: string | undefined;
}
