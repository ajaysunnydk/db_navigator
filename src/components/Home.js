import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Schemas from "./Schemas";
import './style.css'

const Home = () => {
    const location = useLocation();
    const reqBody = location.state;
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'withCredentials': true
    };
    const [catalogs, setCatalogs] = useState([]);
    const [expandedCatalog, setExpandedCatalog] = useState(null);
    const [schemas, setSchemas] = useState({});

    if (catalogs.length === 0) {
        axios.post("http://localhost:8080/dextrus/", reqBody, { headers: headers, cache: false })
            .then(resp => {
                setCatalogs(resp.data)
                console.log(resp.data)
            }).catch(error => {
                console.log("catch")
                console.log(error)
            });
    }

    const toggleExpand = (catalog) => {
        setExpandedCatalog(prevTopic => prevTopic === catalog ? null : catalog);
      };

    

    return (
        <div className="left-nav">
            <div className="catalogs-list" >
                {catalogs.map(catalog => (
                    <div key={catalog}>
                        <button className="catalog-button" onClick={() => toggleExpand(catalog)}>
                            {catalog}
                        </button>
                        {expandedCatalog === catalog && (
                            <Schemas body={reqBody} schemas={catalog} />
                        )}
                    </div>
                ))}
            </div>
        </div>


    );
};

export default Home;
