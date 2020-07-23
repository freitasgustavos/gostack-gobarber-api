import Appointment from '@module/appointments/infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '@module/appointments/dtos/ICreateAppointmentDTO';
import IFindAllInMonthFromProviderDTO from '@module/appointments/dtos/IFindAllInMonthFromProviderDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(data: Date): Promise<Appointment | undefined>;
  findAllInMonthFromProvider(
    data: IFindAllInMonthFromProviderDTO,
  ): Promise<Appointment[]>;
}
