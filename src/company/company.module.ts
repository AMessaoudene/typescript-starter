import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './company.entity';
import { CompanyType } from '../companytype/companytype.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Company, CompanyType])],
  providers: [CompanyService],
  controllers: [CompanyController]
})
export class CompanyModule {}
