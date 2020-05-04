import { Router } from 'express';

import ensureAuthenticated from '@module/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentController from '@module/appointments/infra/http/controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentController = new AppointmentController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appointmentController.create);

export default appointmentsRouter;
