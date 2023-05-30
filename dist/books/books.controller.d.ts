import { BooksService } from "./books.service";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { Book } from "./schemas/book.schema";
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    getAll(): Promise<{
        code: number;
        data: Book[];
        message: string;
    }>;
    getOne(id: string): Promise<{
        code: number;
        data: Book;
        message: string;
    }>;
    create(createBookDto: CreateBookDto): Promise<{
        code: number;
        data: Book;
        message: string;
    }>;
    remove(id: string): Promise<{
        code: number;
        data: Book;
        message: string;
    }>;
    update(id: any, updateProductDto: UpdateBookDto): Promise<{
        code: number;
        data: Book;
        message: string;
    }>;
    getSearchedBooks(prop: string): Promise<{
        code: number;
        data: Book[];
        message: string;
    }>;
    getCategoryBooks(category: string): Promise<{
        code: number;
        data: Book[];
        message: string;
    }>;
}
