import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todos.entity';
import { Category } from './category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo, Category])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
