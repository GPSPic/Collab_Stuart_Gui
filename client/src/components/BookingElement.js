import { deleteBooking, updateBooking } from "../helpers/BookingService";

const BookingElement = ({name, email, checked, bookingId, removeBooking, editBookingChecked}) => {



    const handleClick = () => {
        deleteBooking(bookingId).then(() => {
            removeBooking(bookingId)
        })
    }

    const handleSelect = (e) => {
        const bool = e.target.value === "true";
        const payload = {
            checked_in: bool
        }
        updateBooking(payload, bookingId).then(() => {
        editBookingChecked(bool, bookingId)
        })
    }

    return ( 
        <li>
            <p>Guest {name}, contact details: {email}</p>
            <label htmlFor="checked">Checked in?</label>
            <select id="checked" name="checked" defaultValue={checked} onChange={handleSelect}>

                {/* {checked ? <option value="true" selected>Yes</option> : <option value="false" selected>No</option>}
                {!checked ? <option value="true">Yes</option> : <option value="false">No</option>} */}

                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
            <button onClick={handleClick}>Delete booking</button>
        </li>
     );
}
 
export default BookingElement;