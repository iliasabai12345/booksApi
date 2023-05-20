import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {BooksService} from "src/books/books.service";
import {Book, BookSchema} from "src/books/schemas/book.schema";
import {CategoriesController} from "src/categories/categories.controller";
import {Category, CategorySchema} from "src/categories/schemas/category.schema";
import {CategoriesService} from './categories.service';

@Module({
    imports: [MongooseModule.forFeature([{name: Category.name, schema: CategorySchema}]),
        MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }])],
    providers: [CategoriesService,BooksService],
    controllers: [CategoriesController]
})
export class CategoriesModule {
}
