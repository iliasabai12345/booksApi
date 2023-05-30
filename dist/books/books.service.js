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
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const books_1 = require("../shared/books/books");
const book_schema_1 = require("./schemas/book.schema");
let BooksService = class BooksService {
    constructor(bookModel) {
        this.bookModel = bookModel;
    }
    async getAll() {
        try {
            const value = books_1.BooksTemp.data;
            let data;
            if (value.length) {
                data = value;
            }
            else {
                data = await this.bookModel.find().exec();
                books_1.BooksTemp.data = data;
            }
            return {
                code: 0,
                data,
                message: "Книги успешно загружены"
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
    async getOne(id) {
        try {
            const data = await this.bookModel.findById(id);
            return {
                code: 0,
                data,
                message: "Книга успешно загружены"
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
    async create(createBookDto) {
        try {
            const newBook = new this.bookModel(createBookDto);
            const data = await newBook.save();
            return {
                code: 0,
                data,
                message: `Книга ${data.title} успешно загружено!`
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
    async remove(id) {
        try {
            const data = await this.bookModel.findByIdAndDelete(id);
            return {
                code: 0,
                data,
                message: `Книга ${data.title} успешно удалено`
            };
        }
        catch (e) {
            return {
                code: 1,
                data: null,
                message: `Произошла ошибка во время удаления книги`
            };
        }
    }
    async update(id, bookDto) {
        try {
            const data = await this.bookModel.findByIdAndUpdate(id, bookDto, { new: true });
            return {
                code: 0,
                data,
                message: `Книга ${data.title} успешно обновлено!`
            };
        }
        catch (e) {
            return {
                code: 1,
                data: null,
                message: "Произошла ошибка во время обновления книги"
            };
        }
    }
    async getSearchedBooks(prop) {
        try {
            const value = books_1.BooksTemp.data;
            let data;
            if (value.length) {
                data = value.filter(book => book.title.toLowerCase().includes(prop.toLowerCase()));
            }
            else {
                data = await this.bookModel.find().exec();
                books_1.BooksTemp.data = data;
            }
            return {
                code: 0,
                data,
                message: `Найдено ${data.length} книг`
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
    async getCategoryBooks(category) {
        try {
            const books = await this.bookModel.find({ category });
            if (!books.length) {
                return {
                    code: 0,
                    data: null,
                    message: `Не найдено книг по данной категорий`
                };
            }
            const data = {
                category: books[0].category,
                category_name_kz: books[0].category_name_kz,
                category_name_ru: books[0].category_name_ru,
                books: books
            };
            return {
                code: 0,
                data,
                message: `Категория успешно загружено`
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
};
BooksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(book_schema_1.Book.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BooksService);
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map