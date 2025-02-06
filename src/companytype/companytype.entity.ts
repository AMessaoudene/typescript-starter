import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Company } from '../company/company.entity';

@Entity()
export class CompanyType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Company, (company) => company.companyType)
  companies: Company[];
}
