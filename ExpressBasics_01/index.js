import express, { response } from "express";
import data from "./data/mock.json" assert { type: "json" };

const app = express();

const PORT = 3000;

// Using the public folder at thr root of the project
// http://localhost:3000/mountains_1.jpeg
app.use(express.static("public"));

// Using the images folder at the route /images
// http://localhost:3000/images/mountains_2.jpeg
app.use("/images", express.static("images"));

//GET
// Common Response Methods
// .json(): sends a JSON response
// .send(): sends a HTTP response
// .download(): Transfer the files as an attachment
// .redirect(): Redirects the user to the specified path
app.get("/", (request, response) => {
  //   response.send({ data });
  response.json(data);
});

// GET - download method
app.get("/download", (request, response) => {
  response.download("images/mountains_2.jpeg");
});

// GET - rediret method
app.get("/redirect", (request, response) => {
  response.redirect("https://www.linkedin.com/");
});

// GET with next()
app.get(
  "/next",
  (request, response, next) => {
    console.log("The response will be send by the next function.");
    next();
  },
  (request, response) => {
    response.send("I just set up a route with a second callbacks");
  }
);

// GET with routing Parameters
app.get("/class/:id", (request, response) => {
  const studentId = Number(request.params.id);
  const studentData = data.filter((student) => student.id === studentId);
  response.send(studentData);
});

app
  .route("/class")
  .get((request, response) => {
    response.send("Retreive class info");
  })
  .post((request, response) => {
    response.send("Create class Info");
  })
  .put((request, response) => {
    response.send("Update class Info.");
  })
  .delete((request, response) => {
    response.send("Delete class Info.");
  });

// Route chaining
//GET
// app.get("/class", (request, response) => {
//   response.send("Retrieve class info");
// });

//POST
// app.post("/class", (request, response) => {
//   response.send("Create class Info");
// });

//PUT
// app.put("/class", (request, response) => {
//   response.send("Update class Info.");
// });

//DELETE
// app.delete("/class", (request, response) => {
//   response.send("Delete class Info.");
// });

//POST
app.post("/create", (request, response) => {
  response.send("This is a POST request at /create");
});

//PUT
app.put("/edit", (request, response) => {
  response.send("This is a PUT request at /edit");
});

//DELETE
app.delete("/delete", (request, response) => {
  response.send("This is a DELETE request at /delete");
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
  //   console.log(data);
});
