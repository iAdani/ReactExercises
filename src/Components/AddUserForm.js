import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser as addUserRedux } from "../redux/userSlice";
import { addUser as addUserApi } from "../Services/api";

const AddUserForm = () => {

    const [formData, setFormData] = useState({name: '', email: '', username:''});
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();


    const handleSubmit = async (e) => {
        e.preventDefault();
        e.target.reset();
        setIsLoading(true);
        if (JSON.stringify(formData) !== JSON.stringify({name:'', email:'', username:''}))
        {
            try {
                const newUser = await addUserApi(formData)
                dispatch(addUserRedux(newUser));
                toast.success('User added successfully!');
                setFormData({ name: '', email: '', address: '' });

            } catch (error) {
                toast.error('Failed to add user. Please try again.')
            } finally {
                    setIsLoading(false)
            }

        }
        else {
            toast.error('Please fill all the fields.');
            setIsLoading(false);
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    required/>
            </div>
            <div>
                <label>Email: </label>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    required/>
            </div>
            <div>
                <label>User Name: </label>
                <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    required/>
            </div>
            <input
                type="submit"
                value="Add User"/>
            {isLoading && <div style={{fontSize: '20px'}}>Loading...</div>}
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                theme="colored"
            />
        </form>
    );
}

export default AddUserForm;