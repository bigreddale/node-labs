# node.js Labs

## Getting Started: A Simple Web Server

1. Create a new directory with a descriptive name, eg `simple-http-server`.
   Change into it, then run `npm init` to start a new project.
   Answer the questions, most of which you can accept the defaults to.
1. Create and edit a new file `index.js`.
1. Load the `http` module:

    ```
    var http = require('http');
    ```

1. Make a call to `http.createServer()`, and store its return value in
   a variable called `server`.
   - Look up the `http.createServer()` function in the API documents.
1. `http.createServer()` takes as a parameter a _requestListener_ (a callback).
   You can either make this a named function or an anonymous one:

    ```
    function requestListener(req, res) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('Hello, world!');
      res.end();
    }
    ```
   - Pass it to `http.createServer()`.
   
1. Now to have the server accept requests.
   - Look up in the API the function `server.listen()`.
     Notice that it is overloaded (different forms of this function take different parameters).
     Which one do you think we will invoke?
   - Make a call to `server.listen()`, with two parameters:
        1. The port number you want to listen on (eg 8080)
        1. A callback, to be invoked when the server has successfully started listening
           for incoming requests. This can simply log a message:
           
            ```
            console.log('Server listening on port:', server.address().port);
            ```

1. Start your server: `node index.js`
   
1. Use a web browser to verify that it works.
