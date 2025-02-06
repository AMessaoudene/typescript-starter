import { Module } from '@nestjs/common';
import { CompanytypeService } from './companytype.service';
import { CompanytypeController } from './companytype.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyType } from './companytype.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyType])],
  providers: [CompanytypeService],
  controllers: [CompanytypeController]
})
export class CompanytypeModule {}
