import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CreateCartDto} from "src/cart/dto/create-cart.dto";
import {UpdateCartDto} from "src/cart/dto/update-cart.dto";
import {Cart, CartDocument} from "src/cart/schemas/cart.schema";

@Injectable()
export class CartService {
    constructor(@InjectModel(Cart.name) private cartModel: Model<CartDocument>) {
    }

    async getAll(id: string): Promise<{ code: number, data: Cart[], message: string }> {
        try {
            const data = await this.cartModel.find({user_id: id});
            return {
                code: 0,
                data,
                message: "Корзина успешно загружена"
            };
        } catch (e) {
            return {
                code: 1,
                data: [],
                message: e
            };
        }
    }


    async create(createCartDto: CreateCartDto): Promise<{ code: number, data: Cart, message: string }> {
        try {
            const current = await this.cartModel.findOne({sku: createCartDto.sku, user_id: createCartDto.user_id});
            if (current) {
                return {
                    code: 1,
                    data: null,
                    message: `Книга ${createCartDto.title} уже добавлено в корзину!`
                };
            }
            const newCart = new this.cartModel(createCartDto);
            const data = await newCart.save();
            return {
                code: 0,
                data,
                message: `Книга ${data.title} успешно добавлено в корзину!`
            };
        } catch (e) {
            return {
                code: 1,
                data: null,
                message: e
            };
        }
    }

    async remove(id, user_id): Promise<{ code: number, data: { deleted: Cart, products: Cart[] }, message: string }> {
        try {
            const data_deleted: Cart = await this.cartModel.findByIdAndDelete(id);
            const data_products = await this.cartModel.find({user_id});
            /*            data_products.forEach(res => {
                            res.deleteOne();
                        })*/
            return {
                code: 0,
                data: {
                    deleted: data_deleted,
                    products: data_products
                },
                message: `Книга ${data_deleted.title} успешно удалено`
            };
        } catch (e) {
            return {
                code: 1,
                data: null,
                message: `Произошла ошибка во время удаления книги`
            };
        }
    }


    async changeQty(id, updateCartDto: UpdateCartDto): Promise<{ code: number, data: Cart, message: string }> {
        try {
            const data: Cart = await this.cartModel.findByIdAndUpdate(id, updateCartDto,{ new: true });
            return {
                code: 0,
                data,
                message: `Количество товара ${data.title} успешно обновлено!`
            };
        } catch (e) {
            return {
                code: 1,
                data: null,
                message: "Произошла ошибка во время обновления книги"
            };
        }
    }
}
