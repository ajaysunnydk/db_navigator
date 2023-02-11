import React from 'react'
import axios from "axios";
import { useState } from "react";

export default function Schemas(props) {
    debugger;
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'withCredentials': true
    };
    const [schemas, setSchemas] = useState([]);
    const reqBody = props.body;
    const selectedCatalog = props.schemas;

    if (schemas.length === 0) {
        const url = "http://localhost:8080/dextrus/"+selectedCatalog;
        axios.post(url,reqBody, { headers: headers, cache: false })
            .then(resp => {
                setSchemas(resp.data)
                console.log(resp.data)
            }).catch(error => {
                console.log("catch")
                console.log(error)
            });
    }

  return (
    <ul className='schemas-list'>
      {schemas.map((subtopic, index) => (
        <li key={index}>{subtopic}</li>
      ))}
    </ul>
  )
}
