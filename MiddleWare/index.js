import express from "express";
import data from "./db/mock.json" assert { type: "json" };

const app = express();

const PORT = 3000;

// Using express.json and express.urlencoded
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST - express.json and express.urlencoded
app.post("/item", (request, response) => {
  console.log(request.body);
  response.send(request.body);
});

// Route Chaining
app
  .route("/class")
  .get((request, response) => {
    // response.send("Retrieve class info");
    throw new Error();
  })
  .post((request, response) => {
    response.send("Save class info.");
  })
  .put((request, response) => {
    response.send("Edit class info");
  })
  .delete((request, response) => {
    response.send("delete class info.");
  });

//Custom Error Handlers
app.use((err, request, response, next) => {
  console.error(err.stack);
  response.status(500).send("Something is broken!");
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
