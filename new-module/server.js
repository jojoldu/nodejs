var net = require('net');

var blogName = false,
	blogComment = true;

var server = net.createServer(function(clientSocket){
	console.log('client connected');

	clientSocket.on('data', function(data){
		if(blogName){
			console.log('Event: "data"');
		}
		console.log('Recv['+data.length+']: '+data.toString());
		clientSocket.write('Echo: '+data);
	})
	.on('end', function(){
		if(blogName){
			console.log('Event: "end"');
		}
		if(blogComment){
			console.log('The other end of the socket sends a FIN packet');
		}
	})
	.on('drain', function(){
		if(blogName){
			console.log('Event: "drain"');
		}
		if(blogComment){
			console.log('Write buffer is empty');
		}
	})
	.on('close', function(){
		if(blogName){
			console.log('Event: "close"');
		}
		if(had_error){
			console.log('The socket had a transmission error');
		}
	});
});

server.listen(3030, function(){
	console.log('server listening....');
});