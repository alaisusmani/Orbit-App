# Orbit 🪐

A full-stack web application designed to help students discover, join, and track campus clubs and events. Built as a hands-on project to streamline student engagement and track participation rewards.

## 🚀 What I Am Creating
**Orbit** is currently in development as a two-part full-stack application (`orbit-frontend` and `orbit-backend`). The core feature currently implemented is an interactive event feed where students can browse upcoming club events, join or leave them, and earn gamified "Stars" for their participation. 

**Current Features:**
* **Dynamic Event Feed:** Renders a list of events dynamically fetched from a custom backend API.
* **Interactive Engagement:** A two-way toggle system allowing users to join and leave events on the fly.
* **Gamification Tracking:** Real-time state management that calculates and updates reward points (Stars) based on user actions.

## 🧠 What I Am Learning
This project serves as a practical sandbox for transitioning from Java Object-Oriented Programming into modern full-stack JavaScript development.

### Frontend Engineering (React & Vite)
* **Component Architecture:** Mapping Java OOP class concepts to React functional components.
* **State Management:** Using the `useState` hook to manage local component data (similar to instance variables) and trigger UI updates.
* **JSX Syntax:** Blending HTML structure directly with JavaScript logic.
* **Conditional Rendering:** Dynamically mounting and unmounting UI elements (like Join/Leave buttons) based on current state.
* **Props:** Passing data from parent components to dynamically populate child components.
* **List Rendering:** Utilizing JavaScript's `.map()` function with unique keys to efficiently render arrays of data into UI feeds.

### Backend Engineering (Node.js & Express)
* **Server Initialization:** Setting up a local web server using Express.
* **RESTful APIs:** Creating custom `GET` endpoints (`/api/events`) to serve JSON data.
* **CORS Configuration:** Managing cross-origin resource sharing to allow secure communication between the frontend and backend ports.

### Full-Stack Integration
* **Asynchronous JavaScript:** Using the `useEffect` hook to run background tasks upon component mount.
* **Data Fetching:** Utilizing the Fetch API and Promises (`.then()`) to retrieve backend data and inject it into the React frontend state.

---
*Developed by Alais Usmani*
