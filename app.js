// 1. Grab the HTML elements we want to interact with
const button = document.getElementById("reward-button");
const display = document.getElementById("star-display");

// 2. Set our starting variable using 'let' because it will change
let totalStars = 0;

// 3. Create an arrow function for the logic
const addStars = () => {
    totalStars = totalStars + 5; // Add 5 stars
    display.innerText = "Stars: " + totalStars + " ⭐"; // Update the HTML text
    button.disabled = true; // Disable the button after clicking
    button.innerText = "Event Joined!"; // Change the button text
};

const reminder = () => {
    alert("You have joined the event and earned 5 stars!");
}

// 4. Tell the button to run the function when clicked
button.addEventListener("click", addStars);
button.addEventListener("click", reminder);
