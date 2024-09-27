import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserRepositoryService } from './user/user.repository.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule], // Ensure ConfigModule is imported for dynamic DB connection
      useFactory: async (configService: ConfigService) => ({
        uri:
          configService.get<string>('MONGODB_URI') ||
          'mongodb+srv://nikhilbaisoya9:D3zLZ7DYm7dL1d9n@cluster0.k33vu.mongodb.net/', // MongoDB URI from environment variables
      }),
      inject: [ConfigService], // Inject ConfigService to access the .env variables
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
