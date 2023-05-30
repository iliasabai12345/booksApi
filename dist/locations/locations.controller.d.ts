import { CreateLocationDto } from "src/locations/dto/create-category.dto";
import { LocationsService } from "src/locations/locations.service";
import { Location } from "src/locations/schemas/category.schema";
export declare class LocationsController {
    private readonly locationsService;
    constructor(locationsService: LocationsService);
    getAll(): Promise<{
        code: number;
        data: Location[];
        message: string;
    }>;
    create(createLocationDto: CreateLocationDto): Promise<{
        code: number;
        data: Location;
        message: string;
    }>;
}
