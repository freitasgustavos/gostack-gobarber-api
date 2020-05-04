import Appointment from '@module/appointments/infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '@module/appointments/dtos/ICreateAppointmentDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(data: Date): Promise<Appointment | undefined>;
}
