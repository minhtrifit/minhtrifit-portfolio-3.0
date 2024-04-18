import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { createNewProject } from './dto/create-project.dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('/all')
  getAllProjects() {
    return this.projectService.getAllProjects();
  }

  @Post('/create')
  createNewProject(@Body() project: createNewProject) {
    return this.projectService.createNewProject(project);
  }

  @Get('/single/:id')
  getProjectById(@Param('id') id: string | number) {
    return this.projectService.getProjectById(id);
  }

  @Get('/categories')
  getAllCategories() {
    return this.projectService.getAllCategories();
  }

  @Put('/edit/:id')
  async updateProjectById(
    @Param('id') id: string,
    @Body() updatedProject: any,
  ) {
    return this.projectService.updateProjectById(id, updatedProject);
  }

  @Delete('/delete/:id')
  async deleteProjectById(@Param('id') id: string) {
    return this.projectService.deleteProjectById(id);
  }
}
