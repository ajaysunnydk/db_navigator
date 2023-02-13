import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Schemas from "./Schemas";
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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



    if (catalogs.length === 0) {

        axios.post("http://localhost:8080/dextrus/", reqBody, { headers: headers, cache: false })
            .then(resp => {

                setCatalogs(resp.data)
                toast.success("Connection Successful")
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
            <div  >
                {catalogs.map(catalog => (
                    <div key={catalog} className="catalogs-list">
                        <button className="catalog-button" onClick={() => toggleExpand(catalog)}>
                            <i class="bi bi-database"></i>{catalog}
                        </button>
                        {expandedCatalog === catalog && (
                            <Schemas body={reqBody} schemas={catalog} />
                        )}
                    </div>
                ))}
            </div>
            <ToastContainer />
        </div>
    );
};

export default Home;
