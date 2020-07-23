import FakeAppointmentRepository from '../repositories/fakes/FakeAppointmentRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

let fakeAppointmentRepository: FakeAppointmentRepository;
let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentRepository = new FakeAppointmentRepository();
    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentRepository,
    );
  });

  it('should be able to the month availability from provider', async () => {
    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 5, 22, 8, 0, 0),
    });
    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 5, 22, 9, 0, 0),
    });
    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 5, 22, 10, 0, 0),
    });
    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 5, 22, 11, 0, 0),
    });
    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 5, 22, 12, 0, 0),
    });
    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 5, 22, 13, 0, 0),
    });
    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 5, 22, 14, 0, 0),
    });
    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 5, 22, 15, 0, 0),
    });
    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 5, 22, 16, 0, 0),
    });
    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 5, 22, 17, 0, 0),
    });
    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 5, 23, 8, 0, 0),
    });

    const availability = await listProviderMonthAvailability.execute({
      provider_id: 'user',
      year: 2020,
      month: 7,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 22, available: true },
        { day: 23, available: true },
      ]),
    );
  });
});
