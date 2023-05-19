import {Body, Controller, Get, Post} from '@nestjs/common';
import {ApiBody, ApiCreatedResponse, ApiTags} from "@nestjs/swagger";
import {CategoriesService} from "src/categories/categories.service";
import {CreateCategoryDto} from "src/categories/dto/create-category.dto";
import {Category} from "src/categories/schemas/category.schema";

@Controller("categories")
@ApiTags("Categories")
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {
    }

    @Get("getCategories")
    getAll(): Promise<{ code: number; data: Category[]; message: string }> {
        return this.categoriesService.getAll();
    }

    //Запись данных
    @Post("addCategory")
    @ApiBody({type: CreateCategoryDto})
    @ApiCreatedResponse({
        description: 'Запись категорий на базу .',
        type: CreateCategoryDto,
    })
    create(@Body() createBookDto: CreateCategoryDto): Promise<{ code: number; data: Category; message: string }> {
        return this.categoriesService.create(createBookDto);
    }

    //Получение контента
    @Get("getContents")
    getContents(): Promise<{ code: number; data: Category[]; message: string }> {
        return this.categoriesService.getContents();
    }
}
