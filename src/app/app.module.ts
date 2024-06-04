import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'src/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ UsersModule, MongooseModule.forRoot('mongodb://admin:password@localhost:27017', { dbName: 'user_db' }) ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
