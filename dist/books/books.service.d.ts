import { Model } from "mongoose";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { Book, BookDocument } from "./schemas/book.schema";
export declare class BooksService {
    private bookModel;
    constructor(bookModel: Model<BookDocument>);
    getAll(): Promise<{
        code: number;
        data: Book[];
        message: string;
    }>;
    getOne(id: any): Promise<{
        code: number;
        data: Book;
        message: string;
    }>;
    create(createBookDto: CreateBookDto): Promise<{
        code: number;
        data: Book;
        message: string;
    }>;
    remove(id: any): Promise<{
        code: number;
        data: Book;
        message: string;
    }>;
    update(id: any, bookDto: UpdateBookDto): Promise<{
        code: number;
        data: Book;
        message: string;
    }>;
    getSearchedBooks(prop: any): Promise<{
        code: number;
        data: Book[];
        message: string;
    }>;
    getCategoryBooks(category: any): Promise<{
        code: number;
        data: any;
        message: string;
    }>;
}
