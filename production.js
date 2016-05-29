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