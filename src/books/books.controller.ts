import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from "@nestjs/common";
import {ApiBody, ApiCreatedResponse, ApiTags} from "@nestjs/swagger";
import {BooksService} from "./books.service";
import {CreateBookDto} from "./dto/create-book.dto";
import {UpdateBookDto} from "./dto/update-book.dto";
import {Book} from "./schemas/book.schema";

@Controller("books")
@ApiTags("Books")
export class BooksController {

  constructor(private readonly booksService: BooksService) {
  }

  @Get("getAllBooks")
  // @CacheKey(RS_BOOKS)
  // @CacheTTL(RS_TTL_BOOKS)
  getAll(): Promise<{ code: number; data: Book[]; message: string }> {
    return this.booksService.getAll();
  }

  //Получение одного елемента оп гет запросу
  @Get("getOneBook/:id")
  @HttpCode(HttpStatus.OK)
  getOne(@Param("id") id: string): Promise<{ code: number; data: Book; message: string }> {
    return this.booksService.getOne(id);
  }

  //Запись данных
  @Post("addBook")
  @ApiBody({ type: CreateBookDto })
  @ApiCreatedResponse({
    description: 'Запись книги на базу .',
    type: CreateBookDto,
  })
  create(@Body() createBookDto: CreateBookDto): Promise<{ code: number; data: Book; message: string }> {
    return this.booksService.create(createBookDto);
  }

  // Delete book
  @Delete("deleteBook/:id")
  @ApiCreatedResponse({
    description: 'Удаление книги с базы',
    type: CreateBookDto,
  })
  remove(@Param("id") id: string): Promise<{ code: number; data: Book; message: string }> {
    return this.booksService.remove(id);
  }


  // Update book
  @Put("updateBook/:id")
  update(@Param("id") id, @Body() updateProductDto: UpdateBookDto): Promise<{ code: number; data: Book; message: string }> {
    return this.booksService.update(id, updateProductDto);
  }

  // Search books
  //Получение поиска книг гет запросу
  @Get("getSearchedBooks/:prop")
  @HttpCode(HttpStatus.OK)
  getSearchedBooks(@Param("prop") prop: string): Promise<{ code: number; data: Book[]; message: string }> {
    return this.booksService.getSearchedBooks(prop);
  }
}
