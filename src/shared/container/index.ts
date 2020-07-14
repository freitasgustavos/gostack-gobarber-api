import { container } from 'tsyringe';

import '@module/users/providers';
import '@shared/container/providers';

import IAppointmentsRepository from '@module/appointments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@module/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@module/users/repositories/IUsersRepository';
import UsersRepository from '@module/users/infra/typeorm/repositories/UsersRepository';

import IUsersTokensRepository from '@module/users/repositories/IUsersTokensRepository';
import UserTokensRepository from '@module/users/infra/typeorm/repositories/UserTokensRepository';

container.registerSingleton<IAppointmentsRepository>(
  'AppointmenstsRepository',
  AppointmentsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUsersTokensRepository>(
  'UsersTokensRepository',
  UserTokensRepository,
);
