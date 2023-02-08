import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { data } from "./data";

export default function App() {
  const locations = data.map((item) => {
    return (
      <Card
        imageUrl={item.imageUrl}
        location={item.location.toUpperCase()}
        title={item.title}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        googleMapsUrl={item.googleMapsUrl}
      />
    );
  });
  return (
    <div>
      <Navbar />
      {locations}
    </div>
  );
}
