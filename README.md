# BlackjackBackend
Nodejs (7.2.0) server to draw cards from shuffled deck.

How to install:
1. clone project
2. npm install
3. node server.js
Server will be up and listening on localhost:3100

To draw a card use this 'get' request:
get '/drawCard' will send a json object of a card {strength: number, color: number}
