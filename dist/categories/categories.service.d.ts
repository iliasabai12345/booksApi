import { Model } from "mongoose";
import { BooksService } from "src/books/books.service";
import { CreateCategoryDto } from "src/categories/dto/create-category.dto";
import { Category, CategoryDocument } from "src/categories/schemas/category.schema";
export declare class CategoriesService {
    private categoryModel;
    private readonly booksService;
    constructor(categoryModel: Model<CategoryDocument>, booksService: BooksService);
    getAll(): Promise<{
        code: number;
        data: Category[];
        message: string;
    }>;
    create(createBookDto: CreateCategoryDto): Promise<{
        code: number;
        data: Category;
        message: string;
    }>;
    getContents(): Promise<{
        code: number;
        data: Category[];
        message: string;
    }>;
}
