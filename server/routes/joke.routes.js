const jokeController = require('../controllers/joke.contoller');

module.exports = (app) => {
  app.get('/api/jokes', jokeController.allJokes);
  app.get('/api/jokes/:_id', jokeController.oneJoke);
  app.get('/api/jokes/random', jokeController.randomJoke);
  app.post('/api/jokes/new', jokeController.createJoke);
  app.put('/api/jokes/update/:_id', jokeController.oneJoke);
  app.delete('/api/jokes/delete/:_id', jokeController.deleteJoke);
};
