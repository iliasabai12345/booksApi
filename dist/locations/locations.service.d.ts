import { Model } from "mongoose";
import { CreateLocationDto } from "src/locations/dto/create-category.dto";
import { Location, LocationDocument } from "src/locations/schemas/category.schema";
export declare class LocationsService {
    private locationModel;
    constructor(locationModel: Model<LocationDocument>);
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
