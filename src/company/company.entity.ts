import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CompanyType } from '../companytype/companytype.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  email: string;

  @ManyToOne(() => CompanyType, (companyType) => companyType.companies)
  companyType: CompanyType;
}
