var express = require('express'); // Loading the express module to the server.
var deckUtils = require('./deckUtils');
var bodyParser = require('body-parser')
var app = express(); // activating express
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

var currentDeckIndex = 0;
var deck = deckUtils.shuffleDeck(deckUtils.generateDeck());

app.listen(3100); // server is open and listening on port 3100, to access: localhost:3100 in any browser.
console.log('I am listening');

app.get('/drawCard', function (req, res) {
  console.log(`card sent: ${JSON.stringify(deck[currentDeckIndex])}`);
  res.send(deck[currentDeckIndex++]);
  if(currentDeckIndex > 51) {
    console.log('deck emptied, initalizing deck');
    initializeDeck();
  }
});

app.post('/postWinner', function (req, res) {
  let winner = req.body.winner;
  console.log('The winner is: ' + winner);
});

app.put('/insertCard', function (req, res) {
  let newCard = req.body.newCard;
  deck.push(newCard);
  console.log(`client sent me a new card: ${newCard}`);
});

var initializeDeck = function () {
  currentDeckIndex = 0;
  deck = deckUtils.shuffleDeck(deckUtils.generateDeck());
}
