exports.generateDeck = function() {
  let deck = [];
  for(let i = 1; i <= 13; i++) {
      for(let j = 0; j < 4; j++) {
        deck.push({strength: i, color: j});
      }
    }
  return deck;
}

exports.shuffleDeck = function(deck) {
  let tempCard;
    let randomIndex;
    for(let i = 0; i < 52; i++) {
      randomIndex = parseInt(((Math.random() * 100) / 2).toFixed());
      tempCard = deck[i];
      deck[i] = deck[randomIndex];
      deck[randomIndex] = tempCard;
    }
    return deck;
}
