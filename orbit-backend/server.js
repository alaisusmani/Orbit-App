const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());ç

app.get("/api/events", (req, res) => {
  res.json([
    { id: 1, name: "RedPack Volunteer Drive (From Node!)" },
    { id: 2, name: "Cursor Community Meetup (From Node!)" },
    { id: 3, name: "AWS Summit Toronto (From Node!)" },
    { id: 4, name: "UNHack Miro Design Pitch (From Node!)" }
  ]);
});

app.listen(5000, () => {
  console.log("Orbit Backend running on http://localhost:5000");
});
