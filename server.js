import express from "express";
import { bugService } from "./services/bug.service.js";

const app = express();
app.use(express.static('public'))
app.get("/", (req, res) => res.send("Hello There"));
app.listen(3030, () =>
  console.log("Server ready at port http://127.0.0.1:3030/")
);

// Express Routing:

app.get("/api/bug", (req, res) => {
  bugService.query().then((bugs) => res.send(bugs));
});

app.get("/api/bug/save", (req, res) => {
  console.log(req.query);
  const { _id, name } = req.query;
  const bugToSave = { _id, name };
  bugService.save(bugToSave).then((savedBug) => res.send(savedBug));
});

app.get("/api/bug/:id", (req, res) => {
  const { id } = req.params;
  bugService.getById(id).then((bug) => res.send(bug));
});

app.get("/api/bug/:id/remove", (req, res) => {
  const { id } = req.params;
  bugService.remove(id).then(() => res.send(`Bug ${id} has been removed...`));
});
