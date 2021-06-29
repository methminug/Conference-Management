const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const speakerAPI = require('./api/speaker.api');
const trackAPI = require('./api/track.api')
const sessionAPI = require('./api/session.api')

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (error) => {
    if(error){
        console.log(error);
    }
});

mongoose.connection.once('open', ()=>{
    console.log("Database SYNCHRONIZED")
});

app.use('/speaker', speakerAPI());
app.use('/track', trackAPI());
app.use('/session', sessionAPI());

app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`)
})