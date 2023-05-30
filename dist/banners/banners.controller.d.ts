import { BannersService } from "./banners.service";
import { CreateBannerDto } from "./dto/create-banner.dto";
import { Banner } from "./schemas/banner.schema";
export declare class BannersController {
    private readonly bannersService;
    constructor(bannersService: BannersService);
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
