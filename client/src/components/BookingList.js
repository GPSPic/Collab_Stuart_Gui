import BookingElement from "./BookingElement";

const BookingList = ({bookings, removeBooking, editBookingChecked}) => {

    const bookingElement = bookings.map((booking) => {
        return <BookingElement 
            key={booking._id} 
            name={booking.guest_name}
            email={booking.guest_email_address}
            checked={booking.checked_in}
            removeBooking={removeBooking}
            bookingId={booking._id}
            editBookingChecked={editBookingChecked}
            />
    })

    return ( 
        <>
            <ul>
                {bookingElement}
            </ul>
        </>
     );
}
 
export default BookingList;