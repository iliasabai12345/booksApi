"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const books_service_1 = require("../books/books.service");
const category_schema_1 = require("./schemas/category.schema");
const books_1 = require("../shared/books/books");
let CategoriesService = class CategoriesService {
    constructor(categoryModel, booksService) {
        this.categoryModel = categoryModel;
        this.booksService = booksService;
    }
    async getAll() {
        try {
            const data = await this.categoryModel.find().exec();
            return {
                code: 0,
                data,
                message: "Категорий успешно загружены"
            };
        }
        catch (e) {
            return {
                code: 1,
                data: [],
                message: e
            };
        }
    }
    async create(createBookDto) {
        try {
            const newBook = new this.categoryModel(createBookDto);
            const data = await newBook.save();
            return {
                code: 0,
                data,
                message: `Категория ${data.title} успешно загружено!`
            };
        }
        catch (e) {
            return {
                code: 1,
                data: null,
                message: e
            };
        }
    }
    async getContents() {
        try {
            if (!books_1.BooksTemp.data.length) {
                const books = await this.booksService.getAll();
                books_1.BooksTemp.data = books.data;
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
                    books: books_1.BooksTemp.data.filter(book => book.category === category).splice(0, 5)
                });
            });
            return {
                code: 0,
                data,
                message: "Контент успешно загружены"
            };
        }
        catch (e) {
            return {
                code: 1,
                data: [],
                message: e
            };
        }
    }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(category_schema_1.Category.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        books_service_1.BooksService])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map