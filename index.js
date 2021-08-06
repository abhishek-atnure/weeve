const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const pool = require("./db");

app.use(cors());

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "client/build")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.use(express.json());

app.use(
  express.urlencoded({
    extended: false,
  })
);

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/services", async (req, res, next) => {
  try {
    const getServices = await pool.query("SELECT * FROM services");
    res.json(getServices.rows);
  } catch (err) {
    console.log(err.message);
  }
});

app.post("/", async (req, res, next) => {
  try {
    const { name, created, created_by } = req.body;
    const createdService = await pool.query(
      "insert into services (name,created,created_by) values($1,$2,$3) RETURNING id",
      [name, created, created_by]
    );
    res.json(createdService.rows);
  } catch (error) {
    console.log("err", error.messgae);
  }
});

app.patch("/services/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, modified } = req.body;
    const updatedService = await pool.query(
      `UPDATE services SET name=$1, modified=$2 WHERE id=$3 returning id`,
      [name, modified, id]
    );
    res.json(updatedService.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

app.delete("/services/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedService = await pool.query(
      "delete from services where id=$1",
      [id]
    );
    res.json("service deleted");
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`connnected to port ${PORT}`);
});
