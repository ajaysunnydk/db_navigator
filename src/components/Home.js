import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import './style.css'

const Home = () => {
    const location = useLocation();
    const reqBody = location.state;
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'withCredentials': true
    };
    const [topics, setTopics] = useState([]);
    if (topics.length === 0) {
        axios.post("http://localhost:8080/dextrus/", reqBody, { headers: headers, cache: false })
            .then(resp => {
                setTopics(resp.data)
                console.log(resp.data)
            }).catch(error => {
                console.log("catch")
                console.log(error)
            });
    }

    const toggleExpand = (topic) => {
        console.log(topic + " Clicked")
    }

    return (
        <div className="left-nav">
            <div className="catalogs-list" >
                {topics.map((topic,index) => (
                    <button key={index} className="catalog-button" onClick={() => toggleExpand(topic)}>
                        {topic}
                    </button>
                ))}
            </div>
        </div>


    );
};

export default Home;
