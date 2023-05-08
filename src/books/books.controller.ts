import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { BooksService } from "./books.service";
import { Book } from "./schemas/book.schema";

@Controller("books")
export class BooksController {

  constructor(private readonly booksService: BooksService) {
  }

  // Получение гет запроса
  /*  @Get()
     @Redirect("https://google.com", 301)
    getAll(@Req() req: Request, @Res() res: Response) {
      res.status(201).end();
      return "ilias";
    }*/


  @Get()
  getAll() {
    return this.booksService.getAll();
  }

  //Получение одного елемента оп гет запросу
  @Get(":id")
  @HttpCode(HttpStatus.OK)
  @Header("Cache-Control", "none")
  getOne(@Param("id") id: string): Promise<Book> {
    return this.booksService.getOne(id);
  }

  //Запись данных
  @Post()
  create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.booksService.create(createBookDto);
  }

  // Delete book
  @Delete(":id")
  remove(@Param("id") id: string): Promise<Book> {
    return this.booksService.remove(id);
  }


  // Update book
  @Put(":id")
  update(@Param("id") id, @Body() updateProductDto: UpdateBookDto): Promise<UpdateBookDto> {
    return this.booksService.update(id, updateProductDto);
  }
}
