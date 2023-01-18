import {Injectable} from '@nestjs/common';
import {DBService} from "../db/db.service";
import {BaseService} from "../base/base.service";
import {Project, ResponseSuccessProject} from "./types";

@Injectable()
export class ProjectService extends BaseService{
    constructor(private readonly dbService: DBService) {
        super();
    }

    public getById(id: string): Project {
        try {
            this.dbService.db("....SQL CODE....")
            return {} as Project;
        } catch (e) {
            throw new Error('Not found')
        }
    }

    public add(project: Project): ResponseSuccessProject {
        try {
            this.dbService.db("....SQL CODE....")
            return {
                success: true,
                error: {
                    status: true,
                    code: 200,
                    message: "No error",
                },
                data: project
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
