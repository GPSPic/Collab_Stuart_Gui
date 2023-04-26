import {useEffect, useState} from 'react'
import BookingList from "../components/BookingList";
import BookingForm from "../components/BookingForm";
import {getBookings} from '../helpers/BookingService'

const BookingContainer = () => {

    const [bookings, setBookings] = useState([])

    useEffect(() => {
        getBookings().then((data) => {
            setBookings(data)
        })
    }, [])

    const addBooking = (booking) => {
        setBookings([...bookings, booking])
    }

    const removeBooking = (id) => {
        const bookingsToKeep = bookings.filter(booking => booking._id !== id)
        setBookings(bookingsToKeep)
    }

    const editBookingChecked = (checkedValue, id) => {
        const bookingToEdit = bookings.find((booking) => id === booking._id)
        const bookingToEditIndex = bookings.indexOf(bookingToEdit)
        bookingToEdit.checked_in = checkedValue
        const updatedBookings = bookings.toSpliced(bookingToEditIndex, 1, bookingToEdit)
        setBookings(updatedBookings)
    }

    return ( 
        <>
            <h1>Booking not.com</h1>
            <BookingForm addBooking={addBooking}/>
            <BookingList bookings={bookings} removeBooking={removeBooking} editBookingChecked={editBookingChecked}/>
        </>
     );
}
 
export default BookingContainer;