import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {CategoriesController} from "src/categories/categories.controller";
import {Category, CategorySchema} from "src/categories/schemas/category.schema";
import {CategoriesService} from './categories.service';

@Module({
    imports: [MongooseModule.forFeature([{name: Category.name, schema: CategorySchema}])],
    providers: [CategoriesService],
    controllers: [CategoriesController]
})
export class CategoriesModule {
}
