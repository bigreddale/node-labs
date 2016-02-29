# node.js Labs

## Using EventEmitter

1. __Using events__
   1. The file `ticker.js` is a module that emits a tick event every second.
      It has some pieces missing though. Complete it.
   2. Create a client of this module, `ticker-client.js`, which:
      - instantiates a new Ticker; and
      - listens for 'tick' events, displaying a message when it receives one. 

<!--
2. Implementing events

3. Error events
-->

Stretch Tasks

1. In Lab 01 you wrote a simple HTTP server.
   - Refactor this server to (1) remove the call to `http.createServer()`,
     and (2) have `server.listen()` called with just the port parameter.
     Use events instead.
   - How does this approach compare to the original one?

