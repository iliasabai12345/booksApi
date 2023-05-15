import {Body, Controller, Get, Post} from '@nestjs/common';
import {ApiBody, ApiCreatedResponse, ApiTags} from "@nestjs/swagger";
import {CreateLocationDto} from "src/locations/dto/create-category.dto";
import {LocationsService} from "src/locations/locations.service";
import {Location} from "src/locations/schemas/category.schema";

@Controller('locations')
@ApiTags("Locations")

export class LocationsController {

    constructor(private readonly locationsService: LocationsService) {
    }

    @Get("getLocations")
    getAll(): Promise<{ code: number; data: Location[]; message: string }> {
        return this.locationsService.getAll();
    }

    //Запись данных
    @Post("addLocation")
    @ApiBody({type: CreateLocationDto})
    @ApiCreatedResponse({
        description: 'Запись города на базу .',
        type: CreateLocationDto,
    })
    create(@Body() createLocationDto: CreateLocationDto): Promise<{ code: number; data: Location; message: string }> {
        return this.locationsService.create(createLocationDto);
    }
}
