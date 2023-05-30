import { Model } from "mongoose";
import { CreateBannerDto } from "./dto/create-banner.dto";
import { Banner, BannerDocument } from "./schemas/banner.schema";
export declare class BannersService {
    private bannerModel;
    constructor(bannerModel: Model<BannerDocument>);
    getAll(): Promise<{
        code: number;
        data: Banner[];
        message: string;
    }>;
    create(createBannerDto: CreateBannerDto): Promise<{
        code: number;
        data: Banner;
        message: string;
    }>;
}
