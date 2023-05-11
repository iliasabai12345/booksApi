import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CreateBannerDto} from "./dto/create-banner.dto";
import {Banner, BannerDocument} from "./schemas/banner.schema";

@Injectable()
export class BannersService {
    constructor(@InjectModel(Banner.name) private bannerModel: Model<BannerDocument>) {
    }

    async getAll(): Promise<{ code: number, data: Banner[], message: string }> {
        try {
            const data = await this.bannerModel.find().exec();
            return {
                code: 0,
                data,
                message: "Баннера успешно загружены"
            };
        } catch (e) {
            return {
                code: 1,
                data: [],
                message: e
            };
        }
    }

    // Добавление баннера
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
