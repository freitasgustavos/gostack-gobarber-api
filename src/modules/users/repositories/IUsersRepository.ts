import User from '@module/users/infra/typeorm/entities/User';
import ICreateUserDTO from '@module/users/dtos/ICreateUserDTO';
import IFindAllProvidersDTO from '@module/users/dtos/IFindAllProvidersDTO';

export default interface IUsersRepository {
  findAllProviders(data: IFindAllProvidersDTO): Promise<User[]>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}
