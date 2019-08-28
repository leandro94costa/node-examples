const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'; // Use IP instead of localhost which has some known performace issues
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log("Unable to connect to database");
    }
    const db = client.db(databaseName);

    db.collection('tasks').deleteOne({
        description: 'Learn NodeJs'
    }).then((result) => {
        console.log(result.deletedCount);
    }).catch((error) => {
        console.log(error);
    });
});