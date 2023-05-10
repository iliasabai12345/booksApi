import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Banner, BannerDocument} from "./schemas/banner.schema";
import {CreateBannerDto} from "./dto/create-banner.dto";

@Injectable()
export class BannersService {
    constructor(@InjectModel(Banner.name) private bannerModel: Model<BannerDocument>) {
    }

    async create(createBannerDto: CreateBannerDto): Promise<{ code: number, data: Banner, message: string }> {
        try {
            const newBanner = new this.bannerModel(createBannerDto);
            const data = await newBanner.save();
            return {
                code: 0,
                data,
                message: `Баннер успешно загружено!`
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
