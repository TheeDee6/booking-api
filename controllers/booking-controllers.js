import { booking } from "../models/booking-models.js"

export const getAllBookings = (req, res) => {
    res.status(200).json('These are all bookings');
}
 
export const getOneBooking = (req, res) => {
    res.status(200).json('This is one booking');
}

export const addAllBookings = async (req, res, next) => {
    try {
        console.log(req.body);
        await BookingModel.create(req.body);
        res.status(201).json('All Booking');
    } catch (error) {
        next(error);
        
    }
}

export const postBookings = async (req, res) => {
    const newBooking = new booking(req.body)

    const bookings = await newBooking.save()
    res.status(201).json(bookings);
}

export const deleteBookings = (req, res) => {
    res.status(200).json('This is for Delete');
}