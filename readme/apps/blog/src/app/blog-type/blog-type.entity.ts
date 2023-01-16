import { Type } from '@readme/shared-types';

import { Entity } from '@readme/core';

export class BlogTypeEntity implements Entity<BlogTypeEntity>, Type {
  public id: number;
  public title: string;

  constructor(type: Type) {
    this.fillEntity(type);
  }

  public fillEntity(entity: Type) {
    this.title = entity.title;
    this.id = entity.id;
  }

  public toObject(): BlogTypeEntity {
    return { ...this }
  }
}
