import express from "express";
const app = express();
app.get("/", (req, res) => res.send("Hello There"));
app.listen(3030, () =>
  console.log("Server ready at port http://127.0.0.1:3030/")
);

var bugs = [
  { _id: "b101", name: "Beetles" },
  { _id: "b102", name: "Ants" },
  { _id: "b103", name: "Termite" },
  { _id: "b104", name: "Mantis" },
];

app.get("/api/bug", (req, res) => {
  res.send(bugs);
});

app.get("/api/bug/save", (req, res) => {
    console.log(req.query)
  const { _id, name } = req.query;
  const bugToSave = { _id, name };

  if (_id) {
    const idx = bugs.findIndex((bug) => bug._id === _id);
    bugs.splice(idx, 1, bugToSave);
  } else {
    bugToSave._id = "b" + (Date.now() % 1000);
    bugs.push(bugToSave);
  }
  res.send(bugToSave);
});

app.get("/api/bug/:id", (req, res) => {
  const { id } = req.params;
  const bug = bugs.find((bug) => bug._id === id);

  res.send(bug);
});

app.get("/api/bug/:id/remove", (req, res) => {
  const { id } = req.params;
  const idx = bugs.findIndex((bug) => bug._id === id);

  bugs.splice(idx, 1);

  res.send(`Bug ${id} has been removed...`);
});
