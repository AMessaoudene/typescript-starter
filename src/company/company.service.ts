import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';
import { CompanyType } from '../companytype/companytype.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
    @InjectRepository(CompanyType)
    private readonly companyTypeRepository: Repository<CompanyType>,
  ) {}

  async createCompany(name: string, email: string, companyTypeId: number): Promise<Company> {
    const companyType = await this.companyTypeRepository.findOne({ where: { id: companyTypeId } });
    if (!companyType) throw new Error('Company type not found');

    const company = this.companyRepository.create({ name, email, companyType });
    return this.companyRepository.save(company);
  }

  async getCompanies(): Promise<Company[]> {
    return this.companyRepository.find({ relations: ['companyType'] });
  }
}
