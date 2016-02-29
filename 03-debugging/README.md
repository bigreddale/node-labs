# node.js Labs


## Debugging Node.js Apps

1. Just so you know you can debug at the command line if needed,
   run `node debug myapp.js`,
   where `myapp.js` is your simple HTTP server.

1. __node-inspector__
   1. First, install it.

        ```
        npm install -g node-inspector
        ```

    1. Now use it to debug your app:

        ```
        node-debug myapp.js
        ```

      - Set a breakpoint within the requestListener and issue a browser request.
        View the `request` and `response` objects.

    1. For details on how to debug using node-inspector,
    see [The Chrome DevTools debugging](https://developer.chrome.com/devtools/) overview


1. __Starting the Debugger Manually__
    You may need to debug remotely.
    To understand how this works,
    start the debugger manually.
    It's a three-step process.
    1. First, start your app, switching node into remote debug mode:

        ```
        node --debug-brk=5858 index.js
        ```

    1. Now start `node-inspector`:
    
        ```
        node-inspector
        ```
    
    1. Browse to http://127.0.0.1:8080/?port=5858

