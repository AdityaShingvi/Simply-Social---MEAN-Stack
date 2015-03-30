var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test', function (){
	console.log('MongoDB connection established')
})

module.exports = mongoose