import "./Collections.css";

const places = [
  {
    name: "Goa",
    image: "https://images.unsplash.com/photo-1587922546307-776227941871",
  },
  {
    name: "Manali",
    image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16",
  },
  {
    name: "Jaipur",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
  },
  {
    name: "Kerala",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
  },
  {
    name: "Ladakh",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
  },
  {
    name: "Agra",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
  },
  {
    name: "Rishikesh",
    image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Darjeeling",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
  },
  {
    name: "Udaipur",
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Andaman",
    image: "https://www.theinsighttrips.com/wp-content/uploads/2021/09/andaman-featured-img.jpg",
  },
];

function Collections() {
  return (
    <div className="collections">
      <h2>Offers</h2>

      <div className="scroll-container">
        {places.map((place, index) => (
          <div className="card" key={index}>
            <img src={place.image} alt={place.name} />
            <div className="overlay">
              <h3>{place.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collections;