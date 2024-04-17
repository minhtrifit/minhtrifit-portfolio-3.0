import { Controller, Get, Param } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('/all')
  getAllProjects() {
    return this.projectService.getAllProjects();
  }

  @Get('/single/:id')
  getProjectById(@Param('id') id: string | number) {
    return this.projectService.getProjectById(+id);
  }

  @Get('/categories')
  getAllCategories() {
    return this.projectService.getAllCategories();
  }
}
