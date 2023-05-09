import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { BooksService } from "./books.service";
import { Book } from "./schemas/book.schema";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { CacheKey, CacheTTL } from "@nestjs/cache-manager";
import { RS_BOOKS, RS_TTL_BOOKS } from "../shared/constants/redis";

@Controller("books")
@ApiTags("Books")
export class BooksController {

  constructor(private readonly booksService: BooksService) {
  }

  @Get()
  @CacheKey(RS_BOOKS)
  @CacheTTL(RS_TTL_BOOKS)
  getAll(): Promise<{ code: number; data: Book[]; message: string }> {
    return this.booksService.getAll();
  }

  //Получение одного елемента оп гет запросу
  @Get(":id")
  @HttpCode(HttpStatus.OK)
  getOne(@Param("id") id: string): Promise<{ code: number; data: Book; message: string }> {
    return this.booksService.getOne(id);
  }

  //Запись данных
  @Post()
  @ApiBody({ type: CreateBookDto })
  create(@Body() createBookDto: CreateBookDto): Promise<{ code: number; data: Book; message: string }> {
    return this.booksService.create(createBookDto);
  }

  // Delete book
  @Delete(":id")
  remove(@Param("id") id: string): Promise<{ code: number; data: Book; message: string }> {
    return this.booksService.remove(id);
  }


  // Update book
  @Put(":id")
  update(@Param("id") id, @Body() updateProductDto: UpdateBookDto): Promise<{ code: number; data: Book; message: string }> {
    return this.booksService.update(id, updateProductDto);
  }

  // fill books
  @Post("/fill")
  fillBooks(@Body() createBookDto: CreateBookDto[]) {
    return this.booksService.fillBooks(createBookDto);
  }
}
