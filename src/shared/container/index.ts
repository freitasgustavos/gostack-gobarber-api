import { container } from 'tsyringe';

import IAppointmentsRepository from '@module/appointments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@module/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@module/users/repositories/IUsersRepository';
import UsersRepository from '@module/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IAppointmentsRepository>(
  'AppointmenstsRepository',
  AppointmentsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
