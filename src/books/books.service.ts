import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {BooksTemp} from "src/shared/books/books";
import {CreateBookDto} from "./dto/create-book.dto";
import {UpdateBookDto} from "./dto/update-book.dto";
import {Book, BookDocument} from "./schemas/book.schema";

@Injectable()
export class BooksService {

  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>
  ) {
  }

  async getAll(): Promise<{ code: number, data: Book[], message: string }> {
    try {
      const value = BooksTemp.data;
      let data;
      if (value.length) {
        data = value;
      } else {
        data = await this.bookModel.find().exec();
        BooksTemp.data = data;
      }
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

  async getSearchedBooks(prop): Promise<{ code: number, data: Book[], message: string }> {
    try {
      const value = BooksTemp.data;
      let data;
      if (value.length) {
        data = value.filter(book => book.title.toLowerCase().includes(prop.toLowerCase()))
      } else {
        data = await this.bookModel.find().exec();
        BooksTemp.data = data;
      }
      return {
        code: 0,
        data,
        message: `Найдено ${data.length} книг`
      };
    } catch (e) {
      return {
        code: 1,
        data: null,
        message: e
      };
    }
  }

  // Получение книги по категорий
  async getCategoryBooks(category): Promise<{ code: number, data: any, message: string }> {
    try {
      const books = await this.bookModel.find({category});
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
      }
      return {
        code: 0,
        data,
        message: `Категория успешно загружено`
      };
    } catch (e) {
      return {
        code: 1,
        data: null,
        message: e
      };
    }
  }
}
