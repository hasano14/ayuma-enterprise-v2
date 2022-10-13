const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

/* This is a route that will return all the data in the invoiceData collection. */
recordRoutes.route("/invoiceData").get(function (req, res) {
  let db_connect = dbo.getDb("Ayuma");
  db_connect
    .collection("invoiceData")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

recordRoutes.route("/rawMaterialData").get(function (req, res) {
  let db_connect = dbo.getDb("Ayuma");
  db_connect
    .collection("rawMaterialData")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

recordRoutes.route("/packagingData").get(function (req, res) {
  let db_connect = dbo.getDb("Ayuma");
  db_connect
    .collection("packagingData")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("records").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

/* This is a route that will add a new record to the invoiceData collection. */
recordRoutes.route("/invoiceData/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    InvoiceNumber: req.body.InvoiceNumber,
    Name: req.body.Name,
    InvoiceDate: req.body.InvoiceDate,
    Status: req.body.Status,
  };
  db_connect.collection("invoiceData").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

recordRoutes.route("/rawMaterialData/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  db_connect
    .collection("rawMaterialData")
    .insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
});

recordRoutes.route("/packagingData/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  db_connect.collection("packagingData").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    },
  };
  db_connect
    .collection("records")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;
