const Joke = require('../models/joke.model');

//export OBJECT with methods
module.exports = {
	allJokes(req, res) {
    Joke.find({})
      .then((allJokes) => res.json({ jokes: allJokes }))
      .catch((err) => res.json(err));
  },
  
  oneJoke(req, res) {
    Joke.findOne({_id: req.params._id})
      .then(oneJoke => res.json( { joke:oneJoke }))
      .catch(err => res.json(err));
  },

  createJoke(req, res) {
    Joke.create(req.body)
      .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
      .catch(err => res.json(err));
  },
  
  updateExistingJoke(req, res) {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true })
      .then(updatedJoke => res.json({ joke: updatedJoke }))
      .catch(err => res.json(err));
  },
  
  deleteJoke(req, res){
    Joke.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.json(err));
  },

  randomJoke(req, res) {
    Joke.find({})
        .then(jokes => {
            let rI = Math.floor(Math.random()*jokes.length);
            res.json({joke: jokes[rI]});
        })
        .catch(err => res.json(err));
}

};
