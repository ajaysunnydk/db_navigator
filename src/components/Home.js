import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import './style.css'

const Home = () => {
    debugger;
    const location = useLocation();
    const reqBody = location.state;
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'withCredentials': true
    };
    console.log(reqBody)
    const [topics, setTopics] = useState([]);
    axios.post("http://localhost:8080/dextrus/", reqBody, { headers: headers, cache: false })
        .then(resp => {
            setTopics(resp.data)
            console.log(resp.data)
        }).catch(error => {
            console.log("catch")
            console.log(error)
        })


    const toggleExpand = (topic) => {
        console.log(topic + " Clicked")
    }

    return (
        <div className="left-nav">
        <div className="catalogs-list" >
            {topics.map(topic => (
                <button onClick={() => toggleExpand(topic)}>
                    {topic}
                </button>
            ))}
        </div>
        </div>


    );
};

export default Home;
