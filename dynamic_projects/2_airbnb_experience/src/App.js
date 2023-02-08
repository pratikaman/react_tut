import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import { data } from "./data";

export default function App() {
  const cardData = data.map((item) => {
    return (
      <Card
      // this key is recommended in jsx prop
        key={item.id}
        coverImg={item.coverImg}
        stats={item.stats}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}

        /// or do this 
        // {...item}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cardData}</section>
    </div>
  );
}
