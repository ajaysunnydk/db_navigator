import React, { useState } from 'react'
import axios from "axios";
import './style.css'

export default function Tables(props) {

    const url = "http://localhost:8080/dextrus/" + props.catalog + "/" + props.schema;
    const [tables, setTables] = useState([]);

    if (tables.length === 0) {
        axios.post(url, props.body, { headers: props.headers, cache: false })
            .then(resp => {
                if(resp.data.length!==0){
                    const tableNames = resp.data
                    .filter(table => table.table_type === 'BASE TABLE')
                    .map(table => table.table_name);
                    setTables(tableNames);
                }
                else{
                    console.log("no tables")
                    alert("No tables in selected Catalog/Schema")
                }
            }).catch(error => {
                console.log("catch")
                console.log(error)
            });
    }

    return (
        <div className='tables-list'>
            {tables.map(table => (
                <div key={table}>
                    <button style={{border:"none"}} className='tables-button'>
                        {table}
                    </button>
                </div>
            ))}
        </div>
    )
}
