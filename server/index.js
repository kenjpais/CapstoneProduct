// importing express module using require global node fn.
import express from 'express';
import mongoose from 'mongoose';
import router from './router/route.js'

// creating instance for express fn.
const app = express();


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json())
app.use(router)


// app.post('/login', router)
const port = 5000;
let uri='mongodb+srv://rahul:rahul123@cluster0.9o5lh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// mongoose.connect(uri, {
// 	useUnifiedTopology: true,
// 	useNewUrlParser: true,
// });
// const connection = mongoose.connection;

// connection
// 	.once('open', () => {
// 		console.log('mongoDB database connection established');
// 	})
// 	.on('error', (err) => {
// 		console.log('Error: ', err);
// 	});


mongoose.connect(
`mongodb+srv://rahul:rahul123@cluster0.9o5lh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(()=>{
    console.log('success')
}).catch((err)=>{
    console.log(err)
})


app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
});
