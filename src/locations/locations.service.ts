import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CreateLocationDto} from "src/locations/dto/create-category.dto";
import {Location, LocationDocument} from "src/locations/schemas/category.schema";

@Injectable()
export class LocationsService {
    constructor(@InjectModel(Location.name) private locationModel: Model<LocationDocument>) {
    }

    async getAll(): Promise<{ code: number, data: Location[], message: string }> {
        try {
            const data = await this.locationModel.find().exec();
            return {
                code: 0,
                data,
                message: "Города успешно загружены"
            };
        } catch (e) {
            return {
                code: 1,
                data: [],
                message: e
            };
        }
    }

    async create(createLocationDto: CreateLocationDto): Promise<{ code: number, data: Location, message: string }> {
        try {
            const newLocation = new this.locationModel(createLocationDto);
            const data = await newLocation.save();
            return {
                code: 0,
                data,
                message: `Город ${data.title} успешно загружено!`
            };
        } catch (e) {
            return {
                code: 1,
                data: null,
                message: e
            };
        }
    }
}
