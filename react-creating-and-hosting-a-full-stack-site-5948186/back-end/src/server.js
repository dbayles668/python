import express from 'express';

const ArticleInfo = [
    {name: 'learn-react', upvotes: 0, comments: []},
    {name: 'more-react', upvotes: 0, comments: []}
]

const app = express();
app.use(express.json());

app.post('/api/articles/:name/upvote', (req, res) => {
    const article = ArticleInfo.find(a => a.name  === req.params.name);
    article.upvotes += 1;

    res.json(article);
});

app.post('/api/articles/:name/comment', (req, res) => {
    const {name} = req.params;
    const {postedBy, text} = req.body;
    const article = ArticleInfo.find(a => a.name  === name);

    article.comments.push({postedBy, text,})

    res.json(article);
});

app.listen(8000, function(){
    console.log('port 8000');
});