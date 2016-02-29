# node.js Labs


## Understanding Streams

1. What are the potential problems with the following code?

        ```
        var fs = require('fs');
    
        fs.readFile('file1.txt', function(err, data) {
            if (err) throw err;
            console.log(data.toString());
        });
        ```

   - Using `fs.createReadStream()`, convert this program to use streams.

2. The `zlib` module comes with node.js.
   - Create a node program that compresses an input file into an output file.
   - What's the maximum size of file that could be compressed using this program?


## Using Pipes

1. Create a program that:
	- creates a Readable stream from a file (see `fs.createReadStream()`), and
	- pipes this stream to `process.stdout`
2. Using pipes, create a program that copies one file to another.

## Consuming a Readable Stream

1. The standard input stream generates `readable` events. How would you
   listen to these events?
   - Write code to do so, displaying the data received.
   - If you see Buffer objects displayed containing hex values,
     look up the `readable.setEncoding()` function.
2. Extend your code to read from standard input and write the data to
   standard output.

## Writing to a Writable Stream

1. Write some text from your program into a file.


# Stretch Tasks

## Creating a Filter

The `through2` module by Rod Vagg enables you to create a function,
and pipe through that.
This function 'transforms' its input data.
- Create a program to transform all input to lowercase.
- Test your code.


<!--

## Implementing a Readable Stream

1. Implement a Readable stream that generates random numbers.

2. Implement a Readable stream that generates integers in the Fibonacci sequence.

3. Implement a Readable stream that generates the letters of the alphabet. After
   'z' is generated, it should wrap around to 'a'.


-->
