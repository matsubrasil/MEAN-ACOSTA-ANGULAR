const express = require( 'express' );
const mongoose = require( 'mongoose' );
const config = require( './config/database' );
const path = require( 'path' );

const app = express();

const port = process.env.port || 3000;

mongoose.Promise = global.Promise;
mongoose.connect( config.uri, (err) => {
    if (err) {
        console.log( 'Could not connect to database: ' + config.db );
    } else {
        console.log( 'Connected to database: ' + config.db );
    }
})

app.use( express.static(__dirname + '/public/' ) );

app.get( '*', (req, res) => {
    res.sendFile( path.join( __dirname + '/public/index.html' ) );
});

app.listen( port, (err, res) => {
    if ( err ) {
        console.log('Error on port: ' + port );
    } else {
        console.log( 'Running on port ' + port );
    }
})