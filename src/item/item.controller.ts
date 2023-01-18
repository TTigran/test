import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {Item, ResponseSuccessItem} from "./types";
import {ItemService} from "./item.service";
import {BaseController} from "../base/base.controller";



@Controller('/api/v1')
export class ItemController extends BaseController{
    constructor(private readonly itemService: ItemService) {
        super();
    }

    @Post('items')
    async create(@Body() item: Item): Promise<ResponseSuccessItem> {
      return this.itemService.add(item);
    }


    @Get('items/:id')
    async get(@Param('id') id: string): Promise<Item> {
        return this.itemService.getById(id);
    }
}