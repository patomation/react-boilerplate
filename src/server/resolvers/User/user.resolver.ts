import { Arg, InputType, Mutation, Query, Resolver, Field } from 'type-graphql'
import { getRepository } from 'typeorm'
import { User } from '../../entities/User'

@InputType()
export class CreateUserInput {
  @Field()
  name?: string
}

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  name?: string
}

@Resolver(User)
export class UserResolver {
  @Query(() => User)
  async getByUserId (@Arg('id') id: string): Promise<User | undefined> {
    return await User.findOne({ where: { id } })
  }

  @Query(() => [User])
  async getAllUser (): Promise<User[]> {
    return await User.find()
  }

  @Mutation(() => User)
  async createUser (@Arg('input') input: CreateUserInput): Promise<User> {
    const user = await User.create(input)
    await user.save()
    return user
  }

  @Mutation(() => User)
  async updateByUserId (@Arg('id') id: string, @Arg('input') input: UpdateUserInput): Promise<User | undefined> {
    let savedData = await User.findOne({ where: { id } })
    if (savedData) {
      savedData = await getRepository(User).save({ ...savedData, ...input })
    }
    return savedData
  }

  @Mutation(() => Boolean)
  async deleteByUSerId (@Arg('id') id: string): Promise<boolean> {
    const user = await User.findOne({ where: { id } })
    if (user) {
      await getRepository(User).remove(user)
      return true
    } else {
      return false
    }
  }
}
