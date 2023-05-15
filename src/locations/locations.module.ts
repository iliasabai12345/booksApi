import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {LocationsController} from "src/locations/locations.controller";
import {Location, LocationSchema} from "src/locations/schemas/category.schema";
import {LocationsService} from './locations.service';

@Module({
    imports: [MongooseModule.forFeature([{name: Location.name, schema: LocationSchema}])],
    controllers: [LocationsController],
    providers: [LocationsService]
})
export class LocationsModule {
}
