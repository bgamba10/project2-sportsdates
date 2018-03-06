var express = require('express');
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
var bodyParser = require('body-parser')
var ObjectId = require('mongodb').ObjectID;

//No se deben poner las contraseñas en texto plano, se deben crear variables de entorno para estos datos:

const url = process.env.MONGODB_URI;

const dbName = process.env.DBNAME;

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

const insertDocuments = function(db,d,callback) {
  // Get the documents collection
  const collection = db.collection('sportsdates');


  // Insert some documents
  collection.insert(d, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted 1 documents into the collection");
    callback(result);
});
}

const removeDocument = function(db, id,callback) {
  // Get the documents collection
  const collection = db.collection('sportsdates');
  console.log(id);
  // Delete document where a is 3
  collection.remove({"_id": ObjectId(id)}, function(err, result) {
    callback(result);
});    
}


function getFollowers(callback) {

  // Database Name
  // Use connect method to connect to the server
  
 //Esto es mala idea, crea una conexión a la base de datos por cada request, lo cual lo hace muyyyyy lento!!!
  
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    findDocuments(db, callback);
    client.close();
});

}

function postDate(d,callback) {
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db,d, function() {
    client.close();
    callback();
});
});
}

function delDate(id,callback){
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

      removeDocument(db, id,function() {
        client.close();
        callback();
});
});
}


router.get("/", function(req, res) {
  getFollowers( 
    (followers) => res.send(followers) 
    );
});

router.post("/", function(req, res) {
    var body = req.body
    postDate(body, () => res.send('Todo en orden'));
});

router.delete("/:query", function (req, res) {
    var body = req.body
    delDate(req.params.query, () => res.send('Todo en orden'));
});

module.exports = router;
