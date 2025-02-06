import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { CompanytypeModule } from './companytype/companytype.module';

@Module({
  imports: [
    ConfigModule.forRoot(),  // Ensure this is at the top
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: String(process.env.DB_PASSWORD),
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    CompanyModule,
    UserModule,
    AuthModule,
    CompanytypeModule,
  ],
  controllers: [AppController], // 👈 Add AppController here
  providers: [AppService], // 👈 Add AppService here
})
export class AppModule {}
