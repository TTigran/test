import { Injectable } from '@nestjs/common';

@Injectable()
export class DBService {
    db(sql: string): object {
        return {}
    }
}