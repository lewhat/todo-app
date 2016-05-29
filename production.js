var server = deployd({

	port: process.env.PORT || 5000,
	env: 'production',
	db: {
		host:'ds019063.mlab.com',
		port:19063,
		name:'heroku_qh6p6vkr',
		credentials: {
			username:'heroku_qh6p6vkr',
			password:'f09s2nlms27p5cdkpuhjh0bcmc'
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