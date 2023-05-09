import {ApiProperty} from "@nestjs/swagger";

export class CreateBannerDto {
    @ApiProperty({
        description: "Название баннера",
        default: "Чистая архитектура. Искусство разработки программного обеспечения",
        type: String
    })
    readonly title: string;

    @ApiProperty({
        description: "Изображение баннера",
        default: "https://cdn.f.kz/prod/1104/1103285_550.jpg",
        type: String
    })
    readonly image: string;

    @ApiProperty({
        description: "Ссылка баннера",
        default: "http://product/3561478",
        type: String
    })
    readonly link: string;
}

