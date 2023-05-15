import {ApiProperty} from "@nestjs/swagger";

export class CreateLocationDto {
  @ApiProperty({
    description: "Название города",
    default: "Алматы",
    type: String
  })
  readonly title: string;

  @ApiProperty({
    description: "Идентификатор города",
    default: 1,
    type: Number
  })
  readonly location_id: number;
}

