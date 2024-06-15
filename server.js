import express from "express";
const app = express();
app.get("/", (req, res) => res.send("Hello There"));
app.listen(3030, () =>
  console.log("Server ready at port http://127.0.0.1:3030/")
);

var bugs = [
  { _id: "b101", name: "hishi" },
  { _id: "b102", name: "hipushit" },
  { _id: "b103", name: "dvora" },
  { _id: "b104", name: "dabur" },
];

app.get("/api/bug", (req, res) => {
  res.send(bugs);
});

app.get("/api/bug/save", (req, res) => {});
app.get("/api/bug/:bugId", (req, res) => {
  const { id } = req.params;
  const bug = bugs.find((bug) => bug.id === id);
  
  res.send(bug);
});

app.get("/api/bug/:bugId/remove", (req, res) => {});
