import { Test, TestingModule } from '@nestjs/testing';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';

describe('AppController', () => {
    let projectService: ProjectService;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [ProjectController],
            providers: [ProjectService],
        }).compile();

        projectService = app.get<ProjectService>(ProjectService);
    });

    describe('root Project', () => {
        it('should get project by id', () => {
            expect(projectService.getProjectById('1')).toBe('1');
        });
    });
});