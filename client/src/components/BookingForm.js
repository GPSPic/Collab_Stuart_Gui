import { useState } from "react";
import { postBooking } from "../helpers/BookingService";

const BookingForm = ({addBooking}) => {

    const [formData, setFormData] = useState({
        guest_name: "",
        guest_email_address: "",
        checked_in: false
    })

    const handleChange = (e) => {
        const newData = {...formData}
        newData[e.target.name] = e.target.value
        setFormData(newData)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postBooking(formData).then((data)=>{
            addBooking(data);
        })
        setFormData({
            guest_name: "",
            guest_email_address: "",
            checked_in: false
        })
    }

    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="guest-name"></label>
                <input 
                    type="text" 
                    id="guest-name" 
                    value={formData.guest_name} 
                    placeholder="Enter guest name" 
                    onChange={handleChange}
                    name="guest_name"
                    required
                    ></input>
                <label htmlFor="guest-email"></label>
                <input 
                    type="text" 
                    id="guest-email" 
                    value={formData.guest_email_address} 
                    placeholder="Enter guest email" 
                    onChange={handleChange}
                    name="guest_email_address"
                    required
                ></input>
                <button>Save booking</button>
            </form>
        </>
     );
}
 
export default BookingForm;

