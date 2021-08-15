import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const adminData = {
            email: data.email
        }
        console.log(adminData);
        fetch('https://shrouded-harbor-51949.herokuapp.com/makeAdmins', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('new admin has been added')
                }
            })
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <div className="container py-5">
                    <h1 className="text-warning">Make Admin</h1>
                </div>
                <div>
                    <form className="addService-form" onSubmit={handleSubmit(onSubmit)}>
                        <input name="email" {...register("email", { required: true })} placeholder="Enter e-mail" />
                        {errors.email && <span className="error">Title is required</span>}
                        <button className="btn btn-brand text-white mt-4">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;