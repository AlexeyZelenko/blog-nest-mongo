import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module'

@Module({
    imports: [
        ProductsModule,
        MongooseModule.forRoot(`mongodb+srv://oleksii:0983267431qaz@cluster1.ss9hc.mongodb.net/products?retryWrites=true&w=majority`)
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
