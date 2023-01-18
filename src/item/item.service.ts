import {Injectable} from '@nestjs/common';
import {Item, ResponseSuccessItem} from "./types";
import {DBService} from "../db/db.service";
import {BaseService} from "../base/base.service";

@Injectable()
export class ItemService extends BaseService{
    constructor(private readonly dbService: DBService) {
        super()
    }

    public getById(id: string): Item {
        try {
            this.dbService.db("....SQL CODE....")
            return {} as Item;
        } catch (e) {
           throw new Error('Not found')
        }
    }

    public add(item: Item): ResponseSuccessItem {
        try {
            this.dbService.db("....SQL CODE....")
            return {
                success: true,
                error: {
                    status: true,
                    code: 200,
                    message: "No error",
                },
                data: item,
            }
        } catch (e) {
            return {
                success: false,
                error: {
                    status: true,
                    code: e.code,
                    message: e.message,
                },
                data: null,
            }
        }

    }
}
