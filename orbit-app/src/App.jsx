import { useState } from "react";

const RewardButton = () => {
  // 1. Set up "State" (React's way of tracking variables that change the UI)
  // totalStars is the value, setTotalStars is the function to update it
  const [totalStars, setTotalStars] = useState(0);
  const [hasJoined, setHasJoined] = useState(false);

  // 2. The logic function
  const handleJoin = () => {
    setTotalStars(totalStars + 25); // Add 25 stars
    setHasJoined(true);             // Mark the event as joined
  };

  // 3. The UI (This is JSX - HTML inside JavaScript)
  return (
    <div>
      {/* We use curly braces to inject JavaScript variables directly into the HTML */}
      <h2>Stars: {totalStars} ⭐</h2>
      
      {/* onClick replaces addEventListener, and we use our state for the disabled attribute */}
      <button onClick={handleJoin} disabled={hasJoined}>
        {hasJoined ? "Event Joined!" : "Join Event (+25 Stars)"}
      </button>
    </div>
  );
};

export default RewardButton;