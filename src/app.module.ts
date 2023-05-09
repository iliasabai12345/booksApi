import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BooksModule } from "./books/books.module";
import { MongooseModule } from "@nestjs/mongoose";
import { CacheInterceptor, CacheModule } from "@nestjs/cache-manager";
import { APP_INTERCEPTOR } from "@nestjs/core";
@Module({
  imports: [
    BooksModule,
    MongooseModule.forRoot("mongodb+srv://iliasabaiportfolio:XgNf90nFvIJDAlxL@books.apunmnr.mongodb.net/?retryWrites=true&w=majority"),
    CacheModule.register({
      isGlobal: true,
      host: 'localhost',
      port: 6379,
    })
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_INTERCEPTOR,
    useClass: CacheInterceptor
  }]
})
export class AppModule {
}
