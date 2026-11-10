import { useState, useEffect } from "react";

// 1. The Blueprint: Your existing event component
const RewardButton = ({ eventName }) => {
  const [totalStars, setTotalStars] = useState(0);
  const [hasJoined, setHasJoined] = useState(false);

  const handleJoin = () => {
    setTotalStars(totalStars + 25);
    setHasJoined(true);
  };

  const handleLeave = () => {
    setTotalStars(totalStars - 25);
    setHasJoined(false);
  };

  return (
    <div style={{ border: "3px solid purple", padding: "20px", margin: "10px 0", borderRadius: "75px" }}>
      <h3>{eventName}</h3>
      <h2>Stars: {totalStars} ⭐️</h2>
      {hasJoined ? (
        <button onClick={handleLeave}>Leave Event (-25 Stars)</button>
      ) : (
        <button onClick={handleJoin}>Join Event (+25 Stars)</button>
      )}
    </div>
  );
};

// 2. The "Webpage": A new main component to hold your feed

const App = () => {
  // 1. Set up an empty state array to hold the data from Node
  const [eventsData, setEventsData] = useState([]);

  // 2. Fetch the data from your new Node server when the app loads
  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((response) => response.json())
      .then((data) => setEventsData(data)) // Save the fetched data to state
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // The empty array means "only run this once on load"

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Orbit Club Events</h1>
      
      {/* 3. This will map over the data fetched from Node! */}
      {eventsData.map((e) => (
        <RewardButton key={e.id} eventName={e.name} />
      ))}
    </div>
  );
};

export default App;