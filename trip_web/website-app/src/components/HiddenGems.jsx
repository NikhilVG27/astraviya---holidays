import { useState } from "react";
import "./Hidden.css";

function HiddenGems() {
  const [category, setCategory] = useState("all");

  const places = [
    {
      name: "Kalpa",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUaLlh0RypmztyWob2bPE5J7h-Pv7un0tGvw&s",
      type: "hill",
    },
    {
      name: "Spiti Valley",
      image: "https://media.viacation.com/blogs/d10b494605515f219d96b.webp",
      type: "hill",
    },
    {
      name: "Ziro Valley",
      image: "https://static.toiimg.com/photo/112410346.cms",
      type: "hill",
    },

    {
      name: "Chopta",
      image: "https://uttarakhandtourism.gov.in/assets/media/UTDB_media_logo1745916342a5160ff72b8591a242f1fe76dc5fe7f3.jpg",
      type: "offbeat",
    },
    {
      name: "Mechuka",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-samten-yongcha-monastery-mechuka-arunachal-pradesh-attr-hero?qlt=82&ts=1726743121180",
      type: "offbeat",
    },

    {
      name: "Gokarna",
      image: "https://gokarnatourism.co.in/images/places-to-visit/header/gokarnatourism-header-gokarna-tourism.jpg.jpg",
      type: "beach",
    },
    {
      name: "Maravanthe Beach",
      image: "https://travelwithkamath.com/wp-content/uploads/2023/06/Maravanthe-Beach.jpg",
      type: "beach",
    },
  ];

  const filteredPlaces =
    category === "all"
      ? places
      : places.filter((place) => place.type === category);

  return (
    <div className="hidden">
      <h2 className="title">Hidden Gems 💎</h2>

      <div className="filters">
        <button className={category === "all" ? "active" : ""} onClick={() => setCategory("all")}>All</button>
        <button className={category === "hill" ? "active" : ""} onClick={() => setCategory("hill")}>Hill</button>
        <button className={category === "beach" ? "active" : ""} onClick={() => setCategory("beach")}>Beach</button>
        <button className={category === "offbeat" ? "active" : ""} onClick={() => setCategory("offbeat")}>Offbeat</button>
      </div>

      <div className="card-container">
        {filteredPlaces.map((place, index) => (
          <div className="card" key={index}>
            <img src={place.image} alt={place.name} />

            <div className="info">
              <h3>{place.name}</h3>
              <p>Explore this destination</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HiddenGems;