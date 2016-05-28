var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
var routes = require('./src/server/routes')
var deployd = require('deployd')


var PORT = process.env.PORT || 3000

app.use(bodyParser.json())

// Used for production build
app.use(express.static(path.join(__dirname, 'public')))

routes(app)

app.all('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(PORT, function() {
    console.log('Server running on ' + PORT)
})




var server = deployd({

	port: process.env.PORT || 5000,
	env: 'production',
	db: {
		host:'ds019053.mlab.com',
		port:19053,
		name:'heroku_3szsjwjc',
		credentials: {
			username:'heroku_3szsjwjc',
			password:'g7rorn4v63ip5v15i1qq49d3fs'
		}
	}

})

server.listen()

server.on('listening', function(){
	console.log('Server is listening')
})


server.on('error', function(err){
	console.log(err)
	process.nextTick(function(){
		process.exit()
	})
})