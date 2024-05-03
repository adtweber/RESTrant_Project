const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
	name: { type: String, required: true },
	pic: String,
	cuisines: { type: String, required: true },
	city: { type: String, default: 'Anytown' },
	state: { type: String, default: 'USA' },
	founded: Number
})

module.exports = mongoose.model('Place', placeSchema)


places = [{
	name: 'H-Thai-ML',
	city: 'Seattle',
	state: 'WA',
	cuisines: 'Thai, Pan-Asian',
	pic: '/img/h-thai-ml-tables.jpg'
}, {
	name: 'Coding Cat Cafe',
	city: 'Phoenix',
	state: 'AZ',
	cuisines: 'Coffee, Bakery',
	pic: '/img/coffee-cat.jpg'
}]

module.exports = places;

// const mongoose = require('mongoose')

// const placeSchema = new mongoose.Schema({
// 	name: { type: String, required: true },
// 	pic: String,
// 	cuisines: { type: String, required: true },
// 	city: { type: String, default: 'Anytown' },
// 	state: { type: String, default: 'USA' },
// 	founded: Number
// });

// module.exports = mongoose.model('Place', placeSchema);