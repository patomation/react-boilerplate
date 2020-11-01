import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { ObjectType, Field, ID } from 'type-graphql'

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number | null = null

  @Field(() => String)
  @Column()
  name?: string
}
