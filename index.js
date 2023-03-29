const {MongoClient, ClientSession} = require('mongodb')
const url= 'mongodb://localhost:27017';
const databaseName='Node-learning'
const client= new MongoClient(url);

async function getData()
{
    let result = await client.connect();
    db= result.db(databaseName);
    collection = db.collection('users');
    let data = await collection.find({}).toArray();
    console.log(data)

}

getData();
