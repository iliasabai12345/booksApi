import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CreateCategoryDto} from "src/categories/dto/create-category.dto";
import {Category, CategoryDocument} from "src/categories/schemas/category.schema";

@Injectable()
export class CategoriesService {
    constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>
    ) {
    }


    async getAll(): Promise<{ code: number, data: Category[], message: string }> {
        try {
            const data = await this.categoryModel.find().exec();
            return {
                code: 0,
                data,
                message: "Категорий успешно загружены"
            };
        } catch (e) {
            return {
                code: 1,
                data: [],
                message: e
            };
        }
    }

    async create(createBookDto: CreateCategoryDto): Promise<{ code: number, data: Category, message: string }> {
        try {
            const newBook = new this.categoryModel(createBookDto);
            const data = await newBook.save();
            return {
                code: 0,
                data,
                message: `Категория ${data.title} успешно загружено!`
            };
        } catch (e) {
            return {
                code: 1,
                data: null,
                message: e
            };
        }
    }

}
