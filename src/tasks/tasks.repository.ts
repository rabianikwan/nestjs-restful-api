import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { User } from '../auth/user.entity';

@Injectable()
export class TaskRepository {
  constructor(
    @InjectRepository(Task)
    private readonly taskEntityRepository: Repository<Task>,
  ) {}

  async findById(id: string, user: User): Promise<Task> {
    const found = await this.taskEntityRepository.findOneBy({ id, user });
    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return found;
  }

  async insert(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    const { title, description } = createTaskDto;
    const task = this.taskEntityRepository.create({
      title,
      description,
      status: TaskStatus.IN_PROGRESS,
      duration: 0,
      user,
    });
    await this.taskEntityRepository.save(task);
    return task;
  }

  async findAll(filterDto: GetTasksFilterDto, user: User): Promise<Task[]> {
    const { status, search } = filterDto;
    const query = this.taskEntityRepository.createQueryBuilder('task');
    query.where({ user });

    if (status) {
      query.andWhere('task.status = :status', { status });
    }

    if (search) {
      query.andWhere(
        '(LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search))',
        { search: `%${search}%` },
      );
    }

    return await query.getMany();
  }

  async deleteById(id: string, user: User): Promise<void> {
    const result = await this.taskEntityRepository.delete({ id, user });

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }

  async updateTaskStatus(
    id: string,
    status: TaskStatus,
    user: User,
  ): Promise<Task> {
    const task = await this.findById(id, user);

    task.status = status;
    if (task.status === 'DONE') {
      task.duration = new Date().getTime() - task.created_at.getTime();
    }
    await this.taskEntityRepository.save(task);

    return task;
  }
}
