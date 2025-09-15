import React from "react";
import Header from "../components/Header";
import Card2 from "@ankitdev/my-card/lib/components/Card2";
import '@ankitdev/my-card/lib/components/Card2.css';
import "../styles/Dashboard.css";
import Map from "../components/Map";
import MapApp from "../components/MapApp";


function Dashboard() {
    return(
        <div>
            <div className="dashboard">
                <Header />
                <div className="main_body">
                    <div className="cards">
                       
                    </div>
                    <div className="map-container">
                       <MapApp />
                </div>  
                </div>
            </div>
        </div>
    )
}

export default Dashboard;