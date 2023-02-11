import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Connect() {

    const [reqBody,setReqBody] = React.useState({});
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        debugger;
        event.preventDefault();
        console.log("CONNECT CLICKED")

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'withCredentials': true
        };
        const data = {
            'url': event.target.url.value,
            'username': event.target.username.value,
            'password': event.target.password.value
        };

        const databody = JSON.stringify(data);
        axios.post("http://localhost:8080/dextrus/connect", databody, { headers: headers, cache: false })
            .then(resp => {
                setReqBody(databody)
                if (resp.data === "Connected to SQL Server") {
                    console.log("Connected")
                    navigate("/home",{state:{reqBody:reqBody}});
                }
            })
            .catch(error => {
                console.log(error)
                alert("Not Connected")
            });

    }
    return (
        <div style={{ boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px" }} className='container w-50 mt-5 p-3 rounded-3'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 d-flex justify-content-between gap-5">
                    <label className="form-label">URL</label>
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
        </div>
    )
}
