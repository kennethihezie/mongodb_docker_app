import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'src/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

// we were using mongodb://admin:password@localhost:27017 before because the app was running locally
// when we deploy to server we use mongodb://admin:password@mongodb the @mongodb is because the network name is mongodb
@Module({
  imports: [ UsersModule, MongooseModule.forRoot('mongodb://admin:password@mongodb', { dbName: 'user_db' }) ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
