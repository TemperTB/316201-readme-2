import { Document } from 'mongoose';
import { User } from '@readme/shared-types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'users',
})
export class BlogUserModel extends Document implements User {
  @Prop()
  public avatar: string;

  @Prop({
    required: true,
    unique: true,
  })
  public email: string;

  @Prop({
    required: true,
  })
  public name: string;

  @Prop({
    required: true,
  })
  public dayRegister: Date;

  @Prop({
    required: true,
  })
  public passwordHash: string;
}

export const BlogUserSchema = SchemaFactory.createForClass(BlogUserModel);
