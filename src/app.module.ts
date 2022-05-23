import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';


@Module({
  imports: [
    ProductsModule, 
    MongooseModule.forRoot('mongodb+srv://IlyaMalyukov:IAAiaa200619@cluster0.aig6d.mongodb.net/?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
