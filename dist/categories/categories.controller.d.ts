import { CategoriesService } from "src/categories/categories.service";
import { CreateCategoryDto } from "src/categories/dto/create-category.dto";
import { Category } from "src/categories/schemas/category.schema";
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
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
