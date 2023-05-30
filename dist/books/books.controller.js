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
exports.BooksController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const books_service_1 = require("./books.service");
const create_book_dto_1 = require("./dto/create-book.dto");
const update_book_dto_1 = require("./dto/update-book.dto");
let BooksController = class BooksController {
    constructor(booksService) {
        this.booksService = booksService;
    }
    getAll() {
        return this.booksService.getAll();
    }
    getOne(id) {
        return this.booksService.getOne(id);
    }
    create(createBookDto) {
        return this.booksService.create(createBookDto);
    }
    remove(id) {
        return this.booksService.remove(id);
    }
    update(id, updateProductDto) {
        return this.booksService.update(id, updateProductDto);
    }
    getSearchedBooks(prop) {
        return this.booksService.getSearchedBooks(prop);
    }
    getCategoryBooks(category) {
        return this.booksService.getCategoryBooks(category);
    }
};
__decorate([
    (0, common_1.Get)("getAllBooks"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("getOneBook/:id"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)("addBook"),
    (0, swagger_1.ApiBody)({ type: create_book_dto_1.CreateBookDto }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Запись книги на базу .',
        type: create_book_dto_1.CreateBookDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_dto_1.CreateBookDto]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)("deleteBook/:id"),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Удаление книги с базы',
        type: create_book_dto_1.CreateBookDto,
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)("updateBook/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_book_dto_1.UpdateBookDto]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "update", null);
__decorate([
    (0, common_1.Get)("getSearchedBooks/:prop"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)("prop")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "getSearchedBooks", null);
__decorate([
    (0, common_1.Get)("getCategoryBooks/:category"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)("category")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "getCategoryBooks", null);
BooksController = __decorate([
    (0, common_1.Controller)("books"),
    (0, swagger_1.ApiTags)("Books"),
    __metadata("design:paramtypes", [books_service_1.BooksService])
], BooksController);
exports.BooksController = BooksController;
//# sourceMappingURL=books.controller.js.map