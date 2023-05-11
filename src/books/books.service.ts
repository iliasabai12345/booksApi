import {Injectable} from "@nestjs/common";
import {CreateBookDto} from "./dto/create-book.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Book, BookDocument} from "./schemas/book.schema";
import {Model} from "mongoose";
import {UpdateBookDto} from "./dto/update-book.dto";

@Injectable()
export class BooksService {

  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>
  ) {
  }

  async getAll(): Promise<{ code: number, data: Book[], message: string }> {
    try {
      const data = await this.bookModel.find().exec();
      return {
        code: 0,
        data,
        message: "Книги успешно загружены"
      };
    } catch (e) {
      return {
        code: 1,
        data: [],
        message: e
      };
    }
  }

  async getOne(id): Promise<{ code: number, data: Book, message: string }> {
    try {
      const data = await this.bookModel.findById(id);
      return {
        code: 0,
        data,
        message: "Книга успешно загружены"
      };
    } catch (e) {
      return {
        code: 1,
        data: null,
        message: e
      };
    }
  }

  async create(createBookDto: CreateBookDto): Promise<{ code: number, data: Book, message: string }> {
    try {
      const newBook = new this.bookModel(createBookDto);
      const data = await newBook.save();
      return {
        code: 0,
        data,
        message: `Книга ${data.title} успешно загружено!`
      };
    } catch (e) {
      return {
        code: 1,
        data: null,
        message: e
      };
    }
  }

  async remove(id): Promise<{ code: number, data: Book, message: string }> {
    try {
      const data: Book = await this.bookModel.findByIdAndDelete(id);
      return {
        code: 0,
        data,
        message: `Книга ${data.title} успешно удалено`
      };
    } catch (e) {
      return {
        code: 1,
        data: null,
        message: `Произошла ошибка во время удаления книги`
      };
    }
  }

  async update(id, bookDto: UpdateBookDto): Promise<{ code: number, data: Book, message: string }> {
    try {
      const data: Book = await this.bookModel.findByIdAndUpdate(id, bookDto, { new: true });
      return {
        code: 0,
        data,
        message: `Книга ${data.title} успешно обновлено!`
      };
    } catch (e) {
      return {
        code: 1,
        data: null,
        message: "Произошла ошибка во время обновления книги"
      };
    }
  }
}
