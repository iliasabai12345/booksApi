import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {BooksService} from "src/books/books.service";
import {CreateCategoryDto} from "src/categories/dto/create-category.dto";
import {Category, CategoryDocument} from "src/categories/schemas/category.schema";
import {BooksTemp} from "src/shared/books/books";

@Injectable()
export class CategoriesService {
    constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
                private readonly booksService: BooksService
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

    // Получение контента из категорий
    // todo Метод отстойный потом требует переделки
    async getContents(): Promise<{ code: number, data: Category[], message: string }> {
        try {
            if (!BooksTemp.data.length) {
                const books = await this.booksService.getAll();
                BooksTemp.data = books.data;
            }
            const category_keywords = [];
            const categories = await this.categoryModel.find().exec();
            const content_categories = categories.filter(book => book.is_content);
            content_categories.forEach(category => {
                !category_keywords.includes(category.keyword) && category_keywords.push(category.keyword);
            });
            const data = [];
            category_keywords.forEach(category => {
                data.push({
                    category: category,
                    title: content_categories.find(res => res.keyword === category).title,
                    title_kk: content_categories.find(res => res.keyword === category).title_kk,
                    books: BooksTemp.data.filter(book => book.category === category).splice(0, 5)
                })
            })
            return {
                code: 0,
                data,
                message: "Контент успешно загружены"
            };
        } catch (e) {
            return {
                code: 1,
                data: [],
                message: e
            };
        }
    }
}
