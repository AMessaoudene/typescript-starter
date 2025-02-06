import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyType } from './companytype.entity';

@Injectable()
export class CompanytypeService {
    constructor(
        @InjectRepository(CompanyType)
        private readonly companyTypeRepository: Repository<CompanyType>,
    ) {}

    async createCompanytype(name: string): Promise<CompanyType> {
        const companyType = this.companyTypeRepository.create({ name });
        return this.companyTypeRepository.save(companyType);
    }

    async getCompanytypes(): Promise<CompanyType[]> {
        return this.companyTypeRepository.find();
    }
}
