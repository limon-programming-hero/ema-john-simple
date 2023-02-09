import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { userContext } from './../../App';

function Shipment() {
    const { register, handleSubmit } = useForm();
    const [deliver, setDeliver] = useState();
    const onSubmit = data => {
        console.log(data);
        setDeliver('On way to Shipment');
    };
    const [userLogin, setUserLogin] = useContext(userContext);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("Name", { pattern: /^[A-Za-z]+$/i })} placeholder='Name' value={userLogin.name} />
            <input {...register("mail", { required: "Email Address is required" })} placeholder='Email' value={userLogin.email} />
            <input type="text" placeholder="Location" required="Location is required!" />
            <input type="submit" value='Delivery' />
            {deliver}
        </form>
    );
}
export default Shipment;