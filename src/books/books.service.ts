import { Injectable } from "@nestjs/common";
import { CreateBookDto } from "./dto/create-book.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Book, BookDocument } from "./schemas/book.schema";
import { Model } from "mongoose";
import { UpdateBookDto } from "./dto/update-book.dto";

@Injectable()
export class BooksService {

  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {
  }

  async getAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async getOne(id): Promise<Book> {
    return this.bookModel.findById(id);
  }

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const newBook = new this.bookModel(createBookDto);
    return newBook.save();
  }

  async remove(id): Promise<Book> {
    return this.bookModel.findByIdAndDelete(id);
  }

  async update(id, bookDto: UpdateBookDto): Promise<UpdateBookDto> {
    return this.bookModel.findByIdAndUpdate(id, bookDto, { new: true });
  }
}
