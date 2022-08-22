const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'ratings';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...
  const anime = await collection.insertMany([
  { Name: "One piece" ,
    Rating : 10}, 
  { Name: "Naruto",
    Rating: 9 },
  { Name: "Bleach",
    Rating:8 }]);
  console.log('Inserted documents =>', anime); 


  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  return 'done.';
}







main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

