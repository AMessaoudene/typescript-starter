import { Controller } from '@nestjs/common';
import { CompanytypeService } from './companytype.service';
import { Post, Body, HttpCode, Get } from '@nestjs/common';

@Controller('companytype')
export class CompanytypeController {
    constructor(private readonly companytypeService: CompanytypeService) {}

    @Post()
    @HttpCode(201)
    async createCompanytype(@Body() body: { name: string }) {
        return this.companytypeService.createCompanytype(body.name);
    }

    @Get()
    @HttpCode(200)
    async getCompanytypes() {
        return this.companytypeService.getCompanytypes();
    }
}
