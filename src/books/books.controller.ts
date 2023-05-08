import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { BooksService } from "./books.service";
import { Book } from "./schemas/book.schema";
import { ApiBody } from "@nestjs/swagger";

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
}
