import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}

    @Post()
    @HttpCode(201)
    async createCompany(@Body() body: { name: string; email: string; companyTypeId: number }) {
        return this.companyService.createCompany(body.name, body.email, body.companyTypeId);
    }

    @Get()
    @HttpCode(200)
    async getCompanies() {
        return this.companyService.getCompanies();
    }
}
