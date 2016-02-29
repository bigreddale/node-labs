# node.js Labs


## Understanding the Event Loop

### Pre-Lab

1. In Lab 04, you wrote a `ticker-client.js` which monitored
   `'tick'` events.
   1. Modify it to listen for 'start' events too,
      and to display the messge `ticker started`.
   1. Generate the `'start'` event in `ticker.js`.

### Understanding the Event Loop - Labs

1. If you were unable to generate the `'start'` event in `ticker.js`,
   this module should have helped.
   Remove the delay, and use `setImmediate()` instead.
1. Run the file `noop.js` (it's empty).
   Notice that `node` terminates immediately upon completion.
   In what situations does node _not_ terminate immediately?
1. Run `simple-server.js`.
   It looks like the developer of this code
   wanted to emulate a slow operation using a 3 second delay,
   but it hasn't quite worked.
   Using [curl](https://curl.haxx.se/),
   issue a `GET` request,
   immediately followed by two or three more.
   - How quickly do the responses arrive?
   - How many requests per second can the server process?
   - Discuss with your colleagues what is happening.
1. __The Fix__ We've run into _event loop blocking_
   or _starvation_.
   The event loop has been starved of CPU
   time and can't process incoming requests - its main job.
   We need to replace the delay with a simple
   timeout.
   - Make the change.

Stretch Task

1. The following code contains a loop with a `setTimeout()`
   call:
   
   ```
   for (var i = 0; i < 1024 * 1024; i++) {
     setTimeout(function () { Math.sqrt(i) }, 0);
   }
   ```
   
   1. Determine how long it takes to run this loop, using either:
   - the `time` command (Mac OS and Linux); or
   - `Measure-Command` (Windows PowerShell), for example `Measure-Command {echo hi}`.
   2. Replace the call to setTimeout with a call to
      `process.nextTick()` and run the loop again.
   3. How do they compare?
