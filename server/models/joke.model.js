const mongoose = require('mongoose');
const standardErrMsg = 'A {PATH} is needed.';

//{PATH} gets replaced by the key name; if it were to change
const JokeSchema = new mongoose.Schema(
	{
		setup: {
			type: String,
			required: [ true, standardErrMsg ],
			minlength: [ 10, '{PATH} must be at least {MINLENGTH} charaters long.' ]
		},

		punchline: {
			type: String,
			required: [ true, standardErrMsg ],
			minlength: [ 3, '{PATH} must be at least {MINLENGTH} charaters long.' ]
		}
	},
	{ timestamps: true }
);

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
