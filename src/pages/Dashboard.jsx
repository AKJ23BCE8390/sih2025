import React from "react";
import Header from "../components/Header";
import Card2 from "@ankitdev/my-card/lib/components/Card2";
import '@ankitdev/my-card/lib/components/Card2.css';
import "../styles/Dashboard.css";
import Map from "../components/Map";
import MapApp from "../components/MapApp";
import Card from "../components/Card";


function Dashboard() {
     const cards = [
    { title: "CR", subtitle: "(Community Rights)", value: 0, gradient: "gradient-cr" },
    { title: "CFR", subtitle: "(Community Forest Rights)", value: 0, gradient: "gradient-cfr" },
    { title: "ST", subtitle: "(Scheduled Tribes)", value: 0, gradient: "gradient-st" },
    { title: "OTFD", subtitle: "(Other Traditional Forest Dwellers)", value: 0, gradient: "gradient-otfd" },
    { title: "Revenue Village", subtitle: "", value: 0, gradient: "gradient-revenue" },
    { title: "Reserve Forest", subtitle: "", value: 0, gradient: "gradient-reserve" },
  ];
    return(
        <div>
            <div className="dashboard">
                <Header />
                <div className="main_body">
                    <h2 className="heading">FRA POTENTIAL VILLAGE</h2>
      <div className="grid">
        {cards.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
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