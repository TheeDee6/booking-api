import { Router } from "express"
import { getAllBookings, postBookings, getOneBooking, deleteBookings} from '../controllers/booking-controllers.js';

export const bookingRouter = Router();

bookingRouter.get('/bookings', getAllBookings);

// bookingRouter.post('/bookings', addAllBookings);

bookingRouter.post('/bookings', postBookings);

bookingRouter.get('/bookings', getOneBooking);

bookingRouter.delete('/bookings/:id', deleteBookings);


