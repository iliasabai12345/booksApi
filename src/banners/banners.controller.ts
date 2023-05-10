import {Body, Controller, Post} from '@nestjs/common';
import {BannersService} from "./banners.service";
import {ApiBody, ApiCreatedResponse, ApiTags} from "@nestjs/swagger";
import {CreateBannerDto} from "./dto/create-banner.dto";
import {Banner} from "./schemas/banner.schema";

@Controller('banners')
@ApiTags("banners")

export class BannersController {
    constructor(private readonly bannersService: BannersService) {
    }


    //Запись данных
    @Post("addBanner")
    @ApiBody({type: CreateBannerDto})
    @ApiCreatedResponse({
        description: 'Запись баннера на базу .',
        type: CreateBannerDto,
    })
    create(@Body() createBannerDto: CreateBannerDto): Promise<{ code: number; data: Banner; message: string }> {
        return this.bannersService.create(createBannerDto);
    }
}
