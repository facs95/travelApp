const MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://facs95:Facs95042109224!@travel-biclm.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
 // perform actions on the collection object
  client.close();
});