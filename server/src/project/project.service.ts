import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';

import { PROJECT_LIST } from 'src/utils/project';

@Injectable()
export class ProjectService {
  getAllProjects() {
    return PROJECT_LIST;
  }

  getProjectById(id: number | string) {
    const project = PROJECT_LIST.filter((project) => {
      return project.id === Number(id);
    })[0];

    if (project === null) return new NotFoundException('Project not found');

    return project;
  }
}
