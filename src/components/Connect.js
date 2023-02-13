import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Connect() {
  
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("CONNECT CLICKED")

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'withCredentials': true
        };
        const data = {
            'url': event.target.url.value+"; encrypt=false",
            'username': event.target.username.value,
            'password': event.target.password.value
        };

        const databody = JSON.stringify(data);
        axios.post("http://localhost:8080/dextrus/connect", databody, { headers: headers, cache: false })
            .then(resp => {
                if (resp.data === "Connected to SQL Server") {
                    toast.success("Connection Successful")
                    navigate("/home",{state:databody});
                }
            })
            .catch(error => {
                console.log(error)
                toast.error("Not Connected")
            });

    }
    return (
        <div style={{ boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px" }} className='container w-50 mt-5 p-3 rounded-3'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 d-flex justify-content-between gap-5">
                    <label className="form-label" style={{marginRight:"40px"}}>URL</label>
                    <input type="text" name="url" className="form-control" />
                </div>
                <div className="mb-3 d-flex justify-content-between gap-5">
                    <label className="form-label">Username</label>
                    <input type="text" name="username" className="form-control" />
                </div>
                <div className="mb-3 d-flex justify-content-between gap-5">
                    <label className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Connect</button>
            </form>
            <ToastContainer />
        </div>
    )
}
