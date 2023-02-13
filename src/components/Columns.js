import React, { useState } from 'react'
import axios from "axios";
import './style.css'

export default function Columns(props) {

    const [columns, setColumns] = useState([]);

    if (columns.length === 0) {
        axios.post(props.url + "/" + props.table, props.body, { headers: props.headers, cache: false })
            .then(resp => {
                const columnNames = resp.data
                    .map(column => column.columnName);
                setColumns(columnNames);
            }).catch(error => {
                console.log("catch")
                console.log(error)
            });
    }

    return (
        <div className='columns-list'>
            {
                columns.map(column=>(
                    <div className='column-name'>{column}</div>
                ))
            }
        </div>
    )
}
