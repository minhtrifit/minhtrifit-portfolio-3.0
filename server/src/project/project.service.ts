import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { createNewProject } from './dto/create-project.dto';
import { Categories } from 'src/constants/categories';
import { Project } from './schema/project.schema';

import { PROJECT_LIST } from 'src/utils/project';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>,
  ) {}

  async getAllProjects() {
    const projects = await this.projectModel.find();
    return projects;
  }

  async createNewProject(project: createNewProject) {
    return await this.projectModel.create(project);
  }

  async getProjectById(id: number | string) {
    const project = await this.projectModel.findOne({
      id: id,
    });

    if (project === null) return new NotFoundException('Project not found');

    return project;
  }

  getAllCategories() {
    const results: string[] = [];

    for (const cate in Categories) {
      results.push(Categories[cate]);
    }

    return results;
  }

  async updateProjectById(id: string, updatedProject: Partial<Project>) {
    const project = await this.projectModel.findOne({
      id: id,
    });

    if (project === null) return new NotFoundException('Project not found');

    return this.projectModel.findOneAndUpdate({ id }, updatedProject, {
      new: true,
    });
  }

  async deleteProjectById(id: string) {
    const project = await this.projectModel.findOne({
      id: id,
    });

    if (project === null) return new NotFoundException('Project not found');

    return this.projectModel.findOneAndDelete({ id });
  }
}
