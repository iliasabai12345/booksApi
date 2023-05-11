import {CacheKey, CacheTTL} from "@nestjs/cache-manager";
import {Body, Controller, Get, Post} from '@nestjs/common';
import {ApiBody, ApiCreatedResponse, ApiTags} from "@nestjs/swagger";
import {RS_BANNERS, RS_TTL_BOOKS} from "src/shared/constants/redis";
import {BannersService} from "./banners.service";
import {CreateBannerDto} from "./dto/create-banner.dto";
import {Banner} from "./schemas/banner.schema";

@Controller('banners')
@ApiTags("banners")

export class BannersController {
    constructor(private readonly bannersService: BannersService) {
    }


    @Get("getBanners")
    // @CacheKey(RS_BANNERS)
    // @CacheTTL(RS_TTL_BOOKS)// todo return
    getAll(): Promise<{ code: number; data: Banner[]; message: string }> {
        return this.bannersService.getAll();
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
