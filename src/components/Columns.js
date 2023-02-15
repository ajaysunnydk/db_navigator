import React, { useState } from 'react'
import axios from "axios";
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Columns(props) {

    const [columns, setColumns] = useState([]);

    if (columns.length === 0) {
        toast.dismiss();
        toast.loading("Loading Tables")
        axios.post(props.url + "/" + props.table, props.body, { headers: props.headers, cache: false })
            .then(resp => {
                if (resp.data.length !== 0) {
                    toast.dismiss()
                    toast.success("Tables Loaded")
                    const columnNames = resp.data
                        .map(column => column.columnName);
                    setColumns(columnNames);
                }
            }).catch(error => {
                console.log("catch")
                console.log(error)
            });
    }

    return (
        <div >
            {
                columns.map(column => (
                    <div className='columns-list'>
                        <i style={{ color: "#0d6efd" }} className="bi bi-layout-three-columns"></i>
                        <div className='column-name'>{column}</div>
                    </div>

                ))
            }
            <ToastContainer limit={1}/>
        </div>
    )
}
