import { Body, Post, Controller, Delete, Param, HttpCode, HttpStatus, Get, Patch } from '@nestjs/common';
import { BlogTypeService } from './blog-type.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { fillObject } from '@readme/core';
import { TypeRdo } from './rdo/type.rdo';
import { UpdateTypeDto } from './dto/update-type.dto';

@Controller('types')
export class BlogTypeController {
  constructor(
    private readonly blogTypeService: BlogTypeService
  ) {}

  @Get('/:id')
  async show(@Param('id') id: number) {
    const existType = await this.blogTypeService.getType(id);
    return fillObject(TypeRdo, existType);
  }

  @Get('/')
  async index() {
    const type = await this.blogTypeService.getTypes();
    return fillObject(TypeRdo, type);
  }

  @Post('/')
  async create(@Body() dto: CreateTypeDto) {
    const newType = await this.blogTypeService.createType(dto);
    return fillObject(TypeRdo, newType);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: number) {
    this.blogTypeService.deleteType(id);
  }

  @Patch('/:id')
  async update(@Param('id') id: number, @Body() dto: UpdateTypeDto) {
    const updatedType = await this.blogTypeService.updateType(id, dto)
    return fillObject(TypeRdo, updatedType);
  }
}
