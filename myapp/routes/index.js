var express = require('express');
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://nicolas:nicolas@ds243325.mlab.com:43325/nicolasdatabase";

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection("sportsdates");
  // Find some documents
  collection.find().limit(20).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found " + docs.length + " records");
    // console.log(docs);
    callback(docs);
  });
};

function getFollowers(callback) {

  // Database Name
  const dbName = "nicolasdatabase";

  // Use connect method to connect to the server
  	MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    findDocuments(db, callback);

    client.close();
  });

}

router.get("/", function(req, res) {
  getFollowers( 
    (followers) => res.send(followers) 
  );
});


module.exports = router;
