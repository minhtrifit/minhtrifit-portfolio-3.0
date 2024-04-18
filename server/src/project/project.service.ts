import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createNewProject } from './dto/create-project.dto';
import { createNewComment } from './dto/create-comment.dto';

import { Categories } from 'src/constants/categories';
import { Comment } from '../schema/comment.schema';
import { Project } from '../schema/project.schema';

import { PROJECT_LIST } from 'src/utils/project';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>,
    @InjectModel(Comment.name) private commentModel: Model<Comment>,
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

  async getAllCommentsByProjectId(id: string) {
    const comments = await this.commentModel.find({
      projectId: id,
    });

    return comments;
  }

  async createNewComment(comment: createNewComment) {
    return await this.commentModel.create(comment);
  }
}
