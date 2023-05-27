import {CacheInterceptor, CacheModule} from "@nestjs/cache-manager";
import {Module} from "@nestjs/common";
import {APP_INTERCEPTOR} from "@nestjs/core";
import {MongooseModule} from "@nestjs/mongoose";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {AuthModule} from './auth/auth.module';
import {BannersModule} from './banners/banners.module';
import {BooksModule} from "./books/books.module";
import {CartModule} from './cart/cart.module';
import {CategoriesModule} from './categories/categories.module';
import {LocationsModule} from './locations/locations.module';
import {OrdersModule} from './orders/orders.module';

@Module({
  imports: [
    BooksModule,
    MongooseModule.forRoot("mongodb+srv://iliasabaiportfolio:XgNf90nFvIJDAlxL@books.apunmnr.mongodb.net/?retryWrites=true&w=majority"),
    CacheModule.register({
      isGlobal: true,
      host: 'localhost',
      port: 6379,
    }),
    BannersModule,
    CategoriesModule,
    LocationsModule,
    AuthModule,
    CartModule,
    OrdersModule
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_INTERCEPTOR,
    useClass: CacheInterceptor
  }]
})
export class AppModule {
}
