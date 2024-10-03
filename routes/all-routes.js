import { Router } from "express"
import { getAllBookings, getOneBooking, deleteBookings, addAllBookings} from '../controllers/booking-controllers.js';

export const bookingRouter = Router();

bookingRouter.get('/bookings', getAllBookings);

bookingRouter.post('/bookings', addAllBookings);

bookingRouter.get('/bookings', getOneBooking);

bookingRouter.delete('/bookings/:id', deleteBookings);


