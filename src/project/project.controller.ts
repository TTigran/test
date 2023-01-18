import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {Project, ResponseSuccessProject} from "./types";
import {ProjectService} from "./project.service";
import {BaseController} from "../base/base.controller";


@Controller('/api/v2')
export class ProjectController extends BaseController{
    constructor(private readonly projectService: ProjectService) {
        super()
    }

    @Post('projects')
    async create(@Body() project: Project): Promise<ResponseSuccessProject> {
        return this.projectService.add(project);
    }


    @Get('projects/:id')
    async get(@Param('id') id: string): Promise<Project> {
        return this.projectService.getById(id);
    }
}
