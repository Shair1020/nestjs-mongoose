import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_URI } from './config';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot(MONGO_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
