import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ProjectModule} from "./project/project.module";
import {ItemService} from "./item/item.service";
import {ItemModule} from "./item/item.module";

@Module({
  imports: [
      ProjectModule,
      ItemModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
