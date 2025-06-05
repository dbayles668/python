import express from 'express';
import {MongoClient,ReturnDocument,ServerApiVersion} from 'mongodb';


//const ArticleInfo = [
 //   {name: 'learn-react', upvotes: 0, comments: []},
 //   {name: 'more-react', upvotes: 0, comments: []}
//]  original array database, need mongodb downloaded for this to work

const app = express();
app.use(express.json());

let db;
async function connectToDB(){
    const uri = 'mongodb://127.0.0.1:27017';
    const client = new MongoClient(uri, {
        serverApi:{
            version:ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    await client.connect();
    db = client.db('full-stack-react-db');    
}

app.get('/api/articles/:name', async (req, res) => {
    const {name} = req.params;

    const article = await db.collection('articles').findOne({name});

    res.json(article);
});

app.post('/api/articles/:name/upvote', async (req, res) => {
    const {name} = req.params;
    const UpdatedArticle = await db.collection('articles').findOneAndUpdate({name},{
        $inc: {upvotes:1}
    },{
        ReturnDocument: "after",
    });
    res.json(UpdatedArticle);
});

app.post('/api/articles/:name/comment', async (req, res) => {
    const {name} = req.params;
    const {postedBy, text} = req.body;
    const newComment = {postedBy, text};
    const UpdatedArticle = await db.collection('articles').findOneAndUpdate({name},{
        $push: {comments:newComment}
    },{
        ReturnDocument: "after",
    });
    res.json(UpdatedArticle);
});

async function start(){
    connectToDB();
    app.listen(8000, function(){
        console.log('port 8000');
    });
};

start();