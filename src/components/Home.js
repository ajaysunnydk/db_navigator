import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

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
    const [topics,setTopics] = useState([]);
    axios.post("http://localhost:8080/dextrus/",reqBody,{ headers: headers, cache: false })
    .then(resp=>{
        setTopics(resp.data)
        console.log(resp.data)
    }).catch(error=>{
        console.log("catch")
        console.log(error)
    })

    

    const [expandedTopics, setExpandedTopics] = useState([]);

    const toggleExpand = topicTitle => {
        const currentIndex = expandedTopics.indexOf(topicTitle);
        const newExpandedTopics = [...expandedTopics];

        if (currentIndex === -1) {
            newExpandedTopics.push(topicTitle);
        } else {
            newExpandedTopics.splice(currentIndex, 1);
        }

        setExpandedTopics(newExpandedTopics);
    };

    return (
        <ul>
            {topics.map(topic => (
                <li key={topic}>
                    <button onClick={() => toggleExpand(topic)}>
                        {topic}
                    </button>
                    {expandedTopics.includes(topic) && (
                        <ul>
                            {topic.subTopics.map(subTopic => (
                                <li key={subTopic.id}>{subTopic.title}</li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Home;
